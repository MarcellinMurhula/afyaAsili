import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { DashboardView } from "./components/DashboardView";
import { DiagnosticView } from "./components/DiagnosticView";
import { HerbalDirectoryView } from "./components/HerbalDirectoryView";
import { ChatbotView } from "./components/ChatbotView";
import { EmergencyModal } from "./components/EmergencyModal";
import { ProfileModal } from "./components/ProfileModal";
import { WelcomeLoginView } from "./components/WelcomeLoginView";
import { SimpleAccessibleView } from "./components/SimpleAccessibleView";
import { DeviceConnectModal } from "./components/DeviceConnectModal";
import { GemmaKaggleModal } from "./components/GemmaKaggleModal";
import { SupportedLanguage, PatientProfile } from "./types";
import { ApiService } from "./services/api.service";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isSimpleMode, setIsSimpleMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [language, setLanguage] = useState<SupportedLanguage>("Kiswahili (Swahili)");
  const [profile, setProfile] = useState<PatientProfile>(ApiService.getProfile());
  const [isEmergencyOpen, setIsEmergencyOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [isDeviceModalOpen, setIsDeviceModalOpen] = useState<boolean>(false);
  const [isGemmaModalOpen, setIsGemmaModalOpen] = useState<boolean>(false);
  const [initialDiagnosticQuery, setInitialDiagnosticQuery] = useState<string>("");

  // PWA Service Worker Registration
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log("✅ PWA Service Worker enregistré avec succès", reg.scope))
        .catch(err => console.warn("❌ Échec enregistrement PWA SW:", err));
    }
  }, []);

  const handleNavigateToDiagnostic = (query?: string) => {
    if (query) {
      setInitialDiagnosticQuery(query);
    }
    setActiveTab("diagnostic");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSaveToLog = async (note: string, risk: "Normal" | "Vigilance" | "Urgence médicale") => {
    await ApiService.syncLog({
      type: "glucose",
      value: risk === "Urgence médicale" ? 260 : risk === "Vigilance" ? 170 : 115,
      unit: "mg/dL (est. par IA)",
      note: note.slice(0, 80),
      device: "Scanner IA Médical",
      risk
    });
    alert("✅ Analyse IA ajoutée à votre journal de suivi médical !");
    setActiveTab("dashboard");
  };

  const handleLogin = (userProfile: PatientProfile, lang: SupportedLanguage) => {
    setProfile(userProfile);
    setLanguage(lang);
    setIsLoggedIn(true);
    setIsSimpleMode(true);
    setActiveTab("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If not logged in yet, show the visual welcome/login page
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#F5F5F0] text-[#2D2D2A] font-sans selection:bg-[#5A5A40] selection:text-white">
        <WelcomeLoginView
          onLogin={handleLogin}
          currentLanguage={language}
        />
        {/* Footer on login screen */}
        <footer className="bg-white text-[#5A5A40] py-4 border-t border-[#D1D1CB] text-xs text-center px-6">
          <p className="font-bold">AfyaAsili • Kivu Health Intelligence & IA Médicale (Mode Hors-Ligne PWA)</p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#2D2D2A] flex flex-col justify-between selection:bg-[#5A5A40] selection:text-white font-sans">
      {/* Header & Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        profile={profile}
        openEmergencyModal={() => setIsEmergencyOpen(true)}
        onOpenProfileModal={() => setIsProfileOpen(true)}
        onLogout={() => setIsLoggedIn(false)}
        isSimpleMode={isSimpleMode}
        onToggleSimpleMode={() => {
          setIsSimpleMode(!isSimpleMode);
          if (activeTab !== "dashboard") setActiveTab("dashboard");
        }}
        onOpenGemmaModal={() => setIsGemmaModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 pb-16">
        {activeTab === "dashboard" && (
          isSimpleMode ? (
            <SimpleAccessibleView
              profile={profile}
              language={language}
              onOpenDeviceModal={() => setIsDeviceModalOpen(true)}
              onSwitchToDetailedMode={() => setIsSimpleMode(false)}
              onNavigateToDiagnostic={handleNavigateToDiagnostic}
            />
          ) : (
            <DashboardView
              profile={profile}
              language={language}
              onNavigateToDiagnostic={handleNavigateToDiagnostic}
            />
          )
        )}

        {activeTab === "diagnostic" && (
          <DiagnosticView
            profile={profile}
            language={language}
            initialQuery={initialDiagnosticQuery}
            onSaveToLog={handleSaveToLog}
          />
        )}

        {activeTab === "directory" && (
          <HerbalDirectoryView
            language={language}
            onSelectForAnalysis={(item) => {
              setInitialDiagnosticQuery(`Vérification de plat: ${item.nameFr}. Est-ce que cette recette (${item.traditionalUse}) est saine pour mon diabète aujourd'hui ?`);
              setActiveTab("diagnostic");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        )}

        {activeTab === "chatbot" && (
          <ChatbotView
            profile={profile}
            language={language}
          />
        )}
      </main>

      {/* Emergency SOS Guide Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        language={language}
      />

      {/* Patient Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onUpdateProfile={(updated) => setProfile(updated)}
      />

      {/* Manual Device Connection Modal */}
      <DeviceConnectModal
        isOpen={isDeviceModalOpen}
        onClose={() => setIsDeviceModalOpen(false)}
        language={language}
        onAddMeasurement={(type, val1, val2) => {
          // Log measurement silently to API service
          const calculatedRisk = type === "glucose" 
            ? (val1 > 250 || val1 < 70 ? "Urgence médicale" : (val1 > 180 || val1 < 80 ? "Vigilance" : "Normal"))
            : type === "pressure"
            ? (val1 >= 180 || (val2 && val2 >= 120) ? "Urgence médicale" : (val1 >= 140 || (val2 && val2 >= 90) ? "Vigilance" : "Normal"))
            : "Normal";

          ApiService.syncLog({
            type,
            value: val1,
            valueSystolic: type === "pressure" ? val1 : undefined,
            valueDiastolic: type === "pressure" ? val2 : undefined,
            unit: type === "glucose" ? "mg/dL" : type === "pressure" ? "mmHg" : "kg",
            note: "Mesure synchronisée manuellement par l'utilisateur",
            device: "IoT / Saisie manuelle",
            risk: calculatedRisk
          });
        }}
      />

      {/* Gemma 4 Kaggle Architecture Modal */}
      <GemmaKaggleModal
        isOpen={isGemmaModalOpen}
        onClose={() => setIsGemmaModalOpen(false)}
        language={language}
      />

      {/* Footer */}
      <footer className="bg-white text-[#5A5A40] py-6 border-t border-[#D1D1CB] text-xs text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5A5A40] animate-ping"></span>
            <span className="text-[#2D2D2A] font-bold">AfyaAsili • Digital Shamba & IA Clinique</span>
            <span className="text-[#5A5A40]/70">— Health Intelligence for East Africa (PWA)</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[#5A5A40]/80 font-medium">
            <button
              onClick={() => setIsGemmaModalOpen(true)}
              className="text-[#B35A38] hover:text-[#8f4428] font-extrabold underline flex items-center gap-1"
            >
              🧠 Connecteur IA Médicale (Kaggle)
            </button>
            <span>•</span>
            <button
              onClick={() => setIsDeviceModalOpen(true)}
              className="text-[#5A5A40] hover:text-[#2D2D2A] font-bold underline"
            >
              🔌 Connecter Appareils
            </button>
            <span>•</span>
            <button onClick={() => setIsEmergencyOpen(true)} className="text-[#B35A38] hover:text-[#8f4428] font-bold underline">
              Emergency SOS Guide
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}


