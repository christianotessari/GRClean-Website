import React from 'react';
import { Play, Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const videoTestimonials = [
  "wzcBtPfFPX0",
  "Q79Camhh1_U",
  "3o6LwfWa28Y",
  "-9n8GX3LsMg",
  "zrInFqZTAbU",
  "RHEONrNkKFY",
  "L68T7IS67gw",
  "oj3UoOH7WsM",
  "SzPu1SOxeN4",
  "A0wM5sPop-A",
  "LgGvD6pCj2M",
  "g-KKgb7Puz4"
];

export default function Testimonials() {
  return (
    <div className="pt-32 bg-white selection:bg-accent-green selection:text-black">
      {/* Hero Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-green font-black text-xs tracking-[0.4em] uppercase mb-8 block">Voz do Cliente</span>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.85]">
            HISTÓRIAS DE <br />
            <span className="text-accent-green">SATISFAÇÃO.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto mb-16">
            Não basta oferecer produtos, é preciso transformar realidades. Veja como a Pontual Clean e a Renova Clean estão elevando o nível de limpeza e profissionalismo no dia a dia de nossos parceiros.
          </p>
        </motion.div>
        
        {/* Stat highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto border-y border-gray-100 py-12 mb-24">
          <div className="text-center">
            <h4 className="text-4xl font-black text-gray-900 mb-2">+1000</h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Clientes Atendidos</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-gray-900 mb-2">98%</h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Satisfação</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-gray-900 mb-2">300+</h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Produtos Exclusivos</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-gray-900 mb-2">24h</h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Entrega Rápida</p>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="pb-32 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
           <div className="absolute top-20 -left-20 w-96 h-96 bg-accent-green rounded-full blur-3xl" />
           <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-green rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center text-accent-green">
                  <Play size={24} fill="currentColor" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Depoimentos em Vídeo</h2>
              </div>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Nossos clientes compartilham suas experiências reais com o uso de nossos químicos concentrados e equipamentos profissionais.
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent-green/10 text-accent-green rounded-full border border-accent-green/20">
               <Star size={16} fill="currentColor" />
               <span className="text-sm font-black uppercase tracking-widest leading-none pt-0.5">Reviews 100% Reais</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {videoTestimonials.map((videoId, index) => (
              <motion.div
                key={videoId}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border-4 border-white transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-accent-green/20 group-hover:border-accent-green">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?loop=1&modestbranding=1&rel=0`}
                    title={`Depoimento ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-6 flex items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                   <CheckCircle2 size={18} className="text-accent-green" />
                   <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Parceiro Pontual Clean</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-32 bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <MessageSquareQuote size={64} className="text-accent-green/30 mx-auto mb-10" />
           <h3 className="text-4xl md:text-5xl font-black italic tracking-tight leading-tight mb-12 text-white">
             "A limpeza profissional transcende a estética; ela trata da saúde e do bem-estar de quem habita os espaços que cuidamos."
           </h3>
           <div className="flex items-center justify-center gap-6">
              <div className="h-px w-12 bg-white/20" />
              <p className="text-accent-green font-black uppercase tracking-widest text-xs">Pontual Clean & Renova Clean</p>
              <div className="h-px w-12 bg-white/20" />
           </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-32 bg-accent-green text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">FAÇA PARTE DE <br /> NOSSOS CASES.</h2>
           <p className="text-xl font-bold mb-12 max-w-2xl mx-auto opacity-80">
             Transforme a higienização da sua empresa hoje mesmo com quem é referência no mercado profissional.
           </p>
           <button 
             onClick={() => window.location.href = '/contato'}
             className="px-12 py-6 bg-black text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
             Falar com um Consultor
           </button>
        </div>
      </section>
    </div>
  );
}

