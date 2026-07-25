import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquareHeart, 
  Send, 
  Mic, 
  Camera,
  Sparkles, 
  Volume2, 
  VolumeX, 
  Loader2, 
  RefreshCw, 
  User, 
  Bot,
  AlertCircle,
  HelpCircle
} from "lucide-react";
import { SupportedLanguage, PatientProfile, ChatMessage } from "../types";
import { ApiService } from "../services/api.service";
import { LiveCameraModal } from "./LiveCameraModal";
import { t } from "../services/translations";

interface ChatbotViewProps {
  profile: PatientProfile;
  language: SupportedLanguage;
}

export const ChatbotView: React.FC<ChatbotViewProps> = ({
  profile,
  language
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      role: "model",
      text: t("chatbot_welcome_msg", language),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [autoSpeak, setAutoSpeak] = useState<boolean>(false);
  const [isLiveCameraOpen, setIsLiveCameraOpen] = useState<boolean>(false);
  const [liveCameraMode, setLiveCameraMode] = useState<"photo" | "video">("photo");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    setMessages(prev => prev.map(m => m.id === "welcome-1" ? { ...m, text: t("chatbot_welcome_msg", language) } : m));
  }, [language]);

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isSending) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setInputText("");
    setIsSending(true);

    try {
      const historyPayload = newHistory.map(m => ({ role: m.role, text: m.text }));
      const replyText = await ApiService.sendChatMessage(historyPayload, language, profile);

      const botMsg: ChatMessage = {
        id: String(Date.now() + 1),
        role: "model",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMsg]);

      if (autoSpeak) {
        ApiService.speak(replyText.replace(/[*#]/g, ""), language);
      }
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: String(Date.now() + 2),
        role: "model",
        text: "⚠️ Erreur de communication avec le serveur d'IA Clinique. Veuillez vérifier votre connexion ou réessayer.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsSending(false);
    }
  };

  const startQuickVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert("La reconnaissance vocale directe n'est pas supportée dans votre navigateur. Vous pouvez utiliser le clavier.");
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language.includes("Français") ? "fr-FR" : language.includes("Swahili") ? "sw-KE" : "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setInputText("🎙️ Écoute en cours...");
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.onerror = () => {
      setInputText("");
    };

    recognition.start();
  };

  const quickQuestions: Record<string, string[]> = {
    "Français": [
      "Combien de tasses de Vernonia (Ndakala) puis-je boire par jour ?",
      "Quelle est la différence entre le fufu de sorgho et le fufu de manioc pour ma glycémie ?",
      "Que faire en urgence si ma glycémie baisse en dessous de 70 mg/dL ?",
      "Quels légumes du Kivu sont les meilleurs pour remplacer les sucres rapides ?"
    ],
    "Kiswahili (Swahili)": [
      "Je, ninaweza kunywa vikombe ngapi vya Ndakala (majani ya uchungu) kwa siku?",
      "Kuna tofauti gani kati ya ugali wa mtama na ugali wa muhogo kwa kisukari changu?",
      "Nifanye nini haraka ikiwa sukari yangu itashuka chini ya 70?",
      "Ni mboga gani za Kivu zilizo bora zaidi kulinda kongosho langu?"
    ],
    "Lingála": [
      "Nakosala nini soki sukari na ngai ekitisi makasi (< 70) ?",
      "Ndolé na Pondu ekeseni nini mpo na glycémie na ngai ?",
      "Moringa ekoki kosalisa ngai na fatigue ya diabète ?"
    ],
    "Mashi / Shi (Kivu)": [
      "Rhuderha kuchi na Kimbwire (Ndakala) rhwanakiyirira kugandagaza kisukari?",
      "Ubugali bwa Muhama bunaziri okurusa kisukari mumi?",
      "Kurhayishiriza ubulwale bwa kisukari mu Kivu?"
    ],
    "Kinyarwanda / Kirundi": [
      "Ni ibikombe bingahe by'Umubirizi nshobora kunywa ku munsi?",
      "Itandukaniro ni iryari hagati y'ubugali bw'amasaka n'ubw'imyumbati?",
      "Moringa ifasha ite mu kugabanya isukari mu maraso?"
    ],
    "English": [
      "How many cups of bitter leaf (Vernonia) tea can I drink daily safely?",
      "Why is sorghum fufu better than white cassava fufu for insulin resistance?",
      "What is the emergency 15g sugar rule for hypoglycemia in rural East Africa?"
    ]
  };

  const currentQuestions = quickQuestions[language] || quickQuestions["Français"];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col h-[calc(100vh-130px)] max-h-[850px]">
      {/* Header Banner */}
      <div className="bg-white rounded-t-2xl p-5 border border-[#E9E9E0] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#5A5A40] flex items-center justify-center text-white shadow-xs font-bold text-lg">
            🤖
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-serif font-bold text-[#2D2D2A]">
                {t("Assistant Médical & Ethnobotanique", language)}
              </h2>
              <span className="bg-[#F9F9F7] text-[#5A5A40] text-[11px] px-2.5 py-0.5 rounded-md font-semibold border border-[#E9E9E0]">
                {t("Kaggle AI Engine", language)}
              </span>
            </div>
            <p className="text-xs text-[#5A5A40]">
              {t("Spécialisé dans le suivi du Diabète & la pharmacopée traditionnelle d'Afrique de l'Est/Kivu.", language)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <button
            onClick={() => setAutoSpeak(!autoSpeak)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
              autoSpeak ? "bg-amber-50 text-amber-800 border border-amber-200" : "bg-[#F9F9F7] text-[#5A5A40] hover:bg-[#E9E9E0] border border-[#D1D1CB]"
            }`}
            title="Lecture vocale automatique des réponses"
          >
            {autoSpeak ? <Volume2 className="w-4 h-4 text-amber-700" /> : <VolumeX className="w-4 h-4 text-[#5A5A40]" />}
            <span>{autoSpeak ? t("Voix auto : ACTIVE", language) : t("Voix auto : désactivée", language)}</span>
          </button>
          <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs px-3 py-1.5 rounded-lg font-semibold border border-[#E9E9E0]">
            🗣️ {language}
          </span>
        </div>
      </div>

      {/* Messages List */}
      <div className="flex-1 bg-[#F9F9F7]/60 border-x border-[#E9E9E0] p-4 sm:p-6 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.role === "user";
          return (
            <div key={msg.id} className={`flex items-start gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
              {!isUser && (
                <div className="w-8 h-8 rounded-lg bg-[#5A5A40] text-white flex items-center justify-center shrink-0 shadow-xs text-xs font-bold mt-1">
                  🌿
                </div>
              )}

              <div className={`max-w-xl rounded-xl p-4 shadow-xs text-sm ${
                isUser
                  ? "bg-[#5A5A40] text-white rounded-br-none"
                  : "bg-white text-[#2D2D2A] border border-[#E9E9E0] rounded-bl-none font-normal"
              }`}>
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <span className={`text-xs font-semibold ${isUser ? "text-white/90" : "text-[#5A5A40]"}`}>
                    {isUser ? profile.name : "Assistant Clinique IA"}
                  </span>
                  <span className={`text-[11px] ${isUser ? "text-white/70" : "text-[#5A5A40]/70"}`}>
                    {msg.timestamp}
                  </span>
                </div>

                <div className="leading-relaxed whitespace-pre-line space-y-2">
                  {msg.text}
                </div>

                {!isUser && (
                  <div className="mt-3 pt-2 border-t border-[#E9E9E0] flex items-center justify-end">
                    <button
                      onClick={() => ApiService.speak(msg.text.replace(/[*#]/g, ""), language)}
                      className="text-xs text-[#5A5A40] hover:text-[#2D2D2A] font-semibold flex items-center gap-1 bg-[#F9F9F7] px-2.5 py-1 rounded-md border border-[#D1D1CB]"
                      title="Lire à haute voix"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-[#5A5A40]" />
                      <span>Écouter</span>
                    </button>
                  </div>
                )}
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-lg bg-[#2D2D2A] text-white flex items-center justify-center shrink-0 shadow-xs text-xs font-bold mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isSending && (
          <div className="flex items-start gap-3 justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#5A5A40] text-white flex items-center justify-center shrink-0 shadow-xs text-xs font-bold mt-1 animate-pulse">
              🌿
            </div>
            <div className="bg-white text-[#5A5A40] rounded-xl rounded-bl-none p-4 shadow-xs border border-[#E9E9E0] flex items-center gap-3 text-sm font-medium">
              <Loader2 className="w-4 h-4 text-[#5A5A40] animate-spin" />
              <span>L'IA analyse votre question et consulte la pharmacopée du Kivu...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Starter Pill bar */}
      <div className="bg-[#F9F9F7] border-x border-[#E9E9E0] px-4 py-2.5 overflow-x-auto flex items-center gap-2 shrink-0 no-scrollbar">
        <span className="text-xs font-semibold text-[#5A5A40] shrink-0 flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#5A5A40]" />
          <span>Suggestions ({language}) :</span>
        </span>
        {currentQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            disabled={isSending}
            className="text-xs bg-white hover:bg-[#E9E9E0] text-[#2D2D2A] border border-[#D1D1CB] px-3 py-1.5 rounded-lg font-medium shrink-0 transition shadow-xs"
          >
            "{q}"
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-b-2xl p-4 border border-[#E9E9E0] shadow-xs shrink-0">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={startQuickVoiceRecognition}
            disabled={isSending}
            className="p-2.5 bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] hover:text-[#2D2D2A] rounded-xl transition shrink-0 border border-[#D1D1CB]"
            title="Dictée vocale par microphone"
          >
            <Mic className="w-5 h-5 text-[#B35A38]" />
          </button>

          <button
            type="button"
            onClick={() => { setLiveCameraMode("photo"); setIsLiveCameraOpen(true); }}
            disabled={isSending}
            className="p-2.5 bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] hover:text-[#2D2D2A] rounded-xl transition shrink-0 border border-[#D1D1CB]"
            title="Prendre photo ou vidéo en direct (Caméra)"
          >
            <Camera className="w-5 h-5 text-[#5A5A40]" />
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isSending}
            placeholder={t("ask_ai_in_lang", language)}
            className="flex-1 bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-4 py-2.5 text-sm text-[#2D2D2A] placeholder-[#5A5A40]/70 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition"
          />

          <button
            type="submit"
            disabled={!inputText.trim() || isSending}
            className="bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-xs transition disabled:opacity-40 flex items-center gap-2 shrink-0"
          >
            <span>Envoyer</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* LIVE CAMERA MODAL */}
      <LiveCameraModal
        isOpen={isLiveCameraOpen}
        onClose={() => setIsLiveCameraOpen(false)}
        onCapture={(file, type) => {
          const prompt = type === "image"
            ? `[📸 Photo en Direct : ${file.name}] Voici la photo d'un plat ou plante. Est-ce bénéfique et sécurisé pour mon diabète ?`
            : `[🎥 Vidéo en Direct : ${file.name}] Voici la vidéo de préparation culinaire / tisane. L'ébullition et le dosage sont-ils corrects ?`;
          handleSend(prompt);
        }}
        initialMode={liveCameraMode}
        language={language}
      />
    </div>
  );
};
