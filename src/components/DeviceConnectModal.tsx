import React, { useState } from "react";
import { SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { X, Bluetooth, Usb, CheckCircle2, AlertCircle, RefreshCw, Volume2, Activity, Heart, Scale, Plus, Check } from "lucide-react";
import { t } from "../services/translations";

interface DeviceConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: SupportedLanguage;
  onAddMeasurement?: (type: "glucose" | "pressure" | "weight", val1: number, val2?: number) => void;
}

interface ConnectedDevice {
  id: string;
  nameFr: string;
  nameLocal: string;
  icon: string;
  type: "glucose" | "pressure" | "weight";
  status: "connected" | "disconnected" | "pairing";
  lastReading?: string;
  battery?: string;
}

export const DeviceConnectModal: React.FC<DeviceConnectModalProps> = ({
  isOpen,
  onClose,
  language,
  onAddMeasurement
}) => {
  const [devices, setDevices] = useState<ConnectedDevice[]>([
    {
      id: "dev-1",
      nameFr: "Glucomètre Bluetooth (Sucre dans le sang)",
      nameLocal: "Kipimo cha Sukari (Accu-Chek / OneTouch)",
      icon: "🩸",
      type: "glucose",
      status: "connected",
      lastReading: "115 mg/dL (Il y a 2h)",
      battery: "88%"
    },
    {
      id: "dev-2",
      nameFr: "Tensiomètre Brassard (Cœur & Tension)",
      nameLocal: "Kipimo cha Moyo na Presha (Omron)",
      icon: "❤️",
      type: "pressure",
      status: "disconnected",
      lastReading: "125/80 mmHg (Hier)"
    },
    {
      id: "dev-3",
      nameFr: "Balance Connectée (Poids)",
      nameLocal: "Kipimo cha Uzito / Kilo",
      icon: "⚖️",
      type: "weight",
      status: "disconnected",
      lastReading: "72.4 kg (3 jours)"
    }
  ]);

  const [activeTab, setActiveTab] = useState<"bluetooth" | "manual">("bluetooth");
  const [manualType, setManualType] = useState<"glucose" | "pressure" | "weight">("glucose");
  const [manualVal1, setManualVal1] = useState<string>("115");
  const [manualVal2, setManualVal2] = useState<string>("80");
  const [isSuccessMsg, setIsSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleTogglePairing = (deviceId: string) => {
    setDevices(prev => prev.map(dev => {
      if (dev.id === deviceId) {
        if (dev.status === "connected") {
          return { ...dev, status: "disconnected" };
        } else {
          ApiService.speak(`Appareil ${dev.nameFr} connecté avec succès en Bluetooth.`, language);
          return { ...dev, status: "connected", battery: "95%" };
        }
      }
      return dev;
    }));
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v1 = parseFloat(manualVal1) || 100;
    const v2 = parseFloat(manualVal2) || 80;

    if (onAddMeasurement) {
      onAddMeasurement(manualType, v1, v2);
    }
    
    let msg = "";
    if (manualType === "glucose") msg = `Glycémie enregistrée : ${v1} mg/dL`;
    if (manualType === "pressure") msg = `Tension artérielle enregistrée : ${v1}/${v2} mmHg`;
    if (manualType === "weight") msg = `Poids enregistré : ${v1} kg`;

    setIsSuccessMsg(msg);
    ApiService.speak(`${msg}. L'IA clinique a analysé vos constantes.`, language);
    setTimeout(() => {
      setIsSuccessMsg(null);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2D2D2A]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl border border-[#E9E9E0] relative space-y-6">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#5A5A40] hover:text-[#2D2D2A] bg-[#F9F9F7] rounded-full p-2.5 border border-[#E9E9E0] transition"
          aria-label={t("Fermer", language)}
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#E9E9E0]">
          <div className="w-12 h-12 rounded-xl bg-[#5A5A40] text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
            🔌
          </div>
          <div>
            <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs font-semibold px-2.5 py-0.5 rounded-md border border-[#E9E9E0]">
              {t("IoT & Santé Connectée • IA Clinique", language)}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2A] mt-1.5">
              {t("Connexion Appareils & Saisie Manuelle", language)}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A5A40]">
              {t("Reliez vos appareils médicaux ou tapez vos chiffres simplement :", language)}
            </p>
          </div>
        </div>

        {/* MODE TAB (BLUETOOTH / MANUEL) */}
        <div className="flex rounded-2xl bg-[#F5F5F0] p-1.5 border border-[#D1D1CB]">
          <button
            onClick={() => setActiveTab("bluetooth")}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition uppercase tracking-wider ${
              activeTab === "bluetooth"
                ? "bg-[#5A5A40] text-white shadow-md"
                : "text-[#5A5A40] hover:text-[#2D2D2A]"
            }`}
          >
            <Bluetooth className="w-4 h-4 text-blue-400" />
            <span>{t("1. Appareils Bluetooth / USB", language)} ({devices.filter(d => d.status === 'connected').length}/3)</span>
          </button>
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition uppercase tracking-wider ${
              activeTab === "manual"
                ? "bg-[#B35A38] text-white shadow-md"
                : "text-[#5A5A40] hover:text-[#2D2D2A]"
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>{t("2. Saisie Manuelle des Chiffres", language)}</span>
          </button>
        </div>

        {/* TAB 1: BLUETOOTH / USB DEVICES */}
        <div className="space-y-3">
          {activeTab === "bluetooth" && (
            <>
              <p className="text-xs font-semibold text-[#5A5A40] uppercase tracking-wider">
                {t("Appuyez sur un appareil pour l'activer et recevoir les mesures synchronisées avec l'IA :", language)}
              </p>

            <div className="grid grid-cols-1 gap-3.5">
              {devices.map((dev) => {
                const isConnected = dev.status === "connected";
                return (
                  <div
                    key={dev.id}
                    className={`p-4 sm:p-5 rounded-3xl border-2 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                      isConnected
                        ? "bg-[#F5F5F0] border-[#5A5A40]"
                        : "bg-white border-[#E9E9E0]"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white text-3xl flex items-center justify-center shadow-xs border border-[#D1D1CB] shrink-0">
                        {dev.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2A]">
                            {t(dev.nameFr, language)}
                          </h3>
                          {isConnected && (
                            <span className="bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase">
                              <CheckCircle2 className="w-3 h-3 text-green-600" />
                              {t("Connecté", language)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#5A5A40] font-medium">{dev.nameLocal}</p>
                        {dev.lastReading && (
                          <p className="text-[11px] font-bold text-[#B35A38] mt-1">
                            {t("Dernier relevé : ", language)} {dev.lastReading} {dev.battery && `• ${t("Batterie ", language)} ${dev.battery}`}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => ApiService.speak(dev.nameFr + " " + (dev.lastReading || ""), language)}
                        className="p-2.5 bg-white hover:bg-[#F9F9F7] text-[#5A5A40] rounded-xl border border-[#D1D1CB]"
                        title={t("Écouter", language)}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleTogglePairing(dev.id)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-xs ${
                          isConnected
                            ? "bg-white text-[#2D2D2A] border border-[#D1D1CB] hover:bg-red-50 hover:text-red-700"
                            : "bg-[#5A5A40] text-white hover:bg-[#464632]"
                        }`}
                      >
                        {isConnected ? (
                          <>
                            <span>{t("Déconnecter", language)}</span>
                          </>
                        ) : (
                          <>
                            <Bluetooth className="w-3.5 h-3.5" />
                            <span>{t("Relier en Bluetooth", language)}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#F9F9F7] p-4 rounded-2xl border border-[#D1D1CB] flex items-center gap-3 text-xs text-[#5A5A40] font-medium">
              <Usb className="w-5 h-5 text-[#B35A38] shrink-0" />
              <span>
                <strong>{t("Astuce PWA :", language)}</strong> {t("Si votre téléphone n'a pas le Bluetooth, vous pouvez brancher votre glucomètre par câble USB-C ou OTG, la synchronisation est instantanée !", language)}
              </span>
            </div>
            </>
          )}
        </div>

        {/* TAB 2: MANUAL ENTRY WITH BIG TOUCH NUMBERS */}
        {activeTab === "manual" && (
          <form onSubmit={handleManualSubmit} className="space-y-5">
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setManualType("glucose")}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm border-2 transition ${
                  manualType === "glucose"
                    ? "bg-[#5A5A40] text-white border-[#5A5A40] shadow-md"
                    : "bg-[#F9F9F7] text-[#2D2D2A] border-[#D1D1CB]"
                }`}
              >
                <span className="text-3xl mb-1">🩸</span>
                <span>{t("Glycémie (Sucre)", language)}</span>
              </button>
              <button
                type="button"
                onClick={() => setManualType("pressure")}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm border-2 transition ${
                  manualType === "pressure"
                    ? "bg-[#5A5A40] text-white border-[#5A5A40] shadow-md"
                    : "bg-[#F9F9F7] text-[#2D2D2A] border-[#D1D1CB]"
                }`}
              >
                <span className="text-3xl mb-1">❤️</span>
                <span>{t("Tension Artérielle", language)}</span>
              </button>
              <button
                type="button"
                onClick={() => setManualType("weight")}
                className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center font-bold text-xs sm:text-sm border-2 transition ${
                  manualType === "weight"
                    ? "bg-[#5A5A40] text-white border-[#5A5A40] shadow-md"
                    : "bg-[#F9F9F7] text-[#2D2D2A] border-[#D1D1CB]"
                }`}
              >
                <span className="text-3xl mb-1">⚖️</span>
                <span>{t("Poids (Kg)", language)}</span>
              </button>
            </div>

            {/* INPUT FIELDS */}
            <div className="bg-[#F9F9F7] p-6 rounded-3xl border border-[#D1D1CB] space-y-4">
              {manualType === "glucose" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5A40] mb-2">
                    {t("Niveau de Glycémie (en mg/dL)", language)}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={manualVal1}
                      onChange={(e) => setManualVal1(e.target.value)}
                      placeholder="115"
                      required
                      className="w-full bg-white border-2 border-[#D1D1CB] rounded-2xl p-4 text-2xl font-extrabold text-[#2D2D2A] text-center focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                    />
                    <span className="font-bold text-lg text-[#5A5A40]">mg/dL</span>
                  </div>
                </div>
              )}

              {manualType === "pressure" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5A40] mb-2">
                      {t("Systolique (Haut)", language)}
                    </label>
                    <input
                      type="number"
                      value={manualVal1}
                      onChange={(e) => setManualVal1(e.target.value)}
                      placeholder="120"
                      required
                      className="w-full bg-white border-2 border-[#D1D1CB] rounded-2xl p-4 text-2xl font-extrabold text-[#2D2D2A] text-center focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5A40] mb-2">
                      {t("Diastolique (Bas)", language)}
                    </label>
                    <input
                      type="number"
                      value={manualVal2}
                      onChange={(e) => setManualVal2(e.target.value)}
                      placeholder="80"
                      required
                      className="w-full bg-white border-2 border-[#D1D1CB] rounded-2xl p-4 text-2xl font-extrabold text-[#2D2D2A] text-center focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                    />
                  </div>
                </div>
              )}

              {manualType === "weight" && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A5A40] mb-2">
                    {t("Votre Poids Actuel (en Kg)", language)}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      step="0.1"
                      value={manualVal1}
                      onChange={(e) => setManualVal1(e.target.value)}
                      placeholder="72"
                      required
                      className="w-full bg-white border-2 border-[#D1D1CB] rounded-2xl p-4 text-2xl font-extrabold text-[#2D2D2A] text-center focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                    />
                    <span className="font-bold text-lg text-[#5A5A40]">Kg</span>
                  </div>
                </div>
              )}
            </div>

            {isSuccessMsg && (
              <div className="bg-green-100 border-2 border-green-500 text-green-900 p-4 rounded-2xl text-center font-bold flex items-center justify-center gap-2 animate-bounce">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0" />
                <span>{isSuccessMsg}</span>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3.5 rounded-2xl text-xs font-bold text-[#5A5A40] hover:bg-[#F9F9F7] uppercase tracking-wider"
              >
                {t("Annuler", language)}
              </button>
              <button
                type="submit"
                className="bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-extrabold px-8 py-4 rounded-2xl text-sm shadow-md flex items-center gap-2 uppercase tracking-wider"
              >
                <Check className="w-5 h-5 stroke-[3]" />
                <span>{t("Enregistrer & Analyser par IA", language)}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
