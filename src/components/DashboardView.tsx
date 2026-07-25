import React, { useState, useEffect } from "react";
import { 
  Activity, 
  Heart, 
  Scale, 
  Watch, 
  Bluetooth, 
  BluetoothConnected, 
  RefreshCw, 
  Plus, 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  Award, 
  Sparkles,
  Calendar,
  Clock,
  Battery
} from "lucide-react";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  ReferenceArea,
  ReferenceLine
} from "recharts";
import confetti from "canvas-confetti";
import { MedicalLog, PatientProfile, SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { IoTService, IoTDeviceStatus } from "../services/iot.service";
import { t } from "../services/translations";

interface DashboardViewProps {
  profile: PatientProfile;
  language: SupportedLanguage;
  onNavigateToDiagnostic: (initialText?: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  profile,
  language,
  onNavigateToDiagnostic
}) => {
  const [logs, setLogs] = useState<MedicalLog[]>([]);
  const [devices, setDevices] = useState<IoTDeviceStatus[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncingDevice, setSyncingDevice] = useState<string | null>(null);
  const [showManualModal, setShowManualModal] = useState<boolean>(false);
  const [manualType, setManualType] = useState<"glucose" | "pressure" | "weight">("glucose");
  const [manualVal1, setManualVal1] = useState<string>("115");
  const [manualVal2, setManualVal2] = useState<string>("75");
  const [manualNote, setManualNote] = useState<string>(t("def_manual_note", language));
  const [activeChartTab, setActiveChartTab] = useState<"glucose" | "pressure">("glucose");

  const loadData = async (isInitial = false) => {
    if (isInitial) setLoading(true);
    const fetchedLogs = await ApiService.getMedicalLogs();
    setLogs(fetchedLogs);
    setDevices(IoTService.getDevices());
    if (isInitial) setLoading(false);
  };

  useEffect(() => {
    loadData(true);
    const interval = setInterval(() => loadData(false), 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerMilestoneCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#059669', '#10b981', '#34d399', '#fbbf24']
    });
  };

  const handleBluetoothPairAndRead = async (type: "glucose" | "pressure" | "weight") => {
    setSyncingDevice(type);
    try {
      await IoTService.triggerBluetoothPairing(type);
      const newLog = await IoTService.pullInstantMeasurement(type);
      if (newLog) {
        setLogs(prev => [newLog, ...prev]);
        triggerMilestoneCelebration();
      }
    } catch (err) {
      alert("Erreur de synchronisation capteur. Vérifiez l'activation Bluetooth de l'appareil.");
    } finally {
      setSyncingDevice(null);
      setDevices([...IoTService.getDevices()]);
    }
  };

  const handleManualSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let risk: "Normal" | "Vigilance" | "Urgence médicale" = "Normal";
    let value = undefined;
    let sys = undefined;
    let dia = undefined;
    let unit = "mg/dL";

    if (manualType === "glucose") {
      value = Number(manualVal1);
      unit = "mg/dL";
      if (value < 70) risk = "Urgence médicale";
      else if (value > 250) risk = "Urgence médicale";
      else if (value > 180 || value < 80) risk = "Vigilance";
    } else if (manualType === "pressure") {
      sys = Number(manualVal1);
      dia = Number(manualVal2);
      unit = "mmHg";
      if (sys >= 150 || dia >= 95) risk = "Vigilance";
    } else {
      value = Number(manualVal1);
      unit = "kg";
    }

    const saved = await ApiService.syncLog({
      type: manualType,
      value,
      valueSystolic: sys,
      valueDiastolic: dia,
      unit,
      note: manualNote,
      device: "Saisie manuelle patient (PWA)",
      risk
    });

    if (saved) {
      setLogs(prev => [saved, ...prev]);
      setShowManualModal(false);
      triggerMilestoneCelebration();
    }
  };

  // Calculate average glucose
  const glucoseLogs = logs.filter(l => l.type === "glucose" && l.value !== undefined);
  const avgGlucose = glucoseLogs.length > 0
    ? Math.round(glucoseLogs.reduce((acc, curr) => acc + (curr.value || 0), 0) / glucoseLogs.length)
    : 118;

  // Estimate HbA1c from average glucose: HbA1c = (AvgGlucose + 46.7) / 28.7
  const estimatedHbA1c = ((avgGlucose + 46.7) / 28.7).toFixed(1);

  // Prepare chart data
  const chartData = glucoseLogs.slice(0, 15).reverse().map((l, idx) => {
    const timeStr = new Date(l.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return {
      name: timeStr,
      glycemie: l.value,
      cibleMin: profile.targetGlucoseMin,
      cibleMax: profile.targetGlucoseMax
    };
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* 1. Welcome & Clinical Summary Banner */}
      <div className="bg-[#2D2D2A] rounded-2xl p-6 sm:p-8 text-white shadow-sm border border-[#3D3D38] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="bg-white/10 text-white px-3 py-1 rounded-lg text-xs font-semibold border border-white/15 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>{t("kivu_east_tracking", language)}</span>
              </span>
              <span className="bg-[#B35A38] text-white px-3 py-1 rounded-lg text-xs font-bold shadow-xs">
                HbA1c estimée : {estimatedHbA1c}%
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white">
              {t("Bonjour", language)}, {profile.name}
            </h2>
            <p className="text-white/80 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              {t("avg_glucose_banner_desc", language)} <strong className="text-white font-semibold underline decoration-[#B35A38] decoration-2">{avgGlucose} mg/dL</strong>. {t("saka_saka_fiber_desc", language)}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setShowManualModal(true)}
              className="flex-1 sm:flex-none bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-xs"
            >
              <Plus className="w-4 h-4" />
              <span>{t("quick_input_btn", language)}</span>
            </button>
            <button
              onClick={triggerMilestoneCelebration}
              className="flex-1 sm:flex-none bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 rounded-xl border border-white/15 shadow-sm transition flex items-center justify-center gap-2 text-xs"
              title={t("celebrate_stability_title", language)}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">{t("stability_badge", language)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Key Clinical Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Glycemic Avg Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E9E9E0] hover:border-[#D1D1CB] transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5A5A40]">{t("avg_glucose_card_title", language)}</span>
              <div className="p-2 rounded-xl bg-[#F9F9F7] text-[#B35A38] border border-[#E9E9E0]">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-[#B35A38]">{avgGlucose}</span>
              <span className="text-xs font-semibold text-[#5A5A40]">mg/dL</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F9F9F7] flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Cible : {profile.targetGlucoseMin}-{profile.targetGlucoseMax} mg/dL</span>
          </div>
        </div>

        {/* HbA1c Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E9E9E0] hover:border-[#D1D1CB] transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5A5A40]">{t("hba1c_card_title", language)}</span>
              <div className="p-2 rounded-xl bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0]">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-[#2D2D2A]">{estimatedHbA1c}%</span>
              <span className="text-xs font-semibold text-[#5A5A40]">{t("glycated_hemo_label", language)}</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F9F9F7] flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t("goal_7_achieved", language)}</span>
          </div>
        </div>

        {/* Blood Pressure Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E9E9E0] hover:border-[#D1D1CB] transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5A5A40]">{t("Tension Artérielle", language)}</span>
              <div className="p-2 rounded-xl bg-[#F9F9F7] text-[#B35A38] border border-[#E9E9E0]">
                <Heart className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-[#2D2D2A]">125/80</span>
              <span className="text-xs font-semibold text-[#5A5A40]">mmHg</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F9F9F7] flex items-center gap-1.5 text-xs text-[#5A5A40] font-medium">
            <span>{t("connected_arm_bp", language)}</span>
          </div>
        </div>

        {/* Weight & BMI Card */}
        <div className="bg-white rounded-2xl p-5 shadow-xs border border-[#E9E9E0] hover:border-[#D1D1CB] transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5A5A40]">{t("weight_bmi_title", language)}</span>
              <div className="p-2 rounded-xl bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0]">
                <Scale className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-serif font-bold text-[#2D2D2A]">72.4</span>
              <span className="text-xs font-semibold text-[#5A5A40]">kg (IMC 23.8)</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-[#F9F9F7] flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{t("ideal_weight_label", language)}</span>
          </div>
        </div>
      </div>

      {/* 3. Connected Medical Sensors (BLE / IoT) */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#E9E9E0]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#2D2D2A] flex items-center gap-2">
              <BluetoothConnected className="w-5 h-5 text-[#5A5A40]" />
              <span>{t("iot_ble_title", language)}</span>
            </h3>
            <p className="text-xs text-[#5A5A40] mt-0.5 font-medium">
              {t("iot_ble_desc", language)}
            </p>
          </div>
          <span className="bg-[#F9F9F7] text-emerald-800 border border-[#E9E9E0] text-xs px-3 py-1.5 rounded-lg font-semibold self-start sm:self-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>4 {t("active_ble_sensors", language)}</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {devices.map((dev) => {
            const isSyncing = syncingDevice === dev.type;
            return (
              <div key={dev.id} className="bg-[#F9F9F7] rounded-xl p-4 border border-[#E9E9E0] flex flex-col justify-between hover:border-[#D1D1CB] transition">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5A5A40] bg-white px-2 py-0.5 rounded-md border border-[#D1D1CB]">
                      <Bluetooth className="w-3 h-3 text-[#B35A38]" /> BLE Kivu
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#5A5A40] font-semibold" title="Niveau de batterie">
                      <Battery className="w-3.5 h-3.5 text-[#5A5A40]" />
                      {dev.battery}%
                    </span>
                  </div>
                  <h4 className="font-bold text-[#2D2D2A] mt-3 text-sm">{dev.name}</h4>
                  <p className="text-xs text-[#5A5A40] mt-0.5 font-medium">{t("last_sync_label", language)} {dev.lastSync}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E9E9E0] flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                    {t("connected_status", language)}
                  </span>
                  <button
                    onClick={() => handleBluetoothPairAndRead(dev.type as any)}
                    disabled={isSyncing}
                    className="bg-[#5A5A40] hover:bg-[#454531] text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition disabled:opacity-50"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin" : ""}`} />
                    <span>{isSyncing ? t("syncing_action", language) : t("measure_action", language)}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Clinical Analytics & Traditional Protocol */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Post-Prandial Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-xs border border-[#E9E9E0] flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-serif font-bold text-[#2D2D2A] flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#5A5A40]" />
                  <span>{t("post_prandial_curve", language)}</span>
                </h3>
                <p className="text-xs text-[#5A5A40] mt-0.5 font-medium">{t("shaded_green_zone", language)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveChartTab("glucose")}
                  className={`text-xs px-3.5 py-1.5 rounded-lg font-semibold transition ${activeChartTab === 'glucose' ? 'bg-[#5A5A40] text-white shadow-xs' : 'bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0]'}`}
                >
                  {t("glucose_mg_dl_label", language)}
                </button>
              </div>
            </div>

            <div className="h-72 w-full mt-3">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F0F0EC" />
                    <XAxis dataKey="name" stroke="#5A5A40" fontSize={11} tickLine={false} />
                    <YAxis stroke="#5A5A40" fontSize={11} domain={[50, 250]} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#2D2D2A', color: '#fff', borderRadius: '12px', border: 'none', fontSize: '12px', padding: '8px 12px' }}
                      labelStyle={{ color: '#E9E9E0', fontWeight: 'bold', marginBottom: '4px' }}
                    />
                    <ReferenceLine y={profile.targetGlucoseMax} label={{ value: `${t("target_max_short", language)} (${profile.targetGlucoseMax})`, fill: '#5A5A40', fontSize: 10 }} stroke="#5A5A40" strokeDasharray="3 3" />
                    <ReferenceLine y={profile.targetGlucoseMin} label={{ value: `${t("target_min_short", language)} (${profile.targetGlucoseMin})`, fill: '#5A5A40', fontSize: 10 }} stroke="#5A5A40" strokeDasharray="3 3" />
                    <ReferenceLine y={70} label={{ value: `${t("hypo_threshold_short", language)} (70)`, fill: '#B35A38', fontSize: 10 }} stroke="#B35A38" strokeDasharray="3 3" />
                    <Line 
                      type="monotone" 
                      dataKey="glycemie" 
                      stroke="#B35A38" 
                      strokeWidth={2.5} 
                      dot={{ r: 4, fill: '#B35A38', stroke: '#fff', strokeWidth: 2 }} 
                      activeDot={{ r: 6 }}
                      name={t("glucose_mg_dl_label", language)}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-[#5A5A40] text-sm font-medium">
                  {t("no_glucose_history", language)}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#E9E9E0] flex items-center justify-between text-xs text-[#5A5A40]">
            <span className="font-medium">{t("kivu_tip_ndakala", language)}</span>
            <button 
              onClick={() => onNavigateToDiagnostic(t("sample_query_fufu_evening", language))} 
              className="text-[#B35A38] hover:text-[#8d4428] font-semibold underline"
            >
              {t("ask_ai_arrow", language)}
            </button>
          </div>
        </div>

        {/* Traditional Herbal Daily Protocol Reminder */}
        <div className="bg-[#5A5A40] rounded-2xl p-6 text-white shadow-xs border border-[#5A5A40]/40 flex flex-col justify-between relative overflow-hidden">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-white/10 text-white text-[11px] px-2.5 py-1 rounded-lg font-semibold border border-white/15">
                {t("kivu_prescription_badge", language)}
              </span>
              <Clock className="w-4 h-4 text-white/70" />
            </div>
            <h3 className="text-xl font-serif font-bold tracking-tight text-white">{t("phyto_protocol_today", language)}</h3>
            
            <div className="mt-4 space-y-3">
              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 flex items-start gap-3">
                <span className="text-lg">🥣</span>
                <div>
                  <h4 className="font-semibold text-xs text-white">{t("morning_fasting", language)}</h4>
                  <p className="text-xs text-white/80 mt-0.5 leading-relaxed">{t("morning_protocol_desc", language)}</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 flex items-start gap-3">
                <span className="text-lg">🍲</span>
                <div>
                  <h4 className="font-semibold text-xs text-white">{t("noon_main_meal", language)}</h4>
                  <p className="text-xs text-white/80 mt-0.5 leading-relaxed">{t("lunch_protocol_desc", language)}</p>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3.5 border border-white/10 flex items-start gap-3">
                <span className="text-lg">☕</span>
                <div>
                  <h4 className="font-semibold text-xs text-white">{t("evening_before_meal", language)}</h4>
                  <p className="text-xs text-white/80 mt-0.5 leading-relaxed">{t("evening_protocol_desc", language)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={() => onNavigateToDiagnostic()}
              className="w-full bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold py-2.5 rounded-xl text-xs shadow-sm transition flex items-center justify-center gap-2"
            >
              <span>{t("check_meal_with_ai_btn", language)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 5. Medical History & Logs Table */}
      <div className="bg-white rounded-2xl p-6 shadow-xs border border-[#E9E9E0]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-serif font-bold text-[#2D2D2A] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#5A5A40]" />
            <span>{t("Historique des Mesures & Analyses IA", language)}</span>
          </h3>
          <span className="text-xs text-[#5A5A40] font-medium">{t("100 dernières entrées sauvegardées (PWA)", language)}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#E9E9E0] text-[#5A5A40] text-xs font-semibold">
                <th className="py-3 px-4">{t("Date & Heure", language)}</th>
                <th className="py-3 px-4">{t("Type de Mesure", language)}</th>
                <th className="py-3 px-4">{t("Valeur Enregistrée", language)}</th>
                <th className="py-3 px-4">{t("Appareil & Source", language)}</th>
                <th className="py-3 px-4">{t("Statut / Niveau de Risque", language)}</th>
                <th className="py-3 px-4">{t("Note / Contexte Repas", language)}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F9F9F7] text-sm">
              {logs.map((log) => {
                const dateFormatted = new Date(log.timestamp).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' });
                const isHypoOrHyper = log.risk.includes("Urgence");
                const isVigilance = log.risk.includes("Vigilance");

                return (
                  <tr key={log.id} className="hover:bg-[#F9F9F7]/70 transition">
                    <td className="py-3.5 px-4 font-medium text-[#5A5A40] text-xs">{dateFormatted}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#2D2D2A]">
                      {log.type === "glucose" ? `🩸 ${t("Glycémie", language)}` : log.type === "pressure" ? `❤️ ${t("Tension", language)}` : `⚖️ ${t("Poids/IMC", language)}`}
                    </td>
                    <td className="py-3.5 px-4 font-serif font-bold text-[#2D2D2A] text-base">
                      {log.type === "pressure" ? `${log.valueSystolic}/${log.valueDiastolic}` : log.value} <span className="text-xs font-sans font-medium text-[#5A5A40]">{log.unit}</span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#5A5A40]">
                      <span className="bg-[#F9F9F7] text-[#2D2D2A] px-2.5 py-1 rounded-md font-medium text-[11px] border border-[#E9E9E0]">{log.device}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-md font-semibold text-[11px] ${
                        isHypoOrHyper 
                          ? "bg-red-50 text-red-700 border border-red-200" 
                          : isVigilance 
                          ? "bg-amber-50 text-amber-800 border border-amber-200" 
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}>
                        {isHypoOrHyper ? `⚠️ ${t("URGENCE", language)}` : isVigilance ? `👁️ ${t("VIGILANCE", language)}` : `✅ ${t("NORMAL", language)}`}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#5A5A40] font-medium max-w-xs truncate" title={log.note}>{log.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manual Entry Modal */}
      {showManualModal && (
        <div className="fixed inset-0 z-50 bg-[#2D2D2A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#D1D1CB]">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9E9E0]">
              <h3 className="text-lg font-serif font-bold text-[#2D2D2A] flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#5A5A40]" />
                <span>{t("Saisie Manuelle de Mesure (PWA)", language)}</span>
              </h3>
              <button onClick={() => setShowManualModal(false)} className="text-[#5A5A40] hover:text-[#2D2D2A] font-bold text-lg bg-[#F9F9F7] rounded-lg w-8 h-8 flex items-center justify-center">&times;</button>
            </div>

            <form onSubmit={handleManualSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">{t("Type de Mesure", language)}</label>
                <select
                  value={manualType}
                  onChange={(e) => setManualType(e.target.value as any)}
                  className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#2D2D2A] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]"
                >
                  <option value="glucose">🩸 {t("Glycémie (mg/dL)", language)}</option>
                  <option value="pressure">❤️ {t("Tension Artérielle (Systolique/Diastolique)", language)}</option>
                  <option value="weight">⚖️ {t("Poids & IMC (kg)", language)}</option>
                </select>
              </div>

              {manualType === "pressure" ? (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">{t("Systolique (ex: 125)", language)}</label>
                    <input
                      type="number"
                      value={manualVal1}
                      onChange={(e) => setManualVal1(e.target.value)}
                      required
                      className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-semibold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">{t("Diastolique (ex: 80)", language)}</label>
                    <input
                      type="number"
                      value={manualVal2}
                      onChange={(e) => setManualVal2(e.target.value)}
                      required
                      className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2 text-sm font-semibold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40]"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">
                    {t("Valeur en", language)} {manualType === "glucose" ? "mg/dL" : "kg"}
                  </label>
                  <input
                    type="number"
                    step="any"
                    value={manualVal1}
                    onChange={(e) => setManualVal1(e.target.value)}
                    required
                    className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2.5 text-xl font-serif font-bold text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#5A5A40] mb-1.5">{t("Note & Contexte Repas", language)}</label>
                <input
                  type="text"
                  value={manualNote}
                  onChange={(e) => setManualNote(e.target.value)}
                  placeholder={t("ex: À jeun, ou 2h après un plat de pondu...", language)}
                  className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2D2A] focus:ring-2 focus:ring-[#5A5A40]"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-[#E9E9E0]">
                <button
                  type="button"
                  onClick={() => setShowManualModal(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#5A5A40] hover:bg-[#E9E9E0] transition"
                >
                  {t("Annuler", language)}
                </button>
                <button
                  type="submit"
                  className="bg-[#5A5A40] hover:bg-[#464632] text-white font-semibold px-6 py-2.5 rounded-xl text-xs shadow-sm transition"
                >
                  {t("Enregistrer", language)}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
