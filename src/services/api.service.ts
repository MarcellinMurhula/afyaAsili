import { 
  HerbalAndCulinaryItem, 
  MedicalLog, 
  DiagnosticResult, 
  PatientProfile, 
  SupportedLanguage 
} from "../types";

const LOCAL_LOGS_KEY = "afrikivu_medical_logs";
const LOCAL_PROFILE_KEY = "afrikivu_patient_profile";
const LOCAL_HERBAL_KEY = "afrikivu_herbal_cache";

export class ApiService {
  // 1. Patient Profile management
  static getProfile(): PatientProfile {
    const saved = localStorage.getItem(LOCAL_PROFILE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      name: "Papa Amani Mukwege",
      age: 52,
      diabetesType: "Diabète de Type 2",
      location: "Bukavu / Sud-Kivu, RDC",
      targetGlucoseMin: 80,
      targetGlucoseMax: 140,
      currentMedications: ["Metformine 850mg (matin et soir)", "Infusion Vernonia (midi)"],
      preferredLanguage: "Français"
    };
  }

  static saveProfile(profile: PatientProfile): void {
    localStorage.setItem(LOCAL_PROFILE_KEY, JSON.stringify(profile));
  }

  // 2. Herbal Directory (with offline caching)
  static async getHerbalDirectory(category?: string, search?: string): Promise<HerbalAndCulinaryItem[]> {
    try {
      const url = new URL("/api/herbal-directory", window.location.origin);
      if (category && category !== "all") url.searchParams.append("category", category);
      if (search) url.searchParams.append("search", search);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error("Erreur réseau");
      const data = await res.json();
      if (data && data.data) {
        // Cache to localStorage for offline access
        localStorage.setItem(LOCAL_HERBAL_KEY, JSON.stringify(data.data));
        return data.data;
      }
    } catch (err) {
      console.warn("Mode hors-ligne ou erreur de chargement. Utilisation du cache local.", err);
    }
    
    // Fallback offline cache
    const cached = localStorage.getItem(LOCAL_HERBAL_KEY);
    if (cached) {
      try { return JSON.parse(cached); } catch (e) {}
    }
    return [];
  }

  // 3. Medical Logs (Server + Offline storage)
  static async getMedicalLogs(): Promise<MedicalLog[]> {
    try {
      const res = await fetch("/api/iot/logs");
      if (res.ok) {
        const data = await res.json();
        if (data && data.logs) {
          localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(data.logs));
          return data.logs;
        }
      }
    } catch (e) {
      console.warn("Fetch logs failed, using local offline storage.");
    }
    
    const local = localStorage.getItem(LOCAL_LOGS_KEY);
    if (local) {
      try { return JSON.parse(local); } catch (e) {}
    }
    return [];
  }

  static async syncLog(logData: Partial<MedicalLog>): Promise<MedicalLog | null> {
    try {
      const res = await fetch("/api/iot/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logData)
      });
      if (res.ok) {
        const data = await res.json();
        return data.syncedLog || null;
      }
    } catch (e) {
      console.warn("Erreur synchronisation serveur, enregistrement local PWA");
    }

    // Offline manual save
    const current = await this.getMedicalLogs();
    const newLog: MedicalLog = {
      id: String(Date.now()),
      timestamp: new Date().toISOString(),
      type: logData.type || "glucose",
      value: logData.value,
      valueSystolic: logData.valueSystolic,
      valueDiastolic: logData.valueDiastolic,
      unit: logData.unit || "mg/dL",
      note: logData.note || "Enregistrement hors-ligne PWA",
      device: logData.device || "Saisie manuelle ou capteur local",
      risk: logData.risk || "Normal"
    };
    current.unshift(newLog);
    localStorage.setItem(LOCAL_LOGS_KEY, JSON.stringify(current));
    return newLog;
  }

  static async simulateInstantRead(deviceType: 'glucose' | 'pressure' | 'weight'): Promise<MedicalLog | null> {
    try {
      const res = await fetch("/api/iot/simulate-instant-read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deviceType })
      });
      if (res.ok) {
        const data = await res.json();
        return data.simulatedLog || null;
      }
    } catch (e) {
      console.error("Simulation error", e);
    }
    return null;
  }

  // 4. Gemma 4 Multimodal Diagnostic & Meal Analyzer
  static async analyzeWithGemma4(payload: {
    text?: string;
    imageBase64?: string;
    audioBase64?: string;
    videoBase64?: string;
    mediaType?: string;
    language: SupportedLanguage;
    patientProfile: PatientProfile;
    queryType: "symptom" | "meal_check" | "general";
  }): Promise<DiagnosticResult> {
    const res = await fetch("/api/ai/analyze-symptom-or-meal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || data.status === "error") {
      throw new Error(data.message || "Erreur de l'analyse IA Médicale");
    }
    return data.result;
  }

  // 5. Gemma 4 Chatbot
  static async sendChatMessage(messages: { role: string; text: string }[], language: SupportedLanguage, patientProfile: PatientProfile): Promise<string> {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages, language, patientProfile })
    });
    const data = await res.json();
    if (!res.ok || data.status === "error") {
      throw new Error(data.message || "Erreur communication Chatbot IA Clinique");
    }
    return data.reply;
  }

  // 6. Text to Speech helper (Web Speech API)
  static speak(text: string, lang: SupportedLanguage): void {
    if (!('speechSynthesis' in window)) return;
    
    // Stop ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    // Map supported languages to BCP 47 codes
    if (lang.includes("Français") || lang.includes("Lingala") || lang.includes("Mashi")) {
      utterance.lang = "fr-FR";
    } else if (lang.includes("Swahili") || lang.includes("Kiswahili")) {
      utterance.lang = "sw-KE"; // Swahili voice if available or fallback
    } else if (lang.includes("Kinyarwanda")) {
      utterance.lang = "rw-RW";
    } else if (lang.includes("English")) {
      utterance.lang = "en-US";
    } else {
      utterance.lang = "fr-FR";
    }
    utterance.rate = 0.95; // clear medical cadence
    window.speechSynthesis.speak(utterance);
  }
}
