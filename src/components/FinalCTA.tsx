import React from 'react';
import { FINAL_CTA, getWhatsAppLink } from '../config/storeData';
import { MessageCircle, ArrowRight, Bike } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-blue-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient bike graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-12 translate-y-12">
        <Bike className="w-96 h-96 text-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800/80 border border-blue-400/30 text-xs sm:text-sm font-semibold text-blue-200">
          <Bike className="w-4 h-4 text-amber-400" />
          <span>Loja das Bicicletas · Rolândia, PR</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-balance">
          “{FINAL_CTA.title}”
        </h2>

        <p className="text-base sm:text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed text-pretty">
          {FINAL_CTA.subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLink(FINAL_CTA.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-2xl shadow-xl shadow-amber-400/20 transition-all group"
          >
            <MessageCircle className="w-6 h-6 fill-slate-900 text-transparent transition-transform group-hover:scale-110" />
            <span>{FINAL_CTA.buttonLabel}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <p className="text-xs text-blue-300/80">
          Converse em tempo real com nossa equipe e tire suas dúvidas sobre modelos, peças e manutenção.
        </p>
      </div>
    </section>
  );
};
