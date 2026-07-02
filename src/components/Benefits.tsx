import React from "react";
import { BadgeCheck, FileText, Settings, ShieldCheck, Zap, Percent, Shield, Award, Sparkles, Scale } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      id: "b-mfg",
      icon: <Settings className="w-6 h-6 text-[#C5A880]" />,
      title: "Цена от производителя",
      description: "Вы покупаете кабины напрямую с нашего завода в Санкт-Петербурге, не переплачивая посредникам и дистрибьюторским наценкам (экономия до 30%).",
    },
    {
      id: "b-custom",
      icon: <Scale className="w-6 h-6 text-[#C5A880]" />,
      title: "Размер до миллиметра",
      description: "Проектируем и изготавливаем кабины под любые геометрические особенности ваших ниш, колонн и потолков. Гибкое производство позволяет кастомизировать всё.",
    },
    {
      id: "b-speed",
      icon: <Zap className="w-6 h-6 text-[#C5A880]" />,
      title: "КП за 2 часа",
      description: "Мы ценим ваше время. Присылаем готовое развёрнутое коммерческое предложение с точной стоимостью и сроками уже через 2 часа после обращения.",
    },
    {
      id: "b-install",
      icon: <BadgeCheck className="w-6 h-6 text-[#C5A880]" />,
      title: "Монтаж за 1 день",
      description: "Наша штатная монтажная бригада доставит, соберет, подключит и проверит кабину всего за 1 день. Никакой строительной грязи, шума, пыли или простоев.",
    },
    {
      id: "b-db",
      icon: <ShieldCheck className="w-6 h-6 text-[#C5A880]" />,
      title: "Звукоизоляция 25-45 дБ",
      description: "Многослойный сэндвич-корпус с заполнением ультратонким базальтовым волокном гасит шум речевого диапазона и делает вашу беседу полностью приватной.",
    },
    {
      id: "b-discounts",
      icon: <Percent className="w-6 h-6 text-[#C5A880]" />,
      title: "Программа скидок",
      description: "Действуют выгодные партнерские скидки для дизайнеров интерьера, мебельных дилеров, строительных подрядчиков и постоянных клиентов.",
    },
  ];

  const guaranteesList = [
    {
      id: "g-contract",
      title: "Фиксация сроков в договоре",
      description: "Сроки изготовления и монтажа прописаны в договоре. За каждый день просрочки мы несём строгую финансовую ответственность.",
    },
    {
      id: "g-size",
      title: "Гарантия соответствия размерам",
      description: "Перед производством мы согласовываем детальный 3D-чертеж. Кабина гарантированно встанет на запланированное место с точностью до миллиметра.",
    },
    {
      id: "g-delivery",
      title: "Бережная доставка по всей РФ",
      description: "Все кабины транспортируются в плотной деревянной обрешетке. Мы полностью страхуем груз при перевозке и несём ответственность за его сохранность.",
    },
    {
      id: "g-warranty",
      title: "2 года официальной гарантии",
      description: "Официальное гарантийное обслуживание на каркас, уплотнители, замки, остекление и вентиляционную электронику в течение 24 месяцев.",
    },
  ];

  return (
    <section id="benefits" className="bg-[#FAF8F5] text-[#121314] py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* UTPs Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
            НАШИ КОНКУРЕНТНЫЕ ПРЕИМУЩЕСТВА
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#121314]">
            Почему выбирают АКУКАБ?
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
        </div>

        {/* UTPs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefitsList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-xl border border-[#C5A880]/15 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-[#FAF8F5] rounded-lg inline-block border border-[#C5A880]/10 mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#121314] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantees Section */}
        <div className="bg-[#121314] text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-[#C5A880]/15 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono tracking-widest text-[#C5A880] uppercase block mb-2">
              ЮРИДИЧЕСКАЯ И ИНЖЕНЕРНАЯ ЗАЩИТА
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              Официальные гарантии АКУКАБ
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 font-light">
              Мы строим прозрачные, доверительные и долгосрочные партнерские отношения. 
              Каждое обязательство фиксируется на бумаге.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 text-left">
            {guaranteesList.map((g) => (
              <div
                key={g.id}
                className="border-l-2 border-[#C5A880] pl-6 py-1 space-y-2"
              >
                <h4 className="font-display text-base font-semibold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C5A880] shrink-0" />
                  {g.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
