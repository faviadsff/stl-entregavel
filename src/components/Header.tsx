import React, { useState } from 'react';
import {
  Download,
  ExternalLink,
  Upload,
  Sparkles,
  Layers,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentPdfUrl: string;
  pdfFileName: string;
  onPdfUpload: (file: File) => void;
  activeTab: 'interactive' | 'catalog';
  setActiveTab: (tab: 'interactive' | 'catalog') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPdfUrl,
  pdfFileName,
  onPdfUpload,
  activeTab,
  setActiveTab
}) => {
  const [isHoveredUpload, setIsHoveredUpload] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
        onPdfUpload(file);
      }
    }
  };

  return (
    <header className="border-b border-amber-500/20 bg-[#060608]/90 backdrop-blur-md sticky top-0 z-40">
      {/* Top golden rune strip */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            {/* Red glowing wizard sigil icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-950 to-black border border-red-600/60 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.35)] shrink-0">
              <span className="text-2xl select-none" role="img" aria-label="Wizard Hat">
                🧙‍♂️
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  STL DO MAGO
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-red-950/80 border border-red-600/50 text-red-400">
                  Entregável RPG
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-medium">
                Pack Completo de STL para Impressão 3D • RPG & Miniaturas
              </p>
            </div>
          </div>

          {/* Navigation Mode Pills */}
          <div className="flex items-center p-1 bg-black/80 rounded-xl border border-amber-500/25">
            <button
              id="tab-interactive"
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'interactive'
                  ? 'bg-gradient-to-r from-red-900/80 to-red-950 border border-amber-400/40 text-amber-300 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'text-neutral-400 hover:text-amber-200 hover:bg-neutral-900/50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-red-500" />
              Páginas do Entregável
            </button>

            <button
              id="tab-catalog"
              onClick={() => setActiveTab('catalog')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'catalog'
                  ? 'bg-gradient-to-r from-red-900/80 to-red-950 border border-amber-400/40 text-amber-300 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'text-neutral-400 hover:text-amber-200 hover:bg-neutral-900/50'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-red-500" />
              Catálogo de Pastas
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Upload/Replace PDF file */}
            <label
              htmlFor="pdf-file-upload"
              onMouseEnter={() => setIsHoveredUpload(true)}
              onMouseLeave={() => setIsHoveredUpload(false)}
              className="relative cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-900/90 border border-amber-500/30 text-amber-200 hover:border-amber-400 hover:bg-neutral-800 transition-all shadow-sm"
              title="Carregar ou substituir o PDF deste entregável"
            >
              <Upload className="w-3.5 h-3.5 text-red-500" />
              <span>Substituir PDF</span>
              <input
                id="pdf-file-upload"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {/* Download PDF button */}
            <a
              id="download-pdf-button"
              href={currentPdfUrl}
              download={pdfFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 font-cinzel tracking-wider transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            >
              <Download className="w-3.5 h-3.5 text-black" />
              <span>Baixar PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              id="open-external-pdf-button"
              href={currentPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-neutral-300 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
              title="Abrir em Nova Aba"
            >
              <ExternalLink className="w-4 h-4 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
