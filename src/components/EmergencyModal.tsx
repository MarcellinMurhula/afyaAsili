import React from "react";
import { AlertTriangle, PhoneCall, Volume2, ShieldAlert, X, HeartPulse, CheckCircle } from "lucide-react";
import { SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { t } from "../services/translations";

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: SupportedLanguage;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  if (!isOpen) return null;

  const hypoText = t("URGENCE HYPOGLYCÉMIE (< 70 mg/dL) : Prenez immédiatement 15 grammes de sucres rapides (3 morceaux de sucre, 1 cuillère à soupe de miel ou demi-verre de jus). Ne prenez JAMAIS d'infusion amère (Vernonia / Ndakala) pendant une crise d'hypoglycémie. Attendez 15 minutes et retestez.", language);
  const hyperText = t("URGENCE HYPERGLYCÉMIE (> 250 mg/dL) : Buvez beaucoup d'eau propre (1 à 2 litres). Ne mangez aucun plat riche en amidon (Fufu de manioc blanc, riz ou banane plantain mûre). Une tisane de feuilles de Moringa ou de Bissap SANS SUCRE peut être prise en complément. Allez au centre de santé si cela persiste.", language);

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2D2A]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl border border-[#B35A38] space-y-6 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#5A5A40] hover:text-[#2D2D2A] bg-[#F9F9F7] rounded-full p-2 border border-[#E9E9E0] transition"
          aria-label={t("Fermer", language)}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 text-[#B35A38]">
          <div className="w-12 h-12 rounded-xl bg-[#B35A38]/15 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6 animate-pulse text-[#B35A38]" />
          </div>
          <div>
            <span className="bg-[#B35A38] text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">
              {t("🆘 Protocole de Sécurité PWA (Hors-ligne & En ligne)", language)}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2A] mt-1.5">
              {t("Guide d'Urgence Diabétique (Afrique de l'Est & Kivu)", language)}
            </h2>
          </div>
        </div>

        {/* 1. Hypoglycemia (< 70 mg/dL) */}
        <div className="bg-[#B35A38]/10 border border-[#B35A38]/40 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#B35A38] flex items-center gap-2">
              <span>{t("🚨 1. Crise d'Hypoglycémie (< 70 mg/dL / Faiblesse extrême)", language)}</span>
            </h3>
            <button
              onClick={() => ApiService.speak(hypoText, language)}
              className="bg-white hover:bg-[#F9F9F7] text-[#B35A38] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 border border-[#B35A38]/30 transition"
              title={t("Lire le protocole d'hypoglycémie", language)}
            >
              <Volume2 className="w-4 h-4" />
              <span>{t("Écouter", language)}</span>
            </button>
          </div>
          <p className="text-sm font-semibold text-[#2D2D2A] leading-relaxed">
            {hypoText}
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#B35A38]/30 text-xs text-[#2D2D2A] font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0 text-[#B35A38]" />
            <span>{t("Règle d'or Kivu : Ne prenez jamais d'écorces ou de plantes hypoglycémiantes (Ndakala/Ndolé) le ventre vide si vous tremblez ou suez froid !", language)}</span>
          </div>
        </div>

        {/* 2. Hyperglycemia (> 250 mg/dL) */}
        <div className="bg-[#5A5A40]/10 border border-[#5A5A40]/30 rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#5A5A40] flex items-center gap-2">
              <span>{t("⚠️ 2. Pic d'Hyperglycémie (> 250 mg/dL / Soif intense)", language)}</span>
            </h3>
            <button
              onClick={() => ApiService.speak(hyperText, language)}
              className="bg-white hover:bg-[#F9F9F7] text-[#5A5A40] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shrink-0 border border-[#5A5A40]/30 transition"
            >
              <Volume2 className="w-4 h-4" />
              <span>{t("Écouter", language)}</span>
            </button>
          </div>
          <p className="text-sm font-semibold text-[#2D2D2A] leading-relaxed">
            {hyperText}
          </p>
          <div className="bg-white p-3 rounded-lg border border-[#5A5A40]/30 text-xs text-[#2D2D2A] font-medium">
            {t("🥤 Remplissez immédiatement 2 grandes bouteilles d'eau pure et buvez lentement. Éliminez tout sucre rapide et farine raffinée pour la journée.", language)}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#E9E9E0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#5A5A40] font-medium flex items-center gap-1.5">
            <HeartPulse className="w-4 h-4 text-[#B35A38]" />
            <span>{t("En cas de doute persistant, rendez-vous à l'hôpital ou dispensaire le plus proche.", language)}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#5A5A40] hover:bg-[#484833] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition text-center"
            >
              {t("J'ai compris - Fermer le guide", language)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
