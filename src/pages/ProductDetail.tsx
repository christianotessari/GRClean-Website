import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ShieldCheck, Droplet, Info, ArrowLeft, Send, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import ProductCard from '../components/ProductCard';
import DilutionCalculator from '../components/DilutionCalculator';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-gray-900 text-4xl font-black uppercase tracking-tight">Solução não encontrada</h1>
        <Link to="/catalogo" className="text-accent-green underline mt-8 block font-bold uppercase tracking-widest text-sm">Voltar ao catálogo</Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const whatsappLink = `https://wa.me/554131563343?text=${encodeURIComponent(
    `Olá! Gostaria de solicitar um orçamento para o produto: ${product.name} (ID: ${product.id})`
  )}`;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/catalogo" className="inline-flex items-center text-gray-400 hover:text-gray-900 mb-12 transition-all font-bold uppercase text-xs tracking-widest group">
          <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Voltar para o Catálogo
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-50 border border-gray-100 p-12 flex items-center justify-center shadow-inner relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700" 
              />
              {product.isRenovaClean && (
                <div className="absolute top-8 right-8 bg-black text-accent-green px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl">
                  Renova Clean Original
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center space-x-3 mb-8">
               <span className="bg-accent-green/10 text-accent-green border border-accent-green/20 text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-sm shadow-accent-green/5">
                 {product.category}
               </span>
               {product.featured && (
                 <span className="bg-black text-accent-green text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full flex items-center shadow-lg">
                   <Sparkles size={12} className="mr-2" />
                   Destaque Profissional
                 </span>
               )}
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-[0.9]">{product.name}</h1>
            
            <p className="text-lg md:text-xl text-gray-500 mb-8 md:mb-12 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div className="p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:border-accent-green transition-all shadow-sm hover:shadow-xl">
                 <ShieldCheck className="text-accent-green mb-4 md:mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Aplicação</h4>
                 <p className="text-gray-900 font-bold text-sm">Industrial e Comercial</p>
               </div>
               <div className="p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100 group hover:bg-white hover:border-accent-green transition-all shadow-sm hover:shadow-xl">
                 <Droplet className="text-accent-green mb-4 md:mb-6 group-hover:scale-110 transition-transform" size={32} />
                 <h4 className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Fragrância</h4>
                 <p className="text-gray-900 font-bold text-sm">{product.fragrance || 'Sem fragrância'}</p>
               </div>
            </div>

            {/* Technical Chips */}
            <div className="flex flex-wrap gap-2 mb-12">
              {product.tags?.map(tag => (
                <span key={tag} className="bg-white border border-gray-100 text-gray-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">
                  # {tag}
                </span>
              ))}
            </div>

            {product.dilution && (
              <div className="mb-12">
                <DilutionCalculator dilutionBase={product.dilution} />
              </div>
            )}

            <div className="flex flex-col space-y-4">
               <a 
                 href={whatsappLink} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center justify-center space-x-3 w-full py-6 bg-black text-white hover:bg-accent-green hover:text-black font-black uppercase tracking-wider rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-black/20"
               >
                 <Send size={20} />
                 <span>Solicitar Orçamento via WhatsApp</span>
               </a>
               <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center justify-center">
                 <Info size={14} className="mr-2" />
                 Atendimento especializado Curitiba e região (PR/SC)
               </p>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-gray-100">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-4xl font-black text-gray-900 leading-tight">Soluções <span className="text-accent-green">Complementares.</span></h2>
              <Link to="/catalogo" className="text-xs font-black text-accent-green hover:text-black uppercase tracking-widest transition-colors mb-2">Ver Catálogo Completo</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
