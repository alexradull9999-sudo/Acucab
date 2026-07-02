import React from "react";
import { Volume2, ShieldAlert, Hammer, ArrowRight } from "lucide-react";

export default function Problem() {
  const pains = [
    {
      id: "pain-noise",
      icon: <Volume2 className="w-8 h-8 text-[#C5A880]" />,
      title: "Шум парализует работу",
      description: "Громкие разговоры коллег по телефону, стук по клавиатуре и фоновые шумы в open-space снижают концентрацию сотрудников на 66%. Люди устают в разы быстрее, увеличивается число ошибок.",
    },
    {
      id: "pain-privacy",
      icon: <ShieldAlert className="w-8 h-8 text-[#C5A880]" />,
      title: "Ноль конфиденциальности",
      description: "Обсуждение стратегических планов, финансовых показателей или условий сделки с клиентами слышат абсолютно все вокруг. Приходится искать пустые переговорные или созваниваться на парковке.",
    },
    {
      id: "pain-repair",
      icon: <Hammer className="w-8 h-8 text-[#C5A880]" />,
      title: "Капитальный ремонт — это тупик",
      description: "Сооружение постоянных гипсокартонных или стеклянных перегородок требует согласования с арендодателем, переделки вентиляции, обходится в миллионы рублей и парализует работу офиса на недели.",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] text-[#121314] py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
            Глобальные вызовы современного офиса
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#121314] leading-tight">
            Почему традиционные планировки open-space больше не работают?
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain) => (
            <div
              key={pain.id}
              className="bg-white p-8 rounded-xl border border-[#C5A880]/20 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="mb-6 p-3 bg-[#FAF8F5] rounded-lg inline-block group-hover:scale-105 transition-transform">
                  {pain.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#121314] mb-4">
                  {pain.title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {pain.description}
                </p>
              </div>
              <div className="h-[2px] bg-transparent group-hover:bg-[#C5A880] transition-colors w-full mt-6" />
            </div>
          ))}
        </div>

        {/* Transition callout */}
        <div className="mt-16 bg-[#121314] text-white p-8 rounded-xl border border-[#C5A880]/15 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
              ЭЛЕГАНТНЫЙ ВЫХОД ИЗ СИТУАЦИИ
            </span>
            <h3 className="font-display text-xl font-medium text-white">
              Есть альтернатива строительству: мобильная «комната в комнате» за 1 день
            </h3>
            <p className="text-gray-400 text-sm mt-2 font-light">
              Акустическая кабина АКУКАБ устанавливается в готовом виде прямо в офисном пространстве. Её легко переставить при перепланировке или забрать с собой при переезде в другой бизнес-центр.
            </p>
          </div>
          <a
            href="#catalog"
            className="flex items-center gap-2 px-6 py-3 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-semibold text-xs tracking-wider uppercase rounded transition-colors shrink-0"
          >
            Изучить каталог решений
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
