import React from 'react';
import { Printer, ShieldAlert, Sparkles, CheckCircle2, Flame, Layers } from 'lucide-react';

export const RpgPrintSpecs: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {/* SLA / Resina Card */}
      <div className="p-5 rounded-2xl bg-[#09090e] border border-amber-500/25 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-600/50 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-200">
              Impressão em Resina (SLA)
            </h4>
            <p className="text-[11px] text-neutral-400">Miniaturas & Detalhes RPG</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-neutral-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Camada recomendada: <strong>0.03mm - 0.05mm</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Escala ideal para mesa: <strong>28mm / 32mm D&D</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Suportes finos com inclinação de 35° a 45°</span>
          </li>
        </ul>
      </div>

      {/* FDM / Filamento Card */}
      <div className="p-5 rounded-2xl bg-[#09090e] border border-amber-500/25 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-600/50 flex items-center justify-center shrink-0">
            <Printer className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-200">
              Impressão em Filamento (FDM)
            </h4>
            <p className="text-[11px] text-neutral-400">Cenários, Caixas & Props</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-neutral-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Camada recomendada: <strong>0.12mm - 0.20mm</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Preenchimento (Infill): <strong>15% Giroide</strong></span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Suportes em árvore (Tree Supports) para overhangs</span>
          </li>
        </ul>
      </div>

      {/* Security & Access Card */}
      <div className="p-5 rounded-2xl bg-[#09090e] border border-red-900/40 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-600/60 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <h4 className="font-cinzel text-sm font-bold text-amber-200">
              Acesso & Autenticidade
            </h4>
            <p className="text-[11px] text-neutral-400">Licença do Entregável</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-neutral-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Acesso vitalício para clientes cadastrados</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Arquivos pré-testados e prontos para fatiador</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span>Proibido compartilhamento ou revenda direta</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
