import React, { useState } from "react";
import { Info, CheckCircle2, ChevronRight, Zap, Wind, UserCheck, Shield, HelpCircle, Eye } from "lucide-react";

interface SpecsProps {
  onOpenModal: () => void;
}

interface Hotspot {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  description: string;
  details: string;
  icon: React.ReactNode;
}

export default function Specs({ onOpenModal }: SpecsProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<string>("hotspot-1");

  const hotspots: Hotspot[] = [
    {
      id: "hotspot-1",
      name: "Приточно-вытяжная вентиляция",
      x: 50,
      y: 8,
      icon: <Wind className="w-4 h-4 text-[#C5A880]" />,
      description: "Принудительная система вентиляции воздуха.",
      details: "Двухканальная малошумная вентиляция (<15 дБ) обновляет воздух каждые 1.5 минуты. Воздушные лабиринты гасят проходящий звук, сохраняя тишину как снаружи, так и внутри."
    },
    {
      id: "hotspot-2",
      name: "Датчик присутствия",
      x: 75,
      y: 12,
      icon: <UserCheck className="w-4 h-4 text-[#C5A880]" />,
      description: "Автоматический запуск электроники.",
      details: "При входе в кабину автоматически активируется LED-подсветка и вентиляционная вытяжка. После выхода они отключаются через 3 минуты для экономии энергии."
    },
    {
      id: "hotspot-3",
      name: "LED-подсветка с регулировкой",
      x: 35,
      y: 15,
      icon: <Zap className="w-4 h-4 text-[#C5A880]" />,
      description: "Сенсорная регулировка яркости.",
      details: "Светодиодная потолочная лента с мягким нейтральным спектром (4000K). Сенсорный выключатель на уровне глаз позволяет плавно менять яркость для комфорта зрения."
    },
    {
      id: "hotspot-4",
      name: "Звукоизоляционная дверь",
      x: 20,
      y: 40,
      icon: <Shield className="w-4 h-4 text-[#C5A880]" />,
      description: "Многослойный триплекс 8 мм.",
      details: "Закаленное звукоизоляционное стекло повышенной толщины в герметичном алюминиевом профиле с двойным контуром силиконовых уплотнителей и магнитным замком-доводчиком."
    },
    {
      id: "hotspot-5",
      name: "Акустический карпет",
      x: 65,
      y: 45,
      icon: <Info className="w-4 h-4 text-[#C5A880]" />,
      description: "Шумопоглощающая внутренняя отделка.",
      details: "Стены внутри обиты износостойким бельгийским акустическим карпетом. Он полностью устраняет внутреннее эхо и делает голос чистым во время записи или видеозвонка."
    },
    {
      id: "hotspot-6",
      name: "Интегрированный стол",
      x: 50,
      y: 55,
      icon: <Eye className="w-4 h-4 text-[#C5A880]" />,
      description: "Эргономичный рабочий столик.",
      details: "Встроенный деревянный стол (900×300 мм) из износостойкого ЛДСП. Оптимален для комфортного расположения ноутбука, планшета, блокнота и чашки кофе."
    },
    {
      id: "hotspot-7",
      name: "Блок питания 220V + USB",
      x: 42,
      y: 65,
      icon: <Zap className="w-4 h-4 text-[#C5A880]" />,
      description: "Розетки для бесперебойной работы.",
      details: "Сетевой розеточный блок 220V с заземлением + два порта USB-A и USB-C для быстрой зарядки смартфонов и питания ноутбуков во время длительных переговорных сессий."
    },
    {
      id: "hotspot-8",
      name: "Колесная база и опоры",
      x: 50,
      y: 92,
      icon: <Info className="w-4 h-4 text-[#C5A880]" />,
      description: "Мобильность всей конструкции.",
      details: "Тяжелые колеса с полиуретановым протектором и надежные винтовые упоры. Позволяют переместить собранную кабину весом 300 кг силами двух человек в любую точку офиса."
    }
  ];

  const activeHotspot = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <section id="specs" className="bg-[#FAF8F5] text-[#121314] py-16 lg:py-24 border-b border-[#C5A880]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase block mb-3">
            АНАТОМИЯ СОВЕРШЕНСТВА АКУКАБ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#121314]">
            Интерактивный разбор модели «КАБИНЕТ»
          </h2>
          <p className="text-gray-600 text-sm mt-4 font-light max-w-2xl mx-auto">
            Кликните на светящиеся точки на схеме кабины, чтобы в деталях изучить конструкционные материалы, умную электронику и запатентованные звукоизоляционные узлы.
          </p>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Interactive Graphic Column */}
          <div className="lg:col-span-6 flex justify-center relative bg-white border border-[#C5A880]/20 rounded-2xl p-6 sm:p-10 shadow-sm overflow-hidden h-[450px] sm:h-[550px]">
            {/* Blueprint grid lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A88005_1px,transparent_1px),linear-gradient(to_bottom,#C5A88005_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

            {/* Premium Vector CAD-like design of CABIN */}
            <div className="relative w-72 h-[380px] sm:h-[450px] border-2 border-dashed border-gray-200 rounded p-1">
              <svg className="w-full h-full text-gray-800" viewBox="0 0 100 150" fill="none" stroke="currentColor" strokeWidth="1.2">
                {/* Outlines of Cabin */}
                <rect x="15" y="10" width="70" height="130" rx="4" stroke="#121314" strokeWidth="1.5" />
                
                {/* Double Glazed Door Frame */}
                <rect x="22" y="18" width="56" height="114" rx="2" stroke="#C5A880" strokeWidth="1" />
                
                {/* Soundproof glass lines */}
                <line x1="28" y1="24" x2="72" y2="24" stroke="#e5e7eb" strokeWidth="0.8" />
                <line x1="28" y1="84" x2="72" y2="84" stroke="#e5e7eb" strokeWidth="0.8" />
                
                {/* Table Inside */}
                <rect x="25" y="86" width="50" height="6" rx="1" fill="#FAF8F5" stroke="#121314" strokeWidth="0.8" />
                
                {/* Integrated Stool */}
                <rect x="38" y="112" width="24" height="4" rx="1" fill="#FAF8F5" stroke="#121314" />
                <line x1="43" y1="116" x2="43" y2="132" stroke="#121314" />
                <line x1="57" y1="116" x2="57" y2="132" stroke="#121314" />
                <line x1="38" y1="132" x2="62" y2="132" stroke="#121314" strokeWidth="1.5" />

                {/* Ceiling LED fan module */}
                <rect x="35" y="11" width="30" height="5" fill="#FAF8F5" stroke="#121314" />
                <circle cx="50" cy="13.5" r="1.5" stroke="#C5A880" />
                <line x1="42" y1="13.5" x2="44" y2="13.5" />
                <line x1="56" y1="13.5" x2="58" y2="13.5" />

                {/* Caster Wheels */}
                <circle cx="25" cy="142" r="2.5" fill="#121314" />
                <circle cx="75" cy="142" r="2.5" fill="#121314" />
                <line x1="15" y1="140" x2="85" y2="140" stroke="#121314" strokeWidth="1.5" />
              </svg>

              {/* Glowing Hotspot Pins mapping */}
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setSelectedHotspot(hs.id)}
                  style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    selectedHotspot === hs.id
                      ? "bg-[#C5A880] text-white scale-110 ring-4 ring-[#C5A880]/20"
                      : "bg-[#121314]/90 text-[#C5A880] hover:bg-[#C5A880] hover:text-white ring-2 ring-white"
                  }`}
                  title={hs.name}
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880]/30 opacity-75 pointer-events-none" />
                  <span className="text-[10px] font-mono font-bold">
                    {hs.id.split("-")[1]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detailed Hotspot Feature Spec Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white border border-[#C5A880]/25 rounded-2xl p-6 sm:p-8 shadow-sm">
              <span className="text-[10px] font-mono tracking-widest text-[#C5A880] uppercase block mb-1">
                ВЫБРАННЫЙ УЗЕЛ КОНСТРУКЦИИ
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#FAF8F5] rounded-lg border border-[#C5A880]/15">
                  {activeHotspot.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#121314]">
                  {activeHotspot.name}
                </h3>
              </div>
              <p className="text-gray-500 text-sm font-medium mb-3 italic">
                {activeHotspot.description}
              </p>
              <p className="text-gray-700 text-sm font-light leading-relaxed">
                {activeHotspot.details}
              </p>

              {/* Spec bullets */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-4 text-xs font-mono text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Шумопоглощение: 35 дБ</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Эко-сертификат E1</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880]" />
                  <span>Пожаростойкость Г1</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Specs Table */}
            <div className="bg-[#121314] text-white rounded-xl p-6 border border-white/5">
              <h4 className="font-display text-base font-medium text-white mb-4 flex items-center gap-2">
                Сводные показатели модели КАБИНЕТ
              </h4>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-400">
                <div className="border-b border-white/5 pb-2">
                  <span className="block text-gray-500 text-[10px] uppercase">Внешний габарит:</span>
                  <span className="text-white">1300 × 1100 × 2164 мм</span>
                </div>
                <div className="border-b border-white/5 pb-2">
                  <span className="block text-gray-500 text-[10px] uppercase">Внутренний габарит:</span>
                  <span className="text-white">1140 × 970 × 1981 мм</span>
                </div>
                <div className="border-b border-white/5 pb-2">
                  <span className="block text-gray-500 text-[10px] uppercase">Общий вес кабины:</span>
                  <span className="text-white">300 кг</span>
                </div>
                <div className="border-b border-white/5 pb-2">
                  <span className="block text-gray-500 text-[10px] uppercase">Снижение шума:</span>
                  <span className="text-[#C5A880] font-semibold">35 дБ (класс А)</span>
                </div>
                <div className="col-span-2">
                  <span className="block text-gray-500 text-[10px] uppercase mb-1">Комплектация в коробке:</span>
                  <span className="text-white leading-relaxed text-[11px] block">
                    Вентиляция, LED-подсветка с сенсором, датчик присутствия, стол 900×300 мм, диван, розетка 220V + USB, колеса для перемещения, крючок для сумки.
                  </span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center sm:justify-start">
              <button
                id="get_all_models_specs"
                onClick={onOpenModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-transparent border border-[#121314]/30 hover:border-[#C5A880] hover:text-[#C5A880] text-[#121314] font-semibold text-xs tracking-wider uppercase rounded transition-colors"
              >
                Получить характеристики всех моделей в PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
