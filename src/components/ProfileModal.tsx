import React, { useState } from "react";
import { User, Shield, MapPin, Activity, Pill, Check, X, Save } from "lucide-react";
import { PatientProfile, SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { t } from "../services/translations";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PatientProfile;
  onUpdateProfile: (newProfile: PatientProfile) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState(profile.name);
  const [age, setAge] = useState(profile.age);
  const [diabetesType, setDiabetesType] = useState(profile.diabetesType);
  const [location, setLocation] = useState(profile.location);
  const [minG, setMinG] = useState(profile.targetGlucoseMin);
  const [maxG, setMaxG] = useState(profile.targetGlucoseMax);
  const [meds, setMeds] = useState(profile.currentMedications.join(", "));
  const [lang, setLang] = useState<SupportedLanguage>(profile.preferredLanguage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: PatientProfile = {
      name: name.trim() || "Patient AfriKivu",
      age: Number(age) || 45,
      diabetesType: diabetesType as any,
      location: location.trim() || "Kivu, RDC",
      targetGlucoseMin: Number(minG) || 80,
      targetGlucoseMax: Number(maxG) || 140,
      currentMedications: meds.split(",").map(m => m.trim()).filter(Boolean),
      preferredLanguage: lang
    };

    ApiService.saveProfile(updated);
    onUpdateProfile(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2D2A]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl border border-[#E9E9E0] relative animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#5A5A40] hover:text-[#2D2D2A] bg-[#F9F9F7] rounded-full p-2 border border-[#E9E9E0] transition"
          aria-label={t("Fermer", lang)}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-[#E9E9E0]">
          <div className="w-12 h-12 rounded-xl bg-[#5A5A40] text-white flex items-center justify-center font-bold text-xl shadow-xs">
            👤
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-[#2D2D2A]">{t("Dossier Médical & Préférences", lang)}</h2>
            <p className="text-xs text-[#5A5A40]/80">{t("Personnalisez votre suivi pour des conseils IA cliniques précis.", lang)}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Nom et Prénom", lang)}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-semibold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Âge", lang)}</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                required
                className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-semibold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Type de Diabète", lang)}</label>
              <select
                value={diabetesType}
                onChange={(e) => setDiabetesType(e.target.value as any)}
                className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-xs font-semibold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
              >
                <option value="Diabète de Type 1">{t("Diabète de Type 1", lang)}</option>
                <option value="Diabète de Type 2">{t("Diabète de Type 2", lang)}</option>
                <option value="Diabète Gestationnel">{t("Diabète Gestationnel", lang)}</option>
                <option value="Pré-diabète / Prévention">{t("Pré-diabète / Prévention", lang)}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Localisation (Région / Ville)", lang)}</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="ex: Bukavu, Sud-Kivu ou Goma, RDC"
              className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Cible Glycémie Min (mg/dL)", lang)}</label>
              <input
                type="number"
                value={minG}
                onChange={(e) => setMinG(Number(e.target.value))}
                className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-bold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#5A5A40] mb-1">{t("Cible Glycémie Max (mg/dL)", lang)}</label>
              <input
                type="number"
                value={maxG}
                onChange={(e) => setMaxG(Number(e.target.value))}
                className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-bold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5A5A40] mb-1">
              {t("Traitements actuels (Médicaments & Plantes médicinales séparés par des virgules)", lang)}
            </label>
            <textarea
              rows={2}
              value={meds}
              onChange={(e) => setMeds(e.target.value)}
              placeholder="ex: Metformine 850mg, Infusion Vernonia (Ndakala), Moringa"
              className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-xs text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40] focus:outline-none"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#E9E9E0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#F9F9F7] transition"
            >
              {t("Annuler", lang)}
            </button>
            <button
              type="submit"
              className="bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold px-6 py-2.5 rounded-xl text-xs shadow-xs flex items-center gap-2 transition"
            >
              <Save className="w-4 h-4" />
              <span>{t("Enregistrer le Profil", lang)}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
