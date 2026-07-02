import React, { useState } from "react";
import { X, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Catalog from "./components/Catalog";
import Specs from "./components/Specs";
import Scenarios from "./components/Scenarios";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import LeadForm from "./components/LeadForm";
import Footer from "./components/Footer";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefilledSubject, setModalPrefilledSubject] = useState("");

  const handleOpenModal = (subject = "Общий запрос КП") => {
    setModalPrefilledSubject(subject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalPrefilledSubject("");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#121314] font-sans antialiased selection:bg-[#C5A880]/30 selection:text-[#121314]">
      {/* Header Nav */}
      <Header onOpenModal={() => handleOpenModal("Шапка сайта: кнопка Получить КП")} />

      <main>
        {/* Hero Banner Section */}
        <Hero onOpenModal={() => handleOpenModal("Hero-блок: кнопка Получить КП за 2 часа")} />

        {/* Pain points of modern workspaces */}
        <Problem />

        {/* Dynamic Category Catalog with specs & blueprints */}
        <Catalog onOpenModal={(cat) => handleOpenModal(`Запрос по категории: ${cat}`)} />

        {/* Detailed model Specs (Cabinet) */}
        <Specs onOpenModal={() => handleOpenModal("Характеристики: Получить спецификации в PDF")} />

        {/* Segment Scenarios switcher */}
        <Scenarios onOpenModal={(segText) => handleOpenModal(`Сценарий применения: ${segText}`)} />

        {/* Why us / UTPs and Warranties */}
        <Benefits />

        {/* Testimonials and accordions FAQ */}
        <Reviews />

        {/* Inline main Lead Capture Block */}
        <LeadForm prefilledSubject="Встроенная форма лендинга" />
      </main>

      {/* Footer Details and Interactive SVG Local Map */}
      <Footer onOpenModal={() => handleOpenModal("Футер: Заказать пропуск в шоурум")} />

      {/* global interactive callback modal popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 bg-[#121314]/85 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border border-[#C5A880]/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl text-[#121314]"
            >
              {/* Close Button */}
              <button
                id="close_global_modal"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 focus:outline-none transition-colors z-20"
                title="Закрыть"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Mounted LeadForm component */}
              <div className="p-6 sm:p-10 pt-12">
                <LeadForm
                  prefilledSubject={modalPrefilledSubject}
                  isModalStyle={true}
                  onSuccessClose={handleCloseModal}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
