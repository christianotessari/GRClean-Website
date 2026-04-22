import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface ProductCardProps {
  product: Product;
  disableZoom?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, disableZoom }) => {
  return (
    <motion.div 
      whileHover={disableZoom ? {} : { y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col h-full shadow-sm transition-all duration-500",
        !disableZoom && "hover:shadow-[0_20px_40px_rgba(151,215,0,0.15)] hover:border-accent-green/30 hover:bg-zinc-50/50"
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        {product.isRenovaClean && (
          <div className="absolute top-4 left-4 z-10 bg-accent-green text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Renova Clean
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className={cn(
            "w-full h-full object-cover transition-transform duration-1000 ease-out",
            !disableZoom && "group-hover:scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <Link 
            to={`/produtos/${product.id}`}
            className="bg-black text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-accent-green hover:text-black transition-colors shadow-2xl"
          >
            Ver Detalhes
          </Link>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
        {/* Animated background accent on hover */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-green/5 blur-3xl rounded-full translate-x-12 translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <span className="text-accent-green text-[11px] font-black uppercase tracking-widest mb-2 block transform group-hover:translate-x-1 transition-transform duration-500">{product.category}</span>
        <h3 className="text-gray-900 font-bold text-xl mb-3 group-hover:text-black transition-colors">{product.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 group-hover:border-accent-green/10 transition-colors">
          <Link 
            to={`/produtos/${product.id}`}
            className="text-[10px] font-black text-gray-900 flex items-center group/btn tracking-widest uppercase"
          >
            SOLICITAR ORÇAMENTO
            <div className="ml-2 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover/btn:bg-accent-green transition-colors">
              <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
