import React from "react";
import { Phone, Mail, MapPin, Clock, Shield, Globe, Send, MessageSquare } from "lucide-react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121314] text-white border-t border-[#C5A880]/15 pt-16 pb-8 relative overflow-hidden">
      {/* Absolute Decorative Background Circles */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#C5A880]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                АКУ<span className="text-[#C5A880]">КАБ</span>
              </span>
              <span className="block text-[8px] tracking-[0.25em] text-[#C5A880] uppercase font-mono mt-0.5">
                Акустические системы
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Российский производитель звукоизоляционных мобильных сборно-разборных акустических кабин и ширм премиум-сегмента. 
              Тишина, приватность и комфорт под ключ за 1 день.
            </p>
            
            {/* Delivery Scope Info */}
            <div className="flex items-center gap-2.5 bg-[#1E2022] p-3.5 rounded border border-white/5 text-xs text-gray-300">
              <Globe className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>Доставка во все регионы России в жесткой транспортной обрешетке. Полное страхование груза.</span>
            </div>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-display text-sm font-semibold text-[#C5A880] uppercase tracking-wider">
              Контактная информация
            </h4>
            
            <ul className="space-y-4 text-xs sm:text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Адрес производства и офиса:</span>
                  <span>192019, г. Санкт-Петербург, ул. Бехтерева, д. 3, к. 2, лит. Х</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Телефоны отдела продаж:</span>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a href="tel:+79216437474" className="hover:text-[#C5A880] transition-colors font-mono">
                      +7 (921) 643-74-74
                    </a>
                    <a href="tel:+79215242424" className="hover:text-[#C5A880] transition-colors font-mono">
                      +7 (921) 524-24-24
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Электронная почта:</span>
                  <a href="mailto:zakaz@acucab.ru" className="hover:text-[#C5A880] transition-colors font-mono mt-0.5 block">
                    zakaz@acucab.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Режим работы:</span>
                  <span>Понедельник – Пятница, 10:00 – 19:00</span>
                </div>
              </li>
            </ul>

            {/* Quick Messengers Link */}
            <div className="flex gap-2 pt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-[#1E2022] hover:bg-[#C5A880]/10 border border-white/5 hover:border-[#C5A880]/30 rounded text-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#C5A880]" />
                Telegram
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-[#1E2022] hover:bg-[#C5A880]/10 border border-white/5 hover:border-[#C5A880]/30 rounded text-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-green-500" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* High Fidelity Interactive SVG Map layout */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-sm font-semibold text-[#C5A880] uppercase tracking-wider">
              Интерактивная карта проезда
            </h4>
            
            {/* Custom SVG Map representing St. Petersburg around Bechtereva street */}
            <div className="bg-[#1E2022] rounded-xl border border-[#C5A880]/20 h-52 relative overflow-hidden group shadow-md">
              {/* Map grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:12px_12px]" />
              
              <svg className="w-full h-full text-gray-700/30 p-2" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="0.8">
                {/* Neva River Blue outline */}
                <path d="M10 -10 C20 15, 30 30, 45 35 C60 40, 75 45, 90 75" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.15" />
                <path d="M10 -10 C20 15, 30 30, 45 35 C60 40, 75 45, 90 75" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.4" />
                
                {/* Streets Grid */}
                <line x1="5" y1="20" x2="95" y2="20" stroke="white" strokeOpacity="0.08" />
                <line x1="5" y1="45" x2="95" y2="45" stroke="white" strokeOpacity="0.08" />
                <line x1="40" y1="5" x2="40" y2="75" stroke="white" strokeOpacity="0.08" />
                <line x1="70" y1="5" x2="70" y2="75" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" /> {/* Obukhovskoy Oborony prospekt */}
                
                {/* Bechtereva street curve */}
                <path d="M30 45 C45 42, 55 48, 70 45" stroke="#C5A880" strokeWidth="1" strokeOpacity="0.4" />
                
                {/* Metro station markers */}
                <g className="opacity-60">
                  <circle cx="70" cy="15" r="1" fill="#10b981" />
                  <text x="73" y="16" fontSize="2.2" fill="gray" fontFamily="sans-serif">м. Пл. Александра Невского</text>
                  
                  <circle cx="75" cy="65" r="1" fill="#10b981" />
                  <text x="78" y="66" fontSize="2.2" fill="gray" fontFamily="sans-serif">м. Елизаровская</text>
                </g>

                {/* Pulsing Target Point - Bechtereva 3 */}
                <g>
                  {/* Outer waves */}
                  <circle cx="50" cy="45" r="4" fill="none" stroke="#C5A880" strokeWidth="0.5">
                    <animate attributeName="r" values="2;6;2" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="45" r="1.5" fill="#C5A880" />
                  <text x="44" y="41" fontSize="2.5" fill="white" fontWeight="bold" fontFamily="sans-serif">АКУКАБ</text>
                  <text x="35" y="52" fontSize="1.8" fill="#C5A880" fontFamily="monospace">ул. Бехтерева, д. 3</text>
                </g>
              </svg>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#121314]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="text-white text-[10px] font-mono tracking-wider uppercase border border-[#C5A880]/30 px-3 py-1.5 bg-[#121314] rounded">
                  Шоурум при производстве
                </span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="w-full py-2.5 bg-transparent border border-white/10 hover:border-[#C5A880] text-gray-300 hover:text-[#C5A880] text-xs font-mono rounded transition-colors text-center"
            >
              Заказать пропуск в шоурум
            </button>
          </div>
        </div>

        {/* Legal and copy footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500">
          <div className="space-y-1 text-center md:text-left">
            <span>© {currentYear} ООО «АКУСТИЧЕСКИЕ КАБИНЫ АКУКАБ». Все права защищены.</span>
            <p className="font-light text-[10px]">
              Представленная на сайте информация о технических характеристиках, цветовых сочетаниях и стоимости продукции носит информационный характер и не является публичной офертой.
            </p>
          </div>
          <div className="flex gap-6 shrink-0">
            <a href="#privacy" className="hover:text-[#C5A880] transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#terms" className="hover:text-[#C5A880] transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
