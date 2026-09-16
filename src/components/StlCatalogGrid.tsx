import React, { useState, useMemo } from 'react';
import { STL_PAGES_DATA, STLItem } from '../data/stlData.ts';
import {
  FolderOpen,
  Search,
  Dice5,
  Sparkles,
  Layers,
  Copy,
  Check,
  Filter,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

export const StlCatalogGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Extract all items across all pages
  const allItems: STLItem[] = useMemo(() => {
    const list: STLItem[] = [];
    STL_PAGES_DATA.forEach((page) => {
      page.items.forEach((item) => list.push(item));
    });
    return list;
  }, []);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    allItems.forEach((it) => set.add(it.category));
    return ['all', ...Array.from(set)];
  }, [allItems]);

  // Filtered items
  const filtered = useMemo(() => {
    return allItems.filter((item) => {
      const matchesSearch =
        searchTerm === '' ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat =
        selectedCategory === 'all' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [allItems, searchTerm, selectedCategory]);

  const handleCopy = (item: STLItem) => {
    const url = item.folderUrl || 'https://drive.google.com';
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Search & Filter Header */}
      <div className="p-4 sm:p-6 rounded-2xl bg-[#08080c] border border-amber-500/25 flex flex-col gap-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-cinzel text-xl font-bold text-amber-300">
              Catálogo Geral de Arquivos STL
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Todos os {allItems.length} packs indexados do entregável STL do Mago.
            </p>
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-red-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por nome, categoria ou tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-black border border-amber-500/30 text-xs text-amber-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <Filter className="w-3.5 h-3.5 text-red-500 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-red-950 border border-amber-400 text-amber-300 shadow-[0_0_8px_rgba(239,68,68,0.3)]'
                  : 'bg-black/60 border border-neutral-800 text-neutral-400 hover:text-amber-200 hover:border-neutral-700'
              }`}
            >
              {cat === 'all' ? 'Todos os Packs' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of packs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => {
          const isSoon = item.status === 'coming_soon';
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between p-4 rounded-xl bg-[#09090e] border border-neutral-800/90 hover:border-amber-500/50 hover:bg-[#0e0e14] transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-950 to-black border border-red-600/50 flex items-center justify-center shrink-0">
                    <Dice5 className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/80 border border-amber-500/20 text-amber-300/80 font-mono">
                    Pág. {item.page}
                  </span>
                </div>

                <h4 className="font-cinzel text-base font-bold text-amber-200 group-hover:text-amber-300 tracking-wide mb-1 transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-400 mb-3">{item.category}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                {!isSoon ? (
                  <>
                    <button
                      onClick={() => handleCopy(item)}
                      className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-amber-300 transition-colors"
                      title="Copiar Link"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-green-400 font-semibold">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-red-500" />
                          <span>Copiar Link</span>
                        </>
                      )}
                    </button>

                    <a
                      href={item.folderUrl || 'https://drive.google.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-700 hover:bg-green-600 text-white font-cinzel text-xs font-bold transition-all shadow-sm"
                    >
                      <FolderOpen className="w-3.5 h-3.5 text-white" />
                      <span>ABRIR PASTA</span>
                    </a>
                  </>
                ) : (
                  <span className="w-full text-center py-1.5 rounded-lg bg-red-950/60 border border-red-800/40 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                    COMING SOON
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="p-12 text-center rounded-2xl bg-[#08080c] border border-neutral-800">
          <p className="text-neutral-400 text-sm mb-2">
            Nenhum pacote encontrado com os filtros selecionados.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="text-xs text-amber-400 hover:underline font-semibold"
          >
            Limpar Filtros de Busca
          </button>
        </div>
      )}
    </div>
  );
};
