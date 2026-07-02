import React, { useState } from "react";
import { Menu, X, Phone, Clock, VolumeX } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Каталог", href: "#catalog" },
    { name: "Характеристики", href: "#specs" },
    { name: "Для кого", href: "#scenarios" },
    { name: "Преимущества", href: "#benefits" },
    { name: "Отзывы", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#121314]/90 backdrop-blur-md border-b border-[#C5A880]/15 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-[#C5A880] text-[#121314] p-1.5 rounded flex items-center justify-center transition-transform group-hover:scale-105">
                <VolumeX className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-wider text-white">
                  АКУ<span className="text-[#C5A880]">КАБ</span>
                </span>
                <span className="block text-[8px] tracking-[0.25em] text-[#C5A880] uppercase font-mono leading-none">
                  Акустические системы
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#C5A880] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Details & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <a
                href="tel:+79216437474"
                className="flex items-center gap-1.5 font-mono text-sm hover:text-[#C5A880] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                +7 (921) 643-74-74
              </a>
              <span className="flex items-center justify-end gap-1 text-[10px] text-gray-400 mt-0.5">
                <Clock className="w-3 h-3 text-gray-500" />
                Пн–Пт, 10:00–19:00
              </span>
            </div>
            <button
              id="header_cta_btn"
              onClick={onOpenModal}
              className="px-5 py-2.5 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-medium text-xs tracking-wider uppercase rounded transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#C5A880]/10"
            >
              Получить КП за 2 часа
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+79216437474"
              className="text-gray-300 hover:text-[#C5A880] transition-colors"
              title="Позвонить"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile_menu_btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E2022] border-t border-[#C5A880]/10 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base text-gray-300 hover:text-[#C5A880] hover:bg-[#121314]/50 rounded transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            <div className="px-3">
              <a
                href="tel:+79216437474"
                className="flex items-center gap-2 font-mono text-base font-semibold hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                +7 (921) 643-74-74
              </a>
              <span className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                Режим работы: Пн–Пт, 10:00–19:00
              </span>
            </div>
            <button
              id="mobile_header_cta"
              onClick={() => {
                setIsOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 bg-[#C5A880] hover:bg-[#B59870] text-[#121314] font-semibold text-xs tracking-wider uppercase rounded transition-colors text-center"
            >
              Получить КП за 2 часа
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
