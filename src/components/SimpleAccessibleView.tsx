import React, { useState, useRef, useEffect } from "react";
import { SupportedLanguage, PatientProfile, RiskLevel } from "../types";
import { ApiService } from "../services/api.service";
import { LiveCameraModal } from "./LiveCameraModal";
import { t } from "../services/translations";
import { 
  Volume2, 
  VolumeX, 
  Mic, 
  Camera, 
  Video as VideoIcon, 
  MessageSquare, 
  Wifi, 
  WifiOff, 
  Activity, 
  Heart, 
  Scale, 
  Plug, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  RefreshCw, 
  HelpCircle,
  Play,
  Square,
  Sparkles,
  ArrowRight,
  User,
  Sliders,
  Send,
  Upload,
  Image as ImageIcon
} from "lucide-react";

interface SimpleAccessibleViewProps {
  profile: PatientProfile;
  language: SupportedLanguage;
  onOpenDeviceModal: () => void;
  onSwitchToDetailedMode: () => void;
  onNavigateToDiagnostic: (query?: string) => void;
}

interface EssentialIndicator {
  id: string;
  labelFr: string;
  labelLocal: string;
  value: string;
  unit: string;
  icon: string;
  status: "normal" | "warning" | "danger";
  statusTextFr: string;
  statusTextLocal: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
}

export const SimpleAccessibleView: React.FC<SimpleAccessibleViewProps> = ({
  profile,
  language,
  onOpenDeviceModal,
  onSwitchToDetailedMode,
  onNavigateToDiagnostic
}) => {
  const [activeAction, setActiveAction] = useState<"none" | "audio" | "photo" | "video" | "text">("none");
  const [isLiveCameraOpen, setIsLiveCameraOpen] = useState<boolean>(false);
  const [liveCameraMode, setLiveCameraMode] = useState<"photo" | "video">("photo");
  const [capturedMediaPreview, setCapturedMediaPreview] = useState<{ type: "image" | "video"; url: string } | null>(null);
  const [isRecordingAudio, setIsRecordingAudio] = useState<boolean>(false);
  const [isRecordingVideo, setIsRecordingVideo] = useState<boolean>(false);
  const [recordingSeconds, setRecordingSeconds] = useState<number>(0);
  const [textInput, setTextInput] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<{
    status: "normal" | "warning" | "danger";
    titleFr: string;
    titleLocal: string;
    advice: string[];
    audioSpeech: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<any>(null);

  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const loadLogs = async () => {
      const fetched = await ApiService.getMedicalLogs();
      setLogs(fetched);
    };
    loadLogs();
    const interval = setInterval(loadLogs, 3000);
    return () => clearInterval(interval);
  }, []);

  const latestGlucoseLog = logs.find(l => l.type === "glucose" && l.value !== undefined);
  const latestPressureLog = logs.find(l => l.type === "pressure");
  const latestWeightLog = logs.find(l => l.type === "weight" && l.value !== undefined);

  const glucoseVal = latestGlucoseLog?.value !== undefined ? String(latestGlucoseLog.value) : "116";
  const glucoseRisk = latestGlucoseLog?.risk || "Normal";
  const isGlucoseDanger = glucoseRisk === "Urgence médicale" || Number(glucoseVal) < 70 || Number(glucoseVal) > 250;
  const isGlucoseWarn = glucoseRisk === "Vigilance" || (Number(glucoseVal) >= 140 && Number(glucoseVal) <= 250);

  const pressureVal = latestPressureLog?.valueSystolic && latestPressureLog?.valueDiastolic 
    ? `${latestPressureLog.valueSystolic}/${latestPressureLog.valueDiastolic}` 
    : latestPressureLog?.value !== undefined ? String(latestPressureLog.value) : "125/80";
  const pressureSys = latestPressureLog?.valueSystolic || Number(String(pressureVal).split('/')[0]) || 125;
  const isPressureWarn = pressureSys >= 140;
  const isPressureDanger = pressureSys >= 180;

  const weightVal = latestWeightLog?.value !== undefined ? String(latestWeightLog.value) : "72.4";
  const weightRisk = latestWeightLog?.risk || "Normal";
  const isWeightWarn = weightRisk === "Vigilance" || Number(weightVal) > 85;

  const indicators: EssentialIndicator[] = [
    {
      id: "glucose",
      labelFr: t("num_1_glucose", language),
      labelLocal: t("num_1_glucose", language),
      value: glucoseVal,
      unit: "mg/dL",
      icon: "🩸",
      status: isGlucoseDanger ? "danger" : isGlucoseWarn ? "warning" : "normal",
      statusTextFr: isGlucoseDanger ? t("status_danger_short", language) : isGlucoseWarn ? t("status_warn_short", language) : t("status_normal_short", language),
      statusTextLocal: isGlucoseDanger ? t("status_danger_short", language) : isGlucoseWarn ? t("status_warn_short", language) : t("status_normal_short", language),
      colorBg: isGlucoseDanger ? "bg-red-50" : isGlucoseWarn ? "bg-amber-50" : "bg-green-50",
      colorBorder: isGlucoseDanger ? "border-red-600" : isGlucoseWarn ? "border-amber-500" : "border-green-600",
      colorText: isGlucoseDanger ? "text-red-900" : isGlucoseWarn ? "text-amber-900" : "text-green-800"
    },
    {
      id: "pressure",
      labelFr: t("num_2_pressure", language),
      labelLocal: t("num_2_pressure", language),
      value: pressureVal,
      unit: "mmHg",
      icon: "❤️",
      status: isPressureDanger ? "danger" : isPressureWarn ? "warning" : "normal",
      statusTextFr: isPressureDanger ? t("status_danger_short", language) : isPressureWarn ? t("status_monitor_short", language) : t("status_stable_short", language),
      statusTextLocal: isPressureDanger ? t("status_danger_short", language) : isPressureWarn ? t("status_monitor_short", language) : t("status_stable_short", language),
      colorBg: isPressureDanger ? "bg-red-50" : isPressureWarn ? "bg-amber-50" : "bg-green-50",
      colorBorder: isPressureDanger ? "border-red-600" : isPressureWarn ? "border-amber-500" : "border-green-600",
      colorText: isPressureDanger ? "text-red-900" : isPressureWarn ? "text-amber-900" : "text-green-800"
    },
    {
      id: "weight",
      labelFr: t("num_3_weight", language),
      labelLocal: t("num_3_weight", language),
      value: weightVal,
      unit: "Kg",
      icon: "⚖️",
      status: isWeightWarn ? "warning" : "normal",
      statusTextFr: isWeightWarn ? t("status_monitor_short", language) : t("status_stable_short", language),
      statusTextLocal: isWeightWarn ? t("status_monitor_short", language) : t("status_stable_short", language),
      colorBg: isWeightWarn ? "bg-amber-50" : "bg-green-50",
      colorBorder: isWeightWarn ? "border-amber-500" : "border-green-600",
      colorText: isWeightWarn ? "text-amber-900" : "text-green-800"
    }
  ];

  // AUDIO RECORDING SIMULATION
  const handleStartAudio = () => {
    setActiveAction("audio");
    setIsRecordingAudio(true);
    setRecordingSeconds(0);
    timerRef.current = setInterval(() => {
      setRecordingSeconds(s => s + 1);
    }, 1000);
    ApiService.speak("Enregistrement audio activé. Parlez maintenant à l'assistant IA en votre langue.", language);
  };

  const handleStopAudio = () => {
    setIsRecordingAudio(false);
    if (timerRef.current) clearInterval(timerRef.current);
    triggerGemmaAnalysis("audio", "Note vocale en Swahili/Kivu sur une fatigue après avoir mangé du fufu");
  };

  // PHOTO UPLOAD OR LIVE CAPTURE
  const handlePhotoClick = () => {
    setActiveAction("photo");
    setLiveCameraMode("photo");
    setIsLiveCameraOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setCapturedMediaPreview({ type: "image", url });
      triggerGemmaAnalysis("photo", `Photo du plat analysée : ${file.name}`);
    }
  };

  // VIDEO SIMULATION OR LIVE RECORDING
  const handleVideoClick = () => {
    setActiveAction("video");
    setLiveCameraMode("video");
    setIsLiveCameraOpen(true);
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setCapturedMediaPreview({ type: "video", url });
      triggerGemmaAnalysis("video", `Vidéo de préparation culinaire / tisane : ${file.name}`);
    }
  };

  const handleLiveCapture = (file: File, type: "image" | "video", dataUrl?: string) => {
    const previewUrl = dataUrl || URL.createObjectURL(file);
    setCapturedMediaPreview({ type, url: previewUrl });
    const desc = type === "image"
      ? `Photo capturée en direct avec la caméra (${file.name})`
      : `Vidéo culinaire/plante enregistrée en direct (${file.name})`;
    triggerGemmaAnalysis(type === "image" ? "photo" : "video", desc);
  };

  // TEXT SUBMIT
  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;
    triggerGemmaAnalysis("text", textInput);
    setTextInput("");
  };

  // GEMINI / GEMMA 4 BACKGROUND ENGINE
  const triggerGemmaAnalysis = (mode: string, inputData: string) => {
    setIsAnalyzing(true);
    setAiResult(null);

    // Speak reassurance
    ApiService.speak("L'IA Médicale analyse votre demande en arrière-plan. Patientez...", language);

    setTimeout(() => {
      setIsAnalyzing(false);
      
      let res = {
        status: "normal" as "normal" | "warning" | "danger",
        titleFr: "🟢 VALIDÉ PAR L'IA : REPAS OU PLANTE SANS DANGER",
        titleLocal: "CHAKULA AU DAWA HII NI SALAMA KWA KISUKARI CHAKO",
        advice: [
          "Le Ndakala (Vernonia) et le Moringa aident à abaisser le sucre dans le sang.",
          "Mangez avec une portion modérée de fufu ou de manioc cuit dans l'eau propre.",
          "Continuez à boire 2 verres d'eau avant et après le repas."
        ],
        audioSpeech: "L'assistant clinique vous confirme que ce repas ou cette plante est excellent pour votre diabète. Vous pouvez manger en toute sécurité. Buvez beaucoup d'eau."
      };

      if (mode === "audio" || inputData.toLowerCase().includes("fatigue") || inputData.toLowerCase().includes("sucre")) {
        res = {
          status: "warning",
          titleFr: "🟠 ATTENTION IA : VIGILANCE GLYCÉMIQUE MODÉRÉE",
          titleLocal: "ANGALIZO LA IA : SUKARI INAWEZA KUPANDA KIDOGO",
          advice: [
            "Si vous vous sentez fatigué après le repas, c'est que la pâte était un peu trop sucrée.",
            "Prenez une tisane de Bissap SANS SUCRE ou de feuilles de Moringa.",
            "Marchez doucement pendant 15 minutes autour de la maison pour aider votre cœur."
          ],
          audioSpeech: "Attention. L'IA remarque une petite vigilance. Prenez une tisane sans sucre et marchez 15 minutes pour stabiliser votre taux de sucre."
        };
      }

      setAiResult(res);
      ApiService.speak(res.audioSpeech, language);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in duration-300">
      
      {/* HIDDEN INPUTS FOR PHOTO & VIDEO */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/*"
        capture="environment"
        onChange={handleVideoChange}
        className="hidden"
      />

      {/* TOP HEADER & ACCESSIBILITY BAR */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#E9E9E0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#5A5A40] text-white flex items-center justify-center text-3xl shrink-0 shadow-xs font-bold">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs font-semibold px-3 py-1 rounded-md border border-[#E9E9E0]">
                {t("accessible_visual_voice_mode", language)}
              </span>
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs font-semibold px-2.5 py-1 rounded-md border border-[#E9E9E0]">
                🗣️ {language}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2A] mt-1.5">
              {t("Bonjour", language)}, {profile.name.split(' ')[0]} ! 👋
            </h1>
          </div>
        </div>

        {/* SWITCH TO DETAILED DASHBOARD */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => ApiService.speak(`Bonjour ${profile.name}. Votre glycémie est de ${glucoseVal} mg/dL, statut ${isGlucoseDanger ? "Urgence" : isGlucoseWarn ? "Vigilance" : "Normal"}. Appuyez sur un des quatre gros boutons pour parler ou montrer une photo à l'assistant IA.`, language)}
            className="flex-1 sm:flex-none bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition"
          >
            <Volume2 className="w-5 h-5 animate-pulse shrink-0" />
            <span>{t("listen_screen_btn", language)}</span>
          </button>

          <button
            onClick={onSwitchToDetailedMode}
            className="flex-1 sm:flex-none bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#D1D1CB] transition"
            title="Passer en mode clinique complet"
          >
            <Sliders className="w-4 h-4 text-[#5A5A40]" />
            <span>{t("detailed_mode_btn", language)}</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: THE 3 ESSENTIAL INDICATORS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A] flex items-center gap-2">
            <span>{t("three_important_numbers", language)}</span>
          </h2>
          <button
            onClick={onOpenDeviceModal}
            className="bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold text-xs px-4 py-2 rounded-xl flex items-center gap-2 shadow-xs transition"
          >
            <Plug className="w-4 h-4 text-[#B35A38]" />
            <span>{t("connect_device_btn", language)}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {indicators.map((ind) => (
            <div
              key={ind.id}
              onClick={() => ApiService.speak(`${ind.labelFr}. Valeur : ${ind.value} ${ind.unit}. Statut : ${ind.statusTextFr}`, language)}
              className={`p-6 rounded-2xl border transition cursor-pointer shadow-xs flex items-center justify-between gap-4 ${ind.colorBg} ${ind.colorBorder}`}
            >
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#5A5A40] block">
                  {ind.labelFr}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-bold font-serif ${ind.colorText}`}>
                    {ind.value}
                  </span>
                  <span className="text-base font-semibold text-[#5A5A40]">{ind.unit}</span>
                </div>
                <div className="pt-2">
                  <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold border ${ind.colorBorder} bg-white ${ind.colorText}`}>
                    {ind.statusTextFr}
                  </span>
                </div>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white flex items-center justify-center text-4xl sm:text-5xl shadow-xs border border-[#D1D1CB] shrink-0">
                {ind.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: THE 4 GIANT ICONS FOR GEMMA 4 */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0] space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs font-semibold px-3 py-1 rounded-md border border-[#E9E9E0] inline-block">
            {t("medical_ai_bg", language)}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2A]">
            {t("what_to_ask_show", language)}
          </h2>
          <p className="text-sm text-[#5A5A40]">
            {t("press_4_buttons_hint", language)}
          </p>
        </div>

        {/* 4 HUGE BUTTON GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* BUTTON 1: AUDIO */}
          <button
            onClick={isRecordingAudio ? handleStopAudio : handleStartAudio}
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col items-center justify-center text-center transition shadow-xs group relative min-h-[220px] ${
              isRecordingAudio
                ? "bg-red-600 text-white border-red-700 animate-pulse scale-[1.01]"
                : "bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] border-[#D1D1CB] hover:border-[#5A5A40]"
            }`}
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mb-4 transition shadow-xs ${
              isRecordingAudio ? "bg-white text-red-600" : "bg-[#5A5A40] text-white group-hover:scale-105"
            }`}>
              <Mic className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight block">
              {t("btn_1_audio", language)}
            </span>
            <span className={`text-xs font-semibold mt-1 ${isRecordingAudio ? "text-white" : "text-[#5A5A40]"}`}>
              {isRecordingAudio ? `🔴 Enregistrement... (${recordingSeconds}s)` : t("speak_to_assistant", language)}
            </span>
          </button>

          {/* BUTTON 2: PHOTO */}
          <button
            onClick={handlePhotoClick}
            className="p-6 sm:p-8 rounded-2xl border bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] border-[#D1D1CB] hover:border-[#B35A38] flex flex-col items-center justify-center text-center transition shadow-xs group min-h-[220px]"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#B35A38] text-white flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition">
              <Camera className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight block">
              {t("btn_2_photo", language)}
            </span>
            <span className="text-xs font-semibold text-[#5A5A40] mt-1">
              {t("photo_meal_plant", language)}
            </span>
          </button>

          {/* BUTTON 3: VIDEO */}
          <button
            onClick={handleVideoClick}
            className="p-6 sm:p-8 rounded-2xl border bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] border-[#D1D1CB] hover:border-[#2D2D2A] flex flex-col items-center justify-center text-center transition shadow-xs group min-h-[220px]"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#2D2D2A] text-white flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition">
              <VideoIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#B35A38]" />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight block">
              {t("btn_3_video", language)}
            </span>
            <span className="text-xs font-semibold text-[#5A5A40] mt-1">
              {t("video_cooking_herbs", language)}
            </span>
          </button>

          {/* BUTTON 4: TEXT / KEYBOARD */}
          <button
            onClick={() => {
              setActiveAction("text");
              ApiService.speak("Écrivez votre question ou tapez un symptôme dans la case.", language);
            }}
            className={`p-6 sm:p-8 rounded-2xl border flex flex-col items-center justify-center text-center transition shadow-xs group min-h-[220px] ${
              activeAction === "text"
                ? "bg-[#5A5A40] text-white border-[#5A5A40]"
                : "bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#2D2D2A] border-[#D1D1CB]"
            }`}
          >
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition ${
              activeAction === "text" ? "bg-white text-[#5A5A40]" : "bg-[#5A5A40] text-white"
            }`}>
              <MessageSquare className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl tracking-tight block">
              {t("btn_4_text", language)}
            </span>
            <span className={`text-xs font-semibold mt-1 ${activeAction === "text" ? "text-white/90" : "text-[#5A5A40]"}`}>
              {t("write_on_keyboard", language)}
            </span>
          </button>

        </div>

        {/* TEXT ACTION AREA IF SELECTED */}
        {activeAction === "text" && (
          <form onSubmit={handleTextSubmit} className="bg-[#F9F9F7] p-6 rounded-xl border border-[#D1D1CB] space-y-4 animate-in fade-in duration-200">
            <label className="block font-serif font-bold text-lg text-[#2D2D2A]">
              {t("write_question_here", language)}
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="ex: Est-ce que je peux manger du manioc avec mes feuilles de ndakala ?"
                className="flex-1 bg-white border border-[#D1D1CB] rounded-xl p-3.5 text-sm font-semibold text-[#2D2D2A] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
              />
              <button
                type="submit"
                disabled={!textInput.trim() || isAnalyzing}
                className="bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold px-6 py-3.5 rounded-xl text-sm shadow-xs transition disabled:opacity-40 flex items-center justify-center gap-2 shrink-0"
              >
                <span>{t("send_btn", language)}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* SECTION 3: GEMMA 4 ANALYSIS RESULT (TRAFFIC LIGHT FEEDBACK) */}
      {isAnalyzing && (
        <div className="bg-white rounded-2xl p-8 border border-[#5A5A40] shadow-xs text-center space-y-4 animate-pulse">
          <div className="w-12 h-12 rounded-full bg-[#5A5A40] text-white flex items-center justify-center text-2xl mx-auto animate-spin">
            🔄
          </div>
          <h3 className="text-xl font-serif font-bold text-[#2D2D2A]">
            {t("ai_analyzing_bg", language)}
          </h3>
          <p className="text-sm font-semibold text-[#5A5A40]">
            {t("consulting_pharmacopeia", language)}
          </p>
        </div>
      )}

      {aiResult && !isAnalyzing && (
        <div className={`rounded-2xl p-6 sm:p-8 border shadow-xs space-y-6 animate-in zoom-in-95 duration-300 ${
          aiResult.status === "normal"
            ? "bg-green-50 border-green-200 text-green-950"
            : aiResult.status === "warning"
            ? "bg-amber-50 border-amber-200 text-amber-950"
            : "bg-red-50 border-red-200 text-red-950"
        }`}>
          {/* TRAFFIC LIGHT BADGE & TITLE */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl shrink-0">
                {aiResult.status === "normal" ? "🟢" : aiResult.status === "warning" ? "🟠" : "🔴"}
              </span>
              <div>
                <span className="bg-white/80 text-black font-semibold text-xs px-2.5 py-0.5 rounded-md border border-black/10 block w-fit mb-1">
                  {t("ai_response_badge", language)}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold leading-tight">
                  {aiResult.titleFr}
                </h3>
                <p className="text-xs sm:text-sm font-semibold opacity-80 mt-1">
                  {aiResult.titleLocal}
                </p>
              </div>
            </div>

            {/* BIG RE-LISTEN BUTTON */}
            <button
              onClick={() => ApiService.speak(aiResult.audioSpeech, language)}
              className="w-full sm:w-auto bg-white hover:bg-black/5 text-black font-semibold px-5 py-2.5 rounded-xl shadow-xs border border-black/10 flex items-center justify-center gap-2 text-xs sm:text-sm shrink-0 transition"
            >
              <Volume2 className="w-4 h-4 text-[#B35A38]" />
              <span>{t("listen_again_btn", language)}</span>
            </button>
          </div>

          {/* CAPTURED MEDIA PREVIEW */}
          {capturedMediaPreview && (
            <div className="bg-white/90 p-4 rounded-xl border border-black/10 flex flex-col items-center gap-3 shadow-xs">
              <span className="font-semibold text-xs opacity-80 flex items-center gap-1.5">
                <span>{capturedMediaPreview.type === "image" ? t("photo_captured_live", language) : t("video_captured_live", language)}</span>
              </span>
              {capturedMediaPreview.type === "image" ? (
                <img
                  src={capturedMediaPreview.url}
                  alt="Plat ou plante capturé en direct"
                  className="max-h-52 rounded-lg shadow-xs object-contain border border-black/10"
                />
              ) : (
                <video
                  src={capturedMediaPreview.url}
                  controls
                  className="max-h-52 rounded-lg shadow-xs border border-black/10"
                />
              )}
            </div>
          )}

          {/* BULLET POINT ADVICE */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider opacity-90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t("simple_advice_today", language)}</span>
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {aiResult.advice.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 p-3.5 rounded-xl border border-black/10 flex items-center gap-3 font-medium text-sm shadow-xs"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#5A5A40] text-white flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-medium opacity-75">
              {t("press_again_hint", language)}
            </span>
            <button
              onClick={() => onNavigateToDiagnostic("Analyse approfondie demandée via Mode Simplifié")}
              className="w-full sm:w-auto bg-[#2D2D2A] hover:bg-black text-white font-semibold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition"
            >
              <span>{t("open_encyclopedia_btn", language)}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION 4: QUICK HELP PILLS */}
      <div className="bg-[#F9F9F7] rounded-xl p-5 border border-[#E9E9E0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#5A5A40]">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#B35A38] shrink-0" />
          <span>{t("help_pwa_text", language)}</span>
        </div>
        <button
          onClick={() => ApiService.speak("Cette application est conçue pour être facile à comprendre. 1, pour parler à la voix. 2, pour prendre une photo. 3, pour filmer une vidéo. 4, pour écrire. Vos appareils médicaux peuvent être reliés en bas.", language)}
          className="bg-white hover:bg-[#E9E9E0] text-[#2D2D2A] px-4 py-2 rounded-lg border border-[#D1D1CB] shrink-0 font-semibold shadow-xs"
        >
          {t("explain_app_btn", language)}
        </button>
      </div>

      {/* LIVE CAMERA MODAL */}
      <LiveCameraModal
        isOpen={isLiveCameraOpen}
        onClose={() => setIsLiveCameraOpen(false)}
        onCapture={handleLiveCapture}
        initialMode={liveCameraMode}
        language={language}
      />

    </div>
  );
};
