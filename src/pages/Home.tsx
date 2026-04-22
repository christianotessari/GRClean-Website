import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, Landmark, Trophy, ShieldCheck, Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useMemo, useRef } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { cn } from '../lib/utils';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const swiperRef = useRef<any>(null);

  const featuredProducts = useMemo(() => {
    // Exact order requested by user
    const orderRequestedNames = [
      "Magnífico",
      "Vidros Renova",
      "Renova Grill",
      "Desincrustante Ácido",
      "Multiuso Renova",
      "Pedras"
    ];

    // Get the products in the specific order
    const ordered = orderRequestedNames.map(name => 
      products.find(p => p.name === name)
    ).filter(p => p !== undefined) as typeof products;

    // Remaining featured products
    const remaining = products.filter(p => 
      p.featured && !orderRequestedNames.includes(p.name)
    );

    return [...ordered, ...remaining];
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Grupo Renova Clean - Distribuidora de Produtos de limpeza"
        description="Distribuidora líder em produtos de limpeza profissional em Curitiba e Florianópolis. Produtos concentrados para condomínios, empresas e indústrias."
      />
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[800px] flex items-center overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="http://www.agencianest.com.br/renova2026/videoheader.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10"></div>

        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 pt-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent-green/20 border border-accent-green/30 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
              </span>
              <span className="text-accent-green text-[10px] md:text-[11px] font-bold uppercase tracking-widest">Soluções Profissionais</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tighter max-w-3xl">
              Soluções completas para <br className="hidden md:inline" />
              a limpeza profissional <br className="hidden md:inline" />
              do seu condomínio
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium">
              A Pontual Clean entrega produtos profissionais, equipamentos e orientação, com alto rendimento e suporte para a rotina real de limpeza de condomínios que precisam de eficiência.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/catalogo-digital" 
                className="w-full sm:w-auto px-10 py-5 bg-accent-green hover:bg-pontual-light-blue hover:text-black text-black font-black uppercase tracking-wider rounded-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-2xl shadow-accent-green/20"
              >
                Confira nosso catalogo
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Filters & Most Wanted */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
              PRODUTOS <span className="text-accent-green">MAIS PROCURADOS</span>
            </h2>
            <p className="text-gray-500 font-medium max-w-xl">Encontre as soluções de limpeza profissional mais eficientes para o seu negócio.</p>
          </div>

          {/* Swiper Carousel */}
          <div className="relative group px-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="pb-12"
            >
              {featuredProducts.map((p, i) => (
                <SwiperSlide key={p.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-accent-green hover:text-black transition-all opacity-0 group-hover:opacity-100 -translate-x-6">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-accent-green hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-6">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/catalogo" className="inline-flex items-center space-x-3 text-black font-black uppercase tracking-[0.2em] group">
              <span>Ver Catálogo Completo</span>
              <div className="p-4 bg-accent-green rounded-2xl group-hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Modern Video Showcase Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-green/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-green font-bold tracking-[0.4em] uppercase text-sm mb-4 block"
            >
              Excelência em Cada Detalhe
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase"
            >
              Transformando Ambientes <br />
              <span className="text-gray-500 italic">com Performance Superior</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-5xl group"
          >
            {/* Video Container with "Modern" Frame */}
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(151,215,0,0.15)] bg-gray-900 border border-white/10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/aSFS2f-wGwE?autoplay=0&mute=0&rel=0"
                title="Pontual Clean - Institucional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Glowing effect behind video on hover */}
            <div className="absolute inset-0 bg-accent-green/20 blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Renova Clean Spotlight */}
      <section className="py-32 bg-gray-50 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-green/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border border-black/5 bg-black">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                >
                  <source src="http://www.agencianest.com.br/renova2026/videolateral.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-12 left-12 bg-accent-green text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-lg z-20">
                  LINHA PREMIUM
                </div>
              </div>
            </motion.div>

            <div>
              <span className="text-accent-green font-bold text-sm tracking-[0.4em] uppercase mb-6 block">Inovação & Sustentabilidade</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                PRODUTO PRÓPRIO. <br />
                <span className="text-accent-green">RESULTADO NO DIA A DIA.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 mb-12 leading-relaxed">
                <p>
                  A Renova Clean nasce da necessidade real de quem vive a rotina da limpeza profissional. 
                  São produtos desenvolvidos para entregar desempenho, rendimento e praticidade em ambientes que exigem eficiência todos os dias.
                </p>
                <p className="text-lg">
                  Mais do que fórmulas, criamos soluções que funcionam na prática — reduzindo esforço da equipe, evitando desperdícios e garantindo um padrão de limpeza consistente.
                </p>
              </div>
              
              <div className="grid gap-6 mb-12">
                {[
                  'Alto rendimento para uso contínuo',
                  'Performance em limpezas leves e pesadas',
                  'Produtos testados na rotina de condomínios',
                  'Desenvolvimento focado em eficiência operacional'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="p-2 bg-accent-green/10 rounded-xl">
                      <CheckCircle2 className="text-accent-green" size={20} />
                    </div>
                    <span className="text-gray-900 font-bold">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/catalogo" className="inline-flex items-center px-10 py-5 bg-black text-white font-black uppercase tracking-wider rounded-2xl hover:scale-105 transition-all shadow-lg">
                Conhecer Produtos
                <ArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background blobs for premium feel */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-green/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-12 bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(151,215,0,0.2)] hover:border-accent-green/50 transition-all group flex flex-col items-center text-center"
             >
                <div className="p-6 bg-accent-green/10 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-accent-green/20 transition-all">
                  <Building2 className="text-accent-green" size={48} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Condomínios</h3>
                <p className="text-gray-400 leading-relaxed">Soluções que garantem áreas comuns impecáveis e máxima eficiência em limpeza coletiva.</p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-12 bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(151,215,0,0.2)] hover:border-accent-green/50 transition-all group flex flex-col items-center text-center"
             >
                <div className="p-6 bg-accent-green/10 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-accent-green/20 transition-all">
                  <Landmark className="text-accent-green" size={48} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Indústrias</h3>
                <p className="text-gray-400 leading-relaxed">Produtos químicos de alto impacto para remoção técnica de resíduos industriais pesados.</p>
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-12 bg-zinc-900 rounded-[2.5rem] border border-white/10 shadow-2xl hover:shadow-[0_0_40px_rgba(151,215,0,0.2)] hover:border-accent-green/50 transition-all group flex flex-col items-center text-center"
             >
                <div className="p-6 bg-accent-green/10 rounded-3xl mb-8 group-hover:scale-110 group-hover:bg-accent-green/20 transition-all">
                  <ShieldCheck className="text-accent-green" size={48} />
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">Setor Público</h3>
                <p className="text-gray-400 leading-relaxed">Segurança biológica e sanitária com registros rigorosos e certificações de excelência.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41]">
        {/* Decorative light effects */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-green/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-green font-black tracking-[0.5em] uppercase text-xs mb-6 block">Vamos Transformar Seu Negócio</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-[1.1]">
              PRONTO PARA ELEVAR O PADRÃO <br className="hidden md:block" />
              DA SUA <span className="text-accent-green italic underline decoration-white/20 underline-offset-8">LIMPEZA?</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contato" 
                className="group relative px-12 py-7 bg-accent-green text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all w-full sm:w-auto shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Solicitar Orçamento
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <Link 
                to="/catalogo-digital" 
                className="px-12 py-7 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all w-full sm:w-auto backdrop-blur-md"
              >
                Ver Catálogo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
