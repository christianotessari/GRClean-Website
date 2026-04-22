import React, { useState } from 'react';
import { Beaker, Droplets, Info } from 'lucide-react';

interface DilutionCalculatorProps {
  dilutionBase: string; // Expected format like "1/10" or "1:10"
}

const DilutionCalculator: React.FC<DilutionCalculatorProps> = ({ dilutionBase }) => {
  const [liters, setLiters] = useState<number>(1);
  
  // Parse dilution (e.g., "1/10" means 1 part product for 9 parts water, total 10)
  // Or "1:10" sometimes means 1 part product + 10 parts water.
  // In Renova Clean context, 1/10 usually means 1 part product in 10 parts total solution.
  const parts = dilutionBase.replace(':', '/').split('/').map(Number);
  const ratio = parts.length === 2 && !isNaN(parts[1]) ? parts[1] : 1;
  const isProntoUso = dilutionBase.toLowerCase().includes('pronto');

  if (isProntoUso) return null;

  const productAmount = liters / ratio;
  const waterAmount = liters - productAmount;

  return (
    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent-green rounded-xl flex items-center justify-center text-black shadow-sm">
          <Beaker size={20} />
        </div>
        <div>
          <h3 className="text-gray-900 font-black text-lg uppercase tracking-tight">Calculadora de Diluição</h3>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Base de Diluição: {dilutionBase}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1 mb-2 block">
            Quantidade Final Desejada (Litros)
          </label>
          <input 
            type="number" 
            min="0.1" 
            step="0.1"
            value={liters}
            onChange={(e) => setLiters(parseFloat(e.target.value) || 0)}
            className="w-full bg-white border border-gray-200 rounded-xl py-4 px-6 text-gray-900 font-bold focus:outline-none focus:border-accent-green transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center text-accent-green mb-2">
              <Droplets size={16} className="mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest">Produto Solução</span>
            </div>
            <div className="text-2xl font-black text-gray-900">
              {productAmount < 1 ? `${(productAmount * 1000).toFixed(0)}ml` : `${productAmount.toFixed(2)}L`}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center text-blue-500 mb-2">
              <Droplets size={16} className="mr-2" />
              <span className="text-[10px] font-black uppercase tracking-widest">Água</span>
            </div>
            <div className="text-2xl font-black text-gray-900">
              {waterAmount < 1 ? `${(waterAmount * 1000).toFixed(0)}ml` : `${waterAmount.toFixed(2)}L`}
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3 text-gray-400 p-4 bg-white/50 rounded-xl border border-dashed border-gray-200">
          <Info size={16} className="shrink-0 mt-0.5" />
          <p className="text-[10px] leading-relaxed font-medium italic">
            Diluição aproximada para superfícies com sujidade média. Para limpeza pesada, consulte a ficha técnica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DilutionCalculator;
