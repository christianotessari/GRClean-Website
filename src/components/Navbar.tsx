import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Phone, CircleHelp, UserCircle, ShoppingCart, ChevronDown, Coffee, Package, ShieldCheck, Eraser, Trash2, Droplets, SprayCan } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { categories } from '../data/products';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Filter categories to remove "Lavanderia"
  const filteredCategories = categories.filter(cat => cat.id !== 'lavanderia');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileAccordion = (id: string) => {
    setMobileAccordion(mobileAccordion === id ? null : id);
  };

  // Mapping categories to specific icons for the menu
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'aromatizantes': return <SprayCan size={20} className="text-gray-500" />;
      case 'limpeza-geral': return <Eraser size={20} className="text-gray-500" />;
      case 'limpeza-pesada': return <Droplets size={20} className="text-gray-500" />;
      case 'lavanderia': return <Package size={20} className="text-gray-500" />;
      case 'tratamento-piso': return <Eraser size={20} className="text-gray-500" />;
      case 'utilitarios-equipamentos': return <ShoppingCart size={20} className="text-gray-500" />;
      case 'descartaveis-epis': return <ShieldCheck size={20} className="text-gray-500" />;
      default: return <Droplets size={20} className="text-gray-500" />;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar: Search & Service Info */}
      <div className={cn(
        "bg-white border-b border-gray-100 transition-all duration-300 px-6",
        isScrolled ? "py-0.5" : "py-1"
      )}>
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="http://www.agencianest.com.br/renova2026/logopontual1.png" 
              alt="Pontual Clean Logo" 
              className="h-8 md:h-10 w-auto object-contain transition-all"
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 relative">
            <input
              type="text"
              placeholder="Olá, o que está procurando hoje?"
              className="w-full bg-white border border-gray-300 rounded-full py-2 px-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-accent-green/20 focus:border-accent-green transition-all shadow-sm placeholder:text-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-accent-green transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Info Blocks */}
          <div className="hidden xl:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <CircleHelp size={24} className="text-accent-green" />
              <div className="text-sm">
                <p className="text-gray-500 leading-none mb-1">Central de</p>
                <p className="font-bold text-gray-900 leading-none">atendimento</p>
              </div>
            </div>
          </div>

          {/* Budget Button */}
          <Link 
            to="/contato" 
            className="flex-shrink-0 bg-accent-green hover:bg-black text-black hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <Phone size={16} />
            <span>Solicitar Orçamento</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-accent-green transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom Bar: Categories */}
      <div className="bg-white border-b border-gray-100 hidden lg:block shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-12 py-1">
            {/* Main Nav Links */}
            <div className="flex items-center gap-8 flex-1">
              {/* Quem Somos Dropdown */}
              <div className="relative group">
                <button 
                  onMouseEnter={() => setAboutMenuOpen(true)}
                  className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-accent-green transition-colors py-4 uppercase tracking-tight whitespace-nowrap"
                >
                  Quem Somos
                  <ChevronDown size={14} className={cn("transition-transform duration-300", aboutMenuOpen && "rotate-180")} />
                </button>

                <AnimatePresence>
                  {aboutMenuOpen && (
                    <>
                      <div className="absolute top-full left-0 pt-2" onMouseLeave={() => setAboutMenuOpen(false)}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden"
                        >
                          <Link to="/quem-somos" onClick={() => setAboutMenuOpen(false)} className="block px-6 py-4 text-sm font-bold text-gray-700 hover:bg-accent-green hover:text-black transition-colors border-b border-gray-50">QUEM SOMOS</Link>
                          <Link to="/responsabilidade-social" onClick={() => setAboutMenuOpen(false)} className="block px-6 py-4 text-sm font-bold text-gray-700 hover:bg-accent-green hover:text-black transition-colors border-b border-gray-50">RESPONSABILIDADE SOCIAL</Link>
                          <Link to="/depoimentos" onClick={() => setAboutMenuOpen(false)} className="block px-6 py-4 text-sm font-bold text-gray-700 hover:bg-accent-green hover:text-black transition-colors">DEPOIMENTOS</Link>
                        </motion.div>
                      </div>
                      <div className="fixed inset-0 z-[-1]" onMouseEnter={() => setAboutMenuOpen(false)} />
                    </>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/solucoes" className="text-sm font-bold text-gray-700 hover:text-accent-green transition-colors uppercase tracking-tight py-4 whitespace-nowrap">Soluções</Link>
              <Link to="/catalogo-digital" className="text-sm font-bold text-gray-700 hover:text-accent-green transition-colors uppercase tracking-tight py-4 whitespace-nowrap">Catálogo</Link>

              {/* Categorias Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setCategoryMenuOpen(true)}
                  className="flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-accent-green transition-colors py-4 uppercase tracking-tight whitespace-nowrap"
                >
                  <Package size={18} className="text-accent-green" />
                  <span>Produtos de limpeza</span>
                  <ChevronDown size={16} className={cn("transition-transform duration-300", categoryMenuOpen && "rotate-180")} />
                </button>

                {/* Categories Mega Dropdown */}
                <AnimatePresence>
                  {categoryMenuOpen && (
                    <>
                      <div className="absolute top-full left-0 pt-2" onMouseLeave={() => setCategoryMenuOpen(false)}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="w-[850px] bg-white shadow-2xl rounded-3xl border border-gray-100 p-8 grid grid-cols-3 gap-x-12 gap-y-6 z-[100]"
                        >
                          <div className="col-span-1 space-y-6 border-r border-gray-100 pr-8">
                             <h3 className="text-xs font-black text-accent-green uppercase tracking-[0.2em]">Destaques</h3>
                             <div className="grid gap-3">
                                {filteredCategories.slice(0, 7).map((cat) => (
                                  <Link 
                                    key={cat.id} 
                                    to={`/categorias/${cat.slug}`} 
                                    onClick={() => setCategoryMenuOpen(false)}
                                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-accent-green hover:text-black transition-all group"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 group-hover:text-black">
                                       {getCategoryIcon(cat.id)}
                                    </div>
                                    <span className="text-[13px] font-bold text-gray-700 group-hover:text-black">{cat.name}</span>
                                  </Link>
                                ))}
                             </div>
                          </div>

                          <div className="col-span-2 space-y-6">
                             <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">Todas as Categorias</h3>
                             <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                {filteredCategories.map((cat) => (
                                  <Link 
                                    key={cat.id} 
                                    to={`/categorias/${cat.slug}`} 
                                    onClick={() => setCategoryMenuOpen(false)}
                                    className="text-[13px] font-semibold text-gray-600 hover:text-accent-green transition-colors pb-1 border-b border-transparent hover:border-accent-green/30"
                                  >
                                    {cat.name}
                                  </Link>
                                ))}
                             </div>
                          </div>
                        </motion.div>
                      </div>
                      <div className="fixed inset-0 z-[-1]" onMouseEnter={() => setCategoryMenuOpen(false)} />
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Category Links */}
              <div className="flex items-center gap-8 border-l border-gray-100 pl-8">
                <Link to="/categorias/aromatizantes-ambientes" className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-accent-green transition-colors uppercase tracking-tight py-4 whitespace-nowrap">
                  <div className="text-accent-green">{getCategoryIcon('aromatizantes')}</div>
                  Aromatizantes
                </Link>
                <Link to="/categorias/limpeza-pesada" className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-accent-green transition-colors uppercase tracking-tight py-4 whitespace-nowrap">
                  <div className="text-accent-green">{getCategoryIcon('limpeza-pesada')}</div>
                  Limpeza Pesada
                </Link>
                <Link to="/categorias/limpeza-geral" className="flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-accent-green transition-colors uppercase tracking-tight py-4 whitespace-nowrap">
                  <div className="text-accent-green">{getCategoryIcon('limpeza-geral')}</div>
                  Limpeza Geral
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img 
                src="http://www.agencianest.com.br/renova2026/logopontual1.png" 
                alt="Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-red-500"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Mobile Search */}
              <div className="relative mx-2">
                <input
                  type="text"
                  placeholder="Produtos, diluição, soluções..."
                  className="w-full bg-gray-100 border-none rounded-2xl py-4 px-6 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-accent-green/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search size={22} />
                </button>
              </div>

              {/* Mobile Main Nav with Accordion */}
              <nav className="space-y-2">
                {/* Accordion: Quem Somos */}
                <div className="border-b border-gray-50 flex flex-col">
                  <button 
                    onClick={() => toggleMobileAccordion('about')}
                    className="flex items-center justify-between w-full px-4 py-5 text-lg font-black text-gray-900 group"
                  >
                    <span className="uppercase tracking-tighter">QUEM SOMOS</span>
                    <ChevronDown size={20} className={cn("transition-transform duration-300 text-gray-400 group-hover:text-accent-green", mobileAccordion === 'about' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === 'about' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50/50 rounded-2xl"
                      >
                        <div className="flex flex-col py-2 px-6 space-y-4 pb-6">
                          <Link to="/quem-somos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-gray-600 hover:text-accent-green uppercase tracking-wider">História & Empresa</Link>
                          <Link to="/responsabilidade-social" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-gray-600 hover:text-accent-green uppercase tracking-wider">Responsabilidade Social</Link>
                          <Link to="/depoimentos" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold text-gray-600 hover:text-accent-green uppercase tracking-wider">Depoimentos</Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/solucoes" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-5 text-lg font-black text-gray-900 border-b border-gray-50 uppercase tracking-tighter">Soluções</Link>
                <Link to="/catalogo-digital" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-5 text-lg font-black text-gray-900 border-b border-gray-50 uppercase tracking-tighter">Catálogo Digital</Link>

                {/* Accordion: Produtos */}
                <div className="border-b border-gray-50 flex flex-col">
                  <button 
                    onClick={() => toggleMobileAccordion('products')}
                    className="flex items-center justify-between w-full px-4 py-5 text-lg font-black text-gray-900 group"
                  >
                    <span className="uppercase tracking-tighter">PRODUTOS DE LIMPEZA</span>
                    <ChevronDown size={20} className={cn("transition-transform duration-300 text-gray-400 group-hover:text-accent-green", mobileAccordion === 'products' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {mobileAccordion === 'products' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-gray-50/50 rounded-2xl"
                      >
                        <div className="grid grid-cols-2 gap-3 p-4">
                          {filteredCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              to={`/categorias/${cat.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:ring-2 hover:ring-accent-green/50 transition-all text-center gap-3"
                            >
                              <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                                {getCategoryIcon(cat.id)}
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest text-gray-800 leading-tight">{cat.name}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>

              {/* Sub Links / Quick Access */}
              <div className="px-4 py-4 space-y-4">
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Acesso Rápido</p>
                 <div className="grid gap-4">
                    <Link to="/categorias/aromatizantes-ambientes" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                       <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                          {getCategoryIcon('aromatizantes')}
                       </div>
                       Aromatizantes
                    </Link>
                    <Link to="/categorias/limpeza-pesada" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                       <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                          {getCategoryIcon('limpeza-pesada')}
                       </div>
                       Limpeza Pesada
                    </Link>
                    <Link to="/categorias/limpeza-geral" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-4 text-sm font-bold text-gray-700">
                       <div className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
                          {getCategoryIcon('limpeza-geral')}
                       </div>
                       Limpeza Geral
                    </Link>
                 </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100">
              <Link 
                to="/contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 bg-accent-green text-black py-4 rounded-xl font-black text-lg shadow-lg"
              >
                <Phone size={20} />
                SOLICITAR ORÇAMENTO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
