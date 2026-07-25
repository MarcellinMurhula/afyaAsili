import React, { useState, useEffect } from "react";
import { 
  Activity, 
  Stethoscope, 
  Leaf, 
  MessageSquareHeart, 
  AlertTriangle, 
  Wifi, 
  WifiOff, 
  Globe, 
  Cpu,
  User,
  LogOut,
  Sliders,
  ShieldCheck
} from "lucide-react";
import { SupportedLanguage, PatientProfile } from "../types";
import { t } from "../services/translations";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  profile: PatientProfile;
  openEmergencyModal: () => void;
  onOpenProfileModal: () => void;
  onLogout?: () => void;
  isSimpleMode?: boolean;
  onToggleSimpleMode?: () => void;
  onOpenGemmaModal?: () => void;
}

const LANGUAGES: SupportedLanguage[] = [
  "Français",
  "Kiswahili (Swahili)",
  "Lingála",
  "Mashi / Shi (Kivu)",
  "Kinyarwanda / Kirundi",
  "English"
];

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  language,
  setLanguage,
  profile,
  openEmergencyModal,
  onOpenProfileModal,
  onLogout,
  isSimpleMode,
  onToggleSimpleMode,
  onOpenGemmaModal
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isInstalledPwa, setIsInstalledPwa] = useState<boolean>(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true) {
      setIsInstalledPwa(true);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const navItems = [
    { id: "dashboard", label: t("nav_dashboard", language), icon: Activity },
    { id: "diagnostic", label: t("nav_diagnostic", language), icon: Stethoscope },
    { id: "directory", label: t("nav_directory", language), icon: Leaf },
    { id: "chatbot", label: t("nav_chatbot", language), icon: MessageSquareHeart }
  ];

  return (
    <header className="bg-white text-[#2D2D2A] shadow-sm sticky top-0 z-40 border-b border-[#E9E9E0]">
      {/* Top Controls Bar */}
      <div className="bg-[#F9F9F7] border-b border-[#E9E9E0] py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-[#5A5A40]">
          {/* Status & PWA Info */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-[#D1D1CB] shadow-xs">
              {isOnline ? (
                <>
                  <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-800 font-semibold">{t("device_synced", language)}</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-[#B35A38]" />
                  <span className="text-[#B35A38] font-semibold">{t("offline_pwa", language)}</span>
                </>
              )}
            </span>
            {isInstalledPwa && (
              <span className="bg-[#5A5A40] text-white px-2 py-0.5 rounded-md text-[11px] font-bold">
                PWA Active
              </span>
            )}
            <span className="hidden md:flex items-center gap-1 text-[#5A5A40]/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span>{t("app_subtitle", language)}</span>
            </span>
          </div>

          {/* Quick Actions & Language */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Language Selector */}
            <div className="flex items-center bg-white rounded-lg border border-[#D1D1CB] px-2.5 py-1 shadow-xs hover:border-[#5A5A40] transition">
              <Globe className="w-3.5 h-3.5 text-[#5A5A40] mr-1.5 shrink-0" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as SupportedLanguage)}
                className="bg-transparent text-xs text-[#2D2D2A] font-semibold focus:outline-none cursor-pointer pr-1"
                aria-label="Sélectionner la langue"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang} value={lang} className="bg-white text-[#2D2D2A]">
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle Simple / Detailed Mode */}
            {onToggleSimpleMode && (
              <button
                onClick={onToggleSimpleMode}
                className="bg-white hover:bg-[#E9E9E0] text-[#2D2D2A] px-3 py-1 rounded-lg border border-[#D1D1CB] text-xs font-semibold transition flex items-center gap-1.5 shadow-xs"
                title="Basculer le mode d'affichage de l'interface"
              >
                <Sliders className="w-3.5 h-3.5 text-[#5A5A40]" />
                <span>{isSimpleMode ? t("simple_mode", language) : t("clinical_mode", language)}</span>
              </button>
            )}

            {/* Gemma IA Engine Button */}
            {onOpenGemmaModal && (
              <button
                onClick={onOpenGemmaModal}
                className="bg-white hover:bg-[#E9E9E0] text-[#B35A38] px-3 py-1 rounded-lg border border-[#D1D1CB] text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
                title="Moteur d'IA Clinique"
              >
                <Cpu className="w-3.5 h-3.5 text-[#B35A38]" />
                <span>{t("ai_engine", language)}</span>
              </button>
            )}

            {/* Profile Button */}
            <button
              onClick={onOpenProfileModal}
              className="bg-white hover:bg-[#E9E9E0] px-3 py-1 rounded-lg border border-[#D1D1CB] text-xs font-semibold text-[#2D2D2A] transition flex items-center gap-1.5 shadow-xs"
              title="Gérer le profil médical"
            >
              <User className="w-3.5 h-3.5 text-[#5A5A40]" />
              <span className="max-w-[100px] truncate">{profile.name.split(" ")[0]}</span>
            </button>

            {/* Logout */}
            {onLogout && (
              <button
                onClick={onLogout}
                className="bg-white hover:bg-red-50 text-[#5A5A40] hover:text-red-700 px-2.5 py-1 rounded-lg border border-[#D1D1CB] text-xs font-semibold transition flex items-center gap-1 shadow-xs"
                title="Déconnexion"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t("logout", language)}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Brand & Navigation Tabs Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#5A5A40] flex items-center justify-center text-white shadow-xs text-xl font-serif font-bold">
                A
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-serif font-bold tracking-tight text-[#2D2D2A]">
                    AfyaAsili
                  </h1>
                  <span className="text-xs font-semibold text-[#B35A38] bg-[#B35A38]/10 px-2 py-0.5 rounded-md">
                    Digital Shamba
                  </span>
                </div>
                <p className="text-xs text-[#5A5A40] font-medium">
                  Suivi du diabète & pharmacopée traditionnelle Kivu
                </p>
              </div>
            </div>

            {/* Emergency SOS Button for mobile header */}
            <button
              onClick={openEmergencyModal}
              className="md:hidden bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-bold px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm transition"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>SOS</span>
            </button>
          </div>

          {/* Navigation Tabs & Desktop SOS Button */}
          <div className="flex items-center justify-between md:justify-end gap-3">
            <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap ${
                      isActive
                        ? "bg-[#5A5A40] text-white shadow-sm"
                        : "bg-transparent text-[#5A5A40] hover:bg-[#F9F9F7] hover:text-[#2D2D2A]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#5A5A40]"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop SOS Button */}
            <button
              onClick={openEmergencyModal}
              className="hidden md:flex bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm items-center gap-2 shadow-sm transition shrink-0"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{t("sos_emergency", language)}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

