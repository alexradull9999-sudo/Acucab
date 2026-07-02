import React, { useState } from "react";
import { CATALOG_DATA, CatalogItem } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Check, Info, Maximize2, Layers, Users, ShieldAlert } from "lucide-react";

import officeImg from "../../ofisniye peregovornie.webp";
import stateSecretImg from "../../dlya gos taini.jpg";
import recordingImg from "../../dly zvukozapisi.webp";
import screensImg from "../../shirma.webp";
import medicalImg from "../../dlya medicini.webp";
import panelsImg from "../../acusticheskaya panel.webp";

const IMAGES_MAP: Record<string, string> = {
  "office": officeImg,
  "state-secret": stateSecretImg,
  "recording": recordingImg,
  "screens": screensImg,
  "medical": medicalImg,
  "panels": panelsImg,
};

interface CatalogProps {
  onOpenModal: (categoryName?: string) => void;
}

export default function Catalog({ onOpenModal }: CatalogProps) {
  const [activeTab, setActiveTab] = useState<string>("office");

  const activeCategory = CATALOG_DATA.find((item) => item.id === activeTab) || CATALOG_DATA[0];

  return (
    <section id="catalog" className="bg-[#121314] text-white py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
            КАТАЛОГ РЕШЕНИЙ АКУКАБ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Специализированная звукоизоляция под любую бизнес-задачу
          </h2>
          <p className="text-gray-400 text-sm mt-4 font-light max-w-2xl mx-auto">
            От компактных переговорных будок на 1 человека до высокозащищенных модулей государственной тайны и акустического оформления стен.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
        </div>

        {/* Tab Buttons (Responsive Wrapping on larger screens) */}
        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 mb-12 border-b border-white/10 gap-1 sm:gap-2 justify-start md:justify-center scrollbar-none">
          {CATALOG_DATA.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 sm:px-5 py-3.5 text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap border-b-2 transition-all flex items-center gap-2 shrink-0 ${
                activeTab === item.id
                  ? "border-[#C5A880] text-[#C5A880] bg-[#C5A880]/5"
                  : "border-transparent text-gray-400 hover:text-white"
              }`}
            >
              <span>{item.category}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-start"
          >
            {/* Descriptive side */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono px-3 py-1 bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30 rounded uppercase">
                  {activeCategory.category}
                </span>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  Вместимость: {activeCategory.capacity}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-wide">
                {activeCategory.title}
              </h3>

              <p className="text-gray-300 font-light text-sm leading-relaxed">
                {activeCategory.description}
              </p>

              {/* Suitability */}
              <div className="bg-[#1E2022] p-4 rounded-lg border border-white/5 text-xs text-gray-300">
                <span className="font-semibold text-white uppercase block mb-1 font-mono tracking-wider">
                  Сфера применения:
                </span>
                {activeCategory.suitability}
              </div>

              {/* Models List */}
              <div>
                <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 font-mono">
                  Выпускаемые модели серии:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.models.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1.5 bg-[#121314] border border-white/10 rounded text-xs font-mono text-gray-300"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <button
                  id={`catalog_cta_${activeCategory.id}`}
                  onClick={() => onOpenModal(activeCategory.category)}
                  className="px-6 py-3.5 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-semibold text-xs tracking-wider uppercase rounded transition-colors"
                >
                  Запросить чертежи и смету для {activeCategory.category}
                </button>
              </div>
            </div>

            {/* Visual Specs / Blueprint side */}
            <div className="lg:col-span-6 bg-[#1E2022] border border-[#C5A880]/15 rounded-xl p-6 sm:p-8 space-y-6 relative">
              <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-[#C5A880] uppercase">
                ТЕХ-СПЕЦИФИКАЦИЯ
              </span>

              {/* SVG Blueprint mockup replaced with premium product photos */}
              <div className="bg-[#121314] rounded-lg border border-white/5 h-64 sm:h-72 flex items-center justify-center relative overflow-hidden group shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:16px_16px] z-10 pointer-events-none" />
                
                <img
                  src={IMAGES_MAP[activeTab] || officeImg}
                  alt={activeCategory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022] via-transparent to-black/20 z-10 pointer-events-none" />

                {/* Sound isolation dB badge on image */}
                <div className="absolute bottom-3 right-3 bg-[#1E2022]/90 px-2.5 py-1.5 rounded border border-[#C5A880]/30 text-[10px] font-mono tracking-widest text-[#C5A880] z-20 shadow-md">
                  -{activeCategory.specs.isolation.split(" ")[0]} дБ
                </div>
              </div>

              {/* Specs parameters listing */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                  Базовая спецификация моделей серии:
                </h4>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                  <div className="border-l-2 border-[#C5A880]/30 pl-3">
                    <span className="block text-gray-500 font-mono text-[10px] uppercase">Внешние Габариты:</span>
                    <span className="text-white">{activeCategory.specs.dimensions}</span>
                  </div>
                  <div className="border-l-2 border-[#C5A880]/30 pl-3">
                    <span className="block text-gray-500 font-mono text-[10px] uppercase">Внутренние Габариты:</span>
                    <span className="text-white">{activeCategory.specs.innerDimensions}</span>
                  </div>
                  <div className="border-l-2 border-[#C5A880]/30 pl-3">
                    <span className="block text-gray-500 font-mono text-[10px] uppercase">Вес конструкции:</span>
                    <span className="text-white">{activeCategory.specs.weight}</span>
                  </div>
                  <div className="border-l-2 border-[#C5A880]/30 pl-3">
                    <span className="block text-gray-500 font-mono text-[10px] uppercase">Звукоизоляция:</span>
                    <span className="text-white text-[#C5A880] font-semibold">{activeCategory.specs.isolation}</span>
                  </div>
                </div>

                {/* Key Features bullet points */}
                <div className="pt-4 border-t border-white/5">
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-3">
                    Оснащение кабины под ключ:
                  </span>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-300 font-light">
                    {activeCategory.specs.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
