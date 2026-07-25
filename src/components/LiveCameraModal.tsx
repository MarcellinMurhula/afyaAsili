import React, { useState, useRef, useEffect, useCallback } from "react";
import { SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { t } from "../services/translations";
import {
  X,
  Camera,
  Video,
  RefreshCw,
  Check,
  SwitchCamera,
  Circle,
  StopCircle,
  Volume2,
  Sparkles,
  AlertCircle,
  Upload
} from "lucide-react";

interface LiveCameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (file: File, type: "image" | "video", dataUrl?: string) => void;
  initialMode?: "photo" | "video";
  language: SupportedLanguage;
}

export const LiveCameraModal: React.FC<LiveCameraModalProps> = ({
  isOpen,
  onClose,
  onCapture,
  initialMode = "photo",
  language
}) => {
  const [mode, setMode] = useState<"photo" | "video">(initialMode);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingTimer, setRecordingTimer] = useState<number>(0);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [capturedVideoBlob, setCapturedVideoBlob] = useState<Blob | null>(null);
  const [capturedVideoUrl, setCapturedVideoUrl] = useState<string | null>(null);
  const [shutterFlash, setShutterFlash] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputFallbackRef = useRef<HTMLInputElement | null>(null);

  // Sync mode with prop change
  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setCapturedImage(null);
      setCapturedVideoBlob(null);
      setCapturedVideoUrl(null);
      setError(null);
      
      const welcomeText = initialMode === "photo" 
        ? "Caméra activée. Placez votre assiette ou votre plante devant l'écran pour prendre une photo en direct."
        : "Caméra vidéo activée. Appuyez sur le bouton rouge pour enregistrer la préparation de votre tisane ou de votre repas.";
      ApiService.speak(welcomeText, language);
    }
  }, [isOpen, initialMode, language]);

  // Start media stream
  const startCamera = useCallback(async () => {
    if (!isOpen) return;
    
    // Stop any existing stream
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }

    try {
      setError(null);
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: mode === "video"
      };

      const newStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(newStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (err: any) {
      console.error("Erreur accès caméra/micro:", err);
      setError("Impossible d'accéder à la caméra ou au microphone. Veuillez autoriser l'accès dans votre navigateur ou importer un fichier directement.");
    }
  }, [isOpen, facingMode, mode]);

  useEffect(() => {
    if (isOpen && !capturedImage && !capturedVideoUrl) {
      startCamera();
    } else {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [isOpen, facingMode, mode, capturedImage, capturedVideoUrl, startCamera]);

  // Switch between front/back camera
  const toggleFacingMode = () => {
    setFacingMode(prev => prev === "user" ? "environment" : "user");
  };

  // Take a Photo
  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    // Flash effect
    setShutterFlash(true);
    setTimeout(() => setShutterFlash(false), 200);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
      setCapturedImage(dataUrl);
      
      ApiService.speak("Photo capturée avec succès. Appuyez sur Analyser par IA pour connaître son impact sur le diabète.", language);
    }
  };

  // Start Video Recording
  const startRecording = () => {
    if (!stream) return;

    recordedChunksRef.current = [];
    setRecordingTimer(0);

    try {
      // Choose supported MIME type
      const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9") 
        ? "video/webm;codecs=vp9"
        : MediaRecorder.isTypeSupported("video/webm")
        ? "video/webm"
        : MediaRecorder.isTypeSupported("video/mp4")
        ? "video/mp4"
        : "";

      const options = mimeType ? { mimeType } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, { 
          type: mimeType || "video/webm" 
        });
        const url = URL.createObjectURL(blob);
        setCapturedVideoBlob(blob);
        setCapturedVideoUrl(url);
        
        ApiService.speak("Vidéo enregistrée. Vous pouvez vérifier la cuisson de votre préparation culinaire en appuyant sur Analyser.", language);
      };

      mediaRecorder.start(200);
      setIsRecording(true);
      
      ApiService.speak("Enregistrement vidéo démarré...", language);

      timerIntervalRef.current = setInterval(() => {
        setRecordingTimer(prev => prev + 1);
      }, 1000);
    } catch (err) {
      console.error("Erreur démarrage enregistrement:", err);
      setError("Erreur lors du démarrage de l'enregistrement vidéo.");
    }
  };

  // Stop Video Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    }
  };

  // Format timer seconds to MM:SS
  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Retake photo or video
  const handleRetake = () => {
    setCapturedImage(null);
    setCapturedVideoBlob(null);
    if (capturedVideoUrl) {
      URL.revokeObjectURL(capturedVideoUrl);
      setCapturedVideoUrl(null);
    }
    startCamera();
  };

  // Validate and send to Gemma 4
  const handleConfirm = () => {
    if (mode === "photo" && capturedImage) {
      // Convert dataURL to File
      const arr = capturedImage.split(",");
      const mimeMatch = arr[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      const file = new File([u8arr], `capture-gemma-${Date.now()}.jpg`, { type: mime });
      
      onCapture(file, "image", capturedImage);
      onClose();
    } else if (mode === "video" && capturedVideoBlob && capturedVideoUrl) {
      const file = new File([capturedVideoBlob], `cuisson-gemma-${Date.now()}.webm`, { type: capturedVideoBlob.type || "video/webm" });
      onCapture(file, "video", capturedVideoUrl);
      onClose();
    }
  };

  // Fallback file input change
  const handleFallbackFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const isVid = file.type.startsWith("video/");
      const url = URL.createObjectURL(file);
      onCapture(file, isVid ? "video" : "image", url);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2D2A]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full p-5 sm:p-8 shadow-2xl border border-[#E9E9E0] relative space-y-5 my-auto">
        
        {/* Shutter flash overlay */}
        {shutterFlash && (
          <div className="absolute inset-0 bg-white z-40 rounded-2xl animate-ping opacity-75 pointer-events-none" />
        )}

        {/* CLOSE BUTTON */}
        <button
          onClick={() => {
            if (isRecording) stopRecording();
            onClose();
          }}
          className="absolute top-5 right-5 text-[#5A5A40] hover:text-[#2D2D2A] bg-[#F9F9F7] rounded-lg p-2 border border-[#D1D1CB] transition z-10"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E9E9E0]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#5A5A40] text-white flex items-center justify-center text-2xl shrink-0 shadow-xs font-bold">
              {mode === "photo" ? "📸" : "🎥"}
            </div>
            <div>
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs font-semibold px-2.5 py-0.5 rounded-md border border-[#E9E9E0]">
                {t("Caméra en Direct • Analyse IA Clinique", language)}
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A] mt-0.5">
                {mode === "photo" ? t("Prendre une Photo de Plante ou Plat", language) : t("Enregistrer une Vidéo de Préparation / Cuisson", language)}
              </h2>
            </div>
          </div>

          {/* Mode switch buttons */}
          <div className="flex bg-[#F9F9F7] p-1 rounded-xl border border-[#E9E9E0] self-start sm:self-auto shrink-0">
            <button
              onClick={() => {
                if (isRecording) stopRecording();
                setMode("photo");
                setCapturedImage(null);
                setCapturedVideoUrl(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                mode === "photo"
                  ? "bg-[#5A5A40] text-white shadow-xs"
                  : "text-[#5A5A40] hover:text-[#2D2D2A]"
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t("Photo", language)}</span>
            </button>
            <button
              onClick={() => {
                setMode("video");
                setCapturedImage(null);
                setCapturedVideoUrl(null);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                mode === "video"
                  ? "bg-[#B35A38] text-white shadow-xs"
                  : "text-[#5A5A40] hover:text-[#2D2D2A]"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{t("Vidéo", language)}</span>
            </button>
          </div>
        </div>

        {/* ERROR STATE */}
        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center space-y-4">
            <AlertCircle className="w-10 h-10 text-red-600 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-[#2D2D2A]">
              {t("Accès Caméra Restreint ou Non Disponible", language)}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A40] max-w-md mx-auto">
              {error}
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <button
                onClick={startCamera}
                className="bg-[#5A5A40] text-white px-5 py-2 rounded-lg font-semibold text-xs flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{t("Réessayer la connexion", language)}</span>
              </button>
              <button
                onClick={() => fileInputFallbackRef.current?.click()}
                className="bg-[#B35A38] text-white px-5 py-2 rounded-lg font-semibold text-xs flex items-center gap-2 shadow-xs"
              >
                <Upload className="w-4 h-4" />
                <span>{t("Importer depuis l'appareil / Galerie", language)}</span>
              </button>
            </div>
            <input
              ref={fileInputFallbackRef}
              type="file"
              accept={mode === "photo" ? "image/*" : "video/*"}
              onChange={handleFallbackFileChange}
              className="hidden"
            />
          </div>
        ) : (
          /* VIEWFINDER OR PREVIEW */
          <div className="space-y-4">
            <div className="relative bg-[#1A1A18] rounded-xl overflow-hidden aspect-video w-full max-h-[60vh] flex items-center justify-center border border-[#2D2D2A] shadow-inner">
              
              {/* HIDDEN CANVAS FOR CAPTURE */}
              <canvas ref={canvasRef} className="hidden" />

              {/* 1. PHOTO PREVIEW */}
              {capturedImage ? (
                <img
                  src={capturedImage}
                  alt="Aperçu photo prise"
                  className="w-full h-full object-contain animate-in zoom-in-95 duration-200"
                />
              ) : capturedVideoUrl ? (
                /* 2. VIDEO PREVIEW */
                <video
                  src={capturedVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain animate-in zoom-in-95 duration-200"
                />
              ) : (
                /* 3. LIVE CAMERA STREAM */
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted={mode === "photo"}
                    className="w-full h-full object-cover transform scale-x-[-1]"
                  />

                  {/* RECORDING TIMER OVERLAY */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white font-mono font-bold text-sm px-3.5 py-1.5 rounded-full flex items-center gap-2 animate-pulse shadow-xs">
                      <Circle className="w-3.5 h-3.5 fill-white text-white animate-ping" />
                      <span>REC • {formatTimer(recordingTimer)}</span>
                    </div>
                  )}

                  {/* CAMERA SWITCHER BUTTON OVERLAY */}
                  <button
                    onClick={toggleFacingMode}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-lg backdrop-blur-md border border-white/20 transition shadow-xs"
                    title="Basculer Caméra Avant / Arrière"
                  >
                    <SwitchCamera className="w-5 h-5" />
                  </button>

                  {/* GUIDANCE BANNER OVERLAY */}
                  <div className="absolute bottom-4 inset-x-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs text-center border border-white/10 flex items-center justify-center gap-2">
                    <Volume2 className="w-4 h-4 text-[#B35A38] shrink-0 animate-pulse" />
                    <span className="truncate">
                      {mode === "photo" 
                        ? "Centrez la plante ou le plat dans le cadre et appuyez sur le bouton photo."
                        : "Montrez la cuisson ou l'ébullition des plantes et appuyez pour filmer."}
                    </span>
                  </div>
                </>
              )}
            </div>

            {/* CONTROLS AREA */}
            <div className="flex items-center justify-center gap-6 pt-2">
              {capturedImage || capturedVideoUrl ? (
                /* POST-CAPTURE BUTTONS */
                <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                  <button
                    onClick={handleRetake}
                    className="bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] font-semibold px-5 py-2.5 rounded-xl border border-[#D1D1CB] text-xs sm:text-sm flex items-center gap-2 transition"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>🔄 Reprendre</span>
                  </button>

                  <button
                    onClick={handleConfirm}
                    className="bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold px-6 py-2.5 rounded-xl shadow-xs text-xs sm:text-sm flex items-center gap-2 transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>✨ Analyser par IA Clinique</span>
                  </button>
                </div>
              ) : (
                /* CAPTURE BUTTONS */
                <div className="flex items-center justify-center gap-8 w-full">
                  {/* Fallback upload button */}
                  <button
                    onClick={() => fileInputFallbackRef.current?.click()}
                    className="text-[#5A5A40] hover:text-[#2D2D2A] text-xs font-semibold flex flex-col items-center gap-1 transition"
                    title="Importer depuis le téléphone"
                  >
                    <div className="bg-[#F9F9F7] p-2.5 rounded-xl border border-[#D1D1CB]">
                      <Upload className="w-5 h-5" />
                    </div>
                    <span>Importer</span>
                  </button>
                  <input
                    ref={fileInputFallbackRef}
                    type="file"
                    accept={mode === "photo" ? "image/*" : "video/*"}
                    onChange={handleFallbackFileChange}
                    className="hidden"
                  />

                  {/* SHUTTER / RECORD BUTTON */}
                  {mode === "photo" ? (
                    <button
                      onClick={takePhoto}
                      className="w-16 h-16 rounded-full bg-white border-4 border-[#5A5A40] shadow-md hover:scale-105 active:scale-95 transition flex items-center justify-center group"
                      title="Prendre la photo"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#5A5A40] group-hover:bg-[#464632] transition flex items-center justify-center text-white">
                        <Camera className="w-5 h-5" />
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={isRecording ? stopRecording : startRecording}
                      className={`w-16 h-16 rounded-full bg-white border-4 shadow-md hover:scale-105 active:scale-95 transition flex items-center justify-center ${
                        isRecording ? "border-red-600 animate-pulse" : "border-[#B35A38]"
                      }`}
                      title={isRecording ? "Arrêter l'enregistrement" : "Démarrer l'enregistrement"}
                    >
                      {isRecording ? (
                        <div className="w-8 h-8 rounded-md bg-red-600 flex items-center justify-center text-white">
                          <StopCircle className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#B35A38] flex items-center justify-center text-white">
                          <Video className="w-5 h-5" />
                        </div>
                      )}
                    </button>
                  )}

                  {/* Camera switch button */}
                  <button
                    onClick={toggleFacingMode}
                    className="text-[#5A5A40] hover:text-[#2D2D2A] text-xs font-semibold flex flex-col items-center gap-1 transition"
                    title="Basculer caméra"
                  >
                    <div className="bg-[#F9F9F7] p-2.5 rounded-xl border border-[#D1D1CB]">
                      <SwitchCamera className="w-5 h-5" />
                    </div>
                    <span>Basculer</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* FOOTER INFO */}
        <div className="pt-3 border-t border-[#E9E9E0] flex flex-col sm:flex-row items-center justify-between text-xs text-[#5A5A40] gap-2">
          <span>
            🌿 <strong>Spécificité Kivu :</strong> Analyse des plantes (Ndakala, Moringa) et des mets (Foufou, Pondu).
          </span>
          <span className="font-semibold text-[#B35A38]">
            {mode === "photo" ? "Format: Photo Haute Résolution" : "Format: Vidéo Cuisson (Max 30 sec conseillé)"}
          </span>
        </div>

      </div>
    </div>
  );
};
