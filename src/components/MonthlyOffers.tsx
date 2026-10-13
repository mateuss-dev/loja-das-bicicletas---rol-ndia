import React from 'react';
import { MONTHLY_OFFERS, formatCurrency, getWhatsAppLink } from '../config/storeData';
import { Tag, MessageCircle, ArrowRight, Bike } from 'lucide-react';

export const MonthlyOffers: React.FC = () => {
  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-amber-700" />
            <span>Condições Especiais</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Destaques
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-pretty">
            Uma oportunidade para pedalar mais gastando menos. Modelos selecionados com condições especiais para você iniciar suas pedaladas em Rolândia.
          </p>
        </div>

        {/* 2 Independent Offer Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {MONTHLY_OFFERS.slice(0, 1).map((offer, index) => {{/*Foi aqui que mudei para aparecer só um para voltar colocar esse cod "{MONTHLY_OFFERS.map((offer, index) => {" */}
            // Graceful fallbacks in case owner leaves some field empty during quick monthly update
            const hasName = Boolean(offer.name && offer.name.trim());
            const hasPrice = offer.currentPrice !== null && offer.currentPrice !== undefined;
            const hasImage = Boolean(offer.image && offer.image.src);
            const title = hasName ? offer.name : `Oferta em Destaque #${index + 1}`;
            const desc = offer.description || "Consulte nossos especialistas pelo WhatsApp para detalhes completos deste modelo.";

            return (
              <div
                key={offer.id || `offer-${index}`}
                className="flex flex-col bg-slate-50 rounded-3xl overflow-hidden border-2 border-blue-200/80 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 group"
              >
                {/* Offer Image Area */}
                <div className="relative w-full h-[260px] sm:h-[300px] bg-slate-200 overflow-hidden">
                  {hasImage ? (
                    <img
                      src={offer.image.src}
                      alt={offer.image.alt || title}
                      className={`w-full h-full ${offer.image.objectFit || 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-blue-900/10 text-slate-400">
                      <Bike className="w-12 h-12 text-blue-500 mb-2" />
                      <span className="text-xs">Foto do modelo em atualização</span>
                    </div>
                  )}

                  {/* Monthly Offer Badge */}
                  <div className="absolute top-4 left-4 bg-amber-400 text-slate-950 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 uppercase tracking-wide">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Destaque do Mês</span>
                  </div>
                </div>

                {/* Offer Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Pricing Box & WhatsApp CTA */}
                  <div className="pt-4 border-t border-slate-200/90 space-y-4">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      {/* Previous Price (only if explicitly provided) */}
                      {offer.previousPrice !== null && offer.previousPrice !== undefined && (
                        <div className="flex flex-col">
                          <span className="text-[11px] text-slate-500 line-through font-medium">
                            De {formatCurrency(offer.previousPrice)}
                          </span>
                        </div>
                      )}

                      {/* Current Price */}
                      {hasPrice ? (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs font-semibold text-slate-500">Por</span>
                          <span className="text-2xl sm:text-3xl font-black text-blue-900 tracking-tight tabular-nums">
                            {formatCurrency(offer.currentPrice)}
                          </span>
                          <span className="text-xs font-semibold text-slate-500">Até 10x S/ Juros no cartão de crédito</span>
                        </div>
                      ) : (
                        <span className="text-sm font-semibold text-blue-800">
                          Preço especial sob consulta
                        </span>
                      )}
                    </div>

                    {/* WhatsApp Inquiry Button */}
                    <a
                      href={getWhatsAppLink(offer.whatsappMessage || `Olá! Vi a oferta do mês de ${title} no site e gostaria de saber as condições!`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-900 text-transparent" />
                      <span>Consultar disponibilidade</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small informational subnote */}
        <div className="mt-10 text-center text-xs text-slate-500">
          * Valores válidos enquanto durarem os estoques do mês. Para conferir formas de pagamento, parcelamento e retirada na loja, converse com nossa equipe.
        </div>

      </div>
    </section>
  );
};
