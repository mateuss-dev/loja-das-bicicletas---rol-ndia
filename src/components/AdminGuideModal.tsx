import React from 'react';
import { ADMIN_GUIDE } from '../config/storeData';
import { X, BookOpen, Code2, Camera, Tag, Phone, MapPin, Terminal, UploadCloud } from 'lucide-react';

interface AdminGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminGuideModal: React.FC<AdminGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const topicIcons = [
    <Camera className="w-5 h-5 text-blue-600 shrink-0" />,
    <Tag className="w-5 h-5 text-amber-600 shrink-0" />,
    <Phone className="w-5 h-5 text-emerald-600 shrink-0" />,
    <MapPin className="w-5 h-5 text-red-600 shrink-0" />,
    <Terminal className="w-5 h-5 text-indigo-600 shrink-0" />,
    <UploadCloud className="w-5 h-5 text-sky-600 shrink-0" />,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="guide-title"
      >
        {/* Modal Header */}
        <div className="p-6 bg-blue-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-800 rounded-xl">
              <BookOpen className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 id="guide-title" className="text-xl font-bold">
                Manual do Lojista — Personalização & Publicação
              </h3>
              <p className="text-xs text-blue-200">
                Guia rápido para atualizar ofertas, fotos, WhatsApp e publicar o site
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-blue-200 hover:text-white hover:bg-blue-800 transition-colors"
            aria-label="Fechar guia"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 text-xs sm:text-sm">
            <strong>Arquivo Principal de Configuração:</strong> Todas as alterações do site são feitas em um único lugar: <code className="bg-blue-200/80 px-2 py-0.5 rounded font-mono font-bold text-blue-900">src/config/storeData.ts</code>. Não é preciso mexer no design nem reconstruir o site!
          </div>

          <div className="space-y-4">
            {ADMIN_GUIDE.map((guide, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-sm sm:text-base">
                  {topicIcons[idx % topicIcons.length]}
                  <span>{guide.topic}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                  {guide.instruction}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Code Reference Box */}
          <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2">
            <div className="flex items-center gap-2 text-slate-400 font-bold border-b border-slate-800 pb-2">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span>Exemplo de alteração em src/config/storeData.ts:</span>
            </div>
            <pre className="text-emerald-400 overflow-x-auto whitespace-pre">
{`// Alterar o WhatsApp em 1 segundo:
export const STORE_CONFIG = {
  whatsappNumber: "5543999998888", // altere aqui
  // ...
};

// Alterar a oferta do mês:
export const MONTHLY_OFFERS = [
  {
    name: "Mountain Bike Nova Aro 29",
    currentPrice: 1350.00,
    previousPrice: 1590.00, // ou null se não houver
    image: { src: "/sua-nova-foto.jpg", ... }
  }
];`}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition-colors"
          >
            Entendido, fechar guia
          </button>
        </div>
      </div>
    </div>
  );
};
