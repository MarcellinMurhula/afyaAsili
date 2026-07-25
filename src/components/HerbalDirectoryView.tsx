import React, { useState, useEffect } from "react";
import { 
  Leaf, 
  Search, 
  Utensils, 
  AlertTriangle, 
  BookOpen, 
  Volume2, 
  CheckCircle, 
  Sparkles, 
  MapPin,
  Info,
  Copy,
  Check
} from "lucide-react";
import { HerbalAndCulinaryItem, SupportedLanguage } from "../types";
import { ApiService } from "../services/api.service";
import { t } from "../services/translations";

interface HerbalDirectoryViewProps {
  language: SupportedLanguage;
  onSelectForAnalysis: (item: HerbalAndCulinaryItem) => void;
}

export const HerbalDirectoryView: React.FC<HerbalDirectoryViewProps> = ({
  language,
  onSelectForAnalysis
}) => {
  const [items, setItems] = useState<HerbalAndCulinaryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDirectory = async () => {
      setLoading(true);
      const data = await ApiService.getHerbalDirectory(selectedCategory, searchQuery);
      setItems(data);
      setLoading(false);
    };
    fetchDirectory();
  }, [selectedCategory, searchQuery]);

  const handleCopyRecipe = (item: HerbalAndCulinaryItem) => {
    const textToCopy = `🌿 ${item.nameFr} (${item.nameSwahili} / ${item.nameMashi})\n\n📖 Usage: ${item.traditionalUse}\n\n🥣 Préparation:\n${item.preparationGuide}\n\n⚠️ Sécurité: ${item.safetyWarning}\n\n[AfriKivu Diabète Care - IA Clinique]`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header & Filter section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-[#E9E9E0]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E9E9E0]">
          <div>
            <span className="bg-[#F9F9F7] text-[#5A5A40] text-xs px-3 py-1 rounded-lg font-semibold border border-[#D1D1CB] mb-2 inline-flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t("Pharmacopée du Kivu & Gastronomie Africaine", language)}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2A]">
              {t("Encyclopédie des Plantes & Accompagnements Antidiabétiques", language)}
            </h2>
            <p className="text-sm text-[#5A5A40] mt-1.5 max-w-3xl leading-relaxed">
              {t("Toutes les plantes médicinales locales (Ndakala/Vernonia, Moringa, Bissap, Prunus africana) et les règles de préparation des mets de base (Saka-Saka/Pondu, Fufu de mil/sorgho, Gombo) pour stabiliser le diabète sans perte culturelle.", language)}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-[#5A5A40] font-semibold bg-[#F9F9F7] px-3 py-1.5 rounded-lg border border-[#E9E9E0]">
              {t("Données disponibles en PWA hors-ligne", language)}
            </span>
          </div>
        </div>

        {/* Search Bar & Category Tabs */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#5A5A40]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("Rechercher par nom (Ndakala, Pondu, Moringa, Mashi...)", language)}
              className="w-full bg-[#F9F9F7] border border-[#D1D1CB] rounded-xl pl-10 pr-4 py-2 text-sm text-[#2D2D2A] placeholder-[#5A5A40]/70 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2 text-[#5A5A40] hover:text-[#2D2D2A] text-xs font-semibold bg-[#E9E9E0] px-2 py-0.5 rounded-md"
              >
                {t("effacer", language)}
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
                selectedCategory === "all"
                  ? "bg-[#5A5A40] text-white shadow-xs"
                  : "bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0] hover:bg-[#E9E9E0]"
              }`}
            >
              Tout voir ({items.length})
            </button>
            <button
              onClick={() => setSelectedCategory("plant")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 flex items-center gap-1.5 ${
                selectedCategory === "plant"
                  ? "bg-[#5A5A40] text-white shadow-xs"
                  : "bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0] hover:bg-[#E9E9E0]"
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Plantes Phyto ({items.filter(i => i.category === 'plant').length})</span>
            </button>
            <button
              onClick={() => setSelectedCategory("meal")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 flex items-center gap-1.5 ${
                selectedCategory === "meal"
                  ? "bg-[#5A5A40] text-white shadow-xs"
                  : "bg-[#F9F9F7] text-[#5A5A40] border border-[#E9E9E0] hover:bg-[#E9E9E0]"
              }`}
            >
              <Utensils className="w-3.5 h-3.5 text-[#B35A38]" />
              <span>Gastronomie Kivu ({items.filter(i => i.category === 'meal').length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Items */}
      {loading ? (
        <div className="py-12 text-center text-[#5A5A40] font-medium">
          {t("loading_botanical", language)}
        </div>
      ) : items.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-[#E9E9E0]">
          <p className="text-[#5A5A40] font-semibold text-base">{t("no_plant_recipe_found", language)}</p>
          <button onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }} className="mt-3 text-[#B35A38] font-semibold text-xs underline">
            {t("reset_filters", language)}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-xs border border-[#E9E9E0] hover:border-[#D1D1CB] transition flex flex-col justify-between">
              <div>
                {/* Header with names in multiple regional languages */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E9E9E0]">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-md font-semibold border ${
                        item.category === "plant" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}>
                        {item.category === "plant" ? "🌱 Plante Phyto" : "🍲 Plat Traditionnel"}
                      </span>
                      <span className="bg-[#F9F9F7] text-[#5A5A40] text-[11px] px-2.5 py-0.5 rounded-md font-medium border border-[#E9E9E0] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#5A5A40]" />
                        {item.region}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#2D2D2A]">{item.nameFr}</h3>
                    
                    {/* Multilingual names pill box */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5 text-xs">
                      <span className="bg-[#F9F9F7] text-[#2D2D2A] px-2 py-0.5 rounded-md border border-[#E9E9E0] font-medium">
                        <strong className="font-semibold text-[#5A5A40]">Swahili :</strong> {item.nameSwahili}
                      </span>
                      <span className="bg-[#F9F9F7] text-[#2D2D2A] px-2 py-0.5 rounded-md border border-[#E9E9E0] font-medium">
                        <strong className="font-semibold text-[#5A5A40]">Lingala :</strong> {item.nameLingala}
                      </span>
                      <span className="bg-[#F9F9F7] text-[#2D2D2A] px-2 py-0.5 rounded-md border border-[#E9E9E0] font-medium">
                        <strong className="font-semibold text-[#5A5A40]">Mashi :</strong> {item.nameMashi}
                      </span>
                    </div>
                  </div>

                  {/* Glycemic Index badge */}
                  <div className="text-right shrink-0 bg-[#F9F9F7] px-3 py-2 rounded-xl border border-[#E9E9E0]">
                    <span className="block text-[11px] font-semibold text-[#5A5A40]">{t("glycemic_index_label", language)}</span>
                    <span className="inline-block font-serif font-bold text-base text-[#2D2D2A] mt-0.5">
                      {item.glycemicIndex}
                    </span>
                  </div>
                </div>

                {/* Traditional use & Scientific benefits */}
                <div className="mt-4 space-y-3.5">
                  <div>
                    <h4 className="text-xs font-semibold text-[#5A5A40] mb-1">{t("tradition_usage_east", language)}</h4>
                    <p className="text-xs sm:text-sm text-[#2D2D2A] leading-relaxed">
                      {item.traditionalUse}
                    </p>
                  </div>

                  <div className="bg-[#F9F9F7] rounded-xl p-3.5 border border-[#E9E9E0]">
                    <h4 className="text-xs font-semibold text-[#5A5A40] mb-1 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t("scientific_val_insulin", language)}</span>
                    </h4>
                    <p className="text-xs text-[#2D2D2A] leading-relaxed">
                      {item.scientificBenefits}
                    </p>
                  </div>

                  {/* Step by step Preparation Guide */}
                  <div className="bg-[#5A5A40] text-white rounded-xl p-4 shadow-xs">
                    <h4 className="text-xs font-semibold text-amber-300 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                      <span>{t("prep_rules_safe_cooking", language)}</span>
                    </h4>
                    <div className="text-xs text-white/90 leading-relaxed whitespace-pre-line space-y-1">
                      {item.preparationGuide}
                    </div>
                  </div>

                  {/* Safety warning */}
                  <div className="bg-red-50/70 border border-red-200 rounded-xl p-3 text-xs text-red-800 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">{t("precaution_contraindication", language)} :</strong> {item.safetyWarning}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-5 pt-4 border-t border-[#E9E9E0] flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopyRecipe(item)}
                  className="bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition border border-[#D1D1CB]"
                >
                  {copiedId === item.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-800 font-bold">{t("copied_msg", language)}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#5A5A40]" />
                      <span>{t("copy_recipe", language)}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => ApiService.speak(`${item.nameFr}. ${item.traditionalUse}. Préparation: ${item.preparationGuide}`, language)}
                    className="bg-[#F9F9F7] hover:bg-[#E9E9E0] text-[#5A5A40] text-xs font-semibold p-2 rounded-lg transition flex items-center gap-1 border border-[#D1D1CB]"
                    title={t("listen_dosage", language)}
                  >
                    <Volume2 className="w-4 h-4 text-[#5A5A40]" />
                  </button>
                  <button
                    onClick={() => onSelectForAnalysis(item)}
                    className="bg-[#B35A38] hover:bg-[#9c4b2d] text-white font-semibold text-xs px-4 py-2 rounded-lg shadow-xs transition flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>{t("check_with_ai_btn", language)}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
