import React from 'react';
import { Heart, ArrowUpRight, GraduationCap, HandHelping, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const socialImages = [
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/1.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/2.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/3.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/4.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/5.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/6.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/7.jpeg",
  "http://www.agencianest.com.br/renova2026/responsabilidadesocial/8.jpg"
];

export default function SocialResponsibility() {
  return (
    <div className="pt-32 bg-white selection:bg-accent-green selection:text-black">
      {/* Hero Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <span className="text-accent-green font-black text-xs tracking-[0.4em] uppercase mb-8 block">Compromisso Social</span>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.85]">
            Devolvendo para <br />
            <span className="text-accent-green">a sociedade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium max-w-3xl">
            Empresa de verdade é aquela que devolve um pouco para a sociedade e nada mais justo em tempos tão delicados.
          </p>
        </div>
      </section>

      {/* Narrative Section - Focus on Afece */}
      <section className="py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center text-accent-green">
                  <HandHelping size={32} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">Parceria com a AFECE</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                  A Pontual Clean contribuiu com produtos de limpeza e higiene para a <span className="text-black font-black">Afece</span>, que há mais de 50 anos auxiliam crianças e adultos com deficiência intelectual.
                </p>
                <p>
                  O objetivo é dar melhores condições para que elas possam viver e conviver com as limitações que a deficiência lhes impõe, proporcionando um ambiente digno e higienizado.
                </p>
              </div>

              <div className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                <div className="shrink-0 w-12 h-12 bg-accent-green/10 rounded-2xl flex items-center justify-center text-accent-green">
                  <GraduationCap size={24} />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-snug">
                  Nossa equipe técnica realizou uma palestra sobre a melhor utilização dos produtos doados para maximizar a higiene da instituição.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src={socialImages[0]} 
                  alt="Ação Social Pontual Clean" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-green/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent-green blur-3xl rounded-full opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h3 className="text-4xl font-black text-gray-900 tracking-tight mb-4">Registros da nossa <span className="text-accent-green">Ação</span></h3>
            <p className="text-gray-500 font-medium">Momentos da entrega e da palestra técnica na instituição.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {socialImages.slice(1).map((src, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <img 
                  src={src} 
                  alt={`Ação Social Registro ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Support Afece */}
      <section className="py-32 bg-gradient-to-br from-blue-950 via-emerald-950 to-[#004B41] text-white relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Heart size={64} className="text-accent-green mx-auto mb-10 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter leading-tight text-white">Faça a diferença você também.</h2>
            <p className="text-xl text-gray-200 mb-12 font-medium">Conheça um pouco mais da Afece no site e descubra como ajudar esta belíssima causa.</p>
            
            <a 
              href="https://afece.org.br/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-accent-green text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all group shadow-2xl"
            >
              <Globe size={20} />
              Visitar site da AFECE
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
         </div>
         {/* Decorative grid */}
         <div className="absolute inset-0 opacity-5 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #97D700 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </section>
    </div>
  );
}

