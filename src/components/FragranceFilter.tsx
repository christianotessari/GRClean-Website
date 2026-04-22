import React from 'react';
import { Tag } from 'lucide-react';

interface FragranceFilterProps {
  fragrances: string[];
  selected?: string;
  onSelect: (fragrance: string | undefined) => void;
}

const FragranceFilter: React.FC<FragranceFilterProps> = ({ fragrances, selected, onSelect }) => {
  if (fragrances.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-gray-400">
        <Tag size={14} />
        <h4 className="text-[10px] font-black uppercase tracking-widest">Filtrar por Fragrância</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelect(undefined)}
          className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wide transition-all border ${
            !selected 
            ? 'bg-black text-white border-black shadow-lg' 
            : 'bg-white text-gray-400 border-gray-100 hover:border-gray-300'
          }`}
        >
          Todas
        </button>
        {fragrances.map((f) => (
          <button
            key={f}
            onClick={() => onSelect(f)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wide transition-all border ${
              selected === f
              ? 'bg-accent-green text-black border-accent-green shadow-lg shadow-accent-green/20' 
              : 'bg-white text-gray-500 border-gray-100 hover:border-accent-green/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FragranceFilter;
