import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryTree from '../components/CategoryTree';
import FragranceFilter from '../components/FragranceFilter';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const ProductSkeleton = () => (
  <div className="bg-gray-50 rounded-[2rem] p-6 animate-pulse">
    <div className="aspect-square bg-gray-200 rounded-2xl mb-6" />
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
    <div className="h-3 bg-gray-200 rounded w-full mb-2" />
    <div className="h-3 bg-gray-200 rounded w-5/6" />
  </div>
);

export default function Catalog() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  // Filter States
  const [selectedFragrance, setSelectedFragrance] = useState<string | undefined>(undefined);
  const [onlyRenova, setOnlyRenova] = useState(searchParams.get('brand') === 'renova');

  useEffect(() => {
    const brand = searchParams.get('brand');
    if (brand === 'renova') setOnlyRenova(true);
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleCount(12);
    }, 400);
    return () => clearTimeout(timer);
  }, [categorySlug, searchQuery, onlyRenova, selectedFragrance]);

  const activeCategory = categories.find(c => c.slug === categorySlug);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !categorySlug || product.categorySlug === categorySlug;
      const matchesRenova = !onlyRenova || product.isRenovaClean;
      const matchesFragrance = !selectedFragrance || product.fragrance === selectedFragrance;

      return matchesSearch && matchesCategory && matchesRenova && matchesFragrance;
    });
  }, [searchQuery, categorySlug, onlyRenova, selectedFragrance]);

  const allFragrances = useMemo(() => {
    const frags = new Set<string>();
    products.filter(p => !categorySlug || p.categorySlug === categorySlug).forEach(p => {
      if (p.fragrance) frags.add(p.fragrance);
    });
    return Array.from(frags);
  }, [categorySlug]);

  const clearFilters = () => {
    setOnlyRenova(false);
    setSearchQuery('');
    setSelectedFragrance(undefined);
    setSearchParams({});
    setVisibleCount(12);
    navigate('/catalogo');
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <SEO 
        title={activeCategory ? `${activeCategory.name} Profissional | Grupo Renova Clean` : "Catálogo de Produtos de Limpeza Profissional | Grupo Renova Clean"}
        description={activeCategory ? activeCategory.description : "Loja de produtos de limpeza profissional e industrial. Encontre produtos concentrados, equipamentos e acessórios para limpeza em atacado."}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
              {activeCategory ? activeCategory.name : 'Nosso Catálogo'}
            </h1>
            <p className="text-gray-600 font-medium max-w-xl">
              {activeCategory ? activeCategory.description : 'Explore nossa linha completa de produtos profissionais para higiene e limpeza.'}
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-gray-900 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green/20 transition-all font-medium"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex space-x-2">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex-grow flex items-center justify-center space-x-2 bg-black text-white p-4 rounded-xl font-bold"
            >
              <Filter size={18} />
              <span>Menu de Categorias</span>
            </button>
            {(categorySlug || onlyRenova || searchQuery || selectedFragrance) && (
              <button onClick={clearFilters} className="bg-gray-100 p-4 rounded-xl text-gray-900 self-stretch">
                <X size={18} />
              </button>
            )}
          </div>

          {/* Sidebar Filters */}
          <aside className={cn(
            "lg:w-80 shrink-0 space-y-10 lg:block",
            showFilters ? "fixed inset-0 z-50 bg-white p-8 overflow-y-auto" : "hidden"
          )}>
            <div className="flex items-center justify-between lg:hidden mb-10">
              <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Categorias</h2>
              <button onClick={() => setShowFilters(false)} className="text-gray-900"><X size={24} /></button>
            </div>

            <CategoryTree 
              activeSlug={categorySlug} 
              onSelect={(slug) => {
              if (slug === 'all') {
                navigate('/catalogo');
              } else {
                navigate(`/categorias/${slug}`);
              }
              setShowFilters(false);
            }} 
            />

            <div className="h-px bg-gray-100" />

            {allFragrances.length > 0 && (
              <FragranceFilter 
                fragrances={allFragrances} 
                selected={selectedFragrance} 
                onSelect={setSelectedFragrance} 
              />
            )}

            <div className="space-y-4">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Filtros Avançados</h3>
              <label className="flex items-center space-x-3 cursor-pointer group p-4 bg-gray-50 rounded-xl hover:bg-accent-green/10 transition-colors">
                <div 
                  className={cn(
                    "w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all",
                    onlyRenova ? "bg-accent-green border-accent-green" : "border-gray-200 bg-white"
                  )} 
                  onClick={(e) => {
                    e.preventDefault();
                    setOnlyRenova(!onlyRenova);
                  }}
                >
                  {onlyRenova && <X size={14} className="text-black" />}
                </div>
                <span className={cn(
                  "font-bold text-sm transition-colors",
                  onlyRenova ? "text-gray-900" : "text-gray-500"
                )}>Apenas Renova Clean</span>
              </label>
            </div>

            <button 
              onClick={clearFilters}
              className="w-full py-4 text-xs font-black text-gray-400 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors uppercase tracking-widest"
            >
              LIMPAR FILTROS
            </button>
          </aside>

          {/* Product Grid */}
          <main className="flex-grow">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="space-y-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  <AnimatePresence mode="popLayout">
                    {filteredProducts.slice(0, visibleCount).map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        layout
                      >
                        <ProductCard product={p} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {visibleCount < filteredProducts.length && (
                  <div className="flex justify-center pt-8 border-t border-gray-100">
                    <button
                      onClick={() => setVisibleCount(prev => prev + 12)}
                      className="group relative px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-accent-green hover:text-black transition-all shadow-2xl shadow-black/20"
                    >
                      Ver mais produtos
                      <div className="absolute inset-x-0 -bottom-1 h-1 bg-accent-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                    </button>
                  </div>
                )}
                
                <div className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest pt-4">
                  Exibindo {Math.min(visibleCount, filteredProducts.length)} de {filteredProducts.length} itens no total
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="bg-gray-50 p-12 rounded-full mb-8 text-gray-200">
                  <Search size={64} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Nenhuma solução encontrada</h3>
                <p className="text-gray-500 font-medium max-w-md mx-auto">Não encontramos produtos com estes filtros. Tente buscar por outros termos ou explore por categoria.</p>
                <button 
                  onClick={clearFilters}
                  className="mt-10 bg-black text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-accent-green hover:text-black transition-all shadow-xl shadow-black/10"
                >
                  Resetar Catálogo
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
