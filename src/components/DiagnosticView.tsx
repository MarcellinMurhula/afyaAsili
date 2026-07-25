import React, { useState, useRef, useEffect } from "react";
import { 
  Stethoscope, 
  Camera, 
  Mic, 
  Video, 
  FileText, 
  UploadCloud, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Volume2, 
  VolumeX, 
  Loader2, 
  RefreshCw, 
  ArrowRight, 
  ShieldAlert, 
  Utensils, 
  Leaf, 
  Activity,
  Play,
  Square
} from "lucide-react";
import { SupportedLanguage, PatientProfile, DiagnosticResult } from "../types";
import { ApiService } from "../services/api.service";
import { LiveCameraModal } from "./LiveCameraModal";
import { t } from "../services/translations";

interface DiagnosticViewProps {
  profile: PatientProfile;
  language: SupportedLanguage;
  initialQuery?: string;
  onSaveToLog: (note: string, risk: "Normal" | "Vigilance" | "Urgence médicale") => void;
}

export const DiagnosticView: React.FC<DiagnosticViewProps> = ({
  profile,
  language,
  initialQuery = "",
  onSaveToLog
}) => {
  const [queryType, setQueryType] = useState<"meal_check" | "symptom">("meal_check");
  const [textInput, setTextInput] = useState<string>(initialQuery);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreviewUrl, setMediaPreviewUrl] = useState<string | null>(null);
  const [mediaBase64, setMediaBase64] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "audio" | "video" | null>(null);
  const [isLiveCameraOpen, setIsLiveCameraOpen] = useState<boolean>(false);
  const [liveCameraMode, setLiveCameraMode] = useState<"photo" | "video">("photo");
  
  // Voice Recording state
  const [isRecordingAudio, setIsRecordingAudio] = useState<boolean>(false);
  const [recordingTime, setRecordingTime] = useState<number>(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<any>(null);

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialQuery) {
      setTextInput(initialQuery);
    }
  }, [initialQuery]);

  // Handle drag and drop or file click
  const handleFileChange = async (file: File) => {
    if (!file) return;
    setMediaFile(file);
    setErrorMsg(null);

    if (file.type.startsWith("image/")) {
      setMediaType("image");
    } else if (file.type.startsWith("audio/")) {
      setMediaType("audio");
    } else if (file.type.startsWith("video/")) {
      setMediaType("video");
    } else {
      setErrorMsg(t("err_unsupported_format", language));
      return;
    }

    const preview = URL.createObjectURL(file);
    setMediaPreviewUrl(preview);

    // Convert to Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        setMediaBase64(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Start Voice Recording via HTML5 Microphone
  const startVoiceRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioFile = new File([audioBlob], `symptom-audio-${Date.now()}.webm`, { type: 'audio/webm' });
        handleFileChange(audioFile);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecordingAudio(true);
      setRecordingTime(0);
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime(t => t + 1);
      }, 1000);
    } catch (err) {
      setErrorMsg(t("err_mic_access", language));
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && isRecordingAudio) {
      mediaRecorderRef.current.stop();
      setIsRecordingAudio(false);
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    }
  };

  const clearMedia = () => {
    setMediaFile(null);
    setMediaPreviewUrl(null);
    setMediaBase64(null);
    setMediaType(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAnalyze = async () => {
    if (!textInput.trim() && !mediaBase64) {
      setErrorMsg(t("err_empty_input", language));
      return;
    }

    setIsAnalyzing(true);
    setErrorMsg(null);
    setResult(null);

    try {
      const payload: any = {
        text: textInput.trim(),
        language,
        patientProfile: profile,
        queryType
      };

      if (mediaBase64 && mediaType) {
        if (mediaType === "image") payload.imageBase64 = mediaBase64;
        if (mediaType === "audio") payload.audioBase64 = mediaBase64;
        if (mediaType === "video") payload.videoBase64 = mediaBase64;
        payload.mediaType = mediaFile?.type || (mediaType === "image" ? "image/jpeg" : "audio/webm");
      }

      const res = await ApiService.analyzeWithGemma4(payload);
      setResult(res);

      // Auto trigger TTS readout in patient language
      if (res && res.voiceGuidanceText) {
        ApiService.speak(res.voiceGuidanceText, language);
        setIsSpeaking(true);
      }
    } catch (err: any) {
      setErrorMsg(err.message || t("err_connection_ai", language));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSpeakToggle = () => {
    if (!result) return;
    if (isSpeaking) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      ApiService.speak(result.voiceGuidanceText, language);
      setIsSpeaking(true);
    }
  };

  // Example prompt starters for Kivu culinary & herbal remedies
  const mealExamples = [
    "J'ai préparé du Saka-Saka (pondu) avec de l'huile de palme et du fufu de sorgho. Est-ce sécurisé pour mon diabète ?",
    "Voici la photo de ma décoction de feuilles de Vernonia (Ndakala). Combien de minutes dois-je bouillir pour garder l'effet antidiabétique ?",
    "Est-ce que je peux boire du Bissap rouge sans sucre tous les soirs avec ma Metformine ?",
    "J'ai mangé du poisson Ndakala du lac avec une sauce aux aubergines africaines et bananes plantains."
  ];

  const symptomExamples = [
    "Je ressens des vertiges et des sueurs froides depuis 30 minutes, ma glycémie est à 68 mg/dL.",
    "J'ai une soif intense (polydipsie) et je me lève 4 fois la nuit pour uriner, malgré mon traitement.",
    "Mes pieds sont engourdis le matin après avoir mangé un grand plat de riz blanc la veille."
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Title & Mode Switcher */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E9E9E0]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs px-3 py-1 rounded-lg font-semibold border border-[#D1D1CB] inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>{t("Moteur Multimodal IA Clinique", language)}</span>
              </span>
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs px-3 py-1 rounded-lg font-medium border border-[#E9E9E0]">
                {t("Langue :", language)} <strong className="font-semibold text-[#2D2D2A]">{language}</strong>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2A]">
              {t("diag_title", language)}
            </h2>
            <p className="text-sm text-[#5A5A40] mt-1.5 leading-relaxed">
              {t("diag_subtitle", language)}
            </p>
          </div>

          {/* Type switcher */}
          <div className="flex bg-[#F9F9F7] p-1 rounded-xl border border-[#E9E9E0] shrink-0 self-start md:self-auto">
            <button
              onClick={() => setQueryType("meal_check")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                queryType === "meal_check"
                  ? "bg-[#5A5A40] text-white shadow-xs"
                  : "text-[#5A5A40] hover:text-[#2D2D2A]"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>{t("check_meal_plant", language)}</span>
            </button>
            <button
              onClick={() => setQueryType("symptom")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                queryType === "symptom"
                  ? "bg-[#B35A38] text-white shadow-xs"
                  : "text-[#5A5A40] hover:text-[#2D2D2A]"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>{t("analyze_symptoms", language)}</span>
            </button>
          </div>
        </div>

        {/* Input Form Area */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column: Text Input & Example prompts */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5 flex items-center justify-between">
                <span>{queryType === "meal_check" ? t("desc_meal_remedy", language) : t("desc_symptoms", language)}</span>
                <span className="text-xs text-[#B35A38] font-semibold">en {language}</span>
              </label>
              <textarea
                rows={5}
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder={queryType === "meal_check"
                  ? t("ph_meal_diag", language)
                  : t("ph_symptom_diag", language)
                }
                className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl p-4 text-sm text-[#2D2D2A] placeholder-[#5A5A40]/70 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition"
              />
            </div>

            {/* Quick Example Prompts */}
            <div>
              <span className="text-xs font-semibold text-[#5A5A40] mb-2 block">{t("quick_examples_tip", language)}</span>
              <div className="flex flex-wrap gap-2">
                {(queryType === "meal_check" ? mealExamples : symptomExamples).map((ex, i) => (
                  <button
                    key={i}
                    onClick={() => setTextInput(ex)}
                    className="text-left text-xs bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] border border-[#D1D1CB] px-3 py-1.5 rounded-lg font-medium transition"
                  >
                    "{ex.slice(0, 55)}..."
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Multimodal Uploader (Photo, Audio Voice Note, Video) */}
          <div className="space-y-4">
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">
              {t("multimodal_attach_label", language)}
            </label>

            {/* Drag and drop zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => !mediaFile && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center transition relative overflow-hidden ${
                mediaFile ? "border-[#5A5A40] bg-[#F9F9F7]" : "border-[#D1D1CB] hover:border-[#5A5A40] bg-[#F9F9F7] cursor-pointer"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,audio/*,video/*"
                onChange={(e) => e.target.files && e.target.files[0] && handleFileChange(e.target.files[0])}
                className="hidden"
              />

              {mediaFile ? (
                <div className="space-y-3">
                  {mediaType === "image" && mediaPreviewUrl && (
                    <img src={mediaPreviewUrl} alt="Aperçu plat" className="max-h-48 mx-auto rounded-lg shadow-xs object-contain" />
                  )}
                  {mediaType === "audio" && mediaPreviewUrl && (
                    <div className="bg-[#E9E9E0] p-4 rounded-lg flex items-center justify-center gap-3 border border-[#D1D1CB]">
                      <Mic className="w-5 h-5 text-[#5A5A40] animate-pulse" />
                      <span className="font-semibold text-sm text-[#2D2D2A]">{t("audio_recorded_msg", language)}</span>
                      <audio controls src={mediaPreviewUrl} className="max-h-10 w-full max-w-xs" />
                    </div>
                  )}
                  {mediaType === "video" && mediaPreviewUrl && (
                    <video src={mediaPreviewUrl} controls className="max-h-48 mx-auto rounded-lg shadow-xs" />
                  )}

                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="text-xs font-semibold text-[#2D2D2A] truncate max-w-xs">{mediaFile.name}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); clearMedia(); }}
                      className="bg-red-50 hover:bg-red-100 text-red-700 text-xs px-2.5 py-1 rounded-md font-semibold border border-red-200"
                    >
                      {t("delete_btn", language)}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-6 space-y-3">
                  <div className="w-12 h-12 bg-white text-[#5A5A40] rounded-xl flex items-center justify-center mx-auto shadow-xs border border-[#E9E9E0]">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2D2D2A]">
                      {t("drag_drop_photo", language)}
                    </p>
                    <p className="text-xs text-[#5A5A40] mt-1">
                      {t("or_click_browse", language)}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Live Camera & Video Shortcuts */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => { setLiveCameraMode("photo"); setIsLiveCameraOpen(true); }}
                className="bg-white hover:bg-[#F9F9F7] text-[#2D2D2A] border border-[#D1D1CB] px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <span className="text-base">📸</span>
                <span>{t("take_photo_live", language)}</span>
              </button>
              <button
                type="button"
                onClick={() => { setLiveCameraMode("video"); setIsLiveCameraOpen(true); }}
                className="bg-white hover:bg-[#F9F9F7] text-[#B35A38] border border-[#D1D1CB] px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <span className="text-base">🎥</span>
                <span>{t("record_video_live", language)}</span>
              </button>
            </div>

            {/* Action Bar: Audio Recording button & Submit Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              {!isRecordingAudio ? (
                <button
                  type="button"
                  onClick={startVoiceRecording}
                  className="w-full sm:w-auto bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#B35A38] border border-[#D1D1CB] px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition shrink-0"
                  title="Enregistrer vos symptômes à la voix en Swahili, Lingala, Mashi ou Français"
                >
                  <Mic className="w-4 h-4 text-[#B35A38]" />
                  <span>{t("voice_note_mic", language)}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopVoiceRecording}
                  className="w-full sm:w-auto bg-[#B35A38] text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 animate-pulse shadow-xs"
                >
                  <Square className="w-4 h-4 fill-white" />
                  <span>{t("stop_recording_btn", language) || "Arrêter Enregistrement"} ({recordingTime}s)</span>
                </button>
              )}

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-[#5A5A40] hover:bg-[#464632] text-white font-bold px-6 py-2.5 rounded-xl text-sm shadow-xs flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>{t("ai_diagnosing", language)}</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>{t("start_clinical_diag", language)}</span>
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-xl text-xs flex items-center gap-2 font-medium">
                <AlertTriangle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RESULT SECTION FROM GEMMA 4 */}
      {result && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#5A5A40] animate-in fade-in slide-in-from-bottom-4 duration-300 space-y-6">
          {/* Header Summary & Risk Badge */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E9E9E0]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold ${
                  result.riskLevel === "Urgence médicale"
                    ? "bg-red-600 text-white animate-pulse"
                    : result.riskLevel === "Vigilance"
                    ? "bg-[#F27D26] text-white"
                    : "bg-emerald-700 text-white"
                }`}>
                  {result.riskLevel === "Urgence médicale" && <ShieldAlert className="w-3.5 h-3.5" />}
                  {result.riskLevel === "Vigilance" && <AlertTriangle className="w-3.5 h-3.5" />}
                  {result.riskLevel === "Normal" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  <span>{t("Niveau :", language)} {result.riskLevel}</span>
                </span>
                <span className="text-xs text-[#5A5A40] font-medium bg-[#F9F9F7] px-2.5 py-1 rounded-md border border-[#E9E9E0]">
                  {t("model_ethno_kivu", language)}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2A] mt-1">
                {result.diagnosisSummary}
              </h3>
            </div>

            {/* TTS Audio guidance & Log save */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleSpeakToggle}
                className={`px-3.5 py-2 rounded-xl font-semibold text-xs flex items-center gap-2 transition ${
                  isSpeaking
                    ? "bg-[#F27D26] text-white animate-pulse"
                    : "bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] border border-[#D1D1CB]"
                }`}
                title={t("listen_ai_voice", language)}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#5A5A40]" />}
                <span>{isSpeaking ? t("stop_speech", language) : t("listen_ai_voice", language)}</span>
              </button>

              <button
                onClick={() => onSaveToLog(`Analyse IA: ${result.diagnosisSummary}`, result.riskLevel)}
                className="bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition"
              >
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>{t("add_to_followup", language)}</span>
              </button>
            </div>
          </div>

          {/* Audio Transcript if audio was used */}
          {result.audioTranscript && (
            <div className="bg-[#F9F9F7] p-3.5 rounded-xl border border-[#D1D1CB] text-xs text-[#2D2D2A] flex items-start gap-2 font-medium">
              <Mic className="w-4 h-4 text-[#5A5A40] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#2D2D2A] font-semibold">{t("voice_transcript_detected", language)} :</strong> "{result.audioTranscript}"
              </div>
            </div>
          )}

          {/* Grid of details: Glycemic impact, Preparation Critique, Alternatives, Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Preparation Critique & Glycemic Impact */}
            <div className="bg-[#F9F9F7] rounded-xl p-5 border border-[#E9E9E0] space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-[#5A5A40] flex items-center gap-1.5 mb-2">
                  <Activity className="w-4 h-4 text-[#5A5A40]" />
                  <span>{t("est_glycemic_impact", language)}</span>
                </h4>
                <p className="text-sm font-serif font-bold text-[#2D2D2A] bg-white p-3 rounded-lg border border-[#D1D1CB]">
                  {result.glycemicImpactEstimate}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-[#5A5A40] flex items-center gap-1.5 mb-2">
                  <Utensils className="w-4 h-4 text-[#5A5A40]" />
                  <span>{t("prep_critique_label", language)}</span>
                </h4>
                <p className="text-sm text-[#2D2D2A] leading-relaxed whitespace-pre-line">
                  {result.preparationCritique}
                </p>
              </div>
            </div>

            {/* 2. Healthier Alternatives */}
            <div className="bg-[#F9F9F7] rounded-xl p-5 border border-[#E9E9E0] space-y-3">
              <h4 className="text-xs font-semibold text-[#5A5A40] flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-[#5A5A40]" />
                <span>{t("kivu_alts_label", language)}</span>
              </h4>
              <ul className="space-y-2.5">
                {result.healthierAlternatives.map((alt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#2D2D2A] bg-white p-3 rounded-lg border border-[#D1D1CB]">
                    <span className="w-5 h-5 rounded-full bg-[#5A5A40] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{alt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Personalized Medical & Botanical Recommendations */}
          <div className="bg-[#5A5A40] rounded-xl p-6 text-white shadow-xs">
            <h4 className="text-sm font-serif font-bold tracking-tight text-white flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>{t("ai_recs_for", language)} {profile.name}</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {result.personalizedRecommendations.map((rec, idx) => (
                <div key={idx} className="bg-white/10 rounded-lg p-4 border border-white/15 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {rec}
                  </p>
                  <span className="text-[10px] text-white/60 mt-3 font-mono uppercase tracking-wider">
                    {t("clinical_protocol_prefix", language)} {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Voice guidance readout box */}
          <div className="bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗣️</span>
              <div>
                <strong className="text-xs font-semibold text-[#5A5A40]">{t("voice_msg_guide_prefix", language)} ({language}) :</strong>
                <p className="text-sm font-serif italic text-[#2D2D2A] mt-0.5">"{result.voiceGuidanceText}"</p>
              </div>
            </div>
            <button
              onClick={handleSpeakToggle}
              className="bg-[#5A5A40] hover:bg-[#464632] text-white p-2.5 rounded-lg font-bold shrink-0 transition"
              title={t("replay_voice_msg", language)}
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* LIVE CAMERA MODAL */}
      <LiveCameraModal
        isOpen={isLiveCameraOpen}
        onClose={() => setIsLiveCameraOpen(false)}
        onCapture={(file) => handleFileChange(file)}
        initialMode={liveCameraMode}
        language={language}
      />
    </div>
  );
};
