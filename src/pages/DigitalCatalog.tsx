import React from 'react';
import { BookOpen, Download, Share2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DigitalCatalog() {
  return (
    <div className="pt-32 bg-white selection:bg-accent-green selection:text-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-green font-black text-xs tracking-[0.3em] uppercase mb-6 block">Material Exclusivo</span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
            NOSSO <span className="text-accent-green">CATÁLOGO</span> <br /> INTERATIVO.
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto mb-12">
            Explore nossa linha completa de produtos profissionais de forma imersiva e detalhada. Folheie as páginas e descubra a solução ideal para seu negócio.
          </p>
        </motion.div>
      </section>

      {/* Flipbook Section */}
      <section className="pb-32 px-6">
        <div className="max-w-[1240px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-900 rounded-[3rem] p-4 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.2)] relative overflow-hidden"
          >
            {/* Glossy overlay effect */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative aspect-[1200/800] w-full bg-white rounded-[2rem] overflow-hidden">
               <iframe 
                 className="w-full h-full"
                 src="https://online.fliphtml5.com/vibti/ywkt/" 
                 frameBorder="0" 
                 scrolling="no" 
                 seamless={true}
                 title="Catálogo Digital Pontual Clean"
               />
            </div>

            {/* Controls/Info Bar */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-green/20 flex items-center justify-center text-accent-green">
                    <BookOpen size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold leading-none mb-1">Catálogo Oficial 2024</p>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">Renova Clean & Pontual</p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-bold transition-all">
                    <Share2 size={18} />
                    Compartilhar
                  </button>
                  <a 
                    href="https://online.fliphtml5.com/vibti/ywkt/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-green text-black rounded-xl text-sm font-black uppercase tracking-widest transition-all hover:scale-105"
                  >
                    <Download size={18} />
                    Baixar PDF
                  </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Context/Benefit Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
               <h4 className="text-xl font-black text-gray-900 mb-4">Informação Técnica</h4>
               <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 Consulte diluições, aplicações recomendadas e especificações de segurança de cada produto direto no catálogo.
               </p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
               <h4 className="text-xl font-black text-gray-900 mb-4">Linha Completa</h4>
               <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 Desde químicos concentrados biodegradáveis até equipamentos profissionais de última geração.
               </p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
               <h4 className="text-xl font-black text-gray-900 mb-4">Sempre Atualizado</h4>
               <p className="text-gray-600 font-medium text-sm leading-relaxed">
                 Nossa versão digital é atualizada mensalmente com novos lançamentos e tecnologias de limpeza.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">DÚVIDAS SOBRE <br /> <span className="text-accent-green">DILUIÇÃO?</span></h2>
           <p className="text-xl text-gray-200 mb-12 font-medium">Nossa equipe técnica está pronta para realizar um treinamento exclusivo para sua equipe operacional.</p>
           
           <button 
             onClick={() => window.location.href = '/contato'}
             className="flex items-center gap-4 mx-auto px-12 py-6 bg-accent-green text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
             Falar com um Especialista
             <ArrowRight size={20} />
           </button>
        </div>
      </section>
    </div>
  );
}
