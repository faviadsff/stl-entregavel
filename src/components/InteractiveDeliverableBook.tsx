import React, { useState } from 'react';
import { STL_PAGES_DATA, STLItem } from '../data/stlData.ts';
import {
  FolderOpen,
  Clock,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Dice5,
  Printer,
  Copy,
  Check,
  Search,
  Eye
} from 'lucide-react';

interface InteractiveDeliverableBookProps {
  onOpenItemFolder?: (item: STLItem) => void;
}

export const InteractiveDeliverableBook: React.FC<InteractiveDeliverableBookProps> = () => {
  const [currentPageIndex, setCurrentPageIndexState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('stl_mago_book_page');
      if (saved !== null) {
        const pageNum = parseInt(saved, 10);
        if (!isNaN(pageNum) && pageNum >= 0 && pageNum < STL_PAGES_DATA.length) {
          return pageNum;
        }
      }
    } catch {
      // ignore
    }
    return 0;
  });
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const setCurrentPageIndex = (page: number) => {
    setCurrentPageIndexState(page);
    try {
      localStorage.setItem('stl_mago_book_page', page.toString());
    } catch {
      // ignore
    }
  };

  const currentPage = STL_PAGES_DATA[currentPageIndex];
  const totalPages = STL_PAGES_DATA.length;

  const handleNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleCopyLink = (item: STLItem) => {
    const url = item.folderUrl || 'https://drive.google.com';
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter items if searching
  const filteredItems = searchQuery.trim()
    ? currentPage.items.filter(
        (it) =>
          it.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          it.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          it.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentPage.items;

  return (
    <div className="flex flex-col gap-6">
      {/* Top Controller Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#09090d] border border-amber-500/25">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <button
              id="prev-page-btn"
              onClick={handlePrevPage}
              disabled={currentPageIndex === 0}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              title="Página Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-red-500" />
            </button>
            <span className="font-cinzel text-sm font-bold text-amber-300 px-3 tracking-wider">
              PÁGINA {currentPageIndex + 1} / {totalPages}
            </span>
            <button
              id="next-page-btn"
              onClick={handleNextPage}
              disabled={currentPageIndex === totalPages - 1}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-amber-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              title="Próxima Página"
            >
              <ChevronRight className="w-5 h-5 text-red-500" />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
            {STL_PAGES_DATA.map((p, idx) => (
              <button
                key={p.pageNumber}
                onClick={() => setCurrentPageIndex(idx)}
                className={`w-7 h-7 rounded-md text-xs font-semibold font-mono transition-all ${
                  currentPageIndex === idx
                    ? 'bg-amber-400 text-black font-bold shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    : 'bg-black/60 border border-amber-500/20 text-neutral-400 hover:text-amber-200 hover:border-amber-400/40'
                }`}
              >
                {p.pageNumber}
              </button>
            ))}
          </div>
        </div>

        {/* Search within page */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-red-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filtrar nesta página..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-black border border-amber-500/30 text-xs text-amber-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </div>

      {/* The Printable Page Sheet (Styling matches PDF attachment) */}
      <div className="relative w-full max-w-3xl mx-auto bg-black rounded-2xl border-2 border-amber-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.9),0_0_25px_rgba(217,119,6,0.15)] overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute inset-2 pointer-events-none rounded-xl border border-amber-500/20"></div>
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none"></div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h2 className="font-cinzel text-xl sm:text-2xl font-black tracking-widest text-amber-400 uppercase">
            {currentPage.title}
          </h2>

          {/* Golden Diamond Geometric Rune Motif */}
          <div className="flex items-center justify-center gap-2 my-3">
            <span className="text-amber-400 text-sm">◇</span>
            <span className="text-yellow-300 text-lg">◈</span>
            <span className="text-amber-400 text-sm">◇</span>
          </div>

          {currentPage.subtitle && (
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed mt-2">
              {currentPage.subtitle}
            </p>
          )}
        </div>

        {/* PAGE 11: IMPORTANT NOTICE */}
        {currentPage.pageNumber === 11 ? (
          <div className="my-8 p-6 sm:p-8 rounded-xl bg-gradient-to-b from-red-950/40 to-black border-2 border-red-600/50 text-center relative">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-900/40 border border-red-500 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
              <ShieldAlert className="w-7 h-7 text-red-500" />
            </div>

            <h3 className="font-cinzel text-lg sm:text-xl font-extrabold text-red-500 mb-3 tracking-wider">
              Aviso Importante & Termos
            </h3>

            <div className="max-w-md mx-auto space-y-4 text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
              <p className="border-l-2 border-red-500/50 pl-3 text-left">
                {currentPage.notice}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/80">
              <span className="font-cinzel tracking-widest font-semibold">
                STL DO MAGO • BIGESTPACKS ©
              </span>
              <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-600/40 text-red-300 font-mono">
                Uso Pessoal Exclusivo
              </span>
            </div>
          </div>
        ) : (
          /* REGULAR PAGES ITEMS (PAGES 1 to 10) */
          <div className="space-y-4 my-4">
            {/* MONTHLY UPDATES GRID FOR PAGES 9 & 10 */}
            {currentPage.pageNumber === 9 || currentPage.pageNumber === 10 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredItems.map((item) => {
                  const isSoon = item.status === 'coming_soon';
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                        isSoon
                          ? 'bg-neutral-950/80 border-red-900/30'
                          : 'bg-[#0d0d12] border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]"></div>
                        <span
                          className={`font-cinzel text-xs sm:text-sm font-bold tracking-wider ${
                            isSoon ? 'text-neutral-400' : 'text-amber-200'
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      {isSoon ? (
                        <span className="px-2.5 py-1 rounded bg-gradient-to-r from-red-900 to-red-950 border border-red-600/40 text-[10px] font-bold text-red-300 uppercase tracking-wider">
                          COMING SOON
                        </span>
                      ) : (
                        <a
                          href={item.folderUrl || 'https://drive.google.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-green-700 hover:bg-green-600 text-white text-[11px] font-bold tracking-wider transition-colors shadow-sm"
                        >
                          <FolderOpen className="w-3.5 h-3.5 text-white" />
                          <span>OPEN</span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* STANDARD CATEGORY ROWS FOR PAGES 1 - 8 */
              filteredItems.map((item) => {
                const isSoon = item.status === 'coming_soon';
                return (
                  <div
                    key={item.id}
                    className={`group relative flex items-center justify-between p-3 sm:p-4 rounded-xl border transition-all ${
                      isSoon
                        ? 'bg-[#0a0a0e] border-neutral-800'
                        : 'bg-[#0c0c11] border-neutral-800/90 hover:border-amber-500/60 hover:bg-[#111118]'
                    }`}
                  >
                    {/* Left red decorative bar */}
                    <div className="absolute left-0 top-2 bottom-2 w-1 bg-red-600 rounded-r"></div>

                    <div className="flex items-center gap-3 sm:gap-4 pl-2">
                      {/* Red Icon Pill like PDF attachment */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-950 to-black border border-red-600/50 flex flex-col items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.25)] shrink-0">
                        <Dice5 className="w-5 h-5 text-red-500" />
                        <span className="text-[9px] font-black tracking-widest text-amber-300">
                          STL
                        </span>
                      </div>

                      {/* Name & details */}
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-200 group-hover:text-amber-300 tracking-wide transition-colors">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-neutral-400 mt-0.5">
                          {item.category}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {/* Copy Link */}
                      {!isSoon && (
                        <button
                          onClick={() => handleCopyLink(item)}
                          className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/40 transition-colors"
                          title="Copiar Link da Pasta"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-red-500" />
                          )}
                        </button>
                      )}

                      {/* Button Open Folder or Coming Soon */}
                      {isSoon ? (
                        <span className="px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-red-950 to-neutral-900 border border-red-600/50 text-[10px] sm:text-xs font-bold text-red-400 tracking-wider uppercase">
                          COMING SOON
                        </span>
                      ) : (
                        <a
                          href={item.folderUrl || 'https://drive.google.com'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-cinzel text-xs font-bold tracking-wider transition-all shadow-[0_0_12px_rgba(34,197,94,0.25)]"
                        >
                          <FolderOpen className="w-3.5 h-3.5 text-white" />
                          <span>OPEN FOLDER</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })
            )}

            {filteredItems.length === 0 && (
              <div className="py-12 text-center text-neutral-500 text-xs">
                Nenhum pack encontrado nesta página com o termo &quot;{searchQuery}&quot;.
              </div>
            )}
          </div>
        )}

        {/* Page Footer Runes */}
        <div className="mt-8 pt-4 border-t border-amber-500/20 flex items-center justify-between text-[11px] text-neutral-400">
          <span className="font-cinzel text-amber-400/80">
            BIGESTPACKS ©
          </span>
          <span className="font-mono text-neutral-500">
            Página {currentPage.pageNumber} de {totalPages}
          </span>
          <span className="text-red-500 font-medium">
            STL do Mago RPG
          </span>
        </div>
      </div>
    </div>
  );
};
