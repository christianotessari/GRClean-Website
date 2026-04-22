import React from 'react';
import { ChevronRight } from 'lucide-react';
import { categories } from '../data/products';
import { Category } from '../types';

interface CategoryTreeProps {
  activeSlug?: string;
  onSelect?: (slug: string) => void;
}

const CategoryTree: React.FC<CategoryTreeProps> = ({ activeSlug, onSelect }) => {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 ml-1">Categorias</h3>
      <div className="flex flex-col space-y-1">
        <button
          onClick={() => onSelect?.('all')}
          className={`flex items-center justify-between w-full p-4 rounded-xl transition-all group font-bold text-sm ${
            !activeSlug 
            ? 'bg-black text-white shadow-xl translate-x-1' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <span>TODOS</span>
          <ChevronRight 
            size={14} 
            className={`transition-transform duration-300 ${!activeSlug ? 'rotate-90 text-accent-green' : 'group-hover:translate-x-1'}`} 
          />
        </button>
        {categories.map((cat: Category) => (
          <button
            key={cat.id}
            onClick={() => onSelect?.(cat.slug)}
            className={`flex items-center justify-between w-full p-4 rounded-xl transition-all group font-bold text-sm ${
              activeSlug === cat.slug 
              ? 'bg-black text-white shadow-xl translate-x-1' 
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span>{cat.name}</span>
            <ChevronRight 
              size={14} 
              className={`transition-transform duration-300 ${activeSlug === cat.slug ? 'rotate-90 text-accent-green' : 'group-hover:translate-x-1'}`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTree;
