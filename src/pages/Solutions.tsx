import React from 'react';
import { Focus, Clock, Battery, Leaf, CheckCircle2, ArrowUpRight, Zap, Target, Search } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const solutionImages = Array.from({ length: 19 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, '0');
  return `http://www.agencianest.com.br/renova2026/solucoes/segmentos-${num}.jpg`;
});

const industryTags = [
  "Condomínios", "Hospitais", "Farmácias", "Laboratórios", "Escritórios", 
  "Transportadoras", "Shoppings Centers", "Indústrias", "Cozinhas Industriais", 
  "Postos de Combustíveis", "Hotelaria", "Lavanderias", "Academias", 
  "Supermercados", "Oficinas", "Igrejas", "Salões de Beleza", 
  "Escolas e Faculdades", "Bares e Restaurantes", "Lanchonetes e Panificadoras"
];

export default function Solutions() {
  return (
    <div className="pt-32 bg-white selection:bg-accent-green selection:text-black min-h-screen">
      <SEO 
        title="Soluções em Limpeza Profissional para Condomínios e Empresas"
        description="Fornecedor de produtos de limpeza industrial e profissional. Soluções para condomínios, indústrias e empresas com foco em rendimento e economia."
      />
      {/* Hero Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-green font-black text-xs tracking-[0.4em] uppercase mb-8 block">Inteligência em Limpeza Profissional</span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter leading-[1.1]">
              Soluções ideais de limpeza <br />
              <span className="text-accent-green text-4xl md:text-6xl">para condomínios e indústrias.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-xl">
              Produtos concentrados que garantem a limpeza profissional do seu negócio com o melhor custo-benefício do mercado.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12">
               {industryTags.slice(0, 5).map(tag => (
                 <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-xs font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
               ))}
               <span className="px-4 py-2 bg-accent-green text-black rounded-full text-xs font-black uppercase tracking-widest">+15 Segmentos</span>
            </div>
          </motion.div>


          <div className="relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src={solutionImages[2]} alt="Limpeza de alta performance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-green/20 blur-3xl rounded-full" />
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-green blur-3xl rounded-full opacity-30" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-accent-green">
                <Focus size={32} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Qualidade Absoluta</h3>
              <p className="text-gray-200 font-medium text-sm leading-relaxed">Foco inabalável em fórmulas que realmente removem a sujeira na primeira aplicação.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-accent-green">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Otimização de Tempo</h3>
              <p className="text-gray-200 font-medium text-sm leading-relaxed">Processos desenhados para que sua equipe gaste menos tempo esfregando e mais tempo produzindo.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-accent-green">
                <Battery size={32} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Custo-Benefício</h3>
              <p className="text-gray-200 font-medium text-sm leading-relaxed">Concentração técnica que permite diluições extremas sem perder a eficácia de limpeza.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-accent-green">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white">Meio Ambiente</h3>
              <p className="text-gray-200 font-medium text-sm leading-relaxed">Comprometimento com soluções biodegradáveis e redução drástica no uso de descartáveis plásticos.</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#97D700 0.5px, transparent 0.5px), linear-gradient(90deg, #97D700 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
      </section>

      {/* Main Narrative Section */}
      <section className="py-32 bg-gray-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-12">
               <div>
                 <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
                   ATENDIMENTO <span className="text-accent-green italic">CUSTOMIZADO</span> <br /> PARA TODO LUGAR.
                 </h2>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                   Para todas essas demandas temos produtos específicos, de acordo com as sujidades de cada ambiente. Priorizamos o atendimento exclusivo porque sabemos que o desafio de um hospital é completamente diferente do desafio de uma oficina ou cozinha industrial.
                 </p>
                 <div className="space-y-4">
                    {[
                      "Entrega rápida e pontual",
                      "Treinamento técnico de diluição",
                      "Consultoria de redução de desperdício",
                      "Protocolos específicos por setor"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <CheckCircle2 size={24} className="text-accent-green shrink-0" />
                        <span className="text-gray-900 font-bold">{item}</span>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center justify-between group">
                  <div>
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">Pronto para começar?</p>
                    <h4 className="text-2xl font-black text-gray-900">Peça seu catálogo agora.</h4>
                  </div>
                  <button className="w-16 h-16 bg-accent-green rounded-2xl flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <ArrowUpRight size={32} />
                  </button>
               </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
               <div className="space-y-6">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square scale-95 origin-right">
                    <img src={solutionImages[18]} alt="Cenas da operação" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4]">
                    <img src={solutionImages[17]} alt="Cenas da operação" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
               </div>
               <div className="space-y-6 pt-12">
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[3/4]">
                    <img src={solutionImages[16]} alt="Cenas da operação" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square scale-110 origin-left">
                    <img src={solutionImages[15]} alt="Cenas da operação" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mastery Gallery Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <span className="text-accent-green font-black text-xs tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-2">Segmentos Atendidos</span>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                NOSSA <span className="text-accent-green">PRESENÇA</span> <br /> EM CADA MERCADO.
              </h3>
            </div>
            <p className="text-gray-500 font-medium max-w-sm mb-2 text-right">Uma visão geral de como nossas soluções se comportam em diferentes ambientes e contextos reais.</p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {solutionImages.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative rounded-[2rem] overflow-hidden shadow-lg group border border-gray-100"
              >
                <img 
                  src={src} 
                  alt={`Segmento de Solução ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex items-center justify-between">
                      <span className="text-white font-black uppercase tracking-widest text-[10px]">Segmento #{index + 1}</span>
                      <Search size={14} className="text-accent-green" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry List Grid */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {industryTags.map((tag, i) => (
                <div key={i} className="flex items-center gap-3 p-6 bg-white rounded-3xl group hover:bg-accent-green transition-all duration-300">
                   <div className="w-8 h-8 rounded-xl bg-gray-50 flex items-center justify-center text-accent-green group-hover:bg-black group-hover:text-accent-green">
                      <Target size={14} />
                   </div>
                   <span className="text-sm font-bold text-gray-700 group-hover:text-black">{tag}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
           <Zap size={64} className="text-accent-green mx-auto mb-10" />
           <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none text-white">VAMOS <span className="text-accent-green">REVOLUCIONAR</span> <br /> SUA LIMPEZA?</h2>
           <p className="text-xl text-gray-200 mb-12 font-medium">Temos o produto ideal para cada caso e com entrega rápida. Eficiência comprovada e compromisso ambiental.</p>
           
           <button 
             onClick={() => window.location.href = '/contato'}
             className="px-12 py-6 bg-accent-green text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-[0_0_50px_rgba(151,215,0,0.3)]"
           >
             Solicitar Diagnóstico Técnico
           </button>
        </div>
      </section>
    </div>
  );
}

