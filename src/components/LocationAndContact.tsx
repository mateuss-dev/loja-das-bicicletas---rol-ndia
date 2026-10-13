import React from 'react';
import { STORE_CONFIG, getWhatsAppLink } from '../config/storeData';
import { MapPin, Navigation, Compass, Phone, MessageCircle, Clock, ExternalLink } from 'lucide-react';

export const LocationAndContact: React.FC = () => {
  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full border border-blue-200">
            Venha nos Visitar
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Localização e Contato
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-pretty">
            Visite a Loja das Bicicletas em Rolândia - PR. Estacionamento fácil, atendimento próximo e oficina mecânica pronta para atender você.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    {STORE_CONFIG.name}
                  </h3>
                  <div className="text-sm sm:text-base text-slate-700 space-y-1 font-medium">
                    <p className="text-slate-900 font-semibold">{STORE_CONFIG.address.streetPrimary}</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Referência adicional: {STORE_CONFIG.address.streetSecondary}</p>
                    <p className="text-slate-700">{STORE_CONFIG.address.city} - {STORE_CONFIG.address.state} · CEP {STORE_CONFIG.address.cep}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons for Location & WhatsApp */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={STORE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] rounded-xl shadow-xs transition-all text-center"
                >
                  <Navigation className="w-4 h-4 shrink-0" />
                  <span>Como chegar</span>
                </a>

                <a
                  href={STORE_CONFIG.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-slate-800 bg-sky-100 hover:bg-sky-200 border border-sky-300 active:scale-[0.98] rounded-xl transition-all text-center"
                >
                  <Compass className="w-4 h-4 text-sky-700 shrink-0" />
                  <span>Abrir no Waze</span>
                </a>

                <a
                  href={getWhatsAppLink('Olá! Gostaria de falar com a Loja das Bicicletas.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-xs transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-900 text-transparent shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Phone & Hours Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Telefone da Fachada</span>
                </div>
                <div className="text-xl font-black text-slate-900">
                  {STORE_CONFIG.phoneDisplay}
                </div>
                <p className="text-xs text-slate-500">
                  Atendimento em horário comercial na loja física.
                </p>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Horário de Funcionamento</span>
                </div>
                <div className="space-y-1 text-xs text-slate-700">
                  {STORE_CONFIG.businessHours.map((bh, idx) => (
                    <div key={idx} className="flex justify-between py-0.5 border-b border-slate-100 last:border-0">
                      <span className="font-semibold text-slate-900">{bh.days}:</span>
                      <span>{bh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Visual Map Card Column */}
          <div className="lg:col-span-6">
            <div className="h-full rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center justify-between">
                  <span>Fachada Azul & Acesso Fácil</span>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Rolândia - PR</span>
                </h4>
                <p className="text-sm text-slate-600">
                  Localize a tradicional fachada azul da loja. Você pode acionar as rotas com apenas 1 clique em seu aplicativo favorito (Google Maps ou Waze).
                </p>
              </div>

              {/* Visual simulated map display container */}
              <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner flex flex-col justify-between p-6 text-white">
                {/* Background map grid effect */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}
                />

                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-blue-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-blue-400/30 text-xs font-bold">
                    Ponto de Referência
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Rolândia, Paraná</span>
                </div>

                <div className="relative z-10 self-center text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/50 animate-bounce">
                    <MapPin className="w-8 h-8 text-amber-300" />
                  </div>
                  <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-xs font-bold">
                    Loja das Bicicletas
                    <div className="text-[11px] text-blue-300 font-normal">Av. Atlanta 695 · Rolândia</div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-end">
                  <a
                    href={STORE_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 underline"
                  >
                    <span>Ver mapa em tela cheia</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 text-center">
                Consulte peças, orçamentos mecânicos ou disponibilidade de estoque presencialmente ou antes de sair de casa.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
