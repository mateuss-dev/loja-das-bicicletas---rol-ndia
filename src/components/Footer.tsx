import React from 'react';
import { STORE_CONFIG, getWhatsAppLink } from '../config/storeData';
import { Bike, MessageCircle, Phone, MapPin, ExternalLink, HelpCircle } from 'lucide-react';

interface FooterProps {
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center text-white">
                <Bike className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-white font-display tracking-tight uppercase">
                {STORE_CONFIG.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tradição e paixão pelo ciclismo em Rolândia, Paraná. Bicicletas para a família, trabalho, lazer e esporte com suporte de oficina mecânica própria.
            </p>
            <div className="text-xs text-blue-400 font-medium">
              Rolândia - PR · Desde a primeira pedalada
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#infantil" className="hover:text-white transition-colors">Bicicletas Infantis</a></li>
              <li><a href="#urbana" className="hover:text-white transition-colors">Bicicletas para Trabalho & Dia a Dia</a></li>
              <li><a href="#mountain-bike" className="hover:text-white transition-colors">Mountain Bike & Aventura</a></li>
              <li><a href="#oficina" className="hover:text-white transition-colors">Oficina Especializada & Peças</a></li>
              <li><a href="#ofertas" className="hover:text-white transition-colors">Ofertas do Mês</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização e Mapa</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contato & Endereço
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.address.streetPrimary} · {STORE_CONFIG.address.city} - {STORE_CONFIG.address.state}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Telefone da Fachada: {STORE_CONFIG.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:underline font-semibold"
                >
                  WhatsApp da Loja
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Guide for Owner */}
          

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {STORE_CONFIG.name}. Rolândia - PR. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:text-slate-300 transition-colors">Voltar ao topo ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
