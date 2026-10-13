import React, { useState } from 'react';
import { getWhatsAppLink } from '../config/storeData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2 pointer-events-auto">
      {/* Tooltip on desktop/mobile */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-xl shadow-lg border border-slate-200 animate-fade-in">
          <span>Fale com a loja no WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating action button */}
      <a
        href={getWhatsAppLink('Olá! Estava navegando no site da Loja das Bicicletas e gostaria de atendimento.')}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 transition-transform duration-200 group"
        aria-label="Falar pelo WhatsApp com a Loja das Bicicletas"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
