import React, { useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX, Shield, Hammer, MapPin, Ruler } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [soundMode, setSoundMode] = useState<"noisy" | "silent">("noisy");

  return (
    <section className="relative overflow-hidden bg-[#121314] text-white py-16 lg:py-24 border-b border-[#C5A880]/10">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88008_1px,transparent_1px),linear-gradient(to_bottom,#C5A88008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C5A880]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 text-[#C5A880] text-xs font-medium tracking-wider uppercase mb-6 self-start"
            >
              <Shield className="w-3.5 h-3.5" />
              Премиальная звукоизоляция под ключ
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6"
            >
              Тишина и приватность за <span className="text-[#C5A880]">1 день</span> — без ремонта и перепланировки
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-8 max-w-2xl"
            >
              Мобильные сборно-разборные акустические кабины от производителя АКУКАБ. 
              Звукоизоляция до <span className="font-semibold text-white">45 дБ</span>. Изготовление по индивидуальным размерам вплоть до миллиметра.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button
                id="hero_cta_modal"
                onClick={onOpenModal}
                className="px-8 py-4 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-semibold tracking-wider uppercase rounded text-sm transition-all shadow-xl shadow-[#C5A880]/15 text-center"
              >
                Получить КП за 2 часа
              </button>
              <a
                href="#catalog"
                className="px-8 py-4 bg-transparent border border-white/20 hover:border-[#C5A880] hover:text-[#C5A880] text-white font-semibold tracking-wider uppercase rounded text-sm transition-all text-center"
              >
                Смотреть каталог
              </a>
            </motion.div>

            {/* Quick Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-xs text-gray-300">Производство в СПб. Доставка по РФ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Hammer className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-xs text-gray-300">Монтаж за 1 день без шума и пыли</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Ruler className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-xs text-gray-300">Кастомизация под помещения до мм</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span className="text-xs text-gray-300">Сертификация пожарная и гигиеническая</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Soundproofing Visualizer / Cabin graphic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1E2022] border border-[#C5A880]/20 rounded-xl p-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-base font-semibold tracking-wide text-white">
                    АКУСТИЧЕСКИЙ СТЕНД АКУКАБ
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Интерактивное сравнение звуковых волн
                  </p>
                </div>
                <div className="flex bg-[#121314] p-1 rounded border border-white/5">
                  <button
                    onClick={() => setSoundMode("noisy")}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                      soundMode === "noisy"
                        ? "bg-red-500/10 text-red-400 border border-red-500/30"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Без кабины
                  </button>
                  <button
                    onClick={() => setSoundMode("silent")}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                      soundMode === "silent"
                        ? "bg-[#C5A880]/15 text-[#C5A880] border border-[#C5A880]/30"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    АКУКАБ
                  </button>
                </div>
              </div>

              {/* Sound Wave Representation Screen */}
              <div className="bg-[#121314] rounded-lg p-5 border border-white/5 h-44 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-mono text-gray-500 tracking-wider">
                    СИГНАЛ: {soundMode === "noisy" ? "АКТИВНЫЙ ШУМ" : "ТИШИНА"}
                  </span>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      soundMode === "noisy"
                        ? "bg-red-950 text-red-400"
                        : "bg-[#C5A880]/10 text-[#C5A880]"
                    }`}
                  >
                    {soundMode === "noisy" ? "75 дБ (Шумный офис)" : "30 дБ (Quiet Luxury)"}
                  </span>
                </div>

                {/* Animated Waves */}
                <div className="flex items-center justify-center gap-[3px] h-20 px-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const scaleHeight =
                      soundMode === "noisy"
                        ? Math.sin(i * 0.4) * 35 + 40 + Math.random() * 15
                        : Math.sin(i * 0.1) * 3 + 5 + Math.random() * 2;

                    return (
                      <motion.div
                        key={i}
                        animate={{ height: `${scaleHeight}%` }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: soundMode === "noisy" ? 0.3 + Math.random() * 0.3 : 0.8 + Math.random() * 0.5,
                        }}
                        className={`w-[6px] rounded-full transition-colors ${
                          soundMode === "noisy" ? "bg-red-500" : "bg-[#C5A880]"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="text-[10px] font-mono text-gray-400 leading-tight z-10">
                  {soundMode === "noisy"
                    ? "Шум коллег, телефонные разговоры, звук клавиатур, работа оргтехники"
                    : "99.8% шума поглощено. Идеальная среда для концентрации и записи чистого звука"}
                </div>
              </div>

              {/* Schematic view of ACUCAB CABIN inside office */}
              <div className="mt-6 flex gap-4 items-center p-3 bg-[#121314]/30 rounded border border-[#C5A880]/10">
                <div className="w-16 h-16 rounded bg-[#121314] border border-[#C5A880]/15 flex items-center justify-center flex-shrink-0 text-gray-400">
                  <svg
                    className="w-10 h-10 text-[#C5A880]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 22V2M20 2v20M8 6h8M8 12h8M8 18h8" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-white">
                    Кабина АКУКАБ «КОМНАТА В КОМНАТЕ»
                  </span>
                  <span className="block text-[11px] text-gray-400 mt-0.5">
                    Сборно-разборная конструкция, не вносит конструктивных изменений в здание, не требует перепланировки.
                  </span>
                </div>
              </div>

              {/* Status Indicator Bar */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#C5A880] text-[#121314] font-mono text-[9px] font-bold tracking-widest uppercase px-4 py-1 rounded shadow-lg">
                ФИЗИЧЕСКОЕ ШУМОПОГЛОЩЕНИЕ
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
