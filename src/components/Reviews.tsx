import React, { useState } from "react";
import { TESTIMONIALS, FAQ_DATA } from "../data";
import { Star, ChevronDown, ChevronUp, MessageSquare, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Reviews() {
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  return (
    <section id="reviews" className="bg-[#121314] text-white py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="mb-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
              РЕАЛЬНЫЙ ОПЫТ ЭКСПЛУАТАЦИИ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Что говорят наши клиенты?
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review) => (
              <div
                key={review.id}
                className="bg-[#1E2022] border border-white/5 rounded-xl p-7 flex flex-col justify-between relative shadow-sm hover:border-[#C5A880]/20 transition-all group"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-[#C5A880]">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                    «{review.text}»
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {review.name}
                    </h4>
                    <span className="text-xs text-gray-400 block mt-0.5">
                      {review.role}, {review.company}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#C5A880]/10 text-[#C5A880] px-2.5 py-1 rounded border border-[#C5A880]/15">
                    {review.segment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Block */}
        <div id="faq" className="max-w-4xl mx-auto pt-16 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Отвечаем на популярные вопросы
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#1E2022] border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#121314]/30 transition-colors focus:outline-none"
                  >
                    <span className="font-display text-base font-medium text-white pr-4 flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C5A880] shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C5A880] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-gray-300 font-light leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
