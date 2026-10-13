import React from 'react';
import { HERO_DATA, getWhatsAppLink, STORE_CONFIG } from '../config/storeData';
import { MessageCircle, ChevronDown, Wrench, ShieldCheck, MapPin, Bike } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative subtle ambient pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/60 border border-blue-400/30 text-blue-100 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>{HERO_DATA.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-balance">
              {HERO_DATA.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl text-pretty font-normal">
              {HERO_DATA.subtitle}
            </p>

            {/* Main Conversion CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={getWhatsAppLink('Olá! Gostaria de falar com a Loja das Bicicletas para conhecer os modelos disponíveis.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-lg shadow-amber-400/20 transition-all text-center group"
              >
                <MessageCircle className="w-5 h-5 fill-slate-900 text-transparent transition-transform group-hover:scale-110" />
                <span>{HERO_DATA.ctaWhatsApp}</span>
              </a>

              <a
                href="#infantil"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-base font-semibold text-white bg-blue-700/70 hover:bg-blue-600/90 active:scale-[0.98] border border-blue-400/40 rounded-xl transition-all text-center"
              >
                <span>{HERO_DATA.ctaCatalog}</span>
                <ChevronDown className="w-4 h-4 text-blue-200" />
              </a>
            </div>

            {/* Quick trust markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-blue-200/90">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rolândia, PR · Atendimento presencial e online</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Oficina especializada na loja</span>
              </span>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30 bg-slate-800 group">
              <img
                src={HERO_DATA.image.src}
                alt={HERO_DATA.image.alt}
                className={`w-full h-[320px] sm:h-[400px] lg:h-[460px] ${HERO_DATA.image.objectFit} ${HERO_DATA.image.objectPosition} transition-transform duration-700 group-hover:scale-105`}
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-950/70 backdrop-blur-md border border-white/10 text-white text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bike className="w-4 h-4 text-amber-400" />
                  <span className="font-medium">Modelos para todas as idades e trilhas</span>
                </div>
                <span className="text-[11px] text-blue-300">Rolândia - PR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight strip below hero */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-blue-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60">
            <div className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Loja Física
            </div>
            <p className="text-xs text-blue-200">Localizada em Rolândia - PR, com estacionamento e fácil acesso.</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60">
            <div className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Oficina Própria
            </div>
            <p className="text-xs text-blue-200">Mecânica preventiva, regulagens finas e manutenção completa.</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60">
            <div className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Peças & Acessórios
            </div>
            <p className="text-xs text-blue-200">Componentes de reposição e acessórios para pedalar com segurança.</p>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-800/60">
            <div className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Atendimento Direto
            </div>
            <p className="text-xs text-blue-200">Converse direto pelo WhatsApp para tirar dúvidas e orçamentos.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
