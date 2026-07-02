import React, { useState } from "react";
import { SEGMENT_OFFERS, SegmentOffer } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShieldAlert, Award, FileText, ChevronRight } from "lucide-react";

interface ScenariosProps {
  onOpenModal: (segmentText?: string) => void;
}

export default function Scenarios({ onOpenModal }: ScenariosProps) {
  const [activeOfferTab, setActiveOfferTab] = useState<string>("corporate");

  const currentOffer = SEGMENT_OFFERS.find((offer) => offer.id === activeOfferTab) || SEGMENT_OFFERS[0];

  return (
    <section id="scenarios" className="bg-[#121314] text-white py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
            РЕШЕНИЯ ПОД ТРЕБОВАНИЯ ВАШЕГО СЕГМЕНТА
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Какую задачу вы хотите решить?
          </h2>
          <p className="text-gray-400 text-sm mt-4 font-light max-w-2xl mx-auto">
            Мы глубоко изучили бизнес-процессы наших заказчиков и подготовили специализированные предложения с максимальной ценностью для каждой группы клиентов.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
        </div>

        {/* Tab Switches (Large full width design) */}
        <div className="grid md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-16 bg-[#1E2022] p-1.5 rounded-xl border border-white/5">
          {SEGMENT_OFFERS.map((offer) => (
            <button
              key={offer.id}
              onClick={() => setActiveOfferTab(offer.id)}
              className={`py-4 px-4 rounded-lg text-xs tracking-wider uppercase font-semibold transition-all ${
                activeOfferTab === offer.id
                  ? "bg-[#C5A880] text-[#121314] shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {offer.tabTitle}
            </button>
          ))}
        </div>

        {/* Dynamic Tab Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOfferTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-12 gap-12 items-stretch"
          >
            {/* Left Column: Pains and description */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {currentOffer.badge}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-wide">
                  {currentOffer.title}
                </h3>

                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  {currentOffer.description}
                </p>

                {/* Pain Points Box */}
                <div className="bg-[#1E2022]/40 rounded-xl p-6 border border-white/5">
                  <span className="block text-xs font-semibold text-gray-400 uppercase tracking-widest font-mono mb-4">
                    Ключевые боли, которые мы закрываем:
                  </span>
                  <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-light">
                    {currentOffer.painPoints.map((pain, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-red-950 border border-red-500/30 text-red-400 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                          !
                        </span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Trust elements, features, and target CTA */}
            <div className="lg:col-span-6 bg-[#1E2022] border border-[#C5A880]/15 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-6 mb-8">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block">
                  АКУКАБ как готовое решение:
                </span>

                <div className="space-y-4">
                  {currentOffer.features.map((feat, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="p-2 bg-[#C5A880]/15 border border-[#C5A880]/20 rounded-lg h-10 w-10 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-[#C5A880]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {feat.split(" — ")[0] || feat.split(": ")[0] || "Преимущество"}
                        </h4>
                        <p className="text-gray-400 text-xs font-light leading-relaxed">
                          {feat.substring(feat.indexOf(" — ") !== -1 ? feat.indexOf(" — ") + 3 : feat.indexOf(": ") !== -1 ? feat.indexOf(": ") + 2 : 0)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific CTA Button */}
              <div className="bg-[#121314] p-5 rounded-xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-gray-500 uppercase">
                    Индивидуальная проработка
                  </span>
                  <span className="text-xs font-medium text-white block mt-0.5">
                    КП за 2 часа с точной сметой
                  </span>
                </div>
                <button
                  id={`scenario_cta_${currentOffer.id}`}
                  onClick={() => onOpenModal(`${currentOffer.title} (${currentOffer.ctaText})`)}
                  className="w-full sm:w-auto px-5 py-3.5 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-semibold text-xs tracking-wider uppercase rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  {currentOffer.ctaText}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
