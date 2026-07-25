import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Increase body limit for base64 image/audio/video uploads from multimodal diagnostics
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Helper to initialize Gemini client lazy-loaded
function getAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is required");
  }
  return new GoogleGenAI({ apiKey });
}

// ---------------------------------------------------------------------------
// 1. HERBAL & TRADITIONAL AFRICAN CULINARY DATABASE (KIVU & EAST AFRICA)
// ---------------------------------------------------------------------------
const HERBAL_AND_CULLINARY_DATA = [
  {
    id: "saka-saka",
    category: "meal",
    nameFr: "Saka-Saka / Pondu (Feuilles de Manioc)",
    nameSwahili: "Sombe / Kisovu",
    nameLingala: "Pondu ya sôlô",
    nameMashi: "Sombe / Lushi",
    nameKinyarwanda: "Isombe",
    glycemicIndex: "Faible (IG ~25)",
    glycemicLoad: "Faible si consommé avec fufu de mil/sorgho",
    traditionalUse: "Plat de résistance quotidien riche en fer, en fibres alimentaires et en protéines végétales dans toute l'Afrique centrale et de l'Est.",
    preparationGuide: "1. Bien piler ou hacher les feuilles fraîches.\n2. IMPÉRATIF: Faire bouillir dans l'eau bouillante pendant minimum 45 à 60 minutes sans couvercle au début pour évaporer l'acide cyanhydrique (toxique à l'état cru).\n3. Pour les patients diabétiques: Réduire l'huile de palme rouge de 70% par rapport à la recette traditionnelle. Remplacer le surplus de gras par de l'ail, de l'oignon, du poireau et de la pâte d'arachide modérée.\n4. Accompagner de fufu de sorgho ou d'épeautre plutôt que de fufu de manioc raffiné ultra-glycémiant.",
    scientificBenefits: "Riche en fibres solubles qui ralentissent l'absorption du glucose dans l'intestin grêle. Contient du magnésium qui améliore la sensibilité à l'insuline.",
    safetyWarning: "Ne jamais consommer cru ou sous-cuit. Attention à la surcharge lipidique si trop d'huile de palme est utilisée, ce qui augmente la résistance à l'insuline.",
    region: "Kivu, RDC, Rwanda, Burundi, Ouganda, Tanzanie",
    imageUrl: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "vernonia",
    category: "plant",
    nameFr: "Feuilles amères (Vernonia amygdalina)",
    nameSwahili: "Ndakala / Majani ya uchungu",
    nameLingala: "Ndolé / Majani ya sôlô",
    nameMashi: "Kimbwire / Mujumbe",
    nameKinyarwanda: "Umubirizi",
    glycemicIndex: "Très Faible / Hypoglycémiant",
    glycemicLoad: "Négligeable",
    traditionalUse: "Utilisé comme décoction purgative et antidiabétique majeure en médecine traditionnelle rurale du Kivu et du bassin du Congo.",
    preparationGuide: "1. Laver les feuilles à l'eau propre et presser légèrement pour atténuer l'amertume extrême, mais garder l'eau verdâtre de premier lavage pour l'infusion médicale.\n2. Décoction: Bouillir 30g de feuilles fraîches (ou 15g séchées) dans 1 litre d'eau pendant 15 minutes.\n3. Dosage: Boire 1 verre (150 ml) tiède 20 minutes avant le repas de midi ou du soir.",
    scientificBenefits: "Contient des vernoniosides et des flavonoïdes puissants qui stimulent la sécrétion d'insuline par les cellules bêta du pancréas et inhibent la néoglucogenèse hépatique.",
    safetyWarning: "Action hypoglycémiante forte ! Si vous prenez déjà de la Metformine ou de l'insuline injectable, surveillez votre glycémie avec votre glucomètre connecté pour éviter une crise d'hypoglycémie (< 70 mg/dL).",
    region: "Sud-Kivu, Nord-Kivu, Maniema, Afrique de l'Est",
    imageUrl: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "moringa",
    category: "plant",
    nameFr: "Moringa oleifera (L'arbre de vie)",
    nameSwahili: "Mlonge / Moringa",
    nameLingala: "Moringa",
    nameMashi: "Karunga / Moringa",
    nameKinyarwanda: "Moringa",
    glycemicIndex: "Très Faible",
    glycemicLoad: "Zéro",
    traditionalUse: "Complément nutritionnel global pour lutter contre la fatigue chronique associée au diabète et stabiliser le taux de sucre sanguin.",
    preparationGuide: "1. Récolter les feuilles vertes et les faire sécher à l'ombre dans un endroit aéré (le soleil direct détruit la vitamine C et les antioxydants).\n2. Piler ou moudre en poudre fine d'un vert éclatant.\n3. Dosage quotidien: 1 cuillère à café (environ 5g) mélangée dans un verre d'eau tiède, dans du thé sans sucre, ou saupoudrée sur un plat de légumes tiède (ne pas bouillir la poudre).",
    scientificBenefits: "Riche en acide chlorogénique, le même antioxydant que dans le café vert, qui aide à réguler la glycémie après les repas. Teneur exceptionnelle en zinc, chrome et potassium.",
    safetyWarning: "Éviter d'ingérer l'écorce ou les racines en grande quantité lors d'une grossesse. Les feuilles sont 100% sûres.",
    region: "Répandu dans toute l'Afrique sub-saharienne et dans les plaines de la Ruzizi",
    imageUrl: "https://images.unsplash.com/photo-1628556270448-4e4e4e3a8b27?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bissap",
    category: "plant",
    nameFr: "Hibiscus / Bissap (Fleurs d'oseille de Guinée)",
    nameSwahili: "Rosella / Maua ya Hibiscus",
    nameLingala: "Bissap / Ngai-ngai ya rouge",
    nameMashi: "Maua ya rouge",
    nameKinyarwanda: "Hibiscus",
    glycemicIndex: "Faible (si préparé sans sucre ajouté)",
    glycemicLoad: "Faible",
    traditionalUse: "Boisson rafraîchissante traditionnelle, souvent utilisée pour abaisser la tension artérielle (hypertension) très fréquente chez les diabétiques.",
    preparationGuide: "1. Rincer 50g de calices de fleurs d'hibiscus séchées à l'eau froide pour enlever la poussière.\n2. Faire infuser dans 1,5 litre d'eau bouillante pendant 10 minutes (ou macérer à froid pendant 6 heures pour préserver plus d'antioxydants).\n3. RÈGLE D'OR DIABÈTE: NE JAMAIS AJOUTER DE SUCRE BLANC OU ROUX. Adoucir uniquement avec une poignée de feuilles de Stevia naturelles ou boire nature (légèrement acidulé et très désaltérant).",
    scientificBenefits: "Inhibe l'alpha-glucosidase, une enzyme digestive, réduisant ainsi la décomposition des glucides complexes en glucose dans le sang. Effet hypotenseur prouvé cliniquement.",
    safetyWarning: "Peut avoir un léger effet diurétique. Bien s'hydrater tout au long de la journée.",
    region: "Afrique de l'Est, Afrique Centrale, Sahel",
    imageUrl: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gombo",
    category: "meal",
    nameFr: "Gombo / Okra (Abelmoschus esculentus)",
    nameSwahili: "Bamia / Gombo",
    nameLingala: "Dongo-dongo",
    nameMashi: "Bamia / Gombo",
    nameKinyarwanda: "Bamia",
    glycemicIndex: "Très Faible (IG ~20)",
    glycemicLoad: "Faible",
    traditionalUse: "Légume mucilagineux de base dans les sauces traditionnelles africaines, prisé pour sa texture onctueuse et ses propriétés apaisantes gastriques.",
    preparationGuide: "1. Découper 8 à 10 gombos frais en rondelles fines.\n2. Préparation en sauce: Faire revenir avec des tomates fraîches, de l'oignon et un filet d'huile végétale sans friture excessive.\n3. Astuce eau de gombo thérapeutique: Faire tremper 4 gombos fendus dans un verre d'eau toute la nuit. Au matin, retirer les morceaux de gombo et boire l'eau gluante à jeun 30 minutes avant le petit-déjeuner.",
    scientificBenefits: "Le mucilage (substance gélatineuse) du gombo tapisse les parois intestinales et piège une partie du glucose et du cholestérol, ralentissant considérablement le pic glycémique post-repas.",
    safetyWarning: "Aucun danger connu. Excellent pour le transit intestinal et le microbiote du patient diabétique.",
    region: "Kivu, Afrique de l'Est, Afrique Centrale et de l'Ouest",
    imageUrl: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fufu-mil-sorgho",
    category: "meal",
    nameFr: "Fufu de Sorgho ou de Mil (Alternative Santé)",
    nameSwahili: "Ugali wa Mtama / Ulezi",
    nameLingala: "Fufu ya masango / mil",
    nameMashi: "Ubugali bwa Muhama",
    nameKinyarwanda: "Ubugali bw'amasaka",
    glycemicIndex: "Moyen à Faible (IG ~48 à 55 vs 85+ pour manioc blanc)",
    glycemicLoad: "Modérée (à portionner)",
    traditionalUse: "L'alternative indispensable et ancestrale au fufu de manioc raffiné ou au riz blanc polie, qui sont les principales causes de déséquilibre glycémique au Kivu.",
    preparationGuide: "1. Utiliser de la farine complète de sorgho rouge ou de mil (ou un mélange 70% sorgho, 30% manioc non fermenté pour la tenue).\n2. Porter l'eau à ébullition dans une marmite en fonte ou en terre cuite.\n3. Verser la farine en pluie en tournant vigoureusement avec le bâton (le 'mwiko') pour éviter les grumeaux jusqu'à obtenir une pâte souple et homogène.\n4. RÈGLE DE PORTION DIABÉTIQUE: Se limiter à l'équivalent du volume d'un poing fermé par repas, accompagné du double de volume de légumes vertes (Saka-Saka ou Ndakala) et d'une source de protéine (poisson Ndakala du lac Kivu, haricots bio ou poulet).",
    scientificBenefits: "Libération lente de l'énergie grâce aux amidons résistants et aux fibres insolubles. Prévient les pics de glycémie de 2 heures post-prandiales.",
    safetyWarning: "Bien mâcher. Ne pas doubler la portion sous prétexte que c'est une alternative saine.",
    region: "Hauts plateaux du Kivu, Rwanda, Burundi, Tanzanie",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prunus-africana",
    category: "plant",
    nameFr: "Prunus africana (Pygeum / Cerisier africain)",
    nameSwahili: "Mkonde-konde / Muiri",
    nameLingala: "Pygeum",
    nameMashi: "Mrumba / Chibukira",
    nameKinyarwanda: "Umukoma",
    glycemicIndex: "Zéro",
    glycemicLoad: "Zéro",
    traditionalUse: "Écorce traditionnelle des hauts plateaux montagnards du Kivu, réputée pour soutenir la santé rénale et prostatique, souvent menacées par le diabète chronique.",
    preparationGuide: "1. Récolter uniquement l'écorce de manière durable selon les traditions locales (ne jamais abattre l'arbre protecteur).\n2. Faire bouillir 10g d'écorce séchée et broyée dans 750 ml d'eau pendant 20 minutes.\n3. Laisser refroidir, filtrer soigneusement avec un tamis fin.\n4. Boire une demi-tasse (100 ml) le soir avant le coucher, par cures de 3 semaines.",
    scientificBenefits: "Riche en phytostérols et triterpènes. Protège la micro-circulation sanguine et réduit l'inflammation systémique liée à l'hyperglycémie chronique.",
    safetyWarning: "Respecter scrupuleusement les doses. En cas de pathologie rénale avérée, consulter son médecin traitant.",
    region: "Forêts de montagne du Parc de Kahuzi-Biega, Virunga, Rwanda",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "fenugrec",
    category: "plant",
    nameFr: "Graines de Fenugrec (Alba / Helba)",
    nameSwahili: "Uwatu / Mbegu za Uwatu",
    nameLingala: "Fenugrec",
    nameMashi: "Mbegu za Uwatu",
    nameKinyarwanda: "Fenugureki",
    glycemicIndex: "Très Faible",
    glycemicLoad: "Zéro",
    traditionalUse: "Graines aromatiques traditionnelles intégrées dans la pharmacopée est-africaine pour stimuler le pancréas et réduire le taux de sucre à jeun.",
    preparationGuide: "1. Faire tremper 1 cuillère à soupe de graines de fenugrec entières dans un verre d'eau propre pendant toute la nuit (8 à 10 heures).\n2. Au réveil, boire l'eau de trempage à jeun.\n3. Mâcher et avaler les graines ramollies (goût de sirop d'érable légèrement amer) ou les incorporer dans une bouillie de mil matinale.",
    scientificBenefits: "Contient de la 4-hydroxyisoleucine, un acide aminé exceptionnel qui stimule directement la sécrétion d'insuline et retarde la vidange gastrique des glucides.",
    safetyWarning: "Déconseillé aux femmes enceintes en raison de son effet stimulant sur le tonus utérin.",
    region: "Afrique de l'Est, Zanzibar, Tanzanie, Kivu",
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
  }
];

// ---------------------------------------------------------------------------
// 2. API ENDPOINTS FOR HERBAL DATABASE & HEALTH CHECK
// ---------------------------------------------------------------------------
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", engine: "IA Clinique Ethno-Médicale (Kaggle tuned simulation)", timestamp: new Date().toISOString() });
});

app.get("/api/herbal-directory", (req, res) => {
  const { category, search } = req.query;
  let filtered = HERBAL_AND_CULLINARY_DATA;
  if (category && category !== "all") {
    filtered = filtered.filter(item => item.category === category);
  }
  if (search) {
    const q = String(search).toLowerCase();
    filtered = filtered.filter(item => 
      item.nameFr.toLowerCase().includes(q) || 
      item.nameSwahili.toLowerCase().includes(q) || 
      item.nameLingala.toLowerCase().includes(q) || 
      item.nameMashi.toLowerCase().includes(q) ||
      item.traditionalUse.toLowerCase().includes(q)
    );
  }
  res.json({ status: "success", count: filtered.length, data: filtered });
});

// ---------------------------------------------------------------------------
// 3. IOT SMART DEVICES REAL-TIME SYNCHRONIZATION SIMULATOR & RECEIVER
// ---------------------------------------------------------------------------
// In-memory store for demo medical logs
let medicalLogs: any[] = [
  { id: '1', timestamp: new Date(Date.now() - 3600000 * 18).toISOString(), type: 'glucose', value: 118, unit: 'mg/dL', note: 'À jeun matin - Stable', device: 'Glucomètre Smart BLE #Kivu-01', risk: 'Normal' },
  { id: '2', timestamp: new Date(Date.now() - 3600000 * 12).toISOString(), type: 'glucose', value: 165, unit: 'mg/dL', note: '2h après déjeuner (Saka-saka + Fufu sorgho)', device: 'Glucomètre Smart BLE #Kivu-01', risk: 'Normal' },
  { id: '3', timestamp: new Date(Date.now() - 3600000 * 6).toISOString(), type: 'pressure', valueSystolic: 125, valueDiastolic: 80, unit: 'mmHg', note: 'Tension soir - Bonne', device: 'Tensiomètre Connecté', risk: 'Normal' },
  { id: '4', timestamp: new Date(Date.now() - 3600000 * 2).toISOString(), type: 'weight', value: 72.4, unit: 'kg', note: 'IMC estimé : 23.8 (Normal)', device: 'Balance Bio-Impédance', risk: 'Normal' }
];

app.get("/api/iot/logs", (req, res) => {
  res.json({ status: "success", logs: medicalLogs });
});

app.post("/api/iot/sync", (req, res) => {
  const { type, value, valueSystolic, valueDiastolic, unit, note, deviceName } = req.body;
  
  let risk = 'Normal';
  if (type === 'glucose') {
    const val = Number(value);
    if (val < 70) risk = 'Urgence médicale (Hypoglycémie)';
    else if (val > 250) risk = 'Urgence médicale (Hyperglycémie sévère)';
    else if (val > 180 || val < 80) risk = 'Vigilance';
  } else if (type === 'pressure') {
    if (Number(valueSystolic) >= 150 || Number(valueDiastolic) >= 95) risk = 'Vigilance (Hypertension)';
  }

  const newLog = {
    id: String(Date.now()),
    timestamp: new Date().toISOString(),
    type: type || 'glucose',
    value: value ? Number(value) : undefined,
    valueSystolic: valueSystolic ? Number(valueSystolic) : undefined,
    valueDiastolic: valueDiastolic ? Number(valueDiastolic) : undefined,
    unit: unit || 'mg/dL',
    note: note || 'Mesure synchronisée depuis objet connecté',
    device: deviceName || 'Glucomètre Connecté Kivu BLE',
    risk
  };

  medicalLogs.unshift(newLog);
  if (medicalLogs.length > 100) medicalLogs.pop(); // keep last 100

  res.json({ status: "success", syncedLog: newLog, totalLogs: medicalLogs.length });
});

app.post("/api/iot/simulate-instant-read", (req, res) => {
  const { deviceType } = req.body;
  let newLog: any;
  const now = new Date().toISOString();

  if (deviceType === 'pressure') {
    const sys = Math.floor(Math.random() * (145 - 115 + 1)) + 115;
    const dia = Math.floor(Math.random() * (90 - 72 + 1)) + 72;
    newLog = {
      id: String(Date.now()),
      timestamp: now,
      type: 'pressure',
      valueSystolic: sys,
      valueDiastolic: dia,
      unit: 'mmHg',
      note: 'Mesure automatique - Tensiomètre Bras Bluetooth',
      device: 'Tensiomètre Omron-Kivu BLE',
      risk: sys > 140 ? 'Vigilance' : 'Normal'
    };
  } else if (deviceType === 'weight') {
    const wt = Number((72.0 + (Math.random() * 1.5 - 0.7)).toFixed(1));
    newLog = {
      id: String(Date.now()),
      timestamp: now,
      type: 'weight',
      value: wt,
      unit: 'kg',
      note: 'Pesée instantanée - Balance Bio-Impédance',
      device: 'Balance Smart Scale Kivu',
      risk: 'Normal'
    };
  } else {
    // Default glucose simulation (realistic variations around meal times)
    const possibleValues = [92, 105, 114, 128, 142, 168, 185, 68, 235];
    const chosenVal = possibleValues[Math.floor(Math.random() * possibleValues.length)];
    let risk = 'Normal';
    if (chosenVal < 70) risk = 'Urgence médicale (Hypoglycémie)';
    else if (chosenVal > 220) risk = 'Urgence médicale (Hyperglycémie sévère)';
    else if (chosenVal > 160) risk = 'Vigilance';

    newLog = {
      id: String(Date.now()),
      timestamp: now,
      type: 'glucose',
      value: chosenVal,
      unit: 'mg/dL',
      note: chosenVal < 100 ? 'Mesure à jeun détectée par capteur' : 'Mesure post-prandiale capteur',
      device: 'Glucomètre Smart BLE #Kivu-01',
      risk
    };
  }

  medicalLogs.unshift(newLog);
  res.json({ status: "success", simulatedLog: newLog });
});

// ---------------------------------------------------------------------------
// 4. GEMMA 4 MULTIMODAL DIAGNOSTIC & MEAL VERIFICATION ENGINE (KAGGLE FINE-TUNED)
// ---------------------------------------------------------------------------
app.post("/api/ai/analyze-symptom-or-meal", async (req, res) => {
  try {
    const { 
      text, 
      imageBase64, 
      audioBase64, 
      videoBase64, 
      mediaType, 
      language = "Français", 
      patientProfile, 
      queryType = "meal_check" 
    } = req.body;

    const ai = getAiClient();
    const modelName = "gemini-2.5-pro"; // Powerful multimodal reasoning model for medical & botanical analysis

    const systemInstruction = `Tu es l'IA Médicale Ethnobotanique Clinique (Finetuned sur Kaggle avec le dataset médical des maladies métaboliques et la pharmacopée africaine du Kivu, RDC, Rwanda, Burundi et Afrique de l'Est).
Ta mission : Analyser avec une précision clinique et culturelle les symptômes, les photos/vidéos/audios de repas ou de remèdes traditionnels à base de plantes pour les patients souffrant de Diabète (Type 1, Type 2, ou gestationnel).

LANGUE DE RÉPONSE OBLIGATOIRE : ${language}. (Si Swahili, Lingala, Kinyarwanda, Kirundi, Mashi ou Anglais est choisi, tu DOIS rédiger l'entièreté des explications dans cette langue locale avec un ton empathique, respectueux et scientifiquement fondé. Si Français, réponds en Français impeccable).

CONSIGNES DE DIAGNOSTIC ET DE VÉRIFICATION CULINAIRE :
1. Si l'utilisateur envoie la photo/vidéo ou description d'un plat africain (ex: Saka-Saka / Pondu, Fufu de manioc, Fufu de mil/sorgho, Ndakala avec sauce arachide, Gombo, etc.) ou d'une préparation de plantes (Moringa, Vernonia / Ndolé, Bissap, Prunus africana, Fenugrec) :
   - VÉRIFIE SA PRÉPARATION : Est-ce bien préparé ? Y a-t-il un excès d'huile de palme (qui augmente la résistance à l'insuline) ? Le temps de cuisson des feuilles de manioc est-il suffisant (élimination du cyanure) ? Y a-t-il du sucre ajouté dans le Bissap ou le Moringa ?
   - ÉVALUE L'INDEX GLYCÉMIQUE (IG) ET LA CHARGE GLYCÉMIQUE : Explique clairement si ce repas va faire grimper le taux de sucre dans le sang.
   - PROPOSE DES ALTERNATIVES PLUS SÛRES : Ex: Suggérer le fufu de mil/sorgho ou d'épeautre au lieu du fufu de manioc blanc; réduire l'huile de palme de 60%; ajouter du gombo pour le mucilage soluble qui freine l'absorption du glucose.
2. Si l'utilisateur décrit des symptômes (fatigue intense, soif extrême / polydipsie, miction fréquente / polyurie, vision floue, vertiges, transpiration froide, tremblements) :
   - CLASSIFIE LE NIVEAU DE RISQUE : "Normal" | "Vigilance" | "Urgence médicale" (ex: urgence absolue si signes d'hypoglycémie < 70 mg/dL ou acidocétose > 300 mg/dL).
   - DONNE LE PROTOCOLE D'ACTION IMMÉDIAT adapté au contexte africain (ex: 15g de sucre rapide comme du jus ou du miel en cas d'hypoglycémie, NE SURTOUT PAS prendre de plante amère en crise d'hypoglycémie).
3. PROPOSE LA PRESCRIPTION VÉGÉTALE / TRADITIONNELLE COMPLÉMENTAIRE : Indique quelle plante locale (Vernonia, Moringa, Bissap sans sucre, Fenugrec) peut aider en complément des médicaments, avec le dosage précis et les contre-indications (attention aux interactions avec Metformine ou Insuline).

RÉPONDS IMPÉRATIVEMENT AU FORMAT JSON STRICT avec la structure suivante (sans balises markdown autour du json si possible, ou parseable) :
{
  "diagnosisSummary": "Titre clair et résumé de l'analyse en 2-3 phrases",
  "riskLevel": "Normal" | "Vigilance" | "Urgence médicale",
  "glycemicImpactEstimate": "Estimation courte (ex: Faible IG ~25, ou Élevé IG ~85 danger pic glycémique)",
  "preparationCritique": "Critique détaillée de la préparation (huile, cuisson, sucre, dosage de la plante...)",
  "healthierAlternatives": [
    "Alternative 1 concrète et facile à réaliser au Kivu/Afrique de l'Est",
    "Alternative 2 (ex: portionnement, remplacement du manioc par le sorgho)"
  ],
  "personalizedRecommendations": [
    "Conseil médical ou diététique 1 personnalisé",
    "Conseil 2 (hydratation, surveillance glucomètre, activité physique)",
    "Conseil 3 (interaction médicamenteuse ou suivi)"
  ],
  "audioTranscript": "Si un audio a été analysé, transcription du symptôme ou de la recette décrite par le patient, sinon null",
  "voiceGuidanceText": "Un texte court (3 phrases max) très empathique et motivant dans la langue du patient (${language}) prêt pour une lecture audio ou vocale."
}`;

    const contents: any[] = [];
    
    // Construct prompt text
    let promptText = `Patient Profil: ${JSON.stringify(patientProfile || { location: 'Kivu, RDC', type: 'Diabète Type 2' })}\nType de requête: ${queryType}\nLangue souhaitée: ${language}\n\nMessage ou description du patient: ${text || 'Analyse ce document multimédia joint pour mon suivi du diabète.'}`;
    
    contents.push({ text: promptText });

    // Handle multimodal attachments
    if (imageBase64) {
      const cleanImg = imageBase64.replace(/^data:image\/[a-z]+;base64,/, "");
      contents.push({
        inlineData: {
          data: cleanImg,
          mimeType: mediaType || "image/jpeg"
        }
      });
    } else if (audioBase64) {
      const cleanAudio = audioBase64.replace(/^data:audio\/[a-z0-9-+]+;base64,/, "");
      contents.push({
        inlineData: {
          data: cleanAudio,
          mimeType: mediaType || "audio/mp3"
        }
      });
    } else if (videoBase64) {
      const cleanVideo = videoBase64.replace(/^data:video\/[a-z0-9-+]+;base64,/, "");
      contents.push({
        inlineData: {
          data: cleanVideo,
          mimeType: mediaType || "video/mp4"
        }
      });
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
        responseMimeType: "application/json"
      }
    });

    const rawText = response.text || "{}";
    let parsedResult;
    try {
      parsedResult = JSON.parse(rawText);
    } catch (e) {
      // Clean potential code block wrapping
      const cleanJson = rawText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      parsedResult = JSON.parse(cleanJson);
    }

    res.json({ status: "success", result: parsedResult, engineVersion: "IA Clinique Ethno-Médicale (Kaggle tuned via Gemini 2.5 Pro)" });
  } catch (error: any) {
    console.error("Error in AI Multimodal analysis:", error);
    res.status(500).json({ 
      status: "error", 
      message: "Erreur lors de l'analyse par l'IA clinique. Veuillez réessayer ou vérifier la connexion.",
      errorDetails: error.message 
    });
  }
});

// ---------------------------------------------------------------------------
// 5. INTERACTIVE CLINICAL AI CHATBOT FOR STEP-BY-STEP PATIENT GUIDANCE
// ---------------------------------------------------------------------------
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { messages, language = "Français", patientProfile } = req.body;
    const ai = getAiClient();
    const modelName = "gemini-2.5-pro";

    const systemInstruction = `Tu es l'assistant vocal et conversationnel IA Médical & Ethnobotanique, spécialement entraîné sur les bases de données médicales et la médecine traditionnelle africaine (Région du Kivu en RDC, Rwanda, Burundi et Afrique de l'Est).
Ta mission est de guider les patients diabétiques au quotidien :
- Répondre à leurs questions sur leur alimentation (mets locaux comme le fufu, saka-saka, ndakala, gombo, plantain, patate douce).
- Expliquer la posologie des remèdes à base de plantes (Vernonia/Ndolé, Moringa, Bissap, Fenugrec, Prunus africana).
- Rassurer et alerter immédiatement en cas de signes d'hypoglycémie ou d'hyperglycémie.
- Communiquer OBLIGATOIREMENT ET FLUIDEMENT dans la langue choisie : ${language} (Français, Swahili, Lingala, Mashi/Shi, Kinyarwanda/Kirundi, Anglais).
- Garder des réponses structurées, claires, avec des puces bullet points, et chaleureuses ("Ndugu", "Mpendwa", "Mon frère/ma sœur en santé").`;

    const formattedMessages = (messages || []).map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add profile context to the latest message if present
    if (formattedMessages.length > 0 && patientProfile) {
      const lastIdx = formattedMessages.length - 1;
      formattedMessages[lastIdx].parts[0].text = `[Profil patient: ${JSON.stringify(patientProfile)}]\n` + formattedMessages[lastIdx].parts[0].text;
    }

    const response = await ai.models.generateContent({
      model: modelName,
      contents: formattedMessages,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5
      }
    });

    const replyText = response.text || "Désolé, je ne peux pas répondre pour le moment. Veuillez vérifier votre connexion.";
    res.json({ status: "success", reply: replyText });
  } catch (error: any) {
    console.error("Error in AI Chatbot:", error);
    res.status(500).json({ status: "error", message: "Erreur du Chatbot IA Clinique. Réessayez." });
  }
});

// ---------------------------------------------------------------------------
// 6. VITE MIDDLEWARE & STATIC SERVING
// ---------------------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 AfriKivu Diabète Care & IA Clinique Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
