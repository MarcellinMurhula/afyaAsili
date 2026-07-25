export type SupportedLanguage = 
  | "Français" 
  | "Kiswahili (Swahili)" 
  | "Lingála" 
  | "Mashi / Shi (Kivu)" 
  | "Kinyarwanda / Kirundi" 
  | "English";

export type RiskLevel = "Normal" | "Vigilance" | "Urgence médicale";

export interface PatientProfile {
  name: string;
  age: number;
  diabetesType: "Diabète de Type 1" | "Diabète de Type 2" | "Diabète Gestationnel" | "Pré-diabète / Prévention";
  location: string;
  targetGlucoseMin: number;
  targetGlucoseMax: number;
  currentMedications: string[];
  preferredLanguage: SupportedLanguage;
}

export interface HerbalAndCulinaryItem {
  id: string;
  category: "plant" | "meal";
  nameFr: string;
  nameSwahili: string;
  nameLingala: string;
  nameMashi: string;
  nameKinyarwanda: string;
  glycemicIndex: string;
  glycemicLoad: string;
  traditionalUse: string;
  preparationGuide: string;
  scientificBenefits: string;
  safetyWarning: string;
  region: string;
  imageUrl?: string;
}

export interface MedicalLog {
  id: string;
  timestamp: string;
  type: "glucose" | "pressure" | "weight" | "herbal_dose";
  value?: number;
  valueSystolic?: number;
  valueDiastolic?: number;
  unit: string;
  note: string;
  device: string;
  risk: RiskLevel;
}

export interface DiagnosticResult {
  diagnosisSummary: string;
  riskLevel: RiskLevel;
  glycemicImpactEstimate: string;
  preparationCritique: string;
  healthierAlternatives: string[];
  personalizedRecommendations: string[];
  audioTranscript?: string | null;
  voiceGuidanceText: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}
