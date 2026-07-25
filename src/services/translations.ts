import { SupportedLanguage } from "../types";

export interface TranslationMap {
  [key: string]: {
    "Français": string;
    "Kiswahili (Swahili)": string;
    "Lingála": string;
    "Mashi / Shi (Kivu)": string;
    "Kinyarwanda / Kirundi": string;
    "English": string;
    [lang: string]: string;
  };
}

export const translations: TranslationMap = {
  // --- HEADER & NAVIGATION ---
  "app_subtitle": {
    "Français": "Intelligence de Santé & Médecine Traditionnelle pour l'Afrique de l'Est",
    "Kiswahili (Swahili)": "Huduma ya Akili Bandia ya Afya na Tiba Asili kwa Afrika Mashariki",
    "Lingála": "Mayele ya Dokotolo mpe Nkisi ya Bonkoko mpo na Afrika ya Monene",
    "Mashi / Shi (Kivu)": "Oshagirho bw'Obulaamire n'Emizire y'ekitu rwe Kivu n'Africa",
    "Kinyarwanda / Kirundi": "Ubuhanga bw'Ikoranabuhanga mu Buvuzi Gakondo muri Afurika y'Iburasirazuba",
    "English": "Health Intelligence & Traditional Medicine for East Africa"
  },
  "device_synced": {
    "Français": "Appareils Connectés",
    "Kiswahili (Swahili)": "Kifaa Kimeunganishwa",
    "Lingála": "Esilami na appareil",
    "Mashi / Shi (Kivu)": "Ebigalire byajirire",
    "Kinyarwanda / Kirundi": "Igikoresho Cyahuwe",
    "English": "Device Synced"
  },
  "offline_pwa": {
    "Français": "Mode Hors-ligne",
    "Kiswahili (Swahili)": "Nje ya Mtandao",
    "Lingála": "Awa na Net te",
    "Mashi / Shi (Kivu)": "Nta murongo gwa net",
    "Kinyarwanda / Kirundi": "Nta murongo",
    "English": "Offline PWA"
  },
  "simple_mode": {
    "Français": "🖼️ Mode Simplifié",
    "Kiswahili (Swahili)": "🖼️ Mfumo Rahisi",
    "Lingála": "🖼️ Lolenge ya Petee",
    "Mashi / Shi (Kivu)": "🖼️ Okubona kwayorho",
    "Kinyarwanda / Kirundi": "🖼️ Uburyo Bworoheje",
    "English": "🖼️ Simple Mode"
  },
  "clinical_mode": {
    "Français": "📊 Mode Clinique",
    "Kiswahili (Swahili)": "📊 Mfumo wa Kliniki",
    "Lingála": "📊 Lolenge ya Dokotolo",
    "Mashi / Shi (Kivu)": "📊 Okubona kwa muganga",
    "Kinyarwanda / Kirundi": "📊 Uburyo bwa Muganga",
    "English": "📊 Clinical Mode"
  },
  "ai_engine": {
    "Français": "🧠 Moteur IA Médical",
    "Kiswahili (Swahili)": "🧠 Akili Bandia ya Tiba",
    "Lingála": "🧠 Mayele ya Dokotolo IA",
    "Mashi / Shi (Kivu)": "🧠 Obulaamire bwa IA",
    "Kinyarwanda / Kirundi": "🧠 Ubuhanga bwa Muganga IA",
    "English": "🧠 Clinical AI Engine"
  },
  "logout": {
    "Français": "🚪 Quitter",
    "Kiswahili (Swahili)": "🚪 Toka / Badili",
    "Lingála": "🚪 Bima / Bongola",
    "Mashi / Shi (Kivu)": "🚪 Rhuunga",
    "Kinyarwanda / Kirundi": "🚪 Sohoka",
    "English": "🚪 Exit / Logout"
  },
  "sos_emergency": {
    "Français": "SOS Urgence",
    "Kiswahili (Swahili)": "SOS Msaada wa Haraka",
    "Lingála": "SOS Lisungi ya Mbalaka",
    "Mashi / Shi (Kivu)": "SOS Obudaha bw'okubakua",
    "Kinyarwanda / Kirundi": "SOS Ubutabazi bw'Ibanze",
    "English": "SOS Emergency"
  },
  "nav_dashboard": {
    "Français": "Tableau de Bord & IoT",
    "Kiswahili (Swahili)": "Deshibodi & Vifaa",
    "Lingála": "Etanda & Ba Appareils",
    "Mashi / Shi (Kivu)": "Oshagirho & Ebigalire",
    "Kinyarwanda / Kirundi": "Isura y'Incamake & Ikoranabuhanga",
    "English": "Dashboard & IoT"
  },
  "nav_diagnostic": {
    "Français": "Diagnostic IA & Repas",
    "Kiswahili (Swahili)": "Uchunguzi wa IA & Chakula",
    "Lingála": "Tala na IA & Bilei",
    "Mashi / Shi (Kivu)": "Okulaamira na IA & Ebyokulya",
    "Kinyarwanda / Kirundi": "Ibizamini by'IA & Ifunguro",
    "English": "AI Diagnostic & Meals"
  },
  "nav_directory": {
    "Français": "Plantes & Gastronomie",
    "Kiswahili (Swahili)": "Mimea ya Tiba & Mapishi",
    "Lingála": "Matiti ya Nkisi & Biloko ya Kolia",
    "Mashi / Shi (Kivu)": "Emizire y'ekitu & Ebyokulya",
    "Kinyarwanda / Kirundi": "Ibyatsi by'Ubuvuzi & Imirire",
    "English": "Medicinal Plants & Diet"
  },
  "nav_chatbot": {
    "Français": "Assistant Vocal IA",
    "Kiswahili (Swahili)": "Msaidizi wa Sauti wa IA",
    "Lingála": "Mokambi ya Mongongo IA",
    "Mashi / Shi (Kivu)": "Omurhabazi wa Sauti wa IA",
    "Kinyarwanda / Kirundi": "Umujyanama w'Ijwi IA",
    "English": "AI Voice Assistant"
  },
  "badge_live": {
    "Français": "En direct",
    "Kiswahili (Swahili)": "Mubashara",
    "Lingála": "Sikoyo",
    "Mashi / Shi (Kivu)": "Bwano",
    "Kinyarwanda / Kirundi": "Imbonankubone",
    "English": "Live"
  },
  "badge_clinical": {
    "Français": "IA Clinique",
    "Kiswahili (Swahili)": "IA ya Kliniki",
    "Lingála": "IA ya Dokotolo",
    "Mashi / Shi (Kivu)": "IA ya Muganga",
    "Kinyarwanda / Kirundi": "IA ya Muganga",
    "English": "Clinical AI"
  },
  "badge_kivu": {
    "Français": "Kivu",
    "Kiswahili (Swahili)": "Kivu",
    "Lingála": "Kivu",
    "Mashi / Shi (Kivu)": "Kivu",
    "Kinyarwanda / Kirundi": "Kivu",
    "English": "Kivu"
  },
  "badge_multilingual": {
    "Français": "Multilingue",
    "Kiswahili (Swahili)": "Lugha Nyingi",
    "Lingála": "Minoko Ebele",
    "Mashi / Shi (Kivu)": "Endimi zinji",
    "Kinyarwanda / Kirundi": "Indimi zose",
    "English": "Multilingual"
  },

  // --- WELCOME & LOGIN VIEW ---
  "welcome_title": {
    "Français": "AfyaAsili • Kivu Health",
    "Kiswahili (Swahili)": "AfyaAsili • Afya ya Kivu",
    "Lingála": "AfyaAsili • Kolongono ya Kivu",
    "Mashi / Shi (Kivu)": "AfyaAsili • Obulaamire bwe Kivu",
    "Kinyarwanda / Kirundi": "AfyaAsili • Ubuzima mu Kivu",
    "English": "AfyaAsili • Kivu Health"
  },
  "welcome_subtitle": {
    "Français": "Assistant Diabète Simplifié & Botanique Africaine (IA Clinique)",
    "Kiswahili (Swahili)": "Msaidizi Rahisi wa Kisukari na Tiba za Asili Afrika (IA ya Kliniki)",
    "Lingála": "Mokambi Petee ya Sukari mpe Nkisi ya Afrika (IA ya Dokotolo)",
    "Mashi / Shi (Kivu)": "Omurhabazi wa Sukari n'Emizire y'Ekitu ya Africa (IA)",
    "Kinyarwanda / Kirundi": "Umujyanama mu Burwayi bwa Diyabete n'Ibyatsi bya Afurika (IA)",
    "English": "Simplified Diabetes Assistant & African Botanicals (Clinical AI)"
  },
  "select_language_label": {
    "Français": "🌐 Choisissez votre langue parlée (Kivu, Grands Lacs) :",
    "Kiswahili (Swahili)": "🌐 Chagua lugha yako ya mazungumzo (Kivu, Maziwa Makuu) :",
    "Lingála": "🌐 Pona monoko na yo ya koloba (Kivu, Maziwa Makuu) :",
    "Mashi / Shi (Kivu)": "🌐 Oshoole olulimi lwawe lw'okudesa (Kivu) :",
    "Kinyarwanda / Kirundi": "🌐 Hitamo ururimi rwawe ugerageza kuvuga :",
    "English": "🌐 Choose your preferred spoken language (East Africa) :"
  },
  "choose_profile_label": {
    "Français": "👥 Sélectionnez un Profil Patient ou entrez un nouveau :",
    "Kiswahili (Swahili)": "👥 Chagua Wasifu wa Mgonjwa au ingiza mpya :",
    "Lingála": "👥 Pona profil ya monganga to kotisa ya sika :",
    "Mashi / Shi (Kivu)": "👥 Oshoole omurwayi canke oshire mupya :",
    "Kinyarwanda / Kirundi": "👥 Hitamo umwirondoro w'umurwayi cyangwa wandike mushya :",
    "English": "👥 Select a Patient Profile or create a new one :"
  },
  "login_btn": {
    "Français": "🚀 Accéder à l'Assistant Médical",
    "Kiswahili (Swahili)": "🚀 Ingia kwenye Msaidizi wa Tiba",
    "Lingála": "🚀 Kota na Mokambi ya Dokotolo",
    "Mashi / Shi (Kivu)": "🚀 Yaka mwa murhabazi wa muganga",
    "Kinyarwanda / Kirundi": "🚀 Injira ku Mujyanama mu Buvuzi",
    "English": "🚀 Access Medical Assistant"
  },
  "guest_mode_btn": {
    "Français": "👤 Continuer en mode invité rapide (Sans inscription)",
    "Kiswahili (Swahili)": "👤 Endelea kama Mgeni haraka (Bila kujisajili)",
    "Lingála": "👤 Koba lokola mopaya noki (Zanga komikomisa)",
    "Mashi / Shi (Kivu)": "👤 Gjira buzira kujiandikisha",
    "Kinyarwanda / Kirundi": "👤 Komeza nkom'umushyitsi (Nta kwiyandikisha)",
    "English": "👤 Continue in Quick Guest Mode (No sign up required)"
  },
  "offline_secured_msg": {
    "Français": "🔒 Mode hors-ligne PWA activé • IA Médicale en arrière-plan • Sécurité des données de santé",
    "Kiswahili (Swahili)": "🔒 Mfumo wa Nje ya Mtandao umeweshwa • IA inafanya kazi pasipo mtandao • Usalama wa data ya afya",
    "Lingála": "🔒 Etamwoli zanga net • IA eza kosala na kati • Batanelo ya basango ya kolongono",
    "Mashi / Shi (Kivu)": "🔒 Nta murongo gwa net gwalonza • IA ekwola buzira net • Okubakua kwebitalo",
    "Kinyarwanda / Kirundi": "🔒 Uburyo budasaba interineti burakora • IA ikorera mu ibanga • Umutekano w'amabanga y'ubuzima",
    "English": "🔒 Offline PWA Enabled • Edge Medical AI in background • Health Data Security"
  },
  "welcome_audio_btn": {
    "Français": "Écouter l'accueil en audio",
    "Kiswahili (Swahili)": "Sikiliza ukaribisho kwa sauti",
    "Lingála": "Yoka boyeyi malamu na mongongo",
    "Mashi / Shi (Kivu)": "Oyunve okuyakira kwa sauti",
    "Kinyarwanda / Kirundi": "Umva ikaze mu ijwi",
    "English": "Listen to welcome audio"
  },
  "press_orange_audio": {
    "Français": "💡 Appuyez sur le gros bouton orange pour entendre le guide vocal.",
    "Kiswahili (Swahili)": "💡 Bonyeza kitufe kikubwa cha machungwa kusikiliza mwongozo wa sauti.",
    "Lingála": "💡 Fina bouton monene ya orange mpo na koyoka mokambi ya mongongo.",
    "Mashi / Shi (Kivu)": "💡 Oshiye ku kinwani kinji c'icungwa mpu oyunve sauti.",
    "Kinyarwanda / Kirundi": "💡 Kanda ku gukubuto kinini cy'umuhondo wumve amabwiriza y'ijwi.",
    "English": "💡 Press the large orange button to hear the voice guide."
  },
  "step_1_lang": {
    "Français": "1. Choisissez Votre Langue / Chagua Lugha Yako",
    "Kiswahili (Swahili)": "1. Chagua Lugha Yako / Choisissez Votre Langue",
    "Lingála": "1. Pona Monoko na Yo / Chagua Lugha Yako",
    "Mashi / Shi (Kivu)": "1. Oshoole Olulimi Lwawe / Chagua Lugha",
    "Kinyarwanda / Kirundi": "1. Hitamo Ururimi Rwawe / Chagua Lugha Yako",
    "English": "1. Choose Your Language / Chagua Lugha Yako"
  },
  "step_1_lang_sub": {
    "Français": "Appuyez sur votre langue préférée pour que l'application parle et vous réponde :",
    "Kiswahili (Swahili)": "Bonyeza lugha uipendayo ili programu izungumze na kukujibu :",
    "Lingála": "Fina na monoko oliki mpo application eloba na yo :",
    "Mashi / Shi (Kivu)": "Oshiye ku lulimi lwawe lwawe mpu program edese nawe :",
    "Kinyarwanda / Kirundi": "Kanda ku rurimi wifuza kugirango porogaramu ivuge nawe :",
    "English": "Tap your preferred language so the app speaks and responds to you:"
  },
  "step_2_user": {
    "Français": "2. Qui se connecte aujourd'hui ? (Cliquez sur votre photo)",
    "Kiswahili (Swahili)": "2. Nani anaingia leo? (Bonyeza picha yako)",
    "Lingála": "2. Nani azali kokota lelo? (Fina foto na yo)",
    "Mashi / Shi (Kivu)": "2. Ndi wayisa zene? (Oshiye ku foto yawe)",
    "Kinyarwanda / Kirundi": "2. Ninde ugiye kwinjira uyu munsi? (Kanda ku ifoto yawe)",
    "English": "2. Who is logging in today? (Click your photo)"
  },
  "step_2_user_sub": {
    "Français": "Interface facile et visuelle pour patients et familles du Kivu :",
    "Kiswahili (Swahili)": "Mfumo rahisi na wa picha kwa wagonjwa na familia za Kivu :",
    "Lingála": "Lolenge petee na bafoto mpo na babeele mpe mabota ya Kivu :",
    "Mashi / Shi (Kivu)": "Okubona kwayorho kub'abarwayi n'emilyango ye Kivu :",
    "Kinyarwanda / Kirundi": "Uburyo bworoheje kandi bw'amashusho kubarwayi n'imiryango yo mu Kivu :",
    "English": "Easy and visual interface for Kivu patients and families:"
  },
  "new_patient_btn": {
    "Français": "+ Nouveau Patient",
    "Kiswahili (Swahili)": "+ Mgonjwa Mpya",
    "Lingála": "+ Mobeele ya Sika",
    "Mashi / Shi (Kivu)": "+ Omurwayi Mupya",
    "Kinyarwanda / Kirundi": "+ Umurwayi Mushya",
    "English": "+ New Patient"
  },
  "chosen_badge": {
    "Français": "Choisi",
    "Kiswahili (Swahili)": "Amechaguliwa",
    "Lingála": "Eponami",
    "Mashi / Shi (Kivu)": "Ashozire",
    "Kinyarwanda / Kirundi": "Yahiswe",
    "English": "Selected"
  },
  "enter_app_btn": {
    "Français": "ENTRER DANS L'APPLICATION",
    "Kiswahili (Swahili)": "INGIA KWENYE PROGRAMU",
    "Lingála": "KOTA NA APPLICATION",
    "Mashi / Shi (Kivu)": "YAKA MU PROGRAMU",
    "Kinyarwanda / Kirundi": "INJIRA MURI POROGARAMU",
    "English": "ENTER APPLICATION"
  },
  "register_new_title": {
    "Français": "Enregistrer un Nouveau Patient (Très Simple)",
    "Kiswahili (Swahili)": "Sajili Mgonjwa Mpya (Rahisi Sana)",
    "Lingála": "Komisa Mobeele ya Sika (Petee Mingi)",
    "Mashi / Shi (Kivu)": "Oyandike Omurwayi Mupya (Kwayorho)",
    "Kinyarwanda / Kirundi": "Iyandikishije Umurwayi Mushya (Biroroshye Cyane)",
    "English": "Register New Patient (Very Simple)"
  },
  "back_to_choice": {
    "Français": "← Retour au choix",
    "Kiswahili (Swahili)": "← Rudi kwenye uchaguzi",
    "Lingála": "← Zonga na kopona",
    "Mashi / Shi (Kivu)": "← Galuka mu kushoole",
    "Kinyarwanda / Kirundi": "← Subira inyuma",
    "English": "← Back to selection"
  },
  "full_name_label": {
    "Français": "Nom complet ou Surnom du Patient",
    "Kiswahili (Swahili)": "Jina kamili au Jina la utani la Mgonjwa",
    "Lingála": "Kombo mobimba to ya liyebisi ya Mobeele",
    "Mashi / Shi (Kivu)": "Izina lyoshi canke izina lya kaale kw'Omurwayi",
    "Kinyarwanda / Kirundi": "Izina ryoose cyangwa akazina k'Umurwayi",
    "English": "Full name or nickname of Patient"
  },
  "age_label": {
    "Français": "Âge approximatif",
    "Kiswahili (Swahili)": "Umri wa makadirio",
    "Lingála": "MBula ya kopesa",
    "Mashi / Shi (Kivu)": "Myaka y'okugera",
    "Kinyarwanda / Kirundi": "Imyaka isanzwe",
    "English": "Approximate age"
  },
  "city_label": {
    "Français": "Ville / Région",
    "Kiswahili (Swahili)": "Mji / Eneo",
    "Lingála": "Engumba / Etuka",
    "Mashi / Shi (Kivu)": "Irenge / Ekitu",
    "Kinyarwanda / Kirundi": "Umujyi / Akarere",
    "English": "City / Region"
  },
  "cancel_btn": {
    "Français": "Annuler",
    "Kiswahili (Swahili)": "Ghairi",
    "Lingála": "Tika",
    "Mashi / Shi (Kivu)": "Oshabe",
    "Kinyarwanda / Kirundi": "Hagarika",
    "English": "Cancel"
  },
  "save_and_enter_btn": {
    "Français": "Enregistrer et Entrer",
    "Kiswahili (Swahili)": "Hifadhi na Ingia",
    "Lingála": "Bumba mpe Kota",
    "Mashi / Shi (Kivu)": "Obise n'Oyaka",
    "Kinyarwanda / Kirundi": "Bika kandi Winjire",
    "English": "Save and Enter"
  },

  // --- SIMPLE ACCESSIBLE VIEW (4 BIG BUTTONS) ---
  "hello_patient": {
    "Français": "Bonjour",
    "Kiswahili (Swahili)": "Jambo",
    "Lingála": "Mbote",
    "Mashi / Shi (Kivu)": "Buke",
    "Kinyarwanda / Kirundi": "Muraho",
    "English": "Hello"
  },
  "your_status_normal": {
    "Français": "Votre glycémie est normale",
    "Kiswahili (Swahili)": "Sukari yako iko sawa na ya kawaida",
    "Lingála": "Sukari na yo eza malamu",
    "Mashi / Shi (Kivu)": "Esukari yawe eri nyinja",
    "Kinyarwanda / Kirundi": "Isukari yawe iri mu rugero ruzima",
    "English": "Your glucose level is normal"
  },
  "your_status_warn": {
    "Français": "Glycémie à surveiller",
    "Kiswahili (Swahili)": "Sukari inahitaji uangalifu",
    "Lingála": "Sukari eza ya kotalela",
    "Mashi / Shi (Kivu)": "Esukari erhanolerezwa",
    "Kinyarwanda / Kirundi": "Isukari ikeneye gukurikiranwa",
    "English": "Glucose requires attention"
  },
  "your_status_danger": {
    "Français": "Urgence médicale - Glycémie élevée",
    "Kiswahili (Swahili)": "Hatari kubwa ya Tiba - Sukari iko juu sana",
    "Lingála": "Likama ya monganga - Sukari eza likolo mingi",
    "Mashi / Shi (Kivu)": "Obudaha bwa muganga - Esukari enji",
    "Kinyarwanda / Kirundi": "Ubutabazi bwa muganga - Isukari iri hejuru cyane",
    "English": "Medical Emergency - High Glucose"
  },
  "press_button_hint": {
    "Français": "Appuyez sur un des quatre gros boutons pour parler ou montrer une photo à l'assistant IA.",
    "Kiswahili (Swahili)": "Bonyeza kitufe kimoja kati ya vinne vikubwa kuzungumza au kuonyesha picha kwa msaidizi wa IA.",
    "Lingála": "Fina moko ya ba boutons minene minei mpo na koloba to kolakisa foto na IA.",
    "Mashi / Shi (Kivu)": "Oshiye ku binwani binji binani mpu odese canke oyereke ifoto kwa IA.",
    "Kinyarwanda / Kirundi": "Kanda kuri kimwe mu bibuto binini bine kugirango uvuge cyangwa wereke IA ifoto.",
    "English": "Press one of the four large buttons to speak or show a photo to the AI assistant."
  },
  "btn_speak_ai": {
    "Français": "PARLER À L'IA (VOCAL)",
    "Kiswahili (Swahili)": "ZUNGUMZA NA IA (SAUTI)",
    "Lingála": "LOBA NA IA (MONGONGO)",
    "Mashi / Shi (Kivu)": "DESA NA IA (SAUTI)",
    "Kinyarwanda / Kirundi": "VUGA NA IA (IJWI)",
    "English": "SPEAK TO AI (VOICE)"
  },
  "btn_speak_ai_sub": {
    "Français": "Dites vos symptômes en Swahili, Lingala, Mashi...",
    "Kiswahili (Swahili)": "Sema dalili zako kwa Kiswahili, Lingala, au lugha ya nyumbani...",
    "Lingála": "Loba bilembo na yo na Lingala, Swahili, Mashi...",
    "Mashi / Shi (Kivu)": "Desa oku warhumwa mu Mashi canke Swahili...",
    "Kinyarwanda / Kirundi": "Vuga uko wiyumva mu Kinyarwanda cyangwa Kiswahili...",
    "English": "Speak your symptoms in local East African languages..."
  },
  "btn_photo_meal": {
    "Français": "PHOTO REPAS / TISANE",
    "Kiswahili (Swahili)": "PICHA CHAKULA / DAWA",
    "Lingála": "FOTO BILEI / NKISI",
    "Mashi / Shi (Kivu)": "IFOTO EBYOKULYA / EMIZIRE",
    "Kinyarwanda / Kirundi": "IFOTO Y'IFUNGURO / IBYATSI",
    "English": "PHOTO MEAL / HERBS"
  },
  "btn_photo_meal_sub": {
    "Français": "Photographiez votre plat ou votre remède traditionnel",
    "Kiswahili (Swahili)": "Piga picha chakula chako au dawa ya asili kuangalia sukari",
    "Lingála": "Kanga foto ya bilei na yo to nkisi ya bonkoko",
    "Mashi / Shi (Kivu)": "Oshaye ifoto ly'ebyokulya canke omudaherho",
    "Kinyarwanda / Kirundi": "Fata ifoto y'ifunguro ryawe cyangwa umuti w'ibyatsi",
    "English": "Take a picture of your meal or traditional herbal remedy"
  },
  "btn_herbal_guide": {
    "Français": "PLANTES KIVU (GUIDE)",
    "Kiswahili (Swahili)": "MIMEA YA KIVU (MWONGOZO)",
    "Lingála": "MATITI YA KIVU (BUKU)",
    "Mashi / Shi (Kivu)": "EMIZIRE YE KIVU (OSHOOLE)",
    "Kinyarwanda / Kirundi": "IBYATSI BYO MU KIVU",
    "English": "KIVU HERBAL GUIDE"
  },
  "btn_herbal_guide_sub": {
    "Français": "Posologie Vernonia, Moringa, Bissap sans danger",
    "Kiswahili (Swahili)": "Maelekezo ya Moringa, Ndolé, na Bissap bila madhara",
    "Lingála": "Kolya Moringa, Ndolé, na Bissap malamu",
    "Mashi / Shi (Kivu)": "Okukolesa Moringa, Vernonia buzira kayeebwa",
    "Kinyarwanda / Kirundi": "Amabwiriza yo gukoresha Moringa, Ndolé, na Bissap",
    "English": "Safe dosage for Moringa, Vernonia, Hibiscus tea"
  },
  "btn_sos_help": {
    "Français": "SOS URGENCE MÉDICALE",
    "Kiswahili (Swahili)": "SOS MSAADA WA HARAKA",
    "Lingála": "SOS LISUNGI YA MBALAKA",
    "Mashi / Shi (Kivu)": "SOS OBUDAHA BW'OKUBAKUA",
    "Kinyarwanda / Kirundi": "SOS UBUTABAZI BYIHUSE",
    "English": "SOS MEDICAL EMERGENCY"
  },
  "btn_sos_help_sub": {
    "Français": "En cas de malaise, vertige ou glycémie extrême",
    "Kiswahili (Swahili)": "Ikiwa unajisikia kizunguzungu au sukari iko juu sana",
    "Lingála": "Soki ozali koyoka kizunguzungu to sukari eza likolo",
    "Mashi / Shi (Kivu)": "Akaba warhumwa obugoye canke esukari yalumire",
    "Kinyarwanda / Kirundi": "Mu gihe ugize isereri cyangwa isukari yazamutse cyane",
    "English": "In case of dizziness, fainting or extreme glucose spikes"
  },
  "glucose_indicator": {
    "Français": "Glycémie",
    "Kiswahili (Swahili)": "Sukari kwa damu / Sukali",
    "Lingála": "Sukari na makila",
    "Mashi / Shi (Kivu)": "Esukari mu buhije",
    "Kinyarwanda / Kirundi": "Isukari mu maraso",
    "English": "Blood Glucose"
  },
  "pressure_indicator": {
    "Français": "Tension Artérielle",
    "Kiswahili (Swahili)": "Presha / Moyo",
    "Lingála": "Tension / Motema",
    "Mashi / Shi (Kivu)": "Empugumo / Omurima",
    "Kinyarwanda / Kirundi": "Umuvuduko w'amaraso",
    "English": "Blood Pressure"
  },
  "weight_indicator": {
    "Français": "Poids de forme",
    "Kiswahili (Swahili)": "Uzito wa mwili (Kilo)",
    "Lingála": "Kilo ya nzoto",
    "Mashi / Shi (Kivu)": "Obureme bw'omurwe",
    "Kinyarwanda / Kirundi": "Ibiro by'umubiri",
    "English": "Body Weight"
  },
  "status_normal_label": {
    "Français": "NORMAL (Bon)",
    "Kiswahili (Swahili)": "MZURI (Salama)",
    "Lingála": "MALAMU (Salama)",
    "Mashi / Shi (Kivu)": "NYINJA (Safi)",
    "Kinyarwanda / Kirundi": "NEZA (Bikwiriye)",
    "English": "NORMAL (Good)"
  },
  "status_warn_label": {
    "Français": "VIGILANCE",
    "Kiswahili (Swahili)": "ANGALIA SANA",
    "Lingála": "KOTALELA",
    "Mashi / Shi (Kivu)": "RHUNOLEREZWA",
    "Kinyarwanda / Kirundi": "GUKURIKIRANA",
    "English": "WARNING (Monitor)"
  },
  "status_danger_label": {
    "Français": "URGENCE",
    "Kiswahili (Swahili)": "HATARI KUBWA",
    "Lingála": "LIKAMA",
    "Mashi / Shi (Kivu)": "OBUDAHA",
    "Kinyarwanda / Kirundi": "UBUTABAZI",
    "English": "EMERGENCY"
  },
  "manual_entry_btn": {
    "Français": "✏️ Saisir ou Corriger une Mesure (Glycémie / Poids / Tension)",
    "Kiswahili (Swahili)": "✏️ Ingiza au Rekebisha Vipimo (Sukari / Uzito / Presha)",
    "Lingála": "✏️ Kotisa to Bongisa Mekelo (Sukari / Kilo / Tension)",
    "Mashi / Shi (Kivu)": "✏️ Oshaye canke okagera ekipimo (Esukari / Obureme)",
    "Kinyarwanda / Kirundi": "✏️ Andika cyangwa kosora igipimo (Isukari / Ibiro / Umuvuduko)",
    "English": "✏️ Enter or Update Measurement (Glucose / Weight / BP)"
  },
  "switch_to_clinical_btn": {
    "Français": "📊 Passer au Tableau de Bord Détaillé & Courbes Évolutives →",
    "Kiswahili (Swahili)": "📊 Nenda kwenye Deshibodi Kamili & Grafu za Maendeleo →",
    "Lingála": "📊 Kende na Etanda ya Makambo Yonsō & Ba Graphiques →",
    "Mashi / Shi (Kivu)": "📊 Yaka mu shagirho linji n'emigulu y'esukari →",
    "Kinyarwanda / Kirundi": "📊 Jya ku Isura y'Incamake irambuye & Imibare ->",
    "English": "📊 Switch to Detailed Dashboard & Progress Charts →"
  },

  // --- DASHBOARD VIEW ---
  "daily_tips_title": {
    "Français": "💡 Conseil Botanique & Alimentaire du Jour",
    "Kiswahili (Swahili)": "💡 Ushauri wa Mimea na Chakula wa Leo",
    "Lingála": "💡 Toli ya Matiti mpe Bilei ya Lelo",
    "Mashi / Shi (Kivu)": "💡 Omuti n'ebyokulya by'olusiku",
    "Kinyarwanda / Kirundi": "💡 Inama y'Umunsi ku Byatsi n'Imirire",
    "English": "💡 Today's Botanical & Dietary Tip"
  },
  "add_measurement_title": {
    "Français": "➕ Ajouter une Mesure Clinique",
    "Kiswahili (Swahili)": "➕ Ongeza Kipimo cha Tiba",
    "Lingála": "➕ Bakisa Mekelo ya Dokotolo",
    "Mashi / Shi (Kivu)": "➕ Oshaye ekipimo c'obulaamire",
    "Kinyarwanda / Kirundi": "➕ Ongeramo Igipimo cya Muganga",
    "English": "➕ Add Clinical Measurement"
  },
  "type_glucose": {
    "Français": "Glycémie",
    "Kiswahili (Swahili)": "Sukari (mg/dL)",
    "Lingála": "Sukari (mg/dL)",
    "Mashi / Shi (Kivu)": "Esukari (mg/dL)",
    "Kinyarwanda / Kirundi": "Isukari (mg/dL)",
    "English": "Glucose (mg/dL)"
  },
  "type_pressure": {
    "Français": "Tension Artérielle",
    "Kiswahili (Swahili)": "Presha ya Damu",
    "Lingála": "Tension ya Makila",
    "Mashi / Shi (Kivu)": "Empugumo y'omu buhije",
    "Kinyarwanda / Kirundi": "Umuvuduko w'Amaraso",
    "English": "Blood Pressure"
  },
  "type_weight": {
    "Français": "Poids Corporel",
    "Kiswahili (Swahili)": "Uzito wa Mwili (Kg)",
    "Lingála": "Kilo ya Nzoto (Kg)",
    "Mashi / Shi (Kivu)": "Obureme bw'omurwe (Kg)",
    "Kinyarwanda / Kirundi": "Ibiro by'Umubiri (Kg)",
    "English": "Body Weight (Kg)"
  },
  "save_log_btn": {
    "Français": "💾 Enregistrer et synchroniser",
    "Kiswahili (Swahili)": "💾 Hifadhi na uunganishe",
    "Lingála": "💾 Bumba mpe salisa",
    "Mashi / Shi (Kivu)": "💾 Obise n'okuhubana",
    "Kinyarwanda / Kirundi": "💾 Bika kandi uhuze",
    "English": "💾 Save and Sync"
  },
  "medical_history_title": {
    "Français": "📋 Historique des Mesures & Synchronisation IoT",
    "Kiswahili (Swahili)": "📋 Kumbukumbu za Vipimo & Vifaa vya IoT",
    "Lingála": "📋 Lisolo ya Mekelo mpe Ba Appareils IoT",
    "Mashi / Shi (Kivu)": "📋 Emigulu y'ebipimo n'ebigalire",
    "Kinyarwanda / Kirundi": "📋 Amateka y'I bipimo & Ikoranabuhanga rya IoT",
    "English": "📋 Measurement History & IoT Sync"
  },
  "no_logs_msg": {
    "Français": "Aucune mesure enregistrée. Connectez un appareil ou ajoutez manuellement ci-dessus.",
    "Kiswahili (Swahili)": "Hakuna kipimo kilichohifadhiwa. Unganisha kifaa au ingiza mwenyewe hapo juu.",
    "Lingála": "Mekelo moko te ezali. Kanga appareil to kotisa na maboko likolo.",
    "Mashi / Shi (Kivu)": "Nta kipimo kigakishirwe. Ogale ekigalire canke oshaye na kugulu.",
    "Kinyarwanda / Kirundi": "Nta gipimo gihari. Huza igikoresho cyangwa wandike wowe ubwawe hejuru.",
    "English": "No measurements recorded. Connect a device or add manually above."
  },
  "ask_ai_question_link": {
    "Français": "Demander à l'IA →",
    "Kiswahili (Swahili)": "Uliza Akili Bandia (IA) →",
    "Lingála": "Tuna na IA →",
    "Mashi / Shi (Kivu)": "Odoze kwa IA →",
    "Kinyarwanda / Kirundi": "Baza IA ->",
    "English": "Ask AI ->"
  },
  "congrats_title": {
    "Français": "🎉 Félicitations Kivu Health !",
    "Kiswahili (Swahili)": "🎉 Hongera Afya ya Kivu !",
    "Lingála": "🎉 Felicitations Kolongono ya Kivu !",
    "Mashi / Shi (Kivu)": "🎉 Ogalhe obulaamire bwe Kivu !",
    "Kinyarwanda / Kirundi": "🎉 Hongera Ubuzima mu Kivu !",
    "English": "🎉 Congratulations Kivu Health!"
  },
  "congrats_desc": {
    "Français": "Votre glycémie est restée stable pendant 7 jours consécutifs grâce à une alimentation locale équilibrée !",
    "Kiswahili (Swahili)": "Sukari yako imebaki shwari kwa siku 7 mfululizo kutokana na chakula bora cha nyumbani !",
    "Lingála": "Sukari na yo etikalaki malamu mikolo 7 mpo na bilei malamu ya mboka !",
    "Mashi / Shi (Kivu)": "Esukari yawe enjiirire nyinja mw'ensiku 7 ku lwerhu lw'ebyokulya by'ekitu !",
    "Kinyarwanda / Kirundi": "Isukari yawe yagumye mu rugero ruzima iminsi 7 ikurikirana kubera imirire myiza y'iwacu !",
    "English": "Your blood glucose remained stable for 7 consecutive days thanks to balanced traditional meals!"
  },

  // --- DIAGNOSTIC VIEW ---
  "diag_title": {
    "Français": "Diagnostic IA & Analyse Culinaire Kivu",
    "Kiswahili (Swahili)": "Uchunguzi wa IA & Uchambuzi wa Mapishi ya Kivu",
    "Lingála": "Tala na IA mpe Biloko ya Kolia ya Kivu",
    "Mashi / Shi (Kivu)": "Okulaamira kwa IA n'ebyokulya bya Kivu",
    "Kinyarwanda / Kirundi": "Ibizamini by'IA & Imirire yo mu Kivu",
    "English": "AI Diagnostic & Kivu Culinary Analysis"
  },
  "diag_subtitle": {
    "Français": "Évaluez vos repas traditionnels (Fufu, Saka-Saka, Ndakala) ou vos plantes thérapeutiques (Moringa, Ndolé)",
    "Kiswahili (Swahili)": "Chunguza vyakula vyako vya asili (Fufu, Saka-Saka, Ndakala) au mimea ya tiba (Moringa, Ndolé)",
    "Lingála": "Tala bilei ya mboka na yo (Fufu, Saka-Saka, Ndakala) to matiti ya nkisi (Moringa, Ndolé)",
    "Mashi / Shi (Kivu)": "Oshagirhe ebyokulya byawe (Fufu, Ndakala) canke emizire (Moringa, Ndolé)",
    "Kinyarwanda / Kirundi": "Suzuma amafunguro ya gakondo (Fufu, Ndakala) cyangwa ibyatsi by'ubuvuzi (Moringa, Ndolé)",
    "English": "Evaluate traditional meals (Fufu, Cassava leaves, Ndakala) or medicinal herbs (Moringa, Vernonia)"
  },
  "placeholder_question": {
    "Français": "Ex: Est-ce que je peux boire du jus d'hibiscus (Bissap) sucré si ma glycémie est à 160 mg/dL ?",
    "Kiswahili (Swahili)": "Mfano: Je, ninaweza kunywa juisi ya Bissap yenye sukari ikiwa sukari yangu ni 160 mg/dL ?",
    "Lingála": "Ndakisa: Nkokí komela jus ya Bissap na sukari soki sukari na ngai eza 160 mg/dL ?",
    "Mashi / Shi (Kivu)": "Lurhakasi: Nkagera okunywa Bissap na sukari akaba esukari yani eri 160 ?",
    "Kinyarwanda / Kirundi": "Urugero: Nshobora kunywa umutobe wa Bissap urimo isukari niba isukari yanjye iri kuri 160 mg/dL ?",
    "English": "Ex: Can I drink sweetened hibiscus tea (Bissap) if my blood glucose is at 160 mg/dL ?"
  },
  "btn_take_photo_diag": {
    "Français": "📸 Photo Repas / Plante",
    "Kiswahili (Swahili)": "📸 Picha Chakula / Mmea",
    "Lingála": "📸 Foto Bilei / Matiti",
    "Mashi / Shi (Kivu)": "📸 Ifoto Ebyokulya / Emizire",
    "Kinyarwanda / Kirundi": "📸 Ifoto y'Ifunguro / Ibyatsi",
    "English": "📸 Photo Meal / Herb"
  },
  "btn_record_audio_diag": {
    "Français": "🎤 Enregistrer Audio",
    "Kiswahili (Swahili)": "🎤 Rekodi Sauti",
    "Lingála": "🎤 Kanga Mongongo",
    "Mashi / Shi (Kivu)": "🎤 Oyanse Sauti",
    "Kinyarwanda / Kirundi": "🎤 Fata Ijwi",
    "English": "🎤 Record Audio"
  },
  "btn_analyze_submit": {
    "Français": "⚡ Lancer l'Analyse Médicale",
    "Kiswahili (Swahili)": "⚡ Anza Uchambuzi wa Tiba",
    "Lingála": "⚡ Banda Kotala ya Dokotolo",
    "Mashi / Shi (Kivu)": "⚡ Yansa Okulaamira kwa Muganga",
    "Kinyarwanda / Kirundi": "⚡ TANGIRA ISUZUMA RYA MUGANGA",
    "English": "⚡ Start Clinical Analysis"
  },
  "ai_result_title": {
    "Français": "🌿 Diagnostic IA Clinique & Recommandation Kivu",
    "Kiswahili (Swahili)": "🌿 Uchunguzi wa IA ya Kliniki & Ushauri wa Kivu",
    "Lingála": "🌿 Kotala ya Dokotolo IA mpe Toli ya Kivu",
    "Mashi / Shi (Kivu)": "🌿 Okulaamira kwa IA n'obuhubani bwe Kivu",
    "Kinyarwanda / Kirundi": "🌿 Isuzuma rya Muganga IA n'Inama zo mu Kivu",
    "English": "🌿 Clinical AI Diagnostic & Kivu Recommendation"
  },

  // --- HERBAL DIRECTORY VIEW ---
  "directory_title": {
    "Français": "Pharmacopée & Mets Traditionnels du Kivu",
    "Kiswahili (Swahili)": "Mimea ya Tiba na Vyakula vya Asili vya Kivu",
    "Lingála": "Matiti ya Nkisi mpe Biloko ya Kolia ya Kivu",
    "Mashi / Shi (Kivu)": "Emizire y'ekitu n'ebyokulya bya Kivu",
    "Kinyarwanda / Kirundi": "Ibyatsi by'Ubuvuzi n'Amafunguro Gakondo byo mu Kivu",
    "English": "Pharmacopoeia & Traditional Meals of Kivu"
  },
  "directory_subtitle": {
    "Français": "Répertoire validé des plantes thérapeutiques et plats africains pour le contrôle du diabète",
    "Kiswahili (Swahili)": "Orodha iliyothibitishwa ya mimea ya tiba na vyakula vya Afrika kwa udhibiti wa kisukari",
    "Lingála": "Molongo ya matiti ya nkisi mpe bilei ya Afrika mpo na kobongisa sukari",
    "Mashi / Shi (Kivu)": "Oshoole rw'emizire y'ekitu n'ebyokulya bya Africa mu kujirira esukari",
    "Kinyarwanda / Kirundi": "Urutonde rwemejwe rw'ibyatsi by'ubuvuzi n'amafunguro nyafurika mu kuyobora diyabete",
    "English": "Validated directory of medicinal herbs and African meals for diabetes management"
  },
  "search_placeholder": {
    "Français": "Rechercher une plante (Moringa, Ndolé) ou un plat (Fufu, Ndakala)...",
    "Kiswahili (Swahili)": "Tafuta mmea (Moringa, Ndolé) au chakula (Fufu, Ndakala)...",
    "Lingála": "Luka matiti (Moringa, Ndolé) to bilei (Fufu, Ndakala)...",
    "Mashi / Shi (Kivu)": "Oronze omuti (Moringa, Ndolé) canke ebyokulya (Fufu, Ndakala)...",
    "Kinyarwanda / Kirundi": "Shakisha icyatsi (Moringa, Ndolé) cyangwa ifunguro (Fufu, Ndakala)...",
    "English": "Search plant (Moringa, Vernonia) or meal (Fufu, Ndakala)..."
  },
  "tab_plants_label": {
    "Français": "🌿 Plantes Médicinales",
    "Kiswahili (Swahili)": "🌿 Mimea ya Tiba",
    "Lingála": "🌿 Matiti ya Nkisi",
    "Mashi / Shi (Kivu)": "🌿 Emizire y'Ekitu",
    "Kinyarwanda / Kirundi": "🌿 Ibyatsi by'Ubuvuzi",
    "English": "🌿 Medicinal Plants"
  },
  "tab_meals_label": {
    "Français": "🥣 Mets & Plats Traditionnels",
    "Kiswahili (Swahili)": "🥣 Vyakula & Mapishi ya Asili",
    "Lingála": "🥣 Bilei & Biloko ya Kolia",
    "Mashi / Shi (Kivu)": "🥣 Ebyokulya by'Ekitu",
    "Kinyarwanda / Kirundi": "🥣 Amafunguro Gakondo",
    "English": "🥣 Traditional Meals & Dishes"
  },
  "traditional_use_label": {
    "Français": "Usage Traditionnel",
    "Kiswahili (Swahili)": "Matumizi ya Asili",
    "Lingála": "Kosala ya Bonkoko",
    "Mashi / Shi (Kivu)": "Okukolesa kw'Ekitu",
    "Kinyarwanda / Kirundi": "Ikoreshwa ry'Ibanze",
    "English": "Traditional Use"
  },
  "prep_guide_label": {
    "Français": "Guide de Préparation",
    "Kiswahili (Swahili)": "Mwongozo wa Mapishi",
    "Lingála": "Lolenge ya Kolamba",
    "Mashi / Shi (Kivu)": "Oshoole rw'ekirhangiro",
    "Kinyarwanda / Kirundi": "Amabwiriza yo GUTEGURA",
    "English": "Preparation Guide"
  },
  "safety_warning_label": {
    "Français": "Avertissement de Sécurité",
    "Kiswahili (Swahili)": "Tahadhari ya Usalama",
    "Lingála": "Kebisi ya Kolongono",
    "Mashi / Shi (Kivu)": "Okubakua kw'Obulaamire",
    "Kinyarwanda / Kirundi": "Iburira ku Mutekano",
    "English": "Safety Warning"
  },
  "check_with_ai_btn": {
    "Français": "Vérifier avec l'IA",
    "Kiswahili (Swahili)": "Angalia na Akili Bandia (IA)",
    "Lingála": "Tala na IA",
    "Mashi / Shi (Kivu)": "Oronze na IA",
    "Kinyarwanda / Kirundi": "Suzumisha na IA",
    "English": "Check with AI"
  },

  // --- CHATBOT VIEW ---
  "chat_title": {
    "Français": "Assistant Vocal & Conversationnel IA",
    "Kiswahili (Swahili)": "Msaidizi wa Sauti & Mazungumzo wa IA",
    "Lingála": "Mokambi ya Mongongo & Lisolo IA",
    "Mashi / Shi (Kivu)": "Omurhabazi wa Sauti na Kudesa wa IA",
    "Kinyarwanda / Kirundi": "Umujyanama w'Ijwi & Ikiganiro na IA",
    "English": "Voice & Conversational AI Assistant"
  },
  "chat_subtitle": {
    "Français": "Posez vos questions de santé en toute liberté (Swahili, Lingala, Mashi, Kinyarwanda, Français...)",
    "Kiswahili (Swahili)": "Uliza maswali yako ya afya kwa uhuru (Kiswahili, Lingala, Mashi, Kinyarwanda...)",
    "Lingála": "Tuna mituna na yo ya kolongono na bonsomi (Lingala, Swahili, Mashi...)",
    "Mashi / Shi (Kivu)": "Odoze emiloza yawe y'obulaamire mu Mashi, Swahili...",
    "Kinyarwanda / Kirundi": "Baza ibibazo byawe by'ubuzima mu bwisanzure (Kinyarwanda, Kiswahili...)",
    "English": "Ask your health questions freely (Swahili, Lingala, Kinyarwanda, English...)"
  },
  "input_ph_chat": {
    "Français": "Écrivez ou parlez de vos symptômes ici...",
    "Kiswahili (Swahili)": "Andika au zungumza kuhusu dalili zako hapa...",
    "Lingála": "Komá to loba mpo na bilembo na yo awa...",
    "Mashi / Shi (Kivu)": "Owandike canke odese ku warhumwa hano...",
    "Kinyarwanda / Kirundi": "Andika cyangwa uvuge uko wiyumva hano...",
    "English": "Type or speak about your symptoms here..."
  },
  "send_btn": {
    "Français": "Envoyer",
    "Kiswahili (Swahili)": "Tuma",
    "Lingála": "Tinda",
    "Mashi / Shi (Kivu)": "Ohuhe",
    "Kinyarwanda / Kirundi": "Ohereza",
    "English": "Send"
  },
  "listen_btn": {
    "Français": "Écouter la réponse",
    "Kiswahili (Swahili)": "Sikiliza jibu",
    "Lingála": "Yoka eyano",
    "Mashi / Shi (Kivu)": "Oyunve eishu",
    "Kinyarwanda / Kirundi": "Umva igisubizo",
    "English": "Listen to reply"
  },

  // --- EMERGENCY MODAL ---
  "sos_title": {
    "Français": "🚨 URGENCE MÉDICALE SOS - KIVU & GRANDS LACS",
    "Kiswahili (Swahili)": "🚨 MSAADA WA HARAKA SOS - KIVU & MAZIWA MAKUU",
    "Lingála": "🚨 LISUNGI YA MBALAKA SOS - KIVU",
    "Mashi / Shi (Kivu)": "🚨 OBUDAHA BW'OKUBAKUA SOS - KIVU",
    "Kinyarwanda / Kirundi": "🚨 UBUTABAZI BYIHUSE SOS - KIVU",
    "English": "🚨 SOS MEDICAL EMERGENCY - KIVU & EAST AFRICA"
  },
  "sos_subtitle": {
    "Français": "En cas d'hyperglycémie extrême, perte de connaissance ou vertige sévère :",
    "Kiswahili (Swahili)": "Ikiwa kuna sukari ya juu sana, kupoteza fahamu au kizunguzungu kikali :",
    "Lingála": "Soki sukari eza likolo mingi, kizunguzungu to kobungisa makanisi :",
    "Mashi / Shi (Kivu)": "Akaba esukari yalumire bwanene, obugoye canke okuyegerwa :",
    "Kinyarwanda / Kirundi": "Mu gihe isukari yigiriye hejuru cyane cyangwa ugize isereri ikabije :",
    "English": "In case of severe hyperglycemia, loss of consciousness or extreme dizziness:"
  },
  "call_emergency_btn": {
    "Français": "📞 Appeler le Centre d'Urgence Médicale (114 / 112)",
    "Kiswahili (Swahili)": "📞 Piga Simu Kituo cha Dharura (114 / 112)",
    "Lingála": "📞 Benga Centre ya Mbalaka ya Monganga (114 / 112)",
    "Mashi / Shi (Kivu)": "📞 Ohamagare ahanywa h'Obudaha (114 / 112)",
    "Kinyarwanda / Kirundi": "📞 Hamagara Ikigo cy'Ubutabazi bw'Ibanze (114 / 112)",
    "English": "📞 Call Emergency Medical Center (114 / 112)"
  },
  "call_doctor_btn": {
    "Français": "👨🏽‍⚕️ Contacter le Médecin Traitant / Centre de Santé",
    "Kiswahili (Swahili)": "👨🏽‍⚕️ Wasiliana na Daktari au Kituo cha Afya",
    "Lingála": "👨🏽‍⚕️ Benga Monganga to Centre ya Kolongono",
    "Mashi / Shi (Kivu)": "👨🏽‍⚕️ Ohamagare Muganga canke Ekitari",
    "Kinyarwanda / Kirundi": "👨🏽‍⚕️ Hamagara Muganga cyangwa Ikigo Nderabuzima",
    "English": "👨🏽‍⚕️ Contact Treating Doctor / Health Center"
  },
  "send_sms_btn": {
    "Français": "💬 Envoyer Alerte SMS avec Coordonnées aux Proches",
    "Kiswahili (Swahili)": "💬 Tuma SMS ya Darura na Mahali Pako kwa Ndugu",
    "Lingála": "💬 Tinda SMS ya Mbalaka na Esika na yo na Libota",
    "Mashi / Shi (Kivu)": "💬 Ohuhe SMS y'obudaha na hofi wawe kub'ehiyu",
    "Kinyarwanda / Kirundi": "💬 Ohereza ubutumwa bugufi bw'ubutabazi ku muryango",
    "English": "💬 Send SMS Emergency Alert with GPS to Family"
  },

  // --- SIMPLE ACCESSIBLE VIEW EXTRA STRINGS ---
  "accessible_visual_voice_mode": {
    "Français": "Mode Visuel & Vocal Accessible",
    "Kiswahili (Swahili)": "Mfumo wa Picha na Sauti Rahisi",
    "Lingála": "Lolenge ya Bafoto na Mongongo Petee",
    "Mashi / Shi (Kivu)": "Okubona kwa Bafoto na Sauti Kwayorho",
    "Kinyarwanda / Kirundi": "Uburyo bw'Amashusho n'Ijwi Bworoheje",
    "English": "Accessible Visual & Voice Mode"
  },
  "listen_screen_btn": {
    "Français": "🔊 Écouter l'Écran",
    "Kiswahili (Swahili)": "🔊 Sikiliza Skrini",
    "Lingála": "🔊 Yoka Ekrani",
    "Mashi / Shi (Kivu)": "🔊 Oyunve Ekrani",
    "Kinyarwanda / Kirundi": "🔊 Umva Screen",
    "English": "🔊 Listen to Screen"
  },
  "detailed_mode_btn": {
    "Français": "Mode Détaillé 📊",
    "Kiswahili (Swahili)": "Mfumo wa Kliniki 📊",
    "Lingála": "Lolenge ya Dokotolo 📊",
    "Mashi / Shi (Kivu)": "Okubona kwa Muganga 📊",
    "Kinyarwanda / Kirundi": "Uburyo bwa Muganga 📊",
    "English": "Detailed Mode 📊"
  },
  "three_important_numbers": {
    "Français": "🔴 🟡 🟢 Vos 3 Chiffres Importants Aujourd'hui :",
    "Kiswahili (Swahili)": "🔴 🟡 🟢 Vipimo Vyako 3 Muhimu Leo :",
    "Lingála": "🔴 🟡 🟢 Bametrike na yo 3 ya Tika Lelo :",
    "Mashi / Shi (Kivu)": "🔴 🟡 🟢 Ebigero byawe 3 by'omugaso zene :",
    "Kinyarwanda / Kirundi": "🔴 🟡 🟢 Ibipimo byawe 3 by'ingenzi uyu munsi :",
    "English": "🔴 🟡 🟢 Your 3 Important Numbers Today :"
  },
  "connect_device_btn": {
    "Français": "🔌 Connecter Appareil / Saisie",
    "Kiswahili (Swahili)": "🔌 Unganisha Kifaa / Ingiza",
    "Lingála": "🔌 Kanga Appareil / Komisa",
    "Mashi / Shi (Kivu)": "🔌 Theganya Ebigalire / Oyandike",
    "Kinyarwanda / Kirundi": "🔌 Huza Igikoresho / Andika",
    "English": "🔌 Connect Device / Input"
  },
  "num_1_glucose": {
    "Français": "1. Glycémie (Sucre)",
    "Kiswahili (Swahili)": "1. Sukari kwa damu / Sukali",
    "Lingála": "1. Sukari na makila",
    "Mashi / Shi (Kivu)": "1. Esukari mu buhije",
    "Kinyarwanda / Kirundi": "1. Isukari mu maraso",
    "English": "1. Blood Glucose"
  },
  "num_2_pressure": {
    "Français": "2. Tension (Cœur)",
    "Kiswahili (Swahili)": "2. Presha / Moyo",
    "Lingála": "2. Tension / Motema",
    "Mashi / Shi (Kivu)": "2. Empugumo / Omurima",
    "Kinyarwanda / Kirundi": "2. Umuvuduko w'amaraso",
    "English": "2. Blood Pressure"
  },
  "num_3_weight": {
    "Français": "3. Poids Actuel",
    "Kiswahili (Swahili)": "3. Uzito wa mwili (Kilo)",
    "Lingála": "3. Kilo na yo",
    "Mashi / Shi (Kivu)": "3. Obureme bw'omubiri",
    "Kinyarwanda / Kirundi": "3. Ibilo by'umubiri",
    "English": "3. Current Weight"
  },
  "status_normal_short": {
    "Français": "NORMAL (Bon)",
    "Kiswahili (Swahili)": "MZURI (Salama)",
    "Lingála": "MALAMU",
    "Mashi / Shi (Kivu)": "NYINJA",
    "Kinyarwanda / Kirundi": "BYIZA (Salama)",
    "English": "NORMAL (Good)"
  },
  "status_warn_short": {
    "Français": "VIGILANCE",
    "Kiswahili (Swahili)": "ANGALIA SANA",
    "Lingála": "KOTALELA",
    "Mashi / Shi (Kivu)": "RHANOLEREZWA",
    "Kinyarwanda / Kirundi": "GUKURIKIRANWA",
    "English": "CAUTION"
  },
  "status_danger_short": {
    "Français": "URGENCE",
    "Kiswahili (Swahili)": "HATARI KUBWA",
    "Lingála": "LIKAMA YA MONGANGA",
    "Mashi / Shi (Kivu)": "OBUDAHA BWA MUGANGA",
    "Kinyarwanda / Kirundi": "UBUTABAZI BWA MUGANGA",
    "English": "EMERGENCY"
  },
  "status_monitor_short": {
    "Français": "SURVEILLER",
    "Kiswahili (Swahili)": "ANGALIA KIDOGO",
    "Lingála": "KOTALELA",
    "Mashi / Shi (Kivu)": "RHANOLEREZWA",
    "Kinyarwanda / Kirundi": "GUKURIKIRANWA",
    "English": "MONITOR"
  },
  "status_stable_short": {
    "Français": "STABLE",
    "Kiswahili (Swahili)": "INARIDHISHA",
    "Lingála": "STABLE",
    "Mashi / Shi (Kivu)": "KUJIKA",
    "Kinyarwanda / Kirundi": "IRIZIHIWE",
    "English": "STABLE"
  },
  "medical_ai_bg": {
    "Français": "🤖 Moteur IA Médical en Arrière-Plan",
    "Kiswahili (Swahili)": "🤖 Akili Bandia ya Tiba Nyuma",
    "Lingála": "🤖 Mayele ya Dokotolo IA na Simbi",
    "Mashi / Shi (Kivu)": "🤖 Ubwenge bwa Muganga IA inyuma",
    "Kinyarwanda / Kirundi": "🤖 Ubwenge bwa Muganga IA inyuma",
    "English": "🤖 Medical AI Engine Background"
  },
  "what_to_ask_show": {
    "Français": "Que souhaitez-vous demander ou montrer à l'Assistant ?",
    "Kiswahili (Swahili)": "Unataka kuuliza au kuonyesha nini kwa Msaidizi?",
    "Lingála": "Olingi kotuna to kolakisa nini na IA?",
    "Mashi / Shi (Kivu)": "Lonzi kuderha canke kuyereka nci kwa IA?",
    "Kinyarwanda / Kirundi": "Urashaka kubaza cyangwa kwereka iki IA?",
    "English": "What would you like to ask or show the Assistant?"
  },
  "press_4_buttons_hint": {
    "Français": "Appuyez sur l'un des 4 gros boutons ci-dessous. Tout est analysé automatiquement :",
    "Kiswahili (Swahili)": "Bonyeza kitufe kimoja kati ya 4 vikubwa hapa chini. Yote inachambuliwa moja kwa moja :",
    "Lingála": "Fina moko ya ba boutons 4 awa na se. Nionso ekotalami otomatik :",
    "Mashi / Shi (Kivu)": "Oshiye ku kinwani ciguma mu binani 4 hano muzimu. Byoshi bilolerezwa automatic :",
    "Kinyarwanda / Kirundi": "Kanda kuri kimwe mu bibuto 4 binini byo hasi. Byose bisuzumwa mu buryo bwikora :",
    "English": "Press one of the 4 big buttons below. Everything is analyzed automatically:"
  },
  "btn_1_audio": {
    "Français": "1. AUDIO (Voix)",
    "Kiswahili (Swahili)": "1. SAUTI (Zungumza)",
    "Lingála": "1. MONGONGO (Loba)",
    "Mashi / Shi (Kivu)": "1. SAUTI (Desa)",
    "Kinyarwanda / Kirundi": "1. IJWI (Vuga)",
    "English": "1. AUDIO (Voice)"
  },
  "speak_to_assistant": {
    "Français": "🎙️ Parler à l'Assistant",
    "Kiswahili (Swahili)": "🎙️ Zungumza na Msaidizi",
    "Lingála": "🎙️ Loba na IA",
    "Mashi / Shi (Kivu)": "🎙️ Desa na IA",
    "Kinyarwanda / Kirundi": "🎙️ Vuga na IA",
    "English": "🎙️ Speak to Assistant"
  },
  "btn_2_photo": {
    "Français": "2. PHOTO",
    "Kiswahili (Swahili)": "2. PICHA",
    "Lingála": "2. FOTO",
    "Mashi / Shi (Kivu)": "2. IFOTO",
    "Kinyarwanda / Kirundi": "2. IFOTO",
    "English": "2. PHOTO"
  },
  "photo_meal_plant": {
    "Français": "📸 Photographier Plat ou Plante",
    "Kiswahili (Swahili)": "📸 Piga Picha Chakula au Mimea",
    "Lingála": "📸 Kanga Foto ya Bilei to Matiti",
    "Mashi / Shi (Kivu)": "📸 Oshaye Ifoto ly'Ebyokulya canke Emizire",
    "Kinyarwanda / Kirundi": "📸 Fata Ifoto y'Ifunguro cyangwa Ibyatsi",
    "English": "📸 Photograph Meal or Plant"
  },
  "btn_3_video": {
    "Français": "3. VIDÉO",
    "Kiswahili (Swahili)": "3. VIDEO",
    "Lingála": "3. VIDEO",
    "Mashi / Shi (Kivu)": "3. VIDEO",
    "Kinyarwanda / Kirundi": "3. VIDEO",
    "English": "3. VIDEO"
  },
  "video_cooking_herbs": {
    "Français": "🎥 Filmer Cuisson ou Tisane",
    "Kiswahili (Swahili)": "🎥 Rekodi Video ya Kupika au Dawa",
    "Lingála": "🎥 Kanga Video ya Kolamba to Nkisi",
    "Mashi / Shi (Kivu)": "🎥 Yandiike Video y'okuyokya canke Emizire",
    "Kinyarwanda / Kirundi": "🎥 Fata Video yo Guteka cyangwa Ibyatsi",
    "English": "🎥 Record Cooking or Herbal Tea"
  },
  "btn_4_text": {
    "Français": "4. TEXTE (Clavier)",
    "Kiswahili (Swahili)": "4. MAANDISHI (Kibodi)",
    "Lingála": "4. KOKOMA (Kibodi)",
    "Mashi / Shi (Kivu)": "4. OKUYANDIKA (Clavier)",
    "Kinyarwanda / Kirundi": "4. KWANDIKA (Clavier)",
    "English": "4. TEXT (Keyboard)"
  },
  "write_on_keyboard": {
    "Français": "✍️ Écrire au Clavier",
    "Kiswahili (Swahili)": "✍️ Andika kwa Kibodi",
    "Lingála": "✍️ Koma na Kibodi",
    "Mashi / Shi (Kivu)": "✍️ Yandiike mu Clavier",
    "Kinyarwanda / Kirundi": "✍️ Andika kuri Clavier",
    "English": "✍️ Write on Keyboard"
  },
  "write_question_here": {
    "Français": "✍️ Écrivez ici votre question pour l'IA Médicale :",
    "Kiswahili (Swahili)": "✍️ Andika swali lako kwa IA ya Tiba hapa :",
    "Lingála": "✍️ Koma motuna na yo mpo na IA ya Dokotolo awa :",
    "Mashi / Shi (Kivu)": "✍️ Yandiike idoso lyawe kwa IA ya Muganga hano :",
    "Kinyarwanda / Kirundi": "✍️ Andika ikibazo cyawe kubw'Ubwenge bwa Muganga hano :",
    "English": "✍️ Write your question for the Medical AI here :"
  },
  "ai_analyzing_bg": {
    "Français": "L'IA Clinique analyse votre photo, vidéo, voix ou texte en arrière-plan...",
    "Kiswahili (Swahili)": "IA ya Kliniki inachambua picha, video, sauti au maandishi yako nyuma...",
    "Lingála": "IA ya Dokotolo ezali kotala foto, video, mongongo to kokoma na yo...",
    "Mashi / Shi (Kivu)": "IA ya Muganga erhalokerezwa ifoto, video, sauti canke idoso lyawe...",
    "Kinyarwanda / Kirundi": "IA ya Muganga irasuzuma ifoto, video, ijwi cyangwa inyandiko yawe...",
    "English": "Clinical AI is analyzing your photo, video, voice or text in the background..."
  },
  "consulting_pharmacopeia": {
    "Français": "Consultation de la pharmacopée du Kivu & vérification du taux de sucre...",
    "Kiswahili (Swahili)": "Kuchunguza mimea ya Kivu & kuangalia kiwango cha sukari...",
    "Lingála": "Kotala matiti ya Kivu & kotala sukari na makila...",
    "Mashi / Shi (Kivu)": "Okulolerezwa emizire ye Kivu & okugera esukari...",
    "Kinyarwanda / Kirundi": "Gusuzuma ibyatsi byo mu Kivu no kugenzura isukari...",
    "English": "Consulting Kivu herbal guide & checking glucose levels..."
  },
  "ai_response_badge": {
    "Français": "Réponse IA Clinique (Arrière-plan)",
    "Kiswahili (Swahili)": "Jibu la IA ya Tiba (Nyuma)",
    "Lingála": "Eyano ya IA ya Dokotolo",
    "Mashi / Shi (Kivu)": "Ishano lya IA ya Muganga",
    "Kinyarwanda / Kirundi": "Igisubizo cya IA ya Muganga",
    "English": "Clinical AI Response (Background)"
  },
  "listen_again_btn": {
    "Français": "🔊 Réécouter l'Avis",
    "Kiswahili (Swahili)": "🔊 Sikiliza Tena Ushauri",
    "Lingála": "🔊 Yoka Lisusu Toli",
    "Mashi / Shi (Kivu)": "🔊 Oyunve kandi Ishano",
    "Kinyarwanda / Kirundi": "🔊 Umva Tene Inama",
    "English": "🔊 Listen Again to Advice"
  },
  "simple_advice_today": {
    "Français": "Conseils Simples à Suivre Aujourd'hui :",
    "Kiswahili (Swahili)": "Ushauri Rahisi wa Kufuata Leo :",
    "Lingála": "Toli Petee ya Kolanda Lelo :",
    "Mashi / Shi (Kivu)": "Emishano y'Orhoyorho y'Okukolesa Zene :",
    "Kinyarwanda / Kirundi": "Inama Zikomeye zo Gukurikiza Uyu Munsi :",
    "English": "Simple Advice to Follow Today :"
  },
  "press_again_hint": {
    "Français": "💡 Vous pouvez appuyer à nouveau sur Photo, Vidéo ou Audio pour une autre vérification.",
    "Kiswahili (Swahili)": "💡 Unaweza kubonyeza tena Picha, Video au Sauti kwa ukaguzi mwingine.",
    "Lingála": "💡 Okoki kofina lisusu Foto, Video to Mongongo mpo na kotala mosusu.",
    "Mashi / Shi (Kivu)": "💡 Oshoboke oshaye kandi Ifoto, Video canke Sauti mpu olole kandi.",
    "Kinyarwanda / Kirundi": "💡 Ushobora kanda tena ku Ifoto, Video cyangwa Ijwi kugirango ugenzure kandi.",
    "English": "💡 You can press Photo, Video or Audio again for another check."
  },
  "open_encyclopedia_btn": {
    "Français": "Ouvrir l'Encyclopédie & Détails",
    "Kiswahili (Swahili)": "Fungua Kamusi na Maelezo",
    "Lingála": "Fungola Buku na Makambo Nionso",
    "Mashi / Shi (Kivu)": "Yiguule Ekitabu n'Ebindi byoshi",
    "Kinyarwanda / Kirundi": "Fungura Igitabo n'Ibisobanuro",
    "English": "Open Encyclopedia & Details"
  },
  "help_pwa_text": {
    "Français": "Besoin d'aide ? Appuyez sur n'importe quel bouton ou sur \"Écouter l'Écran\". Tout fonctionne sans connexion Internet (PWA).",
    "Kiswahili (Swahili)": "Unahitaji msaada? Bonyeza kitufe chochote au \"Sikiliza Skrini\". Yote inafanya kazi bila mtandao (PWA).",
    "Lingála": "Olingi lisungi? Fina bouton nyonso to \"Yoka Ekrani\". Nionso esalaka kozanga net (PWA).",
    "Mashi / Shi (Kivu)": "Lonzi obuyamule? Oshiye ku kinwani coshi canke \"Oyunve Ekrani\". Byoshi bikora buzira net (PWA).",
    "Kinyarwanda / Kirundi": "Ukeneye ubufasha? Kanda kuri gukubuto cyangwa \"Umva Screen\". Byose bikora nta murongo (PWA).",
    "English": "Need help? Press any button or \"Listen to Screen\". Everything works without internet (PWA)."
  },
  "explain_app_btn": {
    "Français": "❓ Expliquer l'application",
    "Kiswahili (Swahili)": "❓ Eleza programu",
    "Lingála": "❓ Limbola application",
    "Mashi / Shi (Kivu)": "❓ Yigurhe programu",
    "Kinyarwanda / Kirundi": "❓ Sobanura porogaramu",
    "English": "❓ Explain the app"
  },
  "photo_captured_live": {
    "Français": "📸 Photo capturée en direct • Prêt pour analyse",
    "Kiswahili (Swahili)": "📸 Picha iliyochukuliwa hivi punde • Tayari kwa uchambuzi",
    "Lingála": "📸 Foto ekangani lelo • Eza tayari mpo na kotala",
    "Mashi / Shi (Kivu)": "📸 Ifoto lyafushirwe hano • Rhwetegereze",
    "Kinyarwanda / Kirundi": "📸 Ifoto yafashwe ubu • Yiteguye gusuzumwa",
    "English": "📸 Photo captured live • Ready for analysis"
  },
  "video_captured_live": {
    "Français": "🎥 Vidéo enregistrée en direct • Prêt pour analyse",
    "Kiswahili (Swahili)": "🎥 Video iliyorekodiwa hivi punde • Tayari kwa uchambuzi",
    "Lingála": "🎥 Video ekangani lelo • Eza tayari mpo na kotala",
    "Mashi / Shi (Kivu)": "🎥 Video yandiiswe hano • Rhwetegereze",
    "Kinyarwanda / Kirundi": "🎥 Video yafashwe ubu • Yiteguye gusuzumwa",
    "English": "🎥 Video recorded live • Ready for analysis"
  },

  // --- DASHBOARD EXTRA STRINGS ---
  "dashboard_iot_title": {
    "Français": "Tableau de Bord IoT & Métriques Cliniques Kivu",
    "Kiswahili (Swahili)": "Deshibodi ya IoT & Vipimo vya Kliniki Kivu",
    "Lingála": "Etanda ya Dokotolo & Ba Appareils IoT Kivu",
    "Mashi / Shi (Kivu)": "Ekitabu c'Obulaamire & IoT mu Kivu",
    "Kinyarwanda / Kirundi": "Incamake ya Muganga & Ibikoresho by'ubuvuzi mu Kivu",
    "English": "IoT Dashboard & Kivu Clinical Metrics"
  },
  "connected_devices_title": {
    "Français": "Appareils Connectés & Sync en Direct",
    "Kiswahili (Swahili)": "Vifaa Vilivyounganishwa & Sync Moja kwa Moja",
    "Lingála": "Ba appareils ekangani & Sync mbala moko",
    "Mashi / Shi (Kivu)": "Ebigalire byajirire & Sync hano",
    "Kinyarwanda / Kirundi": "Ibikoresho byahuwe & Sync mu gihe cya nyacho",
    "English": "Connected Devices & Live Sync"
  },
  "manual_input_title": {
    "Français": "Saisie Manuelle d'une Mesure",
    "Kiswahili (Swahili)": "Ingiza Kipimo kwa Mkono",
    "Lingála": "Kotisa Mekelo na Maboko",
    "Mashi / Shi (Kivu)": "Oyandike Ekigero na Kugulu",
    "Kinyarwanda / Kirundi": "Andika Igipimo Intoki",
    "English": "Manual Measurement Input"
  },
  "add_measurement_btn": {
    "Français": "Ajouter Mesure",
    "Kiswahili (Swahili)": "Ongeza Kipimo",
    "Lingála": "Bakisa Kipimo",
    "Mashi / Shi (Kivu)": "Oyongere Ekigero",
    "Kinyarwanda / Kirundi": "Ongeraho Igipimo",
    "English": "Add Measurement"
  },
  "medical_log_title": {
    "Français": "Journal Médical & Analyses IA",
    "Kiswahili (Swahili)": "Kumbukumbu za Tiba & Uchambuzi wa IA",
    "Lingála": "Journal ya Dokotolo & Kotala ya IA",
    "Mashi / Shi (Kivu)": "Ekitabu c'Obulaamire & Okulolerezwa kwa IA",
    "Kinyarwanda / Kirundi": "Igitabo cy'Ubuvuzi & Isuzuma rya IA",
    "English": "Medical Log & AI Analysis"
  },

  // --- MODALS & EXTRAS ---
  "profile_modal_title": {
    "Français": "Profil Patient & Paramètres de Santé",
    "Kiswahili (Swahili)": "Wifu wa Mgonjwa & Mipangilio ya Afya",
    "Lingála": "Kombo na yo & Ba Parametres ya Kolongono",
    "Mashi / Shi (Kivu)": "Izina ly'omurwayi n'emigulu y'obulaamire",
    "Kinyarwanda / Kirundi": "Umurwayi & Igenamiterere ry'Ubuzima",
    "English": "Patient Profile & Health Settings"
  },
  "save_changes_btn": {
    "Français": "Enregistrer les modifications",
    "Kiswahili (Swahili)": "Hifadhi mabadiliko",
    "Lingála": "Bumba mbongwana",
    "Mashi / Shi (Kivu)": "Obise empindahulo",
    "Kinyarwanda / Kirundi": "Bika impinduka",
    "English": "Save changes"
  },
  "close_btn": {
    "Français": "Fermer",
    "Kiswahili (Swahili)": "Funga",
    "Lingála": "Kanga",
    "Mashi / Shi (Kivu)": "Oyimale",
    "Kinyarwanda / Kirundi": "Funga",
    "English": "Close"
  },
  "live_cam_title": {
    "Français": "Caméra en Direct (Photo / Vidéo)",
    "Kiswahili (Swahili)": "Kamera Moja kwa Moja (Picha / Video)",
    "Lingála": "Kamera na Mbala Moko (Foto / Video)",
    "Mashi / Shi (Kivu)": "Kamera ya Hano (Ifoto / Video)",
    "Kinyarwanda / Kirundi": "Kamera mu Gihe Cya Nyacho (Ifoto / Video)",
    "English": "Live Camera (Photo / Video)"
  },
  "take_photo_btn": {
    "Français": "Prendre Photo",
    "Kiswahili (Swahili)": "Piga Picha",
    "Lingála": "Kanga Foto",
    "Mashi / Shi (Kivu)": "Oshaye Ifoto",
    "Kinyarwanda / Kirundi": "Fata Ifoto",
    "English": "Take Photo"
  },
  "record_video_btn": {
    "Français": "Enregistrer Vidéo",
    "Kiswahili (Swahili)": "Rekodi Video",
    "Lingála": "Kanga Video",
    "Mashi / Shi (Kivu)": "Yandiike Video",
    "Kinyarwanda / Kirundi": "Fata Video",
    "English": "Record Video"
  },
  "stop_record_btn": {
    "Français": "Arrêter Enregistrement",
    "Kiswahili (Swahili)": "Simamisha Kurekodi",
    "Lingála": "Tika Kokanga",
    "Mashi / Shi (Kivu)": "Oyimale Okuyandiika",
    "Kinyarwanda / Kirundi": "Hagarika Gufata",
    "English": "Stop Recording"
  },

  // --- DASHBOARD COMPREHENSIVE STRINGS ---
  "kivu_east_tracking": {
    "Français": "Suivi Glycémique Kivu-Est",
    "Kiswahili (Swahili)": "Mfuatilio wa Sukari Kivu-Mashariki",
    "Lingála": "Kolandela Sukari Kivu-Est",
    "Mashi / Shi (Kivu)": "Okukera Esukari Kivu",
    "Kinyarwanda / Kirundi": "Gukurikirana Isukari Kivu",
    "English": "Kivu East Glycemic Tracking"
  },
  "estimated_hba1c": {
    "Français": "HbA1c Estimée",
    "Kiswahili (Swahili)": "HbA1c Inayokadiriwa",
    "Lingála": "HbA1c ya Dokotolo",
    "Mashi / Shi (Kivu)": "HbA1c y'esukari",
    "Kinyarwanda / Kirundi": "HbA1c igereranyijwe",
    "English": "Estimated HbA1c"
  },
  "avg_glucose_banner_desc": {
    "Français": "Votre glycémie moyenne est de",
    "Kiswahili (Swahili)": "Wastani wako wa sukari ni",
    "Lingála": "Sukari na yo ya kati-kati eza",
    "Mashi / Shi (Kivu)": "Esukari yawe y'olu buhije eri",
    "Kinyarwanda / Kirundi": "Isukari yawe yo muri rusange ni",
    "English": "Your average blood glucose is"
  },
  "saka_saka_fiber_desc": {
    "Français": "Les fibres de Saka-Saka préparées avec peu d'huile stabilisent votre insuline aujourd'hui.",
    "Kiswahili (Swahili)": "Nyuzi za Saka-Saka zilipikwa na mafuta kidogo zinatengeneza insulini yako leo.",
    "Lingála": "Pondu elambami na mafuta moke ezali kobongisa insuline na yo lelo.",
    "Mashi / Shi (Kivu)": "Sombe lyatekirwe na mavurha masene likujikije esukari yawe zene.",
    "Kinyarwanda / Kirundi": "Isombe rishishije n'amavuta macye rigumishije insulini yawe ku murongo uyu munsi.",
    "English": "Saka-Saka dietary fibers prepared with low oil are stabilizing your insulin today."
  },
  "quick_input_btn": {
    "Français": "Saisie Rapide",
    "Kiswahili (Swahili)": "Ingiza Haraka",
    "Lingála": "Komisa Mbala Moko",
    "Mashi / Shi (Kivu)": "Oyandike Luba",
    "Kinyarwanda / Kirundi": "Andika Byihuse",
    "English": "Quick Input"
  },
  "stability_badge": {
    "Français": "Stabilité (+7J)",
    "Kiswahili (Swahili)": "Utulivu (+7S)",
    "Lingála": "Stabilité (+7M)",
    "Mashi / Shi (Kivu)": "Okujika (+7S)",
    "Kinyarwanda / Kirundi": "Guhama (+7I)",
    "English": "Stability (+7D)"
  },
  "avg_glucose_card_title": {
    "Français": "Glycémie Moyenne",
    "Kiswahili (Swahili)": "Wastani wa Sukari",
    "Lingála": "Sukari ya Kati-kati",
    "Mashi / Shi (Kivu)": "Esukari y'Orhorho",
    "Kinyarwanda / Kirundi": "Isukari yo Muri Rusange",
    "English": "Average Glucose"
  },
  "target_zone_label": {
    "Français": "Zone cible:",
    "Kiswahili (Swahili)": "Eneo lengwa:",
    "Lingála": "Esika malamu:",
    "Mashi / Shi (Kivu)": "Aho lonzi:",
    "Kinyarwanda / Kirundi": "Aho igomba kuba:",
    "English": "Target zone:"
  },
  "hba1c_card_title": {
    "Français": "Estimation HbA1c",
    "Kiswahili (Swahili)": "Makadirio HbA1c",
    "Lingála": "Komeka HbA1c",
    "Mashi / Shi (Kivu)": "Ekigero c'Esukari HbA1c",
    "Kinyarwanda / Kirundi": "Igereranya rya HbA1c",
    "English": "HbA1c Estimate"
  },
  "glycated_hemo_label": {
    "Français": "Hémoglobine glyquée",
    "Kiswahili (Swahili)": "Hemoglobini ya sukari",
    "Lingála": "Makila ya sukari",
    "Mashi / Shi (Kivu)": "Amahije g'esukari",
    "Kinyarwanda / Kirundi": "Amaraso y'isukari",
    "English": "Glycated Hemoglobin"
  },
  "goal_7_achieved": {
    "Français": "Objectif < 7.0% atteint !",
    "Kiswahili (Swahili)": "Lengo < 7.0% limefikiwa!",
    "Lingála": "Likolo ya < 7.0% ekokami!",
    "Mashi / Shi (Kivu)": "Ekigero < 7.0% kajirirwe!",
    "Kinyarwanda / Kirundi": "Intego < 7.0% yagezweho!",
    "English": "Goal < 7.0% achieved!"
  },
  "connected_arm_bp": {
    "Français": "Tensiomètre Bras Connecté",
    "Kiswahili (Swahili)": "Kipimo cha Presha Mkono",
    "Lingála": "Appareil ya Motema Loboko",
    "Mashi / Shi (Kivu)": "Ekigalire c'Empugumo",
    "Kinyarwanda / Kirundi": "Igikoresho cy'Umuvuduko",
    "English": "Connected Arm BP Monitor"
  },
  "weight_bmi_title": {
    "Français": "Poids & IMC",
    "Kiswahili (Swahili)": "Uzito & BMI",
    "Lingála": "Kilo & IMC",
    "Mashi / Shi (Kivu)": "Obureme & IMC",
    "Kinyarwanda / Kirundi": "Ibilo & IMC",
    "English": "Weight & BMI"
  },
  "ideal_weight_label": {
    "Français": "Poids de forme idéal",
    "Kiswahili (Swahili)": "Uzito bora kabisa",
    "Lingála": "Kilo malamu mpenza",
    "Mashi / Shi (Kivu)": "Obureme buhinja",
    "Kinyarwanda / Kirundi": "Ibilo byiza cyane",
    "English": "Ideal body weight"
  },
  "iot_ble_title": {
    "Français": "Objets Connectés de Santé (IoT Bluetooth / BLE)",
    "Kiswahili (Swahili)": "Vifaa vya Afya Vilivyounganishwa (IoT BLE)",
    "Lingála": "Ba Appareils ya Kolongono ekangani (IoT BLE)",
    "Mashi / Shi (Kivu)": "Ebigalire by'Obulaamire byajirire (BLE)",
    "Kinyarwanda / Kirundi": "Ibikoresho by'Ubuzima byahuwe (BLE)",
    "English": "Connected Health Devices (IoT Bluetooth / BLE)"
  },
  "iot_ble_desc": {
    "Français": "Synchronisation en temps réel avec vos glucomètres, tensiomètres et balances en Afrique de l'Est.",
    "Kiswahili (Swahili)": "Usawazishaji wa moja kwa moja na vipimo vyako vya sukari, presha na uzito Afrika Mashariki.",
    "Lingála": "Sync ya mbala moko na ba appareils na yo ya sukari, motema mpe kilo na Afrika ya East.",
    "Mashi / Shi (Kivu)": "Okuhubana hano n'ebigalire byawe by'esukari na kilo mu Africa y'irheto.",
    "Kinyarwanda / Kirundi": "Guhuza ako kanya n'ibikoresho byawe by'isukari n'umuvuduko muri Afurika y'Iburasirazuba.",
    "English": "Real-time synchronization with your glucometers, BP monitors and scales in East Africa."
  },
  "active_ble_sensors": {
    "Français": "capteurs BLE actifs au Kivu",
    "Kiswahili (Swahili)": "sensa za BLE zinazofanya kazi Kivu",
    "Lingála": "ba capteurs BLE ya Kivu",
    "Mashi / Shi (Kivu)": "ebirombo bya BLE mikora mu Kivu",
    "Kinyarwanda / Kirundi": "ibipimo bya BLE bikora mu Kivu",
    "English": "active BLE sensors in Kivu"
  },
  "last_sync_label": {
    "Français": "Dernière synchro :",
    "Kiswahili (Swahili)": "Mwisho kusawazisha :",
    "Lingála": "Sync ya suka :",
    "Mashi / Shi (Kivu)": "Okuhubana kw'izene :",
    "Kinyarwanda / Kirundi": "Iheruka guhuza :",
    "English": "Last sync :"
  },
  "connected_status": {
    "Français": "Connecté",
    "Kiswahili (Swahili)": "Imeunganishwa",
    "Lingála": "Ekangani",
    "Mashi / Shi (Kivu)": "Kujirire",
    "Kinyarwanda / Kirundi": "Yahuwe",
    "English": "Connected"
  },
  "syncing_action": {
    "Français": "Synchro...",
    "Kiswahili (Swahili)": "Inasawazisha...",
    "Lingála": "Ezali ko sync...",
    "Mashi / Shi (Kivu)": "Erhahubana...",
    "Kinyarwanda / Kirundi": "Irahuza...",
    "English": "Syncing..."
  },
  "measure_action": {
    "Français": "Mesurer",
    "Kiswahili (Swahili)": "Pima",
    "Lingála": "Meka",
    "Mashi / Shi (Kivu)": "Gera",
    "Kinyarwanda / Kirundi": "Pima",
    "English": "Measure"
  },
  "post_prandial_curve": {
    "Français": "Courbe de Glycémie Post-Prandiale & à Jeun",
    "Kiswahili (Swahili)": "Grafu ya Sukari Baada ya Kula na Asubuhi",
    "Lingála": "Graphique ya Sukari Simbi ya Kolia",
    "Mashi / Shi (Kivu)": "Omugulu gw'Esukari mu kulya na sasa",
    "Kinyarwanda / Kirundi": "Imibare y'Isukari nyuma yo kurya no mu gitondo",
    "English": "Post-Prandial & Fasting Glucose Curve"
  },
  "shaded_green_zone": {
    "Français": "Zone verte ombrée : Objectif glycémique de sécurité (80 à 140 mg/dL)",
    "Kiswahili (Swahili)": "Eneo la kijani: Lengo salama la sukari (80 hadi 140 mg/dL)",
    "Lingála": "Esika vert: Sukari ya malamu (80 ti 140 mg/dL)",
    "Mashi / Shi (Kivu)": "Ehandi lyeru: Esukari nyinja (80 kuza 140 mg/dL)",
    "Kinyarwanda / Kirundi": "Aho icyatsi: Isukari ikwiriye (80 kugeza 140 mg/dL)",
    "English": "Shaded green zone: Safe glycemic target (80 to 140 mg/dL)"
  },
  "no_glucose_history": {
    "Français": "Aucun historique de glycémie pour le moment.",
    "Kiswahili (Swahili)": "Hakuna kumbukumbu ya sukari kwa sasa.",
    "Lingála": "Journal ya sukari eza te sikoyo.",
    "Mashi / Shi (Kivu)": "Nta migulu y'esukari ehano zene.",
    "Kinyarwanda / Kirundi": "Nta mateka y'isukari ahari ubu.",
    "English": "No glucose history at the moment."
  },
  "kivu_tip_ndakala": {
    "Français": "💡 Astuce Kivu : Une tisane tiède de Vernonia (Ndakala) 15 min avant le repas réduit le pic de 2h.",
    "Kiswahili (Swahili)": "💡 Dokezo la Kivu: Dawa ya Ndakala dakika 15 kabla ya chakula hupunguza sukari.",
    "Lingála": "💡 Toli ya Kivu: Nkisi ya Ndakala min 15 yambo ya kolia ekitisaka sukari.",
    "Mashi / Shi (Kivu)": "💡 Omuti gwe Kivu: Ndakala dakika 15 embere y'okulya ehisha esukari.",
    "Kinyarwanda / Kirundi": "💡 Inama yo mu Kivu: Ndakala iminota 15 mbere yo kurya igabanya isukari.",
    "English": "💡 Kivu Tip: Warm Vernonia (Ndakala) tea 15 min before meals reduces 2h glucose spike."
  },
  "phyto_protocol_today": {
    "Français": "Protocole de Phytothérapie & Diète d'Aujourd'hui",
    "Kiswahili (Swahili)": "Mwongozo wa Mimea & Lishe ya Leo",
    "Lingála": "Toli ya Matiti & Bilei ya Lelo",
    "Mashi / Shi (Kivu)": "Oshoole rw'Emizire n'Ebyokulya zene",
    "Kinyarwanda / Kirundi": "Amabwiriza y'Ibyatsi n'Imirire y'Uyu Munsi",
    "English": "Today's Phytotherapy & Dietary Protocol"
  },
  "morning_fasting": {
    "Français": "Matin (À jeun)",
    "Kiswahili (Swahili)": "Asubuhi (Kabla ya kula)",
    "Lingála": "Tongo (Yambo ya kolia)",
    "Mashi / Shi (Kivu)": "Sasa (Embere y'okulya)",
    "Kinyarwanda / Kirundi": "Mu gitondo (Mbere yo kurya)",
    "English": "Morning (Fasting)"
  },
  "morning_protocol_desc": {
    "Français": "1 verre d'eau de trempage de graines de Fenugrec ou bouillie de sorgho enrichie de 1 cuillère à café de poudre de Moringa.",
    "Kiswahili (Swahili)": "Kikombe 1 cha maji ya Fenugreek au uji wa mtama na Moringa.",
    "Lingála": "Kopo 1 ya mai ya Fenugreek to uji ya mtama na Moringa.",
    "Mashi / Shi (Kivu)": "Ekihe kiguma c'aminji ga Fenugreek canke obusera bwa Moringa.",
    "Kinyarwanda / Kirundi": "Ikirahuri 1 cy'amazi ya Fenugreek cyangwa igikoma cya Moringa.",
    "English": "1 glass of Fenugreek seed water or sorghum porridge with Moringa powder."
  },
  "lunch_main_meal": {
    "Français": "Midi (Repas principal)",
    "Kiswahili (Swahili)": "Mchana (Chakula kikuu)",
    "Lingála": "Moi (Bilei ya nene)",
    "Mashi / Shi (Kivu)": "Musi (Ebyokulya binene)",
    "Kinyarwanda / Kirundi": "Saa sita (Ifunguro ryingenzi)",
    "English": "Lunch (Main meal)"
  },
  "lunch_protocol_desc": {
    "Français": "Saka-saka (feuilles de manioc bien bouillies avec 70% d'huile de palme en moins) + 1 portion poing de Fufu de mil/sorgho.",
    "Kiswahili (Swahili)": "Saka-saka (majani ya muhogo yaliyochemshwa na mafuta kidogo) + Fufu ya mtama.",
    "Lingála": "Saka-saka (pondu elambami na mafuta moke) + Fufu ya mil.",
    "Mashi / Shi (Kivu)": "Saka-saka (sombe lyahijiirwe na mavurha masene) + Fufu lya wimbi.",
    "Kinyarwanda / Kirundi": "Saka-saka (isombe rishishije n'amavuta macye) + Fufu ryo muryo.",
    "English": "Saka-saka (cassava leaves boiled with less palm oil) + 1 fist portion of millet/sorghum Fufu."
  },
  "evening_before_meal": {
    "Français": "Soir (15 min avant le repas)",
    "Kiswahili (Swahili)": "Jioni (Dakika 15 kabla ya kula)",
    "Lingála": "Pokwa (Min 15 yambo ya kolia)",
    "Mashi / Shi (Kivu)": "Mwijingo (Dakika 15 embere y'okulya)",
    "Kinyarwanda / Kirundi": "Nimugoroba (Iminota 15 mbere yo kurya)",
    "English": "Evening (15 min before meal)"
  },
  "evening_protocol_desc": {
    "Français": "1 tasse (150ml) d'infusion tiède de Vernonia (Feuille amère / Ndakala) ou Bissap pur SANS SUCRE.",
    "Kiswahili (Swahili)": "Kikombe 1 cha chai ya Vernonia (Ndakala) au Bissap BILA SUKARI.",
    "Lingála": "Kopo 1 ya chai ya Ndakala to Bissap KOZANGA SUKARI.",
    "Mashi / Shi (Kivu)": "Ekihe 1 c'ecaayi ce Ndakala canke Bissap BUZIRA SUKARI.",
    "Kinyarwanda / Kirundi": "Ikirahuri 1 cy'icyayi cya Ndakala cyangwa Bissap NTA SUKARI.",
    "English": "1 cup (150ml) warm Vernonia (Ndakala) tea or pure Bissap WITHOUT SUGAR."
  },
  "check_meal_ai_btn": {
    "Français": "📸 Vérifier un plat avec l'IA Clinique",
    "Kiswahili (Swahili)": "📸 Kagua chakula na IA ya Tiba",
    "Lingála": "📸 Tala bilei na IA ya Dokotolo",
    "Mashi / Shi (Kivu)": "📸 Lola ebyokulya na IA ya Muganga",
    "Kinyarwanda / Kirundi": "📸 Genzura ifunguro na IA ya Muganga",
    "English": "📸 Check meal with Clinical AI"
  },
  "history_measures_title": {
    "Français": "Historique des Mesures & Analyses IA",
    "Kiswahili (Swahili)": "Kumbukumbu za Vipimo & Uchambuzi wa IA",
    "Lingála": "Journal ya Mekelo & Kotala ya IA",
    "Mashi / Shi (Kivu)": "Ekitabu c'Ebipimo n'Okulolerezwa kwa IA",
    "Kinyarwanda / Kirundi": "Amateka y'Ibipimo & Isuzuma rya IA",
    "English": "Measurement History & AI Analysis"
  },
  "last_100_entries": {
    "Français": "100 dernières entrées sauvegardées (PWA)",
    "Kiswahili (Swahili)": "Nukta 100 za mwisho zilizohifadhiwa (PWA)",
    "Lingála": "Mekelo 100 ya suka ebumbami (PWA)",
    "Mashi / Shi (Kivu)": "Ebipimo 100 by'izene bibisirwe (PWA)",
    "Kinyarwanda / Kirundi": "Ibipimo 100 byaheruka byabitswe (PWA)",
    "English": "Last 100 entries saved (PWA)"
  },
  "col_date_time": {
    "Français": "Date & Heure",
    "Kiswahili (Swahili)": "Tarehe & Saa",
    "Lingála": "Dati & Ngonga",
    "Mashi / Shi (Kivu)": "Lusiku & Sawa",
    "Kinyarwanda / Kirundi": "Itariki & Isaha",
    "English": "Date & Time"
  },
  "col_measure_type": {
    "Français": "Type de Mesure",
    "Kiswahili (Swahili)": "Aina ya Kipimo",
    "Lingála": "Lolenge ya Mekelo",
    "Mashi / Shi (Kivu)": "Aina y'Ekigero",
    "Kinyarwanda / Kirundi": "Ubwoko bw'Igipimo",
    "English": "Measurement Type"
  },
  "col_val_recorded": {
    "Français": "Valeur Enregistrée",
    "Kiswahili (Swahili)": "Kiwango",
    "Lingála": "Motuya",
    "Mashi / Shi (Kivu)": "Ekigero",
    "Kinyarwanda / Kirundi": "Agaciro kabitswe",
    "English": "Recorded Value"
  },
  "col_device_source": {
    "Français": "Appareil & Source",
    "Kiswahili (Swahili)": "Kifaa & Chanzo",
    "Lingála": "Appareil",
    "Mashi / Shi (Kivu)": "Ekigalire",
    "Kinyarwanda / Kirundi": "Igikoresho",
    "English": "Device & Source"
  },
  "col_status_risk": {
    "Français": "Statut / Niveau de Risque",
    "Kiswahili (Swahili)": "Hali / Hatari",
    "Lingála": "Lolenge / Likama",
    "Mashi / Shi (Kivu)": "Kurhali / Obudaha",
    "Kinyarwanda / Kirundi": "Imiterere / Tati",
    "English": "Status / Risk Level"
  },
  "col_note_context": {
    "Français": "Note / Contexte Repas",
    "Kiswahili (Swahili)": "Maelezo / Chakula",
    "Lingála": "Komisi / Bilei",
    "Mashi / Shi (Kivu)": "Ebyandiiswe / Ebyokulya",
    "Kinyarwanda / Kirundi": "Inyandiko / Ifunguro",
    "English": "Note / Meal Context"
  },
  "manual_modal_title": {
    "Français": "Saisie Manuelle de Mesure (PWA)",
    "Kiswahili (Swahili)": "Ingiza Kipimo kwa Mkono (PWA)",
    "Lingála": "Kotisa Mekelo na Maboko (PWA)",
    "Mashi / Shi (Kivu)": "Oyandike Ekigero na Kugulu (PWA)",
    "Kinyarwanda / Kirundi": "Andika Igipimo Intoki (PWA)",
    "English": "Manual Measurement Input (PWA)"
  },
  "measure_type_label": {
    "Français": "Type de Mesure",
    "Kiswahili (Swahili)": "Aina ya Kipimo",
    "Lingála": "Lolenge ya Mekelo",
    "Mashi / Shi (Kivu)": "Aina y'Ekigero",
    "Kinyarwanda / Kirundi": "Ubwoko bw'Igipimo",
    "English": "Measurement Type"
  },
  "systolic_label": {
    "Français": "Systolique (ex: 125)",
    "Kiswahili (Swahili)": "Presha ya Juu (mf: 125)",
    "Lingála": "Tension Likolo (mf: 125)",
    "Mashi / Shi (Kivu)": "Empugumo ye Nzala (mf: 125)",
    "Kinyarwanda / Kirundi": "Umuvuduko wo hejuru (ug: 125)",
    "English": "Systolic (e.g., 125)"
  },
  "diastolic_label": {
    "Français": "Diastolique (ex: 80)",
    "Kiswahili (Swahili)": "Presha ya Chini (mf: 80)",
    "Lingála": "Tension Se (mf: 80)",
    "Mashi / Shi (Kivu)": "Empugumo ye Muji (mf: 80)",
    "Kinyarwanda / Kirundi": "Umuvuduko wo hasi (ug: 80)",
    "English": "Diastolic (e.g., 80)"
  },
  "note_context_label": {
    "Français": "Note & Contexte Repas",
    "Kiswahili (Swahili)": "Maelezo & Chakula",
    "Lingála": "Komisi & Bilei",
    "Mashi / Shi (Kivu)": "Ebyandiiswe & Ebyokulya",
    "Kinyarwanda / Kirundi": "Inyandiko & Ifunguro",
    "English": "Note & Meal Context"
  },
  "save_btn": {
    "Français": "Enregistrer",
    "Kiswahili (Swahili)": "Hifadhi",
    "Lingála": "Bumba",
    "Mashi / Shi (Kivu)": "Obise",
    "Kinyarwanda / Kirundi": "Bika",
    "English": "Save"
  },
  "Glycémie": {
    "Français": "Glycémie",
    "Kiswahili (Swahili)": "Sukari",
    "Lingála": "Sukari",
    "Mashi / Shi (Kivu)": "Esukari",
    "Kinyarwanda / Kirundi": "Isukari",
    "English": "Glucose"
  },
  "Tension": {
    "Français": "Tension",
    "Kiswahili (Swahili)": "Presha",
    "Lingála": "Motema / Tension",
    "Mashi / Shi (Kivu)": "Empugumo",
    "Kinyarwanda / Kirundi": "Umuvuduko",
    "English": "BP"
  },
  "Poids/IMC": {
    "Français": "Poids/IMC",
    "Kiswahili (Swahili)": "Uzito/BMI",
    "Lingála": "Kilo/IMC",
    "Mashi / Shi (Kivu)": "Obureme/IMC",
    "Kinyarwanda / Kirundi": "Ibilo/IMC",
    "English": "Weight/BMI"
  },
  "Urgence": {
    "Français": "Urgence",
    "Kiswahili (Swahili)": "Dharura",
    "Lingála": "Likama Nene",
    "Mashi / Shi (Kivu)": "Oshaba Bwango",
    "Kinyarwanda / Kirundi": "Byihutirwa",
    "English": "Emergency"
  },
  "Vigilance": {
    "Français": "Vigilance",
    "Kiswahili (Swahili)": "Angalizo",
    "Lingála": "Keba",
    "Mashi / Shi (Kivu)": "Okanze",
    "Kinyarwanda / Kirundi": "Itonde",
    "English": "Vigilance"
  },
  "Normal": {
    "Français": "Normal",
    "Kiswahili (Swahili)": "Kawaida",
    "Lingála": "Malamu",
    "Mashi / Shi (Kivu)": "Njinja",
    "Kinyarwanda / Kirundi": "Bisanzwe",
    "English": "Normal"
  },
  "val_in_label": {
    "Français": "Valeur en",
    "Kiswahili (Swahili)": "Kiwango cha",
    "Lingála": "Motuya ya",
    "Mashi / Shi (Kivu)": "Ekigero mu",
    "Kinyarwanda / Kirundi": "Agaciro muri",
    "English": "Value in"
  },
  "glucose_opt": {
    "Français": "Glycémie (mg/dL)",
    "Kiswahili (Swahili)": "Sukari (mg/dL)",
    "Lingála": "Sukari (mg/dL)",
    "Mashi / Shi (Kivu)": "Esukari (mg/dL)",
    "Kinyarwanda / Kirundi": "Isukari (mg/dL)",
    "English": "Glucose (mg/dL)"
  },
  "pressure_opt": {
    "Français": "Tension Artérielle (Systolique/Diastolique)",
    "Kiswahili (Swahili)": "Presha (Juu/Chini)",
    "Lingála": "Tension (Likolo/Se)",
    "Mashi / Shi (Kivu)": "Empugumo (Nzala/Muji)",
    "Kinyarwanda / Kirundi": "Umuvuduko (Hejuru/Hasi)",
    "English": "Blood Pressure (Systolic/Diastolic)"
  },
  "weight_opt": {
    "Français": "Poids & IMC (kg)",
    "Kiswahili (Swahili)": "Uzito & BMI (kg)",
    "Lingála": "Kilo & IMC (kg)",
    "Mashi / Shi (Kivu)": "Obureme & IMC (kg)",
    "Kinyarwanda / Kirundi": "Ibilo & IMC (kg)",
    "English": "Weight & BMI (kg)"
  },
  "note_placeholder": {
    "Français": "ex: À jeun, ou 2h après un plat de pondu...",
    "Kiswahili (Swahili)": "mf: Kabla ya kula, au saa 2 baada ya pondu...",
    "Lingála": "mf: Yambo ya kolia, to 2h sima ya pondu...",
    "Mashi / Shi (Kivu)": "mf: Embere y'okulya, canke 2h enyuma z'esombe...",
    "Kinyarwanda / Kirundi": "ug: Mbere yo kurya, cyangwa 2h nyuma y'isombe...",
    "English": "e.g., Fasting, or 2h after a meal..."
  },
  "err_unsupported_format": {
    "Français": "Format non supporté. Envoyez une photo (JPEG/PNG), un audio (MP3/WAV) ou une vidéo (MP4).",
    "Kiswahili (Swahili)": "Muundo hautuungwi mkono. Tuma picha (JPEG/PNG), sauti (MP3/WAV) au video (MP4).",
    "Lingála": "Format endimami te. Tinda foto (JPEG/PNG), mongongo (MP3/WAV) to video (MP4).",
    "Mashi / Shi (Kivu)": "Ifomu erhayankiirwe. Orhume ifoto (JPEG/PNG), sauti (MP3/WAV) canke video (MP4).",
    "Kinyarwanda / Kirundi": "Inyandiko ntiyemewe. Ohereza ifoto (JPEG/PNG), amajwi (MP3/WAV) cyangwa videwo (MP4).",
    "English": "Unsupported format. Send photo (JPEG/PNG), audio (MP3/WAV) or video (MP4)."
  },
  "err_mic_access": {
    "Français": "Accès au microphone refusé ou indisponible. Vous pouvez aussi télécharger un fichier audio ou saisir du texte.",
    "Kiswahili (Swahili)": "Ufikiaji wa maikrofoni umekataliwa au haupo. unaweza pia kupakia faili la sauti au kuandika maandishi.",
    "Lingála": "Nzela ya mikro ekangami. Okoki mpe kotinda audio to kokoma maloba.",
    "Mashi / Shi (Kivu)": "Okanze amicrophone kahulwire. Okagera kupakia audio canke owandike maloba.",
    "Kinyarwanda / Kirundi": "Uburenganzira bwa mikoro bwanze. Ushobora no gushyiraho amajwi cyangwa kwandika amagambo.",
    "English": "Microphone access denied or unavailable. You can also upload an audio file or enter text."
  },
  "err_empty_input": {
    "Français": "Veuillez décrire votre repas/symptôme par texte ou joindre une photo/audio/vidéo.",
    "Kiswahili (Swahili)": "Tafadhali elezea chakula/dalili zako kwa maandishi au ambatanisha picha/sauti/video.",
    "Lingála": "Limbola bilei/bilembo na yo na maloba to baka foto/audio/video.",
    "Mashi / Shi (Kivu)": "Oshagirhe ebyokulya/emiloza mu maloba canke oshaye ifoto/audio/video.",
    "Kinyarwanda / Kirundi": "Sobanura ifunguro/ibimenyetso mu magambo cyangwa ushyireho ifoto/amajwi/videwo.",
    "English": "Please describe your meal/symptom in text or attach photo/audio/video."
  },
  "err_connection_ai": {
    "Français": "Erreur de connexion à l'IA Médicale. Vérifiez votre connexion.",
    "Kiswahili (Swahili)": "Hitilafu ya kuunganisha na IA ya Tiba. Angalia muunganisho wako.",
    "Lingála": "Kobosana kokanga IA ya Dokotolo. Tala net na yo.",
    "Mashi / Shi (Kivu)": "Okanze kw'okuhubana na IA ya Muganga. Oronze internet yawe.",
    "Kinyarwanda / Kirundi": "Ikibazo mu guhuza n'IA y'ubuvuzi. Reba intandaro y'iyumvikanisha.",
    "English": "Medical AI connection error. Check your connection."
  },
  "check_meal_plant": {
    "Français": "Vérifier Repas / Plante",
    "Kiswahili (Swahili)": "Angalia Chakula / Mmea",
    "Lingála": "Tala Bilei / Matiti",
    "Mashi / Shi (Kivu)": "Oronze Ebyokulya / Emizire",
    "Kinyarwanda / Kirundi": "Reba Ifunguro / Ibyatsi",
    "English": "Check Meal / Herb"
  },
  "analyze_symptoms": {
    "Français": "Analyser Symptômes",
    "Kiswahili (Swahili)": "Chunguza Dalili",
    "Lingála": "Tala Bilembo",
    "Mashi / Shi (Kivu)": "Oshagirhe Emiloza",
    "Kinyarwanda / Kirundi": "Suzuma Ibimenyetso",
    "English": "Analyze Symptoms"
  },
  "desc_meal_remedy": {
    "Français": "Description du Plat ou du Remède Traditionnel",
    "Kiswahili (Swahili)": "Maelezo ya Chakula au Tiba ya Asili",
    "Lingála": "Ndakisa ya Bilei to Nkisi ya Mboka",
    "Mashi / Shi (Kivu)": "Amaloba g'ebyokulya canke omuti gw'ekitu",
    "Kinyarwanda / Kirundi": "Ibisobanuro by'Ifunguro cyangwa Ubuvuzi Gakondo",
    "English": "Description of Meal or Traditional Remedy"
  },
  "desc_symptoms": {
    "Français": "Description détaillée des Symptômes ou Sensations",
    "Kiswahili (Swahili)": "Maelezo kamili ya Dalili au Hisia",
    "Lingála": "Ndakisa ya mozindo ya Bilembo to Maladi",
    "Mashi / Shi (Kivu)": "Amaloba gosi g'emiloza n'okuhembwa",
    "Kinyarwanda / Kirundi": "Ibisobanuro birambuye by'Ibimenyetso cyangwa Ububabare",
    "English": "Detailed Description of Symptoms or Sensations"
  },
  "ph_meal_diag": {
    "Français": "ex: J'ai bouilli des feuilles de pondu (saka-saka) pendant 45 minutes avec un verre d'huile de palme et accompagné d'un fufu de manioc blanc...",
    "Kiswahili (Swahili)": "mf: Niliamsha majani ya pondu (saka-saka) kwa dakika 45 na glasi ya mafuta ya mawese na fufu ya mihogo...",
    "Lingála": "mf: Nalambaki mpondu ngonga 45 na kopo ya mafuta ya mbila mpe fufu ya mpoka...",
    "Mashi / Shi (Kivu)": "mf: Nayanjiirire esombe miniti 45 n'amafuta g'engazi na fufu y'omuhiro...",
    "Kinyarwanda / Kirundi": "ug: Natetse isombe iminota 45 n'amavuta y'amamesa n'ubugari bw'imyumbati...",
    "English": "e.g., I boiled cassava leaves for 45 mins with palm oil and white cassava fufu..."
  },
  "ph_symptom_diag": {
    "Français": "ex: Je me sens très fatigué ce matin après mon réveil, avec une sensation de soif extrême et une vision légèrement floue...",
    "Kiswahili (Swahili)": "mf: Ninajisikia mchovu sana asubuhi baada ya kuamka, na kiu kali sana na macho yasiyoona vizuri...",
    "Lingála": "mf: Nazali kolemba makasi tongo oyo sima ya kolamuka, na posa ya mai makasi mpe miso ezo moneka malamu te...",
    "Mashi / Shi (Kivu)": "mf: Nkuhembirwe bunene n'okubuka, n'enhota y'akatu n'amaso makarhe...",
    "Kinyarwanda / Kirundi": "ug: Ndumva ndangaye cyane mu gitondo nyuma yo kubyuka, n'inyota nyinshi n'amaso atareba neza...",
    "English": "e.g., I feel very tired this morning after waking up, with extreme thirst and slightly blurry vision..."
  },
  "quick_examples_tip": {
    "Français": "💡 Exemples rapides à tester en un clic :",
    "Kiswahili (Swahili)": "💡 Mifano ya haraka kujaribu kwa kubofya mara moja:",
    "Lingála": "💡 Ndakisa ya mbangu mpo na komeka:",
    "Mashi / Shi (Kivu)": "💡 Enjola z'okugerageza n'okuniga kuroku:",
    "Kinyarwanda / Kirundi": "💡 Ingero zihuse zo kugerageza:",
    "English": "💡 Quick examples to test in one click:"
  },
  "multimodal_attach_label": {
    "Français": "📸 Attachement Multimodal (Photo de Plat, Audio en Langue Locale ou Vidéo)",
    "Kiswahili (Swahili)": "📸 Kiambatisho (Picha ya Chakula, Sauti ya Lugha ya Nyumbani au Video)",
    "Lingála": "📸 Baka Eloko (Foto ya Bilei, Audio ya Mboka to Video)",
    "Mashi / Shi (Kivu)": "📸 Ekigushumikizwa (Ifoto y'ebyokulya, Audio y'olulimi lw'ekitu canke Video)",
    "Kinyarwanda / Kirundi": "📸 Umukongoro (Ifoto y'ifunguro, Amajwi y'icyaro cyangwa Videwo)",
    "English": "📸 Multimodal Attachment (Meal Photo, Local Language Audio or Video)"
  },
  "audio_recorded_msg": {
    "Français": "Audio en langue locale enregistré",
    "Kiswahili (Swahili)": "Sauti ya lugha ya nyumbani imehifadhiwa",
    "Lingála": "Audio ya mboka ekangami",
    "Mashi / Shi (Kivu)": "Audio y'olulimi lw'ekitu ebyanjiirwe",
    "Kinyarwanda / Kirundi": "Amajwi y'ururimi rwa gakondo yafashwe",
    "English": "Local language audio recorded"
  },
  "delete_btn": {
    "Français": "Supprimer",
    "Kiswahili (Swahili)": "Futa",
    "Lingála": "Kolongola",
    "Mashi / Shi (Kivu)": "Oshule",
    "Kinyarwanda / Kirundi": "Siba",
    "English": "Delete"
  },
  "drag_drop_photo": {
    "Français": "Glissez et déposez une photo, un audio ou une vidéo",
    "Kiswahili (Swahili)": "Buruta na udondoshe picha, sauti au video",
    "Lingála": "benda mpe tika foto, audio to video",
    "Mashi / Shi (Kivu)": "Okweshe n'odose ifoto, audio canke video",
    "Kinyarwanda / Kirundi": "Kurura n'ushyire ifoto, amajwi cyangwa videwo",
    "English": "Drag and drop a photo, audio or video"
  },
  "or_click_browse": {
    "Français": "Ou cliquez pour parcourir (JPG, PNG, MP3, WAV, MP4 supportés)",
    "Kiswahili (Swahili)": "Au bofya kuvinjari (JPG, PNG, MP3, WAV, MP4 zinaungwa mkono)",
    "Lingála": "To fina mpo na koluka (JPG, PNG, MP3, WAV, MP4)",
    "Mashi / Shi (Kivu)": "Canke onige mpu uronze (JPG, PNG, MP3, WAV, MP4)",
    "Kinyarwanda / Kirundi": "Cyangwa kanda ushakishe (JPG, PNG, MP3, WAV, MP4)",
    "English": "Or click to browse (JPG, PNG, MP3, WAV, MP4 supported)"
  },
  "take_photo_live": {
    "Français": "Prendre Photo en Direct",
    "Kiswahili (Swahili)": "Piga Picha Moja kwa Moja",
    "Lingála": "Kanga Foto Sikoyo",
    "Mashi / Shi (Kivu)": "Oyanse Ifoto Lero",
    "Kinyarwanda / Kirundi": "Fata Ifoto Imbonankubone",
    "English": "Take Live Photo"
  },
  "record_video_live": {
    "Français": "Filmer Vidéo en Direct",
    "Kiswahili (Swahili)": "Rekodi Video Moja kwa Moja",
    "Lingála": "Kanga Video Sikoyo",
    "Mashi / Shi (Kivu)": "Oyanse Video Lero",
    "Kinyarwanda / Kirundi": "Fata Videwo Imbonankubone",
    "English": "Record Live Video"
  },
  "voice_note_mic": {
    "Français": "🎙️ Note Vocale (Microphone)",
    "Kiswahili (Swahili)": "🎙️ Ujumbe wa Sauti (Maikrofoni)",
    "Lingála": "🎙️ Mongongo (Mikro)",
    "Mashi / Shi (Kivu)": "🎙️ Sauti (Microphone)",
    "Kinyarwanda / Kirundi": "🎙️ Ijwi (Mikoro)",
    "English": "🎙️ Voice Note (Microphone)"
  },
  "ai_diagnosing": {
    "Français": "🧠 IA en cours de diagnostic...",
    "Kiswahili (Swahili)": "🧠 IA inachunguza...",
    "Lingála": "🧠 IA ezo tala sikoyo...",
    "Mashi / Shi (Kivu)": "🧠 IA erikulaamira lero...",
    "Kinyarwanda / Kirundi": "🧠 IA iri gusuzuma...",
    "English": "🧠 AI diagnosing..."
  },
  "start_clinical_diag": {
    "Français": "Lancer le Diagnostic IA Clinique",
    "Kiswahili (Swahili)": "Anza Uchunguzi wa IA ya Tiba",
    "Lingála": "Banda Kotala ya Dokotolo IA",
    "Mashi / Shi (Kivu)": "Yansa Okulaamira kwa Muganga na IA",
    "Kinyarwanda / Kirundi": "Tangira Isuzuma rya Muganga IA",
    "English": "Start Clinical AI Diagnostic"
  },
  "model_ethno_kivu": {
    "Français": "Modèle : IA Ethno-Médicale Kivu",
    "Kiswahili (Swahili)": "Mfano: IA ya Tiba Asili Kivu",
    "Lingála": "Modèle: IA ya Nkisi ya Kivu",
    "Mashi / Shi (Kivu)": "Ifomu: IA y'Obulaamire bwe Kivu",
    "Kinyarwanda / Kirundi": "Ubwoko: IA y'Ubuvuzi bwo mu Kivu",
    "English": "Model: Kivu Ethno-Medical AI"
  },
  "stop_speech": {
    "Français": "Arrêter lecture",
    "Kiswahili (Swahili)": "Simamisha kusoma",
    "Lingála": "Tika kotanga",
    "Mashi / Shi (Kivu)": "Oshule okudesa",
    "Kinyarwanda / Kirundi": "Hagarika gusoma",
    "English": "Stop speech"
  },
  "listen_ai_voice": {
    "Français": "🔊 Écouter (Voix IA)",
    "Kiswahili (Swahili)": "🔊 Sikiliza (Sauti ya IA)",
    "Lingála": "🔊 Yoka (Mongongo ya IA)",
    "Mashi / Shi (Kivu)": "🔊 Oyumve (Sauti ya IA)",
    "Kinyarwanda / Kirundi": "🔊 Umva (Ijwi ry'IA)",
    "English": "🔊 Listen (AI Voice)"
  },
  "add_to_followup": {
    "Français": "+ Ajouter au Suivi",
    "Kiswahili (Swahili)": "+ Ongeza kwenye Ufuatiliaji",
    "Lingála": "+ Bakisa na Landela",
    "Mashi / Shi (Kivu)": "+ Oshaye mu Kulumia",
    "Kinyarwanda / Kirundi": "+ Ongeraho mu Gukurikirana",
    "English": "+ Add to Follow-up"
  },
  "voice_transcript_detected": {
    "Français": "Transcription vocale détectée :",
    "Kiswahili (Swahili)": "Maandishi ya sauti yaliyogunduliwa:",
    "Lingála": "Maloba ya mongongo emoneki:",
    "Mashi / Shi (Kivu)": "Amaloba g'esauti gabwinwe:",
    "Kinyarwanda / Kirundi": "Inyandiko y'ijwi yabonetse:",
    "English": "Voice transcript detected:"
  },
  "est_glycemic_impact": {
    "Français": "Impact Glycémique Estimé",
    "Kiswahili (Swahili)": "Athari ya Sukari Iliyokadiriwa",
    "Lingála": "Motuya ya Sukari Ekokanami",
    "Mashi / Shi (Kivu)": "Ekigero c'esukari cirhalikilwe",
    "Kinyarwanda / Kirundi": "Ingaruka ku Isukari Igereranyijwe",
    "English": "Estimated Glycemic Impact"
  },
  "prep_critique_label": {
    "Français": "Critique de Préparation (Huile, Cuisson, Dosage)",
    "Kiswahili (Swahili)": "Uhakiki wa Mapishi (Mafuta, Upishi, Kipimo)",
    "Lingála": "Toli ya Kolamba (Mafuta, Moto, Lekelo)",
    "Mashi / Shi (Kivu)": "Amaloba g'ekirhangiro (Amafuta, Moto, Ekigero)",
    "Kinyarwanda / Kirundi": "Isuzumwa ryo Gutegura (Amavuta, Gushyushya, Urwugero)",
    "English": "Preparation Critique (Oil, Cooking, Dosage)"
  },
  "kivu_alts_label": {
    "Français": "Alternatives & Améliorations de Cuisine Kivu",
    "Kiswahili (Swahili)": "Njia Mbadala & Maboresho ya Mapishi Kivu",
    "Lingála": "Bilei mosusu & Kobongisa Kolamba Kivu",
    "Mashi / Shi (Kivu)": "Ezindi njola n'okujirira ebyokulya bya Kivu",
    "Kinyarwanda / Kirundi": "Ubundi buryo & Inoze mu Mirire yo mu Kivu",
    "English": "Alternatives & Kivu Culinary Improvements"
  },
  "ai_recs_for": {
    "Français": "Recommandations Personnalisées de l'IA pour",
    "Kiswahili (Swahili)": "Ushauri Maalum wa IA kwa",
    "Lingála": "Toli ya Dokotolo IA mpo na",
    "Mashi / Shi (Kivu)": "Obuhubani bwa IA kwa",
    "Kinyarwanda / Kirundi": "Inama z'lA Zigenewe",
    "English": "Personalized AI Recommendations for"
  },
  "clinical_protocol_prefix": {
    "Français": "→ Protocole Clinique #0",
    "Kiswahili (Swahili)": "→ Mwongozo wa Tiba #0",
    "Lingála": "→ Mobeko ya Dokotolo #0",
    "Mashi / Shi (Kivu)": "→ Oshoole rwa Muganga #0",
    "Kinyarwanda / Kirundi": "→ Amabwiriza ya Muganga #0",
    "English": "→ Clinical Protocol #0"
  },
  "voice_msg_guide_prefix": {
    "Français": "Message Vocal Guide Patient (en",
    "Kiswahili (Swahili)": "Ujumbe wa Sauti wa Mwongozo (kwa",
    "Lingála": "Mongongo ya Kopesa Toli (na",
    "Mashi / Shi (Kivu)": "Sauti y'okuyegerera (mu",
    "Kinyarwanda / Kirundi": "Ubutumwa bw'Ijwi Buyobora (mu",
    "English": "Patient Guidance Voice Msg (in"
  },
  "replay_voice_msg": {
    "Français": "Réécouter le message vocal",
    "Kiswahili (Swahili)": "Sikiliza tena ujumbe wa sauti",
    "Lingála": "Yoka lisusu mongongo",
    "Mashi / Shi (Kivu)": "Oyumve ensinza esauti",
    "Kinyarwanda / Kirundi": "Umva cyangwa usubiremu ijwi",
    "English": "Replay voice message"
  },
  "Assistant Médical & Ethnobotanique": {
    "Français": "Assistant Médical & Ethnobotanique",
    "Kiswahili (Swahili)": "Msaidizi wa Tiba & Mimea Asili",
    "Lingála": "Mosungi ya Dokotolo & Nkisi ya Mboka",
    "Mashi / Shi (Kivu)": "Omurabizi wa Muganga & Emizire y'ekitu",
    "Kinyarwanda / Kirundi": "Umufasha mu Buvuzi & Ibyatsi Gakondo",
    "English": "Medical & Ethnobotanical Assistant"
  },
  "Kaggle AI Engine": {
    "Français": "Moteur IA Kaggle",
    "Kiswahili (Swahili)": "Mitambo ya IA Kaggle",
    "Lingála": "Moteur ya IA Kaggle",
    "Mashi / Shi (Kivu)": "Engufu ya IA Kaggle",
    "Kinyarwanda / Kirundi": "Ikoranabuhanga rya IA Kaggle",
    "English": "Kaggle AI Engine"
  },
  "Voix auto : ACTIVE": {
    "Français": "Voix auto : ACTIVE",
    "Kiswahili (Swahili)": "Sauti otomatiki: IMEWASHWA",
    "Lingála": "Mongongo auto: EPELI",
    "Mashi / Shi (Kivu)": "Sauti lero: EYAKA",
    "Kinyarwanda / Kirundi": "Ijwi rikubita: RIRAKORA",
    "English": "Auto voice: ON"
  },
  "Voix auto : désactivée": {
    "Français": "Voix auto : désactivée",
    "Kiswahili (Swahili)": "Sauti otomatiki: IMEZIMWA",
    "Lingála": "Mongongo auto: EKAWUKI",
    "Mashi / Shi (Kivu)": "Sauti lero: ESHULI",
    "Kinyarwanda / Kirundi": "Ijwi rikubita: RIRAHAGARA",
    "English": "Auto voice: OFF"
  },
  "NORMAL": {
    "Français": "NORMAL",
    "Kiswahili (Swahili)": "KAWAIDA",
    "Lingála": "MALAMU",
    "Mashi / Shi (Kivu)": "MANJA",
    "Kinyarwanda / Kirundi": "BISANZWE",
    "English": "NORMAL"
  },
  "IoT & Santé Connectée • IA Clinique": {
    "Français": "IoT & Santé Connectée • IA Clinique",
    "Kiswahili (Swahili)": "Vifaa vilivyounganishwa & Afya • IA ya Tiba",
    "Lingála": "Biangeli ya ko-connecter • IA Dokotolo",
    "Mashi / Shi (Kivu)": "Bikoresho by'amagarho • IA ya Muganga",
    "Kinyarwanda / Kirundi": "Ibikoresho by'Ubuzima • IA ya Muganga",
    "English": "IoT & Connected Health • Clinical AI"
  },
  "Connexion Appareils & Saisie Manuelle": {
    "Français": "Connexion Appareils & Saisie Manuelle",
    "Kiswahili (Swahili)": "Kuunganisha Vifaa & Kuingiza kwa Mkono",
    "Lingála": "Ko-kanga Biangeli & Kokoma na maboko",
    "Mashi / Shi (Kivu)": "Okuyunjwa kw'ebikoresho & Okuwandika na kuroku",
    "Kinyarwanda / Kirundi": "Guhuza Ibikoresho & Kwandika n'intoki",
    "English": "Device Connection & Manual Entry"
  },
  "Reliez vos appareils médicaux ou tapez vos chiffres simplement :": {
    "Français": "Reliez vos appareils médicaux ou tapez vos chiffres simplement :",
    "Kiswahili (Swahili)": "Unganisha vifaa vyako vya matibabu au andika nambari zako kwa urahisi:",
    "Lingála": "Kanga biangeli na yo ya dokotolo to koma motuya na yo:",
    "Mashi / Shi (Kivu)": "Yunjwa ebikoresho byawe by'amagarho canke wandike eminani yawe:",
    "Kinyarwanda / Kirundi": "Huza ibikoresho byawe by'ubuvuzi cyangwa yandika imibare yawe:",
    "English": "Connect your medical devices or simply enter your numbers:"
  },
  "1. Appareils Bluetooth / USB": {
    "Français": "1. Appareils Bluetooth / USB",
    "Kiswahili (Swahili)": "1. Vifaa vya Bluetooth / USB",
    "Lingála": "1. Biangeli ya Bluetooth / USB",
    "Mashi / Shi (Kivu)": "1. Ebikoresho bya Bluetooth / USB",
    "Kinyarwanda / Kirundi": "1. Ibikoresho bya Bluetooth / USB",
    "English": "1. Bluetooth / USB Devices"
  },
  "2. Saisie Manuelle des Chiffres": {
    "Français": "2. Saisie Manuelle des Chiffres",
    "Kiswahili (Swahili)": "2. Kuingiza Nambari kwa Mkono",
    "Lingála": "2. Kokoma Motuya na Maboko",
    "Mashi / Shi (Kivu)": "2. Okuwandika Eminani na Kuroku",
    "Kinyarwanda / Kirundi": "2. Kwandika Imibare n'Intoki",
    "English": "2. Manual Number Entry"
  },
  "Dernier relevé : ": {
    "Français": "Dernier relevé : ",
    "Kiswahili (Swahili)": "Kipimo cha mwisho : ",
    "Lingála": "Motuya ya suka : ",
    "Mashi / Shi (Kivu)": "Ekipimo c'enyuma : ",
    "Kinyarwanda / Kirundi": "Ikiheruka kupimwa : ",
    "English": "Last reading: "
  },
  "Batterie ": {
    "Français": "Batterie ",
    "Kiswahili (Swahili)": "Betri ",
    "Lingála": "Batterie ",
    "Mashi / Shi (Kivu)": "Ebatterie ",
    "Kinyarwanda / Kirundi": "Bateri ",
    "English": "Battery "
  },
  "Écouter": {
    "Français": "Écouter",
    "Kiswahili (Swahili)": "Sikiliza",
    "Lingála": "Yoka",
    "Mashi / Shi (Kivu)": "Oyumve",
    "Kinyarwanda / Kirundi": "Umva",
    "English": "Listen"
  },
  "Déconnecter": {
    "Français": "Déconnecter",
    "Kiswahili (Swahili)": "Tenganisha",
    "Lingála": "Kofungola",
    "Mashi / Shi (Kivu)": "Olekule",
    "Kinyarwanda / Kirundi": "Hagarika guhuza",
    "English": "Disconnect"
  },
  "Relier en Bluetooth": {
    "Français": "Relier en Bluetooth",
    "Kiswahili (Swahili)": "Unganisha na Bluetooth",
    "Lingála": "Kanga na Bluetooth",
    "Mashi / Shi (Kivu)": "Yunjwa na Bluetooth",
    "Kinyarwanda / Kirundi": "Huza na Bluetooth",
    "English": "Connect Bluetooth"
  },
  "Astuce PWA :": {
    "Français": "Astuce PWA :",
    "Kiswahili (Swahili)": "Dokezo la PWA:",
    "Lingála": "Toli ya PWA:",
    "Mashi / Shi (Kivu)": "Obwishinge bwa PWA:",
    "Kinyarwanda / Kirundi": "Inama ya PWA:",
    "English": "PWA Tip:"
  },
  "Glycémie (Sucre)": {
    "Français": "Glycémie (Sucre)",
    "Kiswahili (Swahili)": "Sukari ya Damu",
    "Lingála": "Sukari ya Makila",
    "Mashi / Shi (Kivu)": "Esukari y'omumuko",
    "Kinyarwanda / Kirundi": "Isukari yo mu Maraso",
    "English": "Blood Glucose (Sugar)"
  },
  "Poids (Kg)": {
    "Français": "Poids (Kg)",
    "Kiswahili (Swahili)": "Uzito (Kg)",
    "Lingála": "Kilo (Kg)",
    "Mashi / Shi (Kivu)": "Obureme (Kg)",
    "Kinyarwanda / Kirundi": "Ibilo (Kg)",
    "English": "Weight (Kg)"
  },
  "Niveau de Glycémie (en mg/dL)": {
    "Français": "Niveau de Glycémie (en mg/dL)",
    "Kiswahili (Swahili)": "Kiwango cha Sukari (mg/dL)",
    "Lingála": "Motuya ya Sukari (mg/dL)",
    "Mashi / Shi (Kivu)": "Ekigero c'Esukari (mg/dL)",
    "Kinyarwanda / Kirundi": "Urugero rw'Isukari (mg/dL)",
    "English": "Glucose Level (mg/dL)"
  },
  "Systolique (Haut)": {
    "Français": "Systolique (Haut)",
    "Kiswahili (Swahili)": "Presha ya Juu",
    "Lingála": "Tension ya Likolo",
    "Mashi / Shi (Kivu)": "Empugumo ya Nzala",
    "Kinyarwanda / Kirundi": "Umuvuduko wo Hejuru",
    "English": "Systolic (High)"
  },
  "Diastolique (Bas)": {
    "Français": "Diastolique (Bas)",
    "Kiswahili (Swahili)": "Presha ya Chini",
    "Lingála": "Tension ya Se",
    "Mashi / Shi (Kivu)": "Empugumo ya Muji",
    "Kinyarwanda / Kirundi": "Umuvuduko wo Hasi",
    "English": "Diastolic (Low)"
  },
  "Votre Poids Actuel (en Kg)": {
    "Français": "Votre Poids Actuel (en Kg)",
    "Kiswahili (Swahili)": "Uzito Wako Sasa (Kg)",
    "Lingála": "Kilo na yo ya Sikoyo (Kg)",
    "Mashi / Shi (Kivu)": "Obureme bwawe Lero (Kg)",
    "Kinyarwanda / Kirundi": "Ibilo Byawe Ubu (Kg)",
    "English": "Current Weight (Kg)"
  },
  "Enregistrer & Analyser par IA": {
    "Français": "Enregistrer & Analyser par IA",
    "Kiswahili (Swahili)": "Hifadhi & Chunguza na IA",
    "Lingála": "Bomba & Tala na IA",
    "Mashi / Shi (Kivu)": "Biika & Laamirwa na IA",
    "Kinyarwanda / Kirundi": "Bika & Suzumwa n'IA",
    "English": "Save & Analyze with AI"
  },
  "Moteur Multimodal IA Clinique": {
    "Français": "Moteur Multimodal IA Clinique",
    "Kiswahili (Swahili)": "Mitambo ya IA ya Tiba Anuwai",
    "Lingála": "Moteur ya IA Dokotolo",
    "Mashi / Shi (Kivu)": "Engufu y'obulaamire bwa IA",
    "Kinyarwanda / Kirundi": "Ikoranabuhanga rya IA ya Muganga",
    "English": "Clinical Multimodal AI Engine"
  },
  "Langue :": {
    "Français": "Langue :",
    "Kiswahili (Swahili)": "Lugha :",
    "Lingála": "Lokota :",
    "Mashi / Shi (Kivu)": "Olulimi :",
    "Kinyarwanda / Kirundi": "Ururimi :",
    "English": "Language:"
  },
  "stop_recording_btn": {
    "Français": "Arrêter Enregistrement",
    "Kiswahili (Swahili)": "Simamisha Kurekodi",
    "Lingála": "Tika Kokanga",
    "Mashi / Shi (Kivu)": "Oshule Okuwandika",
    "Kinyarwanda / Kirundi": "Hagarika gufata amajwi",
    "English": "Stop Recording"
  },
  "Niveau :": {
    "Français": "Niveau :",
    "Kiswahili (Swahili)": "Kiwango :",
    "Lingála": "Niveau :",
    "Mashi / Shi (Kivu)": "Ekigero :",
    "Kinyarwanda / Kirundi": "Urwego :",
    "English": "Level:"
  },
  "🆘 Protocole de Sécurité PWA (Hors-ligne & En ligne)": {
    "Français": "🆘 Protocole de Sécurité PWA (Hors-ligne & En ligne)",
    "Kiswahili (Swahili)": "🆘 Mwongozo wa Usalama PWA (Nje ya mtandao & Mtandaoni)",
    "Lingála": "🆘 Toli ya Kibika PWA (Offline & Online)",
    "Mashi / Shi (Kivu)": "🆘 Obwishinge bwa PWA (Eyishali internet)",
    "Kinyarwanda / Kirundi": "🆘 Amabwiriza y'Umutekano PWA (Ku murongo no Hanze yawo)",
    "English": "🆘 PWA Safety Protocol (Offline & Online)"
  },
  "Guide Technique & Connecteur API": {
    "Français": "Guide Technique & Connecteur API",
    "Kiswahili (Swahili)": "Mwongozo wa Kiufundi & Kiunganishi cha API",
    "Lingála": "Gide ya Tekiniki & Ko-connecter API",
    "Mashi / Shi (Kivu)": "Obwishinge bw'Ebiroba & API",
    "Kinyarwanda / Kirundi": "Inyobora y'Ikoranabuhanga & API",
    "English": "Technical Guide & API Connector"
  },
  "Écouter le Guide": {
    "Français": "Écouter le Guide",
    "Kiswahili (Swahili)": "Sikiliza Mwongozo",
    "Lingála": "Yoka Gide",
    "Mashi / Shi (Kivu)": "Oyumve Obwishinge",
    "Kinyarwanda / Kirundi": "Umva Inyobora",
    "English": "Listen to Guide"
  },
  "🔑 1. Connecteur Kaggle": {
    "Français": "🔑 1. Connecteur Kaggle",
    "Kiswahili (Swahili)": "🔑 1. Kiunganishi cha Kaggle",
    "Lingála": "🔑 1. Ko-kanga na Kaggle",
    "Mashi / Shi (Kivu)": "🔑 1. Okuromba na Kaggle",
    "Kinyarwanda / Kirundi": "🔑 1. Gukora kuri Kaggle",
    "English": "🔑 1. Kaggle Connector"
  },
  "2. Pipeline IA": {
    "Français": "2. Pipeline IA",
    "Kiswahili (Swahili)": "2. Mfumo wa IA",
    "Lingála": "2. Nzela ya IA",
    "Mashi / Shi (Kivu)": "2. Enzira ya IA",
    "Kinyarwanda / Kirundi": "2. Umuhuza wa IA",
    "English": "2. AI Pipeline"
  },
  "3. Cloud vs Edge": {
    "Français": "3. Cloud vs Edge",
    "Kiswahili (Swahili)": "3. Mtandao vs Ndani ya Simu",
    "Lingála": "3. Likolo vs Na Phone",
    "Mashi / Shi (Kivu)": "3. Internet vs Mumashine",
    "Kinyarwanda / Kirundi": "3. Kuri Interineti vs Mu Terefoni",
    "English": "3. Cloud vs Edge"
  },
  "4. Simulation Directe": {
    "Français": "4. Simulation Directe",
    "Kiswahili (Swahili)": "4. Jaribio la Moja kwa Moja",
    "Lingála": "4. Mekameka Mbala Moko",
    "Mashi / Shi (Kivu)": "4. Okukagera Lero",
    "Kinyarwanda / Kirundi": "4. Kugerageza Ako Kanya",
    "English": "4. Live Simulation"
  },
  "Pharmacopée du Kivu & Gastronomie Africaine": {
    "Français": "Pharmacopée du Kivu & Gastronomie Africaine",
    "Kiswahili (Swahili)": "Dawa za Asili za Kivu & Vyakula vya Kiafrika",
    "Lingála": "Matiti ya Mboka Kivu & Bilei ya Afrika",
    "Mashi / Shi (Kivu)": "Emizire y'ekitu Kivu n'Ebyokulya bya Kinyafrika",
    "Kinyarwanda / Kirundi": "Ibyatsi byo mu Kivu n'Imirire Nyafurika",
    "English": "Kivu Pharmacopeia & African Gastronomy"
  },
  "Encyclopédie des Plantes & Accompagnements Antidiabétiques": {
    "Français": "Encyclopédie des Plantes & Accompagnements Antidiabétiques",
    "Kiswahili (Swahili)": "Kamusi ya Mimea & Vyakula vya Kupambana na Kisukari",
    "Lingála": "Buku ya Matiti & Bilei ya Kobika Sukari",
    "Mashi / Shi (Kivu)": "Oko kushinga Emizire n'Ebyokulya bya Kisukari",
    "Kinyarwanda / Kirundi": "Igitabo cy'Ibyatsi n'Ifunguro rirwanya Isukari",
    "English": "Encyclopedia of Anti-Diabetic Herbs & Sides"
  },
  "Toutes les plantes médicinales locales (Ndakala/Vernonia, Moringa, Bissap, Prunus africana) et les règles de préparation des mets de base (Saka-Saka/Pondu, Fufu de mil/sorgho, Gombo) pour stabiliser le diabète sans perte culturelle.": {
    "Français": "Toutes les plantes médicinales locales (Ndakala/Vernonia, Moringa, Bissap, Prunus africana) et les règles de préparation des mets de base (Saka-Saka/Pondu, Fufu de mil/sorgho, Gombo) pour stabiliser le diabète sans perte culturelle.",
    "Kiswahili (Swahili)": "Mimea yote ya dawa ya kienyeji (Ndakala/Vernonia, Moringa, Bissap, Prunus africana) na sheria za kutayarisha vyakula vya msingi (Saka-Saka/Pondu, Ugali wa mtama/uwele, Bamia) kudhibiti kisukari bila kupoteza utamaduni.",
    "Lingála": "Matiti yanso ya mboka (Ndolé, Moringa, Bissap, Prunus africana) mpe lolenge ya kolamba bilei ya mboka (Mpondu, Fufu ya masangu, Dongo-dongo) mpo na kobongisa sukari kozanga kobosana bonkoko.",
    "Mashi / Shi (Kivu)": "Emizire yosi y'ekitu (Kimbwire, Moringa, Bissap, Prunus africana) n'okulamba ebyokulya bya cisharha (Saka-Saka/Pondu, Ubugali bwa muhama, Gombo) kugandagaza kisukari murhohali.",
    "Kinyarwanda / Kirundi": "Ibyatsi byose byo mu gihugu (Umubirizi, Moringa, Bissap, Prunus africana) n'amabwiriza yo gutegura amafunguro ya gakondo (Isombe, Ubugali bw'amasaka, Okra) mu kugabanya isukari mu maraso nta guta umuco.",
    "English": "All local medicinal plants (Ndakala/Vernonia, Moringa, Bissap, Prunus africana) and preparation rules for staple meals (Saka-Saka/Pondu, Sorghum/millet fufu, Okra) to stabilize diabetes without cultural loss."
  },
  "Données disponibles en PWA hors-ligne": {
    "Français": "Données disponibles en PWA hors-ligne",
    "Kiswahili (Swahili)": "Taarifa inapatikana bila mtandao (PWA Offline)",
    "Lingála": "Mayele ezali ata internet te (PWA Offline)",
    "Mashi / Shi (Kivu)": "Ekano koli naho eyishali internet",
    "Kinyarwanda / Kirundi": "Amakuru aboneka n'ubwo nta murongo wa interineti waba uhari",
    "English": "Data available offline in PWA"
  },
  "Rechercher par nom (Ndakala, Pondu, Moringa, Mashi...)": {
    "Français": "Rechercher par nom (Ndakala, Pondu, Moringa, Mashi...)",
    "Kiswahili (Swahili)": "Tafuta kwa jina (Ndakala, Pondu, Moringa, Mashi...)",
    "Lingála": "Luka na kombo (Ndolé, Mpondu, Moringa...)",
    "Mashi / Shi (Kivu)": "Oronze n'izino (Kimbwire, Pondu, Moringa...)",
    "Kinyarwanda / Kirundi": "Shakisha ku izina (Umubirizi, Isombe, Moringa...)",
    "English": "Search by name (Ndakala, Pondu, Moringa, Mashi...)"
  },
  "effacer": {
    "Français": "effacer",
    "Kiswahili (Swahili)": "futa",
    "Lingála": "limwisa",
    "Mashi / Shi (Kivu)": "oshule",
    "Kinyarwanda / Kirundi": "siba",
    "English": "clear"
  },
  "Caméra en Direct • Analyse IA Clinique": {
    "Français": "Caméra en Direct • Analyse IA Clinique",
    "Kiswahili (Swahili)": "Kamera ya Moja kwa Moja • Uchambuzi wa IA ya Tiba",
    "Lingála": "Camera Mbala Moko • Botali ya Dokotolo IA",
    "Mashi / Shi (Kivu)": "Ecamera Lero • Obulaamire bwa Muganga IA",
    "Kinyarwanda / Kirundi": "Camera Kuri Ako Kanya • Isuzuma rya IA ya Muganga",
    "English": "Live Camera • Clinical AI Analysis"
  },
  "Prendre une Photo de Plante ou Plat": {
    "Français": "Prendre une Photo de Plante ou Plat",
    "Kiswahili (Swahili)": "Piga Picha ya Mmea au Chakula",
    "Lingála": "Kanga Foto ya Matiti to Bilei",
    "Mashi / Shi (Kivu)": "Oshaye Efoto y'Ekizire canke Ebyokulya",
    "Kinyarwanda / Kirundi": "Fata Ifoto y'Ibyatsi cyangwa Ifunguro",
    "English": "Take Photo of Plant or Meal"
  },
  "Enregistrer une Vidéo de Préparation / Cuisson": {
    "Français": "Enregistrer une Vidéo de Préparation / Cuisson",
    "Kiswahili (Swahili)": "Rekodi Video ya Mapishi / Utayarishaji",
    "Lingála": "Kanga Video ya Kolamba",
    "Mashi / Shi (Kivu)": "Owandike Evideo y'Okulamba",
    "Kinyarwanda / Kirundi": "Fata Videwo yo Gutegura / Guteka",
    "English": "Record Video of Preparation / Cooking"
  },
  "Photo": {
    "Français": "Photo",
    "Kiswahili (Swahili)": "Picha",
    "Lingála": "Foto",
    "Mashi / Shi (Kivu)": "Efoto",
    "Kinyarwanda / Kirundi": "Ifoto",
    "English": "Photo"
  },
  "Vidéo": {
    "Français": "Vidéo",
    "Kiswahili (Swahili)": "Video",
    "Lingála": "Video",
    "Mashi / Shi (Kivu)": "Evideo",
    "Kinyarwanda / Kirundi": "Videwo",
    "English": "Video"
  },
  "Accès Caméra Restreint ou Non Disponible": {
    "Français": "Accès Caméra Restreint ou Non Disponible",
    "Kiswahili (Swahili)": "Ufikiaji wa Kamera Umezuiliwa au Haupo",
    "Lingála": "Nzela ya Camera Ekangami to Ezali te",
    "Mashi / Shi (Kivu)": "Okanze Ecamera Kandi Kahulwire",
    "Kinyarwanda / Kirundi": "Uburenganzira bwa Camera Bwanze",
    "English": "Camera Access Restricted or Unavailable"
  },
  "Réessayer la connexion": {
    "Français": "Réessayer la connexion",
    "Kiswahili (Swahili)": "Jaribu tena kuunganisha",
    "Lingála": "Meka lisusu kokanga",
    "Mashi / Shi (Kivu)": "Okagera enyuma",
    "Kinyarwanda / Kirundi": "Ongera ugerageze guhuza",
    "English": "Retry connection"
  },
  "Dossier Médical & Préférences": {
    "Français": "Dossier Médical & Préférences",
    "Kiswahili (Swahili)": "Rekodi za Tiba & Mapendeleo",
    "Lingála": "Dossier ya Dokotolo & Mposa na yo",
    "Mashi / Shi (Kivu)": "Amagarho n'Ekano zosi",
    "Kinyarwanda / Kirundi": "Idosiye y'Ubuvuzi n'Amategeko",
    "English": "Medical Record & Preferences"
  },
  "Personnalisez votre suivi pour des conseils IA cliniques précis.": {
    "Français": "Personnalisez votre suivi pour des conseils IA cliniques précis.",
    "Kiswahili (Swahili)": "Weka mapendeleo ya ufuatiliaji wako kwa ushauri sahihi wa IA ya tiba.",
    "Lingála": "Bongisa lolenge ya kolandela po na toli ya malamu ya IA.",
    "Mashi / Shi (Kivu)": "Yunjwa ekano zawe lero ku bulozi bwa IA.",
    "Kinyarwanda / Kirundi": "Tegura imiterere y'isuzuma ryawe kugira ngo IA igihe inama zinoze.",
    "English": "Customize your tracking for accurate clinical AI guidance."
  },
  "Nom et Prénom": {
    "Français": "Nom et Prénom",
    "Kiswahili (Swahili)": "Jina Kamili",
    "Lingála": "Kombo na yo",
    "Mashi / Shi (Kivu)": "Izino lyawe",
    "Kinyarwanda / Kirundi": "Amazina yose",
    "English": "Full Name"
  },
  "Âge": {
    "Français": "Âge",
    "Kiswahili (Swahili)": "Umri",
    "Lingála": "Mbu (Age)",
    "Mashi / Shi (Kivu)": "Emyaka",
    "Kinyarwanda / Kirundi": "Imyaka",
    "English": "Age"
  },
  "Type de Diabète": {
    "Français": "Type de Diabète",
    "Kiswahili (Swahili)": "Aina ya Kisukari",
    "Lingála": "Lolenge ya Diabète",
    "Mashi / Shi (Kivu)": "Olulenge lwa Kisukari",
    "Kinyarwanda / Kirundi": "Ubwoko bw'Isukari",
    "English": "Diabetes Type"
  },
  "Diabète de Type 1": {
    "Français": "Diabète de Type 1",
    "Kiswahili (Swahili)": "Kisukari Aina ya 1",
    "Lingála": "Diabète ya Motindo 1",
    "Mashi / Shi (Kivu)": "Kisukari ya 1",
    "Kinyarwanda / Kirundi": "Isukari yo mu Bwoko bwa 1",
    "English": "Type 1 Diabetes"
  },
  "Diabète de Type 2": {
    "Français": "Diabète de Type 2",
    "Kiswahili (Swahili)": "Kisukari Aina ya 2",
    "Lingála": "Diabète ya Motindo 2",
    "Mashi / Shi (Kivu)": "Kisukari ya 2",
    "Kinyarwanda / Kirundi": "Isukari yo mu Bwoko bwa 2",
    "English": "Type 2 Diabetes"
  },
  "Diabète Gestationnel": {
    "Français": "Diabète Gestationnel",
    "Kiswahili (Swahili)": "Kisukari cha Ujauzito",
    "Lingála": "Diabète ya Zemi",
    "Mashi / Shi (Kivu)": "Kisukari c'ekida",
    "Kinyarwanda / Kirundi": "Isukari yo mu Gihe cy'Ugutwita",
    "English": "Gestational Diabetes"
  },
  "Pré-diabète / Prévention": {
    "Français": "Pré-diabète / Prévention",
    "Kiswahili (Swahili)": "Kabla ya kisukari / Kinga",
    "Lingála": "Liboso ya Diabète / Kobatelama",
    "Mashi / Shi (Kivu)": "Embeli y'ekisukari / Okurolerera",
    "Kinyarwanda / Kirundi": "Mbere y'Isukari / Kwirinda",
    "English": "Pre-diabetes / Prevention"
  },
  "Localisation (Région / Ville)": {
    "Français": "Localisation (Région / Ville)",
    "Kiswahili (Swahili)": "Eneo (Mkoa / Mji)",
    "Lingála": "Esika (Etuka / Engumba)",
    "Mashi / Shi (Kivu)": "Ekano (Igihugu / Muji)",
    "Kinyarwanda / Kirundi": "Aho uherereye (Intara / Umujyi)",
    "English": "Location (Region / City)"
  },
  "Cible Glycémie Min (mg/dL)": {
    "Français": "Cible Glycémie Min (mg/dL)",
    "Kiswahili (Swahili)": "Kiwango cha Chini cha Sukari (mg/dL)",
    "Lingála": "Sukari ya se mingi (mg/dL)",
    "Mashi / Shi (Kivu)": "Ekigero c'esukari ya muji (mg/dL)",
    "Kinyarwanda / Kirundi": "Urugero rw'Isukari rwo Hasi (mg/dL)",
    "English": "Min Glucose Target (mg/dL)"
  },
  "Cible Glycémie Max (mg/dL)": {
    "Français": "Cible Glycémie Max (mg/dL)",
    "Kiswahili (Swahili)": "Kiwango cha Juu cha Sukari (mg/dL)",
    "Lingála": "Sukari ya likolo mingi (mg/dL)",
    "Mashi / Shi (Kivu)": "Ekigero c'esukari ya nzala (mg/dL)",
    "Kinyarwanda / Kirundi": "Urugero rw'Isukari rwo Hejuru (mg/dL)",
    "English": "Max Glucose Target (mg/dL)"
  },
  "Traitements actuels (Médicaments & Plantes médicinales séparés par des virgules)": {
    "Français": "Traitements actuels (Médicaments & Plantes médicinales séparés par des virgules)",
    "Kiswahili (Swahili)": "Matibabu ya sasa (Dawa za hospitali na za asili zikitenganishwa na mkato)",
    "Lingála": "Nkisi ya sikoyo (Bikisi ya poso & matiti ya mboka)",
    "Mashi / Shi (Kivu)": "Emizire y'olero (Emizire n'ekitu)",
    "Kinyarwanda / Kirundi": "Imiti ukoresha ubu (Imiti ya kizungu n'ibyatsi gakondo)",
    "English": "Current treatments (Medications & Herbal remedies separated by commas)"
  },
  "Enregistrer le Profil": {
    "Français": "Enregistrer le Profil",
    "Kiswahili (Swahili)": "Hifadhi Wasifu",
    "Lingála": "Bomba Profile",
    "Mashi / Shi (Kivu)": "Biika Profile",
    "Kinyarwanda / Kirundi": "Bika Umwirondoro",
    "English": "Save Profile"
  },
  "noon_main_meal": {
    "Français": "Midi (Repas principal)",
    "Kiswahili (Swahili)": "Mchana (Chakula kuu)",
    "Lingála": "Mokolo (Bilei ya monene)",
    "Mashi / Shi (Kivu)": "Muzani (Ebyokulya binene)",
    "Kinyarwanda / Kirundi": "Saa sita z'amanywa (Ifunguro nyamukuru)",
    "English": "Noon (Main meal)"
  },
  "kivu_prescription_badge": {
    "Français": "🌱 Prescription Kivu",
    "Kiswahili (Swahili)": "🌱 Ushauri wa Kivu",
    "Lingála": "🌱 Toli ya Kivu",
    "Mashi / Shi (Kivu)": "🌱 Oluhango lwa Kivu",
    "Kinyarwanda / Kirundi": "🌱 Inyandiko ya Kivu",
    "English": "🌱 Kivu Prescription"
  },
  "celebrate_stability_title": {
    "Français": "Célébrer la stabilité du taux de sucre !",
    "Kiswahili (Swahili)": "Sherehekea utulivu wa kiwango cha sukari!",
    "Lingála": "Sepela na bozongisi sukari na esika na yo!",
    "Mashi / Shi (Kivu)": "Oshima kuku esukari eri manja!",
    "Kinyarwanda / Kirundi": "Yishimire kugumana isukari nziza!",
    "English": "Celebrate blood sugar stability!"
  },
  "sample_query_fufu_evening": {
    "Français": "Est-ce que je peux manger du fufu de sorgho ce soir sans faire grimper ma glycémie ?",
    "Kiswahili (Swahili)": "Je, ninaweza kula ugali wa mtama jioni ya leo bila kupandisha sukari yangu?",
    "Lingála": "Nakoki kolia fufu ya masangu pokwa oyo kozanga komatisa sukari?",
    "Mashi / Shi (Kivu)": "Rhenaye okulya ubugali bwa muhama mwishwe lero eyishali kwanza esukari?",
    "Kinyarwanda / Kirundi": "Nshobora kurya ubugali bw'amasaka iri joro nta kubyimbisha isukari?",
    "English": "Can I eat sorghum fufu tonight without spiking my blood sugar?"
  },
  "ask_ai_arrow": {
    "Français": "Demander à l'IA →",
    "Kiswahili (Swahili)": "Uliza IA →",
    "Lingála": "Tuna IA →",
    "Mashi / Shi (Kivu)": "Oshule IA →",
    "Kinyarwanda / Kirundi": "Baza IA →",
    "English": "Ask AI →"
  },
  "check_meal_with_ai_btn": {
    "Français": "📸 Vérifier un plat avec l'IA Clinique",
    "Kiswahili (Swahili)": "📸 Angalia chakula na IA ya Tiba",
    "Lingála": "📸 Tala bilei na IA Dokotolo",
    "Mashi / Shi (Kivu)": "📸 Oronze ebyokulya na IA ya Muganga",
    "Kinyarwanda / Kirundi": "📸 Reba ifunguro n'IA ya Muganga",
    "English": "📸 Check meal with Clinical AI"
  },
  "glucose_mg_dl_label": {
    "Français": "Glycémie (mg/dL)",
    "Kiswahili (Swahili)": "Sukari (mg/dL)",
    "Lingála": "Sukari (mg/dL)",
    "Mashi / Shi (Kivu)": "Esukari (mg/dL)",
    "Kinyarwanda / Kirundi": "Isukari (mg/dL)",
    "English": "Glucose (mg/dL)"
  },
  "target_max_short": {
    "Français": "Cible Max",
    "Kiswahili (Swahili)": "Kiwango Juu",
    "Lingála": "Suka Likolo",
    "Mashi / Shi (Kivu)": "Enzala",
    "Kinyarwanda / Kirundi": "Intego Hejuru",
    "English": "Target Max"
  },
  "target_min_short": {
    "Français": "Cible Min",
    "Kiswahili (Swahili)": "Kiwango Chini",
    "Lingála": "Suka Se",
    "Mashi / Shi (Kivu)": "Emuji",
    "Kinyarwanda / Kirundi": "Intego Hasi",
    "English": "Target Min"
  },
  "hypo_threshold_short": {
    "Français": "Seuil Hypo",
    "Kiswahili (Swahili)": "Chini Sana",
    "Lingála": "Se Makasi",
    "Mashi / Shi (Kivu)": "Emuji Mwanze",
    "Kinyarwanda / Kirundi": "Insi y'Intego",
    "English": "Hypo Limit"
  },
  "def_manual_note": {
    "Français": "Mesure après repas (Fufu de sorgho + Saka-saka)",
    "Kiswahili (Swahili)": "Kipimo baada ya chakula (Ugali wa mtama + Saka-saka)",
    "Lingála": "Motuya sima ya bilei (Fufu ya masangu + Mpondu)",
    "Mashi / Shi (Kivu)": "Ekipimo c'enyuma y'ebyokulya (Ubugali bwa muhama + Saka-saka)",
    "Kinyarwanda / Kirundi": "Gupima nyuma yo kurya (Ubugali bw'amasaka + Isombe)",
    "English": "Post-meal measurement (Sorghum fufu + Saka-saka)"
  },
  "chatbot_welcome_msg": {
    "Français": "Jambo et bienvenue ! 🌿 Je suis votre Assistant Médical & Ethnobotanique propulsé par l'IA Clinique (Kaggle Hub). Je suis ici pour répondre à vos questions sur le diabète, la préparation de vos plats locaux (Saka-Saka, Fufu, Ndakala) et l'utilisation sécurisée de nos plantes africaines. Comment vous sentez-vous aujourd'hui ?",
    "Kiswahili (Swahili)": "Jambo na karibu! 🌿 Mimi ni Msaidizi wako wa Tiba & Mimea Asili ninayendeshwa na IA ya Tiba (Kaggle Hub). Niko hapa kujibu maswali yako kuhusu kisukari, mapishi ya vyakula vya kienyeji (Saka-Saka, Ugali, Ndakala) na matumizi salama ya mimea yetu ya Kiafrika. Unajisikiaje leo?",
    "Lingála": "Mbote na boyeyi malamu! 🌿 Nazali Mosungi na yo ya Dokotolo & Nkisi ya Mboka. Nazali awa po na kopesa eyano na mituna na yo ya diabète, lolenge ya kolamba bilei ya mboka (Mpondu, Fufu, Ndolé) mpe kosalela matiti ya mboka na kibika. Ozali koka-yoka ndenge nini lelo?",
    "Mashi / Shi (Kivu)": "Rhwakuhegere! 🌿 Ndi Murabizi wawe wa Muganga n'Emizire y'ekitu. Ndi hano kushuza amadundwi gawe g'ekisukari, okulamba ebyokulya byawe (Saka-Saka, Ubugali, Kimbwire) n'okurolerera emizire y'ekitu. Rhuderi wumvirhe lero?",
    "Kinyarwanda / Kirundi": "Murakaza neza! 🌿 Ndi Umufasha wawe mu Buvuzi n'Ibyatsi Gakondo ukoresha IA ya Muganga (Kaggle Hub). Ndi hano gusubiza ibibazo byawe ku isukari, gutegura amafunguro ya gakondo (Isombe, Ubugali, Umubirizi) n'ugukoresha ibyatsi bya Nyafurika neza. Umeze ute uyu munsi?",
    "English": "Jambo and welcome! 🌿 I am your Medical & Ethnobotanical Assistant powered by Clinical AI (Kaggle Hub). I am here to answer your questions about diabetes, preparing local dishes (Saka-Saka, Fufu, Ndakala) and the safe use of our African medicinal plants. How are you feeling today?"
  },
  "ask_ai_in_lang": {
    "Français": "Poser une question à l'IA Clinique...",
    "Kiswahili (Swahili)": "Uliza swali kwa IA ya Tiba...",
    "Lingála": "Tuna motuna na IA Dokotolo...",
    "Mashi / Shi (Kivu)": "Oshule idundwi lya Muganga IA...",
    "Kinyarwanda / Kirundi": "Baza ikibazo IA ya Muganga...",
    "English": "Ask Clinical AI a question..."
  },
  "loading_botanical": {
    "Français": "Chargement de l'encyclopédie botanique & culinaire du Kivu...",
    "Kiswahili (Swahili)": "Inapakia ensaiklopedia ya mimea na mapishi ya Kivu...",
    "Lingála": "Kozwa búku ya nkisi mpe biloko ya kolamba ya Kivu...",
    "Mashi / Shi (Kivu)": "Oshoga ensaiklopedia y'emizire n'ebyokulya bya Kivu...",
    "Kinyarwanda / Kirundi": "Ikurura inkoranyamagambo y'ibyatsi n'amafunguro bya Kivu...",
    "English": "Loading Kivu botanical & culinary encyclopedia..."
  },
  "no_plant_recipe_found": {
    "Français": "Aucune plante ou recette trouvée pour votre recherche.",
    "Kiswahili (Swahili)": "Hakuna mmea au mapishi yaliyopatikana kwa utafutaji wako.",
    "Lingála": "Eloko te, nkisi to recette ezwami te po na boluki na yo.",
    "Mashi / Shi (Kivu)": "Ntaco omwa muzire cishubirwe oku ndonza yawe.",
    "Kinyarwanda / Kirundi": "Nta cyatsi cyangwa ifunguro byabonetse mu bushakashatsi bwawe.",
    "English": "No plant or recipe found for your search."
  },
  "reset_filters": {
    "Français": "Réinitialiser les filtres",
    "Kiswahili (Swahili)": "Wezesha upya vichujio",
    "Lingála": "Zongisa ba filtres",
    "Mashi / Shi (Kivu)": "Oshule ahanja filteri",
    "Kinyarwanda / Kirundi": "Siba akayunguruzo",
    "English": "Reset filters"
  },
  "glycemic_index_label": {
    "Français": "Index Glycémique",
    "Kiswahili (Swahili)": "Kielelezo cha Sukari",
    "Lingála": "Index ya Sukari",
    "Mashi / Shi (Kivu)": "Ekipimo c'Esukari",
    "Kinyarwanda / Kirundi": "Igipimo cy'Isukari",
    "English": "Glycemic Index"
  },
  "prep_rules_safe_cooking": {
    "Français": "Règles de Préparation & Cuisson Sécurisée (Kivu)",
    "Kiswahili (Swahili)": "Kanuni za Mapishi & Kupika kwa Usalama (Kivu)",
    "Lingála": "Mibeko ya kolamba mpe kabatela nzoto (Kivu)",
    "Mashi / Shi (Kivu)": "Amategeko g'okulamba n'okuhisha neza (Kivu)",
    "Kinyarwanda / Kirundi": "Amategeko yo gutegura no guteka neza (Kivu)",
    "English": "Safe Preparation & Cooking Rules (Kivu)"
  },
  "precaution_contraindication": {
    "Français": "Précaution / Contre-indication :",
    "Kiswahili (Swahili)": "Tahadhari / Madhara :",
    "Lingála": "Kakeye / Mabe na nzoto :",
    "Mashi / Shi (Kivu)": "Orohanye / Ebiwanganya :",
    "Kinyarwanda / Kirundi": "Ikitonderwa / Ingaruka :",
    "English": "Precaution / Contraindication :"
  },
  "copied_msg": {
    "Français": "Copié !",
    "Kiswahili (Swahili)": "Imenakiliwa!",
    "Lingála": "Ecopied!",
    "Mashi / Shi (Kivu)": "Yicopiirwe!",
    "Kinyarwanda / Kirundi": "Byimuwe!",
    "English": "Copied!"
  },
  "copy_recipe": {
    "Français": "Copier la recette",
    "Kiswahili (Swahili)": "Nakili mapishi",
    "Lingála": "Kopi recette",
    "Mashi / Shi (Kivu)": "Ocopie ebyokulya",
    "Kinyarwanda / Kirundi": "Kopi ifunguro",
    "English": "Copy recipe"
  },
  "listen_dosage": {
    "Français": "Écouter la posologie",
    "Kiswahili (Swahili)": "Sikiliza kipimo",
    "Lingála": "Yoka motuya",
    "Mashi / Shi (Kivu)": "Oyuvwe ekipimo",
    "Kinyarwanda / Kirundi": "Umva igipimo",
    "English": "Listen to dosage"
  },
  "pwa_standalone": {
    "Français": "Exécuté en application PWA autonome",
    "Kiswahili (Swahili)": "Inatumika kama programu inayojitegemea (PWA)",
    "Lingála": "Ezali kosala lokola PWA ya kopesa",
    "Mashi / Shi (Kivu)": "Ecishizire nka PWA yimanjere",
    "Kinyarwanda / Kirundi": "Ikora nka porogaramu yigenga (PWA)",
    "English": "Running as standalone PWA app"
  },
  "select_lang": {
    "Français": "Sélectionner la langue",
    "Kiswahili (Swahili)": "Chagua lugha",
    "Lingála": "Pona lokota",
    "Mashi / Shi (Kivu)": "Oshole luhyo",
    "Kinyarwanda / Kirundi": "Hitamo ururimi",
    "English": "Select language"
  },
  "toggle_view_mode": {
    "Français": "Basculer entre Mode Simplifié (Icônes) et Tableau de Bord Détaillé",
    "Kiswahili (Swahili)": "Badilisha kati ya Mtindo Rahisi na Dashibodi ya Kina",
    "Lingála": "Bongisa katikati ya Lolenge Pete mpe Tableau ya Kina",
    "Mashi / Shi (Kivu)": "Oshule ahanja Mode Rhuhiri n'Edashibodi yinji",
    "Kinyarwanda / Kirundi": "Hindura hagati y'isura yoroshye n'isura isobanuye",
    "English": "Toggle between Simplified Mode (Icons) and Detailed Dashboard"
  },
  "manage_profile": {
    "Français": "Gérer votre profil médical",
    "Kiswahili (Swahili)": "Dhibiti wasifu wako wa matibabu",
    "Lingála": "Bongisa profil na yo ya dokotolo",
    "Mashi / Shi (Kivu)": "Ololele eprofile yawe ya muganga",
    "Kinyarwanda / Kirundi": "Cunga umwirondoro wawe w'ubuvuzi",
    "English": "Manage your medical profile"
  },
  "toggle_camera_front_back": {
    "Français": "Basculer Caméra Avant / Arrière",
    "Kiswahili (Swahili)": "Badilisha Kamera Mbele / Nyuma",
    "Lingála": "Bongisa Kamera Liboso / Sima",
    "Mashi / Shi (Kivu)": "Oshule Kamera Ebere / Enyuma",
    "Kinyarwanda / Kirundi": "Hindura Kamera Imbere / Inyuma",
    "English": "Toggle Front / Back Camera"
  },
  "import_from_phone": {
    "Français": "Importer depuis le téléphone",
    "Kiswahili (Swahili)": "Ingiza kutoka kwa simu",
    "Lingála": "Kota uta na telefon",
    "Mashi / Shi (Kivu)": "Oshoge omukashi ka telefone",
    "Kinyarwanda / Kirundi": "Zana mu terefone",
    "English": "Import from phone"
  },
  "stop_recording": {
    "Français": "Arrêter l'enregistrement",
    "Kiswahili (Swahili)": "Acha kurekodi",
    "Lingála": "Tika kofanda",
    "Mashi / Shi (Kivu)": "Oleke okurekodwa",
    "Kinyarwanda / Kirundi": "Hagarika gufata amajwi/amashusho",
    "English": "Stop recording"
  },
  "start_recording": {
    "Français": "Démarrer l'enregistrement",
    "Kiswahili (Swahili)": "Anza kurekodi",
    "Lingála": "Banda kofanda",
    "Mashi / Shi (Kivu)": "Otanje okurekodwa",
    "Kinyarwanda / Kirundi": "Tangira gufata",
    "English": "Start recording"
  },
  "switch_camera": {
    "Français": "Basculer caméra",
    "Kiswahili (Swahili)": "Badilisha kamera",
    "Lingála": "Bongisa kamera",
    "Mashi / Shi (Kivu)": "Oshule kamera",
    "Kinyarwanda / Kirundi": "Hindura kamera",
    "English": "Switch camera"
  },
  "live_cam_kivu_tip": {
    "Français": "🌿 Spécificité Kivu : Analyse des plantes (Ndakala, Moringa) et des mets (Foufou, Pondu).",
    "Kiswahili (Swahili)": "🌿 Maalum ya Kivu: Uchambuzi wa mimea (Ndakala, Moringa) na vyakula (Ugali, Pondu).",
    "Lingála": "🌿 Ya Kivu: Botali ya matiti (Ndakala, Moringa) na bilei (Fufu, Pondu).",
    "Mashi / Shi (Kivu)": "🌿 Bya Kivu: Okulolela emizire (Ndakala, Moringa) n'ebyokulya (Fufu, Pondu).",
    "Kinyarwanda / Kirundi": "🌿 Umwihariko wa Kivu: Isesengura ry'ibyatsi n'amafunguro (Fufu, Isombe).",
    "English": "🌿 Kivu Specific: Analysis of plants (Ndakala, Moringa) and dishes (Fufu, Pondu)."
  },
  "deep_analysis_req": {
    "Français": "Analyse approfondie demandée via Mode Simplifié",
    "Kiswahili (Swahili)": "Uchambuzi wa kina umeombwa kupitia Mtindo Rahisi",
    "Lingála": "Bokebisi mozindo esengi na Lolenge Pete",
    "Mashi / Shi (Kivu)": "Ololeli rhuja lwinji mode rhuhiri",
    "Kinyarwanda / Kirundi": "Isesengura ryimbitse ryatsinzwe mu buryo bworoshye",
    "English": "Deep analysis requested via Simplified Mode"
  },
  "simple_view_audio_help": {
    "Français": "Cette application est conçue pour être facile à comprendre. 1, pour parler à la voix. 2, pour prendre une photo. 3, pour filmer une vidéo. 4, pour écrire. Vos appareils médicaux peuvent être reliés en bas.",
    "Kiswahili (Swahili)": "Programu hii imeundwa kuwa rahisi kueleweka. 1, kuzungumza kwa sauti. 2, kupiga picha. 3, kuchukua video. 4, kuandika. Vifaa vyako vya matibabu vinaweza kuunganishwa hapa chini.",
    "Lingála": "Application oyo esalemi po ekozala pete koyeba. 1, koloba na mongongo. 2, kokanga foto. 3, kokanga video. 4, kokoma. Ba masini na yo ya dokotolo ekoki kokotama na se.",
    "Mashi / Shi (Kivu)": "Eyi app ecishizire nka yoroshe kuyumvwa. 1, okuderi na sauti. 2, okugwata picha. 3, okurekodwa video. 4, okuyandika. Emashini zawe za muganga zishobora kuhanjiwa nshi.",
    "Kinyarwanda / Kirundi": "Iyi porogaramu yakozwe ngo yorohere gutahura. 1, kuvuga mu majwi. 2, gufata ifoto. 3, gufata videwo. 4, kwandika. Ibikoresho byawe by'ubuvuzi bishobora guhuzwa hasi.",
    "English": "This application is designed to be easy to understand. 1, to speak by voice. 2, to take a photo. 3, to record a video. 4, to write. Your medical devices can be linked below."
  },
  "auto_speech_title": {
    "Français": "Lecture vocale automatique des réponses",
    "Kiswahili (Swahili)": "Utoaji sauti otomatiki wa majibu",
    "Lingála": "Koyoka mbala moko ba eyano",
    "Mashi / Shi (Kivu)": "Oyuvwe na sauti yinjere majibu",
    "Kinyarwanda / Kirundi": "Gusoma mu majwi ibisubizo mu buryo bwikora",
    "English": "Automatic voice reading of responses"
  },
  "read_aloud_title": {
    "Français": "Lire à haute voix",
    "Kiswahili (Swahili)": "Soma kwa sauti ya juu",
    "Lingála": "Tanga na mongongo makasi",
    "Mashi / Shi (Kivu)": "Osome na sauti ndiri",
    "Kinyarwanda / Kirundi": "Soma mu rurimi ruranguruye",
    "English": "Read aloud"
  },
  "listen_simple_btn": {
    "Français": "Écouter",
    "Kiswahili (Swahili)": "Sikiliza",
    "Lingála": "Yoka",
    "Mashi / Shi (Kivu)": "Oyuvwe",
    "Kinyarwanda / Kirundi": "Umva",
    "English": "Listen"
  },
  "ai_analyzing_kivu": {
    "Français": "L'IA analyse votre question et consulte la pharmacopée du Kivu...",
    "Kiswahili (Swahili)": "IA inachambua swali lako na kushauri hazina ya dawa za Kivu...",
    "Lingála": "IA ezali kotanga motuna na yo mpe kotala nkisi ya Kivu...",
    "Mashi / Shi (Kivu)": "IA eriko eronza idundwi lyawe n'okurolerera emizire ya Kivu...",
    "Kinyarwanda / Kirundi": "IA irasesengura ikibazo cyawe ikareba imiti ya Kivu...",
    "English": "AI is analyzing your question and consulting Kivu pharmacopeia..."
  },
  "voice_dictation_title": {
    "Français": "Dictée vocale par microphone",
    "Kiswahili (Swahili)": "Utambuzi wa sauti kwa kipaza sauti",
    "Lingála": "Koloba na mongongo na mikrofone",
    "Mashi / Shi (Kivu)": "Okuderi na sauti muli mikrofo",
    "Kinyarwanda / Kirundi": "Kwandika ukoresheje ijwi mu mikoro",
    "English": "Voice dictation via microphone"
  },
  "take_photo_video_title": {
    "Français": "Prendre photo ou vidéo en direct (Caméra)",
    "Kiswahili (Swahili)": "Piga picha au video moja kwa moja (Kamera)",
    "Lingála": "Kanga foto to video ya sikoyo (Kamera)",
    "Mashi / Shi (Kivu)": "Ogwate picha erhi video lero (Kamera)",
    "Kinyarwanda / Kirundi": "Fata ifoto cyangwa videwo ya ako kanya (Kamera)",
    "English": "Take photo or video live (Camera)"
  },
  "alt_meal_preview": {
    "Français": "Aperçu plat",
    "Kiswahili (Swahili)": "Hakikisho la chakula",
    "Lingála": "Monyere ya bilei",
    "Mashi / Shi (Kivu)": "Erilolela ebyokulya",
    "Kinyarwanda / Kirundi": "Inshamake y'ifunguro",
    "English": "Meal preview"
  },
  "record_symptoms_voice_title": {
    "Français": "Enregistrer vos symptômes à la voix en Swahili, Lingala, Mashi ou Français",
    "Kiswahili (Swahili)": "Rekodi dalili zako kwa sauti katika Kiswahili, Lingala, Mashi au Kifaransa",
    "Lingála": "Koma ba symptôme na yo na mongongo na Swahili, Lingala, Mashi to Français",
    "Mashi / Shi (Kivu)": "Orekode ebibashali byawe na sauti muli Swahili, Lingala, Mashi erhi French",
    "Kinyarwanda / Kirundi": "Fata amajwi y'ibimenyetso byawe mu Giswahili, Lingala, Mashi cyangwa Igifaransa",
    "English": "Record your symptoms by voice in Swahili, Lingala, Mashi or French"
  },
  "read_aloud_patient_lang": {
    "Français": "Lire à haute voix en langue du patient",
    "Kiswahili (Swahili)": "Soma kwa sauti katika lugha ya mgonjwa",
    "Lingála": "Tanga na mongongo makasi na lokota ya malade",
    "Mashi / Shi (Kivu)": "Osome na sauti muli luhyo lwa murwadhe",
    "Kinyarwanda / Kirundi": "Soma mu rurimi rwanguruye mu rurimi rw'umurwayi",
    "English": "Read aloud in patient's language"
  },
  "relisten_voice_msg": {
    "Français": "Réécouter le message vocal",
    "Kiswahili (Swahili)": "Sikiliza tena ujumbe wa sauti",
    "Lingála": "Yoka lisusu sango ya mongongo",
    "Mashi / Shi (Kivu)": "Oyuvwe kandi idundwi lya sauti",
    "Kinyarwanda / Kirundi": "Umva neza ubutumwa bw'ijwi",
    "English": "Relisten to voice message"
  },
  "kaggle_step1_title": {
    "Français": "Générer le Jeton API Kaggle",
    "Kiswahili (Swahili)": "Zalisha Tokeni ya API ya Kaggle",
    "Lingála": "Bimisa Token ya API Kaggle",
    "Mashi / Shi (Kivu)": "Oyimbe Etokene ya API Kaggle",
    "Kinyarwanda / Kirundi": "Kora Urufunguzo rwa API rwa Kaggle",
    "English": "Generate Kaggle API Token"
  },
  "kaggle_step1_desc": {
    "Français": "Connectez-vous sur kaggle.com. Allez dans Settings -> API -> Create New Token. Un fichier kaggle.json sera téléchargé contenant votre username et votre key.",
    "Kiswahili (Swahili)": "Ingia kwenye kaggle.com. Nenda kwenye Mipangilio -> API -> Unda Tokeni Mpya. Faili ya kaggle.json itapakuliwa na jina lako la mtumiaji na ufunguo.",
    "Lingála": "Kota na kaggle.com. Kende na Settings -> API -> Create New Token. Dosiye kaggle.json ekokweya na nkombo na yo na key.",
    "Mashi / Shi (Kivu)": "Oye muli kaggle.com. Oje muli Settings -> API -> Create New Token. Ifayilo kaggle.json eyishana n'eizina lyawe n'oluhyo.",
    "Kinyarwanda / Kirundi": "injira muri kaggle.com. Genda muri Settings -> API -> Kurema Urufunguzo rushya. Dosiye ya kaggle.json izakururwa ifite izina n'ijambo ry'ibanga.",
    "English": "Log into kaggle.com. Go to Settings -> API -> Create New Token. A kaggle.json file will be downloaded containing your username and key."
  },
  "kaggle_step2_desc": {
    "Français": "Sur Kaggle Hub, sélectionnez le modèle google/clinical-ai-2b-med-kivu. Autorisez l'accès au modèle afin d'obtenir l'URL d'inférence sécurisée par jeton Bearer.",
    "Kiswahili (Swahili)": "Kwenye Kaggle Hub, chagua modeli google/clinical-ai-2b-med-kivu. Ruhusu ufikiaji ili kupata kiungo cha usalama.",
    "Lingála": "Na Kaggle Hub, pona modèle google/clinical-ai-2b-med-kivu. Pesa nzela po owa URL ya kimya.",
    "Mashi / Shi (Kivu)": "Muli Kaggle Hub, oshoge emodele google/clinical-ai-2b-med-kivu. Ocihane okurola eURL yimanjere.",
    "Kinyarwanda / Kirundi": "Muri Kaggle Hub, hitamo icyitegererezo google/clinical-ai-2b-med-kivu. Tanga uburenganzira bwo kubona URL yizewe.",
    "English": "On Kaggle Hub, select the google/clinical-ai-2b-med-kivu model. Authorize access to obtain the secure Bearer token inference URL."
  },
  "kaggle_step3_desc": {
    "Français": "Collez vos identifiants ci-dessous ou dans votre fichier de configuration .env. L'application authentifiera automatiquement chaque photo, vidéo ou audio envoyé !",
    "Kiswahili (Swahili)": "Bandika vitambulisho vyako hapa chini au kwenye faili lako la .env. Programu itathibitisha otomatiki kila picha, video au sauti inayotumwa!",
    "Lingála": "Tia ba identifiants na yo awa to na .env na yo. Application ekotala mbala moko foto, video to mongongo nyonso!",
    "Mashi / Shi (Kivu)": "Oshule ebizina byawe hano erhi muli .env. Eyi app eyerekeza mbala foto, video erhi sauti yoshi ohano!",
    "Kinyarwanda / Kirundi": "omeka imyirondoro yawe hasi cyangwa muri dosiye .env. Porogaramu izenzura ifoto, videwo cyangwa ijwi ryoherejwe!",
    "English": "Paste your credentials below or in your .env config file. The app will automatically authenticate every photo, video, or audio sent!"
  },
  "kaggle_test_save_btn": {
    "Français": "🚀 Tester et Enregistrer la Connexion",
    "Kiswahili (Swahili)": "🚀 Jaribu na Hifadhi Muunganisho",
    "Lingála": "🚀 Mekama mpe Bika Connection",
    "Mashi / Shi (Kivu)": "🚀 Orohanje na Obiike Olwanji",
    "Kinyarwanda / Kirundi": "🚀 Gerageza ubushatse ukanabika",
    "English": "🚀 Test and Save Connection"
  },
  "kaggle_verifying": {
    "Français": "Vérification en cours...",
    "Kiswahili (Swahili)": "Inahakiki...",
    "Lingála": "Kotala ezali...",
    "Mashi / Shi (Kivu)": "Erilolela...",
    "Kinyarwanda / Kirundi": "Igenzura...",
    "English": "Verifying..."
  },
  "kaggle_code_ex_title": {
    "Français": "Exemple de Code (Comment l'App envoie les photos/vidéos à l'API IA sur Kaggle)",
    "Kiswahili (Swahili)": "Mfano wa Msimbo (Jinsi programu inavyotuma picha/video kwenye API ya IA Kaggle)",
    "Lingála": "Ndakisa ya Code (Ndenge App etindaka ba foto/video na API Kaggle)",
    "Mashi / Shi (Kivu)": "Ecirore c'Ecode (Kuli Eapp erhumanja picha/video muli API Kaggle)",
    "Kinyarwanda / Kirundi": "Urugero rw'itegeko (Uko App yohereza amafoto/videwo kuri API ya Kaggle)",
    "English": "Code Example (How the App sends photos/videos to the Kaggle AI API)"
  },
  "kaggle_copy_btn": {
    "Français": "Copier le code",
    "Kiswahili (Swahili)": "Nakili msimbo",
    "Lingála": "Kopi code",
    "Mashi / Shi (Kivu)": "Ocopie ecode",
    "Kinyarwanda / Kirundi": "Kopi itegeko",
    "English": "Copy code"
  },
  "kaggle_pipeline_title": {
    "Français": "🌿 Le Pipeline Multimodal d'IA pour le Diabète Africain :",
    "Kiswahili (Swahili)": "🌿 Mfumo wa IA ya Njia Nyingi kwa Kisukari Afrika:",
    "Lingála": "🌿 Nzela ya IA Multimodal po na Diabète ya Afrique:",
    "Mashi / Shi (Kivu)": "🌿 Olwanji lwa IA lwinji lwa Kisukari ca Afrika:",
    "Kinyarwanda / Kirundi": "🌿 Urusobe rw'IA rwinshi ku Isukari rya Nyafurika:",
    "English": "🌿 The Multimodal AI Pipeline for African Diabetes:"
  },
  "kaggle_pipeline_desc1": {
    "Français": "Contrairement aux IA classiques qui ne traitent que l'écrit, notre modèle IA intègre nativement des encodeurs visuels et acoustiques. Il a été enrichi (Fine-tuning & RAG) sur un corpus médical et ethnobotanique spécialisé pour la région des Grands Lacs (Kivu, Afrique de l'Est).",
    "Kiswahili (Swahili)": "Tofauti na IA za kawaida zinazoshughulikia maandishi pekee, modeli yetu inajumuisha sauti na picha. Imefundishwa mahususi kwa eneo la Maziwa Makuu (Kivu, Afrika Mashariki).",
    "Lingála": "Bokeseni na ba IA misusu, modèle na biso eyebi kotala foto na koyoka mongongo. Ekelami po na mabeletano ya Kivu na Afrique ya East.",
    "Mashi / Shi (Kivu)": "Okuhanya na IA yindi, emodele yirhu eyuvwa sauti na picha. Yiyigirishanijwe kugasa ebi Kivu na Afrika y'Eshala.",
    "Kinyarwanda / Kirundi": "Bitandukanye n'izindi IA, iyi yumva amajwi ikanareba amashusho. Yigishijwe umwihariko w'amagaragaza yo mu Kivu n'ibiyaga bigari.",
    "English": "Unlike classical AIs that only process text, our AI model natively integrates visual and acoustic encoders. It was specialized for the Great Lakes region (Kivu, East Africa)."
  },
  "kaggle_pipeline_desc2": {
    "Français": "Reconnaissance vocale directe en Swahili du Kivu, Mashi, Lingala et Français. Le patient peut parler naturellement de ses symptômes sans savoir lire ni écrire.",
    "Kiswahili (Swahili)": "Utambuzi wa sauti moja kwa moja katika Kiswahili cha Kivu, Mashi, Lingala na Kifaransa. Mgonjwa anaweza kuzungumza kiasili bila kujua kusoma wala kuandika.",
    "Lingála": "Koyoka mongongo na Swahili ya Kivu, Mashi, Lingala na Français. Malade akoki koloba pete kozanga kotanga to kokoma.",
    "Mashi / Shi (Kivu)": "Okuyuvwa sauti lero muli Swahili lwa Kivu, Mashi, Lingala na French. Omurwadhe aderha bichi atamanyiri okusoma erhi kuyandika.",
    "Kinyarwanda / Kirundi": "Kwandika ijwi mu Giswahili cy'iki Kivu, Mashi, Lingala n'Igifaransa. Umurwayi avuga adakeneye kumenya gusoma cyangwa kwandika.",
    "English": "Direct speech recognition in Kivu Swahili, Mashi, Lingala, and French. The patient can speak naturally about symptoms without knowing how to read or write."
  },
  "kaggle_sync_iot": {
    "Français": "Synchronisation IoT & Glycémie",
    "Kiswahili (Swahili)": "Muunganisho wa IoT na Sukari",
    "Lingála": "Kozonga misala ya IoT mpe Sukari",
    "Mashi / Shi (Kivu)": "Omuhanjo gwa IoT na Esukari",
    "Kinyarwanda / Kirundi": "ihererekanya rya IoT n'isukari",
    "English": "IoT & Glucose Synchronization"
  },
  "kaggle_security": {
    "Français": "Sécurité & Alerte Médicale",
    "Kiswahili (Swahili)": "Usalama & Tahadhari ya Tiba",
    "Lingála": "Kimya & Kakeye ya Dokotolo",
    "Mashi / Shi (Kivu)": "Oburohere n'Oluhego lwa Muganga",
    "Kinyarwanda / Kirundi": "Umurindi n'iburira ry'ubuvuzi",
    "English": "Security & Medical Alert"
  },
  "kaggle_cloud_models": {
    "Français": "Les modèles d'IA Clinique (7B / 9B Instruct) sont hébergés sur les serveurs de modèles Kaggle et Google AI Studio. Lorsque le patient est connecté (3G/4G/WiFi), les requêtes audios, vidéos ou photos sont envoyées aux endpoints cloud pour une analyse clinique approfondie de haute précision.",
    "Kiswahili (Swahili)": "Modeli za IA (7B / 9B) ziko kwenye seva za Kaggle na Google AI Studio. Wakati mgonjwa ameunganishwa (3G/4G/WiFi), sauti, video au picha hutumwa kwa uchambuzi wa kina na usahihi wa hali ya juu.",
    "Lingála": "Ba modèles ya IA (7B/9B) ezali na ba serveurs ya Kaggle na Google AI Studio. Soki internet ezali, sango etindami po na botali ya mozindo makasi.",
    "Mashi / Shi (Kivu)": "Emidele ya IA (7B/9B) eri ku seva za Kaggle na Google AI Studio. Aho internet eri, picha na sauti bihanwa muli cloud kuroleka lwinji.",
    "Kinyarwanda / Kirundi": "Imitwe y'IA (7B/9B) ibitswe kuri seva za Kaggle na Google AI Studio. Iyo hari internet, ubutumwa bwoherezwa gusesengurwa byimbise.",
    "English": "Clinical AI models (7B / 9B Instruct) are hosted on Kaggle and Google AI Studio servers. When connected (3G/4G/WiFi), audio, video, or photos are sent to cloud endpoints for high-precision clinical analysis."
  },
  "kaggle_edge_models": {
    "Français": "Pour les zones rurales isolées, un modèle compact d'IA (2B quantifié en INT4) est préchargé directement dans la mémoire du navigateur de l'utilisateur grâce au Service Worker PWA et à WebAssembly / WebGPU. Les diagnostics de base fonctionnent à 100% sans internet !",
    "Kiswahili (Swahili)": "Kwa maeneo ya vijijini bila mtandao, modeli ndogo ya IA (2B INT4) inapakuliwa kwenye kivinjari kupitia PWA na WebAssembly. Uchambuzi wa msingi hufanya kazi 100% bila intaneti!",
    "Lingála": "Po na ba mboka ya mosika zanga internet, modèle ya moke ya IA (2B INT4) ekotaka na navigateur. Diagnostique esalaka 100% zanga internet!",
    "Mashi / Shi (Kivu)": "Eyo emihana yidiri ya mirini ntari internet, emodele ngufu ya IA (2B INT4) ecishiga muli browser. Ediagnosi eshala 100% atari internet!",
    "Kinyarwanda / Kirundi": "Mu byaro bitagira internet, icyitegererezo cy'IA (2B INT4) gikorera muri browser yigenga. Isesengura rirakora 100% nta internet!",
    "English": "For remote rural areas, a compact AI model (2B quantized in INT4) is preloaded directly into the browser memory using PWA Service Worker and WebAssembly / WebGPU. Basic diagnostics work 100% offline!"
  },
  "kaggle_video_cooking": {
    "Français": "Vidéo Cuisson",
    "Kiswahili (Swahili)": "Video ya Mapishi",
    "Lingála": "Video ya Kolamba",
    "Mashi / Shi (Kivu)": "Evideo y'Ebihishe",
    "Kinyarwanda / Kirundi": "Videwo yo guteka",
    "English": "Cooking Video"
  },
  "kaggle_text_symptom": {
    "Français": "Texte / Symptôme",
    "Kiswahili (Swahili)": "Maandishi / Dalili",
    "Lingála": "Makomi / Symptôme",
    "Mashi / Shi (Kivu)": "Eyandiko / Ebibashali",
    "Kinyarwanda / Kirundi": "Umwandiko / Ibimenyetso",
    "English": "Text / Symptom"
  },
  "kaggle_run_btn": {
    "Français": "🚀 Exécuter le Modèle sur Kaggle Hub",
    "Kiswahili (Swahili)": "🚀 Endesha Modeli kwenye Kaggle Hub",
    "Lingála": "🚀 Tinda Modèle na Kaggle Hub",
    "Mashi / Shi (Kivu)": "🚀 Oshoge Emodele muli Kaggle Hub",
    "Kinyarwanda / Kirundi": "🚀 Koresha Icyitegererezo kuri Kaggle Hub",
    "English": "🚀 Run Model on Kaggle Hub"
  },
  "kaggle_running_btn": {
    "Français": "Exécution du Modèle Kaggle en cours...",
    "Kiswahili (Swahili)": "Modeli ya Kaggle inaendeshwa...",
    "Lingála": "Kosalela Modèle ya Kaggle...",
    "Mashi / Shi (Kivu)": "Ekishala ca Modele Kaggle...",
    "Kinyarwanda / Kirundi": "Ikoreshwa ry'Icyitegererezo rirakora...",
    "English": "Running Kaggle Model..."
  },
  "kaggle_runtime_console": {
    "Français": "💻 Console d'Exécution IA (Kaggle Runtime)",
    "Kiswahili (Swahili)": "💻 Dashibodi ya IA (Mfumo wa Kaggle)",
    "Lingála": "💻 Console ya IA (Kaggle)",
    "Mashi / Shi (Kivu)": "💻 Econsole y'IA (Kaggle)",
    "Kinyarwanda / Kirundi": "💻 Ikibaho cy'IA (Kaggle)",
    "English": "💻 AI Execution Console (Kaggle Runtime)"
  },
  "kaggle_status_label": {
    "Français": "Statut : ",
    "Kiswahili (Swahili)": "Hali : ",
    "Lingála": "Statut : ",
    "Mashi / Shi (Kivu)": "Omuji : ",
    "Kinyarwanda / Kirundi": "Imiterere : ",
    "English": "Status: "
  },
  "kaggle_status_in_prog": {
    "Français": "EN COURS...",
    "Kiswahili (Swahili)": "INAENDELEA...",
    "Lingála": "EZALI KOSALEMA...",
    "Mashi / Shi (Kivu)": "ERIKO ERIDIDIKA...",
    "Kinyarwanda / Kirundi": "BIRAKORWA...",
    "English": "IN PROGRESS..."
  },
  "kaggle_status_success": {
    "Français": "SUCCÈS",
    "Kiswahili (Swahili)": "IMEFANIKIWA",
    "Lingála": "ESALEMI MALAMU",
    "Mashi / Shi (Kivu)": "YINJIRI",
    "Kinyarwanda / Kirundi": "BYAGENZE NEZA",
    "English": "SUCCESS"
  },
  "kaggle_status_ready": {
    "Français": "PRÊT",
    "Kiswahili (Swahili)": "TAYARI",
    "Lingála": "EBONGI",
    "Mashi / Shi (Kivu)": "EYITEGUYI",
    "Kinyarwanda / Kirundi": "ITEGUYE",
    "English": "READY"
  },
  "kaggle_footer_tip": {
    "Français": "💡 Modèle : IA Clinique • Entraînement Ethnobotanique Africain & Diabète",
    "Kiswahili (Swahili)": "💡 Modeli: IA ya Tiba • Mafunzo ya Mimea Asili Afrika & Kisukari",
    "Lingála": "💡 Modèle: IA Dokotolo • Boyekoli ya Nkisi ya Afrique & Diabète",
    "Mashi / Shi (Kivu)": "💡 Emodele: IA ya Muganga • Enyigiriso y'Emizire ya Afrika n'Esukari",
    "Kinyarwanda / Kirundi": "💡 Icyitegererezo: IA y'Ubuvuzi • Imyitozo y'Ibyatsi bya Nyafurika n'Isukari",
    "English": "💡 Model: Clinical AI • African Ethnobotanical & Diabetes Training"
  },
  "tradition_usage_east": {
    "Français": "Tradition & Usage dans l'Est",
    "Kiswahili (Swahili)": "Tamaduni na Matumizi Mashariki",
    "Lingála": "Bonkoko mpe Mosala na East",
    "Mashi / Shi (Kivu)": "Emigizo n'Emishize ebufuko",
    "Kinyarwanda / Kirundi": "Umuco n'imikoreshereze mu burasirazuba",
    "English": "Tradition & Usage in East Africa"
  },
  "scientific_val_insulin": {
    "Français": "Validation Scientifique & Insuline",
    "Kiswahili (Swahili)": "Uthibitisho wa Kisayansi na Insulini",
    "Lingála": "Bokundoli ya Sayansi mpe Insuline",
    "Mashi / Shi (Kivu)": "Okuyunjurwa kwa Sayansi n'Insulini",
    "Kinyarwanda / Kirundi": "Igenzura ry'ubumenyi n'insulini",
    "English": "Scientific Validation & Insulin"
  }
};

/**
 * Smart translation helper.
 * If the key is found in our dictionary, returns the translation for the selected language.
 * If not found, attempts to look up if the passed string matches any French string in our dictionary.
 * Otherwise returns the original text or fallback.
 */
export function t(keyOrText: string, language?: SupportedLanguage | string, fallback?: string): string {
  const lang = language || "Français";
  
  // 1. Direct dictionary key lookup
  if (translations[keyOrText]) {
    return translations[keyOrText][lang] || translations[keyOrText]["Français"] || fallback || keyOrText;
  }

  // 2. Reverse search: check if keyOrText matches a French string in any of our entries
  for (const entryKey in translations) {
    const entry = translations[entryKey];
    if (entry["Français"] === keyOrText || entry["English"] === keyOrText) {
      return entry[lang] || entry["Français"] || fallback || keyOrText;
    }
  }

  return fallback || keyOrText;
}
