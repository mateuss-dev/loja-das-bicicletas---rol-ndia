import React from 'react';
import { WORKSHOP_SECTION, getWhatsAppLink } from '../config/storeData';
import { 
  Wrench, 
  Settings, 
  Disc, 
  Gauge, 
  ShieldCheck, 
  MessageCircle, 
  Layers, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Workshop: React.FC = () => {
  const { mechanicsBlock, partsBlock, trustCallout } = WORKSHOP_SECTION;

  // Discrete icons mapping for mechanics services
  const serviceIcons = [
    <ShieldCheck className="w-5 h-5 text-blue-600" />,
    <Gauge className="w-5 h-5 text-blue-600" />,
    <Settings className="w-5 h-5 text-blue-600" />,
    <Disc className="w-5 h-5 text-blue-600" />,
    <Wrench className="w-5 h-5 text-blue-600" />,
    <Layers className="w-5 h-5 text-blue-600" />,
  ];

  return (
    <section id="oficina" className="py-16 sm:py-24 bg-slate-100 text-slate-900 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Oficina Especializada & Peças
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            {WORKSHOP_SECTION.mainTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed text-pretty">
            {WORKSHOP_SECTION.complementaryText}
          </p>
        </div>

        {/* BLOCK 1: Serviços de Mecânica */}
        <div className="mb-20 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Mechanics Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">
                  Mecânica & Manutenção
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {mechanicsBlock.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {mechanicsBlock.description}
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {mechanicsBlock.services.map((srv, idx) => (
                  <div
                    key={srv.id}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-white shadow-2xs border border-slate-200 shrink-0">
                        {serviceIcons[idx % serviceIcons.length]}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {srv.name}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Special highlight box */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-slate-800 space-y-1">
                <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  {mechanicsBlock.highlightQuote}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {mechanicsBlock.highlightText}
                </p>
              </div>

              {/* Button */}
              <div>
                <a
                  href={getWhatsAppLink(mechanicsBlock.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-800 hover:bg-blue-900 active:scale-[0.98] rounded-xl shadow-md transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-amber-300 fill-amber-300 transition-transform group-hover:scale-110" />
                  <span>{mechanicsBlock.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Mechanics Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <img
                  src={mechanicsBlock.image.src}
                  alt={mechanicsBlock.image.alt}
                  className={`w-full h-[360px] sm:h-[420px] ${mechanicsBlock.image.objectFit}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

        {/* BLOCK 2: Peças e Componentes */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Parts Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100">
                <img
                  src={partsBlock.image.src}
                  alt={partsBlock.image.alt}
                  className={`w-full h-[360px] sm:h-[420px] ${partsBlock.image.objectFit}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Parts Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">
                  Peças & Acessórios
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {partsBlock.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {partsBlock.description}
                </p>
              </div>

              {/* Parts examples list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {partsBlock.partsExamples.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Parts Quote Highlight */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-slate-800 space-y-1">
                <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  {partsBlock.highlightQuote}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {partsBlock.highlightText}
                </p>
              </div>

              {/* Parts Button */}
              <div>
                <a
                  href={getWhatsAppLink(partsBlock.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md transition-all group"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-900 text-transparent transition-transform group-hover:scale-110" />
                  <span>{partsBlock.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Faixa visual de destaque / Chamada de Confiança */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 p-8 sm:p-10 text-white text-center shadow-lg">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-balance">
              “{trustCallout.title}”
            </h3>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed text-pretty">
              {trustCallout.subtitle}
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink(trustCallout.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-bold text-slate-900 bg-white hover:bg-amber-300 active:scale-[0.98] rounded-xl transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-slate-900 text-transparent" />
                <span>{trustCallout.buttonLabel}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
