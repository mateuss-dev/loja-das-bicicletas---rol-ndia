import React, { useState, useEffect, useRef } from 'react';
import { BIKE_CATEGORIES, BikeCategory, CategoryImage, getWhatsAppLink } from '../config/storeData';
import { 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  Images
} from 'lucide-react';

interface CategoryCarouselProps {
  category: BikeCategory;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const images = category.images;
  const total = images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Optional subtle auto-rotation that pauses when user hovers or interacts
  useEffect(() => {
    if (isPaused || total <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  // Touch swipe support for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const currentImage = images[currentIndex] || images[0];

  return (
    <div 
      className="relative flex flex-col space-y-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Viewport */}
      <div 
        className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 aspect-[4/3] w-full select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Render Slides with smooth cross-fade */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`w-full h-full ${img.objectFit || 'object-cover'} ${img.objectPosition || 'object-center'}`}
              referrerPolicy="no-referrer"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        {/* Ambient Gradient Scrim for text legibility */}
        <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Top Badges (Category Name & Slide Counter) */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-30 flex items-center justify-between pointer-events-none">
          <div className="bg-blue-900/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm border border-blue-400/20">
            {category.name}
          </div>
          <div className="bg-slate-950/75 backdrop-blur-md text-blue-200 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm border border-white/10 flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-amber-400" />
            <span>{currentIndex + 1} de {total}</span>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Imagem anterior da categoria ${category.name}`}
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 shadow-md focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Próxima imagem da categoria ${category.name}`}
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Caption & Model Details */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-30 pointer-events-none">
          {currentImage.caption && (
            <div className="bg-slate-950/85 backdrop-blur-md text-white text-xs sm:text-sm px-3.5 py-2 rounded-xl border border-white/10 shadow-sm max-w-lg">
              <span className="text-amber-400 font-semibold mr-1.5">Destaque:</span>
              <span>{currentImage.caption}</span>
            </div>
          )}
        </div>
      </div>

      {/* Carousel Navigation Bar (Thumbnails & Dots) */}
      <div className="flex items-center justify-between gap-3 px-1">
        {/* Clickable Pagination Dots */}
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Navegação do carrossel">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              role="tab"
              aria-selected={idx === currentIndex}
              className={`h-2 transition-all rounded-full ${
                idx === currentIndex
                  ? 'w-6 bg-blue-700'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Ir para a foto ${idx + 1} de ${total}`}
            />
          ))}
        </div>

        {/* Miniature Thumbnails */}
        <div className="flex items-center gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded-lg overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? 'border-blue-600 shadow-xs ring-2 ring-blue-600/30 scale-105'
                  : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
              }`}
              aria-label={`Visualizar foto ${idx + 1}: ${img.alt}`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Categories: React.FC = () => {
  return (
    <section id="categorias" className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Categorias Principais
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            A bicicleta certa para o seu momento e estilo de vida
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 text-pretty">
            Conheça as linhas disponíveis na Loja das Bicicletas. Navegue pelas fotos em cada carrossel e fale diretamente conosco pelo WhatsApp para consultar tamanhos, modelos e pronta entrega.
          </p>
        </div>

        {/* The 3 Categories Sections with Carousels */}
        <div className="space-y-16 lg:space-y-24">
          {BIKE_CATEGORIES.map((cat, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={cat.id}
                id={cat.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-28 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Carousel Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <CategoryCarousel category={cat} />
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                      Linha {cat.name}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-1">
                    {cat.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Consultation Button */}
                  <div className="pt-3">
                    <a
                      href={getWhatsAppLink(cat.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-700 hover:bg-blue-800 active:scale-[0.98] rounded-xl shadow-md transition-all group"
                    >
                      <MessageCircle className="w-5 h-5 text-amber-300 fill-amber-300 transition-transform group-hover:scale-110" />
                      <span>{cat.buttonLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <p className="mt-2 text-xs text-slate-500">
                      Consulte modelos e valores direto pelo WhatsApp da loja em Rolândia.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Vitrine Note Banner */}
        <div className="mt-16 p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm text-center max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Nota informativa:</strong> Cada carrossel apresenta variações reais e exemplos de bicicletas que trabalhamos. Para conferir disponibilidade de cores, marcas e tamanhos em estoque, consulte nossa equipe no WhatsApp!
          </span>
        </div>

      </div>
    </section>
  );
};
