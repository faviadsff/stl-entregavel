import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { InteractiveDeliverableBook } from './components/InteractiveDeliverableBook.tsx';
import { StlCatalogGrid } from './components/StlCatalogGrid.tsx';
import { RpgPrintSpecs } from './components/RpgPrintSpecs.tsx';
import {
  BookOpen,
  Layers,
  Sparkles,
  Dice5,
  Printer,
  ShieldAlert,
  Flame,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [currentPdfUrl, setCurrentPdfUrl] = useState<string>('/stl_do_mago_pack.pdf');
  const [pdfFileName, setPdfFileName] = useState<string>('stl_do_mago_pack.pdf');
  const [activeTab, setActiveTabState] = useState<'interactive' | 'catalog'>(() => {
    try {
      const saved = localStorage.getItem('stl_mago_active_tab');
      if (saved === 'interactive' || saved === 'catalog') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'interactive';
  });

  const setActiveTab = (tab: 'interactive' | 'catalog') => {
    setActiveTabState(tab);
    try {
      localStorage.setItem('stl_mago_active_tab', tab);
    } catch {
      // ignore
    }
  };

  const handlePdfUpload = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setCurrentPdfUrl(objectUrl);
    setPdfFileName(file.name);
  };

  return (
    <div className="min-h-screen bg-[#030304] text-neutral-100 flex flex-col font-sans selection:bg-red-900/60 selection:text-amber-200">
      {/* Mystic Atmospheric Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-red-950/20 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-amber-900/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-red-950/15 rounded-full blur-[180px]"></div>
      </div>

      {/* Main Header */}
      <Header
        currentPdfUrl={currentPdfUrl}
        pdfFileName={pdfFileName}
        onPdfUpload={handlePdfUpload}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Hero / Deliverable Status Banner */}
      <section className="relative z-10 border-b border-amber-500/15 bg-gradient-to-b from-[#08080d] via-[#050508] to-transparent py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-red-900/80 to-black border-2 border-red-600/60 flex items-center justify-center shadow-[0_0_25px_rgba(239,68,68,0.4)] shrink-0">
                <Dice5 className="w-6 h-6 sm:w-7 sm:h-7 text-red-500" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-amber-400">
                    Entregável de Impressão 3D
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    Edição Especial RPG
                  </span>
                </div>
                <h2 className="font-cinzel text-xl sm:text-3xl font-black text-amber-200 tracking-wide">
                  Seu Pack de STL Liberado
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl mt-1">
                  Acesse o PDF completo do entregável abaixo com todos os links diretos para
                  pastas de miniaturas, cenários de mesa, dioramas e colecionáveis.
                </p>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-start md:justify-end">
              <div className="px-4 py-2.5 rounded-xl bg-black/80 border border-amber-500/30 text-center">
                <div className="font-cinzel text-lg sm:text-xl font-bold text-amber-400">47+</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Categorias STL
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-black/80 border border-amber-500/30 text-center">
                <div className="font-cinzel text-lg sm:text-xl font-bold text-amber-400">11</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Páginas no PDF
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-xl bg-black/80 border border-red-900/50 text-center">
                <div className="font-cinzel text-lg sm:text-xl font-bold text-red-400">2024/25</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Atualizações
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'interactive' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-500" />
                <h3 className="font-cinzel text-lg font-bold text-amber-300">
                  Páginas Oficiais do Entregável
                </h3>
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                Navegação interativa página por página
              </span>
            </div>

            <InteractiveDeliverableBook />
            <RpgPrintSpecs />
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-red-500" />
                <h3 className="font-cinzel text-lg font-bold text-amber-300">
                  Índice Completo de Pastas STL
                </h3>
              </div>
              <span className="text-xs text-neutral-400 font-medium">
                Filtre e copie links de acesso
              </span>
            </div>

            <StlCatalogGrid />
            <RpgPrintSpecs />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-amber-500/20 bg-[#040406] py-8 text-xs text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel font-bold text-amber-400">STL DO MAGO</span>
            <span className="text-neutral-600">•</span>
            <span>Entregável Oficial de Arquivos STL para RPG</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-neutral-400">BigestPacks © Todos os direitos reservados</span>
            <span className="text-red-500 font-semibold">Arquivos Protegidos</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
