import React, { useState, useEffect } from 'react';
import { STORE_CONFIG, getWhatsAppLink } from '../config/storeData';
import { Bike, MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Infantis', href: '#infantil' },
    { label: 'Trabalho & Dia a Dia', href: '#urbana' },
    { label: 'Mountain Bike', href: '#mountain-bike' },
    { label: 'Oficina & Peças', href: '#oficina' },
    { label: 'Oferta do Mês', href: '#ofertas' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-900/95 backdrop-blur-md shadow-md py-3 text-white'
          : 'bg-blue-900 text-white py-4 border-b border-blue-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-white group whitespace-nowrap shrink-0"
            aria-label="Loja das Bicicletas - Início"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-700/80 border border-blue-400/30 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-600 transition-colors">
              <Bike className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-tight uppercase font-display">
                {STORE_CONFIG.name}
              </span>
              <span className="text-[11px] text-blue-200 font-medium tracking-wider">
                {STORE_CONFIG.city}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-blue-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 whitespace-nowrap shrink-0 border-b-2 border-transparent hover:border-blue-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Guide */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            
            <a
              href={getWhatsAppLink('Olá! Gostaria de falar com a Loja das Bicicletas.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs xl:text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-slate-900 text-transparent" />
              <span>WhatsApp da Loja</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-amber-400 text-slate-900 rounded-lg"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-blue-100 hover:text-white hover:bg-blue-800 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-blue-950/98 border-t border-blue-800/80 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2 text-sm font-medium text-blue-100 hover:bg-blue-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-blue-800/60 flex flex-col gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-900 bg-amber-400 rounded-lg text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fale pelo WhatsApp</span>
            </a>
            
          </div>
        </div>
      )}
    </header>
  );
};
