import React, { useState } from "react";
import { SupportedLanguage, PatientProfile } from "../types";
import { ApiService } from "../services/api.service";
import { t } from "../services/translations";
import { Volume2, VolumeX, UserCheck, UserPlus, Sparkles, Heart, Shield, Check, ArrowRight } from "lucide-react";

interface WelcomeLoginViewProps {
  onLogin: (profile: PatientProfile, language: SupportedLanguage) => void;
  currentLanguage: SupportedLanguage;
}

const PRESET_USERS: Array<{
  id: string;
  name: string;
  age: number;
  diabetesType: PatientProfile["diabetesType"];
  location: string;
  avatar: string;
  roleFr: string;
  roleLocal: string;
  color: string;
}> = [
  {
    id: "user-1",
    name: "Papa Marc Murhula",
    age: 54,
    diabetesType: "Diabète de Type 2",
    location: "Bukavu, Sud-Kivu",
    avatar: "👨🏿‍🦳",
    roleFr: "Patient Diabétique (Suivi quotidien)",
    roleLocal: "Mzee wa Kivu (Bukavu)",
    color: "bg-[#5A5A40] text-white"
  },
  {
    id: "user-2",
    name: "Maman Jeanne Amani",
    age: 48,
    diabetesType: "Diabète de Type 2",
    location: "Goma, Nord-Kivu",
    avatar: "👩🏾‍🦱",
    roleFr: "Patiente & Maman (Cuisine Kivu)",
    roleLocal: "Mama wa Nyumbani (Goma)",
    color: "bg-[#B35A38] text-white"
  },
  {
    id: "user-3",
    name: "Grand-Père Joseph",
    age: 68,
    diabetesType: "Diabète de Type 2",
    location: "Kabare / Walungu",
    avatar: "👴🏿",
    roleFr: "Sénior (Traitement phytothérapie)",
    roleLocal: "Mzee Soklu (Mashi / Swahili)",
    color: "bg-[#2D2D2A] text-white"
  }
];

const LANGUAGES_LIST: Array<{
  code: SupportedLanguage;
  name: string;
  localName: string;
  flag: string;
  greeting: string;
  speechText: string;
}> = [
  {
    code: "Kiswahili (Swahili)",
    name: "Swahili",
    localName: "Kiswahili cha Kivu",
    flag: "🇨🇩 / 🇰🇪",
    greeting: "Karibu! Chagua jina lako au lugha yako kuanza.",
    speechText: "Karibu kwenye programu ya Afya Asili! Bonyeza picha yako kuanza kupima kisukari na kujua chakula salama."
  },
  {
    code: "Français",
    name: "Français",
    localName: "Français (Facile & Audio)",
    flag: "🇫🇷",
    greeting: "Bienvenue ! Appuyez sur votre photo pour commencer.",
    speechText: "Bienvenue sur Afya Asili. Appuyez sur votre photo ou votre nom pour entrer dans votre application de santé simplifiée."
  },
  {
    code: "Lingála",
    name: "Lingála",
    localName: "Lingála ya Kin / Kivu",
    flag: "🇨🇩",
    greeting: "Boyeyi malamu! Pona kombo na yo mpo na kobanda.",
    speechText: "Boyeyi malamu na Afya Asili. Fina foto na yo to kombo na yo mpo na kotala sukali na nzoto."
  },
  {
    code: "Mashi / Shi (Kivu)",
    name: "Mashi",
    localName: "Mashi (Bukavu / Kabare)",
    flag: "🌿",
    greeting: "Rhwakwakire! thegera erhi izina lyawe rhurhondeere.",
    speechText: "Rhwakwakire! Fina oku foto yawe nka ohembi okurhondeera amagara gawe n'amaja ga Kivu."
  }
];

export const WelcomeLoginView: React.FC<WelcomeLoginViewProps> = ({
  onLogin,
  currentLanguage
}) => {
  const [selectedLang, setSelectedLang] = useState<SupportedLanguage>(currentLanguage || "Kiswahili (Swahili)");
  const [selectedUser, setSelectedUser] = useState<typeof PRESET_USERS[0]>(PRESET_USERS[0]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [showNewUserForm, setShowNewUserForm] = useState<boolean>(false);
  const [newUserName, setNewUserName] = useState<string>("");
  const [newUserAge, setNewUserAge] = useState<string>("50");
  const [newUserCity, setNewUserCity] = useState<string>("Bukavu");

  const currentLangObj = LANGUAGES_LIST.find(l => l.code === selectedLang) || LANGUAGES_LIST[0];

  const handleSpeakWelcome = (langCode?: SupportedLanguage) => {
    const targetLang = langCode || selectedLang;
    const langObj = LANGUAGES_LIST.find(l => l.code === targetLang) || currentLangObj;
    setIsSpeaking(true);
    ApiService.speak(langObj.speechText, targetLang);
    setTimeout(() => setIsSpeaking(false), 5000);
  };

  const handleUserSelect = (user: typeof PRESET_USERS[0]) => {
    setSelectedUser(user);
    // Automatically speak confirmation
    ApiService.speak(`Karibu ${user.name}. Bienvenue.`, selectedLang);
  };

  const handleConfirmLogin = () => {
    const profile: PatientProfile = {
      name: selectedUser.name,
      age: selectedUser.age,
      diabetesType: selectedUser.diabetesType,
      location: selectedUser.location,
      targetGlucoseMin: 80,
      targetGlucoseMax: 140,
      currentMedications: ["Infusion Vernonia (Ndakala)", "Moringa"],
      preferredLanguage: selectedLang
    };
    onLogin(profile, selectedLang);
  };

  const handleCreateNewUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim()) return;
    const profile: PatientProfile = {
      name: newUserName.trim(),
      age: parseInt(newUserAge) || 50,
      diabetesType: "Diabète de Type 2",
      location: newUserCity.trim() || "Bukavu, Sud-Kivu",
      targetGlucoseMin: 80,
      targetGlucoseMax: 140,
      currentMedications: [],
      preferredLanguage: selectedLang
    };
    onLogin(profile, selectedLang);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F5F5F0] flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl w-full space-y-6 animate-in fade-in zoom-in-95 duration-300">
        
        {/* TOP BRANDING & SPEECH WELCOME */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0] text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5A5A40]/10 rounded-full blur-2xl pointer-events-none"></div>
          
          {/* Big App Logo & Title */}
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#5A5A40] text-white flex items-center justify-center text-3xl sm:text-4xl shadow-xs border-2 border-white">
              🌿
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2A] tracking-tight">
              AfyaAsili <span className="text-[#B35A38] font-sans font-normal">• Kivu Health</span>
            </h1>
            <p className="text-xs sm:text-sm font-medium text-[#5A5A40]">
              {t("welcome_subtitle", selectedLang)}
            </p>
          </div>

          {/* Audio Welcome Banner (Very Large Touch Target) */}
          <div className="mt-6">
            <button
              onClick={() => handleSpeakWelcome()}
              className="w-full sm:w-auto mx-auto bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold py-3.5 px-6 rounded-xl shadow-xs flex items-center justify-center gap-3 text-sm sm:text-base transition transform active:scale-95"
            >
              <Volume2 className="w-6 h-6 animate-pulse shrink-0" />
              <span>🔊 {t("welcome_audio_btn", selectedLang)} ({currentLangObj.name})</span>
            </button>
            <p className="text-xs text-[#5A5A40]/80 font-normal mt-2">
              {t("press_orange_audio", selectedLang)}
            </p>
          </div>
        </div>

        {/* STEP 1: LANGUAGE SELECTION */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0]">
          <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#E9E9E0]">
            <span className="w-10 h-10 rounded-xl bg-[#5A5A40]/10 text-[#5A5A40] flex items-center justify-center font-bold text-xl shrink-0">
              🗣️
            </span>
            <div>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A]">
                {t("step_1_lang", selectedLang)}
              </h2>
              <p className="text-xs sm:text-sm text-[#5A5A40]">
                {t("step_1_lang_sub", selectedLang)}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
            {LANGUAGES_LIST.map((lang) => {
              const isSelected = selectedLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLang(lang.code);
                    handleSpeakWelcome(lang.code);
                  }}
                  className={`p-4 sm:p-5 rounded-xl flex flex-col items-center justify-center text-center transition border shadow-xs relative ${
                    isSelected
                      ? "bg-[#5A5A40] text-white border-[#5A5A40] shadow-sm scale-[1.02]"
                      : "bg-[#F9F9F7] text-[#2D2D2A] border-[#D1D1CB] hover:border-[#5A5A40]/60"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-2.5 right-2.5 bg-white text-[#5A5A40] rounded-full p-1 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                  <span className="text-3xl sm:text-4xl mb-2">{lang.flag}</span>
                  <span className="font-semibold text-sm sm:text-base tracking-wide">{lang.name}</span>
                  <span className={`text-[11px] font-normal mt-1 leading-tight ${isSelected ? "text-white/85" : "text-[#5A5A40]"}`}>
                    {lang.localName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: USER PROFILE SELECTION */}
        {!showNewUserForm ? (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0]">
            <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-[#E9E9E0]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#B35A38]/10 text-[#B35A38] flex items-center justify-center font-bold text-xl shrink-0">
                  👥
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A]">
                    {t("step_2_user", selectedLang)}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5A5A40]">
                    {t("step_2_user_sub", selectedLang)}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowNewUserForm(true)}
                className="bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] font-semibold text-xs px-3.5 py-2 rounded-xl border border-[#D1D1CB] flex items-center gap-1.5 shrink-0 transition"
              >
                <UserPlus className="w-4 h-4 text-[#B35A38]" />
                <span className="hidden sm:inline">{t("new_patient_btn", selectedLang)}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PRESET_USERS.map((user) => {
                const isSelected = selectedUser.id === user.id;
                return (
                  <button
                    key={user.id}
                    onClick={() => handleUserSelect(user)}
                    className={`p-5 rounded-xl text-left transition border flex flex-col justify-between gap-4 relative ${
                      isSelected
                        ? "bg-[#F9F9F7] border-[#5A5A40] shadow-xs ring-1 ring-[#5A5A40]"
                        : "bg-[#F9F9F7] border-[#E9E9E0] hover:border-[#D1D1CB]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-3xl sm:text-4xl shadow-xs shrink-0 ${user.color}`}>
                        {user.avatar}
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2A] leading-tight">
                          {user.name}
                        </h3>
                        <span className="inline-block bg-[#E9E9E0] text-[#5A5A40] text-[11px] font-semibold px-2.5 py-0.5 rounded-md mt-1.5">
                          📍 {user.location}
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#E9E9E0] flex items-center justify-between text-xs text-[#5A5A40]">
                      <span className="font-normal truncate">{user.roleLocal}</span>
                      {isSelected && (
                        <span className="bg-[#5A5A40] text-white font-semibold px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1">
                          <Check className="w-3 h-3 stroke-[3]" />
                          {t("chosen_badge", selectedLang)}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* BIG CONFIRM BUTTON TO ENTER APP */}
            <div className="mt-8 pt-6 border-t border-[#E9E9E0] text-center">
              <button
                onClick={handleConfirmLogin}
                className="w-full sm:max-w-xl mx-auto bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold py-4 px-8 rounded-xl shadow-xs text-base sm:text-lg flex items-center justify-center gap-3 transition transform active:scale-95"
              >
                <span>🚀 {t("enter_app_btn", selectedLang)} ({selectedUser.name.split(' ')[0]})</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <p className="text-xs text-[#5A5A40]/80 font-normal mt-3">
                {t("offline_secured_msg", selectedLang)}
              </p>
            </div>
          </div>
        ) : (
          /* NEW USER FORM */
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0]">
            <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-[#E9E9E0]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#B35A38]/10 text-[#B35A38] flex items-center justify-center font-bold text-xl">
                  ➕
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A]">
                  {t("register_new_title", selectedLang)}
                </h2>
              </div>
              <button
                onClick={() => setShowNewUserForm(false)}
                className="text-xs font-semibold text-[#5A5A40] hover:text-[#2D2D2A] underline"
              >
                {t("back_to_choice", selectedLang)}
              </button>
            </div>

            <form onSubmit={handleCreateNewUser} className="space-y-4 max-w-xl mx-auto">
              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">
                  {t("full_name_label", selectedLang)}
                </label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="ex: Papa Jean, Maman Thérèse..."
                  required
                  className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl p-3.5 text-sm font-semibold text-[#2D2D2A] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">
                    {t("age_label", selectedLang)}
                  </label>
                  <input
                    type="number"
                    value={newUserAge}
                    onChange={(e) => setNewUserAge(e.target.value)}
                    placeholder="50"
                    required
                    className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl p-3.5 text-sm font-semibold text-[#2D2D2A] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">
                    {t("city_label", selectedLang)}
                  </label>
                  <input
                    type="text"
                    value={newUserCity}
                    onChange={(e) => setNewUserCity(e.target.value)}
                    placeholder="Bukavu, Goma, Uvira..."
                    required
                    className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl p-3.5 text-sm font-semibold text-[#2D2D2A] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowNewUserForm(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F9F9F7]"
                >
                  {t("cancel_btn", selectedLang)}
                </button>
                <button
                  type="submit"
                  className="bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-xs flex items-center gap-2"
                >
                  <UserCheck className="w-4 h-4" />
                  <span>{t("save_and_enter_btn", selectedLang)}</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
