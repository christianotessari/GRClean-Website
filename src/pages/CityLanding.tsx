import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

interface CityLandingProps {
  city: string;
  state: string;
  description: string;
}

export default function CityLanding({ city, state, description }: CityLandingProps) {
  const keywords = [
    `Distribuidora de produtos de limpeza em ${city}`,
    `Produtos de limpeza profissional ${city}`,
    `Fornecedor de produtos de limpeza para condomínios em ${city}`,
    "Produtos concentrados de limpeza",
    `Loja de produtos de limpeza ${city}`
  ];

  return (
    <div className="pt-32 bg-white min-h-screen">
      <SEO 
        title={`Produtos de Limpeza em ${city} | Grupo Renova Clean`}
        description={`Procurando distribuidora de produtos de limpeza em ${city}? O Grupo Renova Clean oferece soluções profissionais para condomínios e indústrias em ${city} e região.`}
      />

      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 text-accent-green mb-6">
              <MapPin size={20} />
              <span className="font-black text-xs uppercase tracking-[0.3em]">Atendimento em {city} - {state}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">
              Sua Melhor <span className="text-accent-green">Distribuidora</span> de Produtos de Limpeza em {city}.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {description}
            </p>
            <div className="flex gap-4">
              <Link to="/contato" className="px-8 py-4 bg-accent-green text-black font-black uppercase tracking-widest rounded-xl hover:scale-105 transition-all">
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="http://www.agencianest.com.br/renova2026/solucoes/segmentos-10.jpg" alt={`Pontual Clean em ${city}`} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Local Keywords Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-gray-900 mb-12 uppercase tracking-tight">O que oferecemos em {city}:</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keywords.map((kw, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl flex items-start gap-4">
              <CheckCircle2 className="text-accent-green shrink-0" size={24} />
              <span className="text-gray-800 font-bold">{kw}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-green/10 blur-[100px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">Entrega Rápida em <br /> <span className="text-accent-green">{city} e Região Metropolitana</span></h2>
          <p className="text-lg text-gray-400 mb-12">Atendimento especializado para condomínios, indústrias e empresas. Logística própria garantindo pontualidade.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contato" className="flex items-center gap-3 px-10 py-5 bg-accent-green text-black rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all">
              <MessageSquare size={20} />
              Falar com Consultor
            </Link>
            <a href="tel:+5541999999999" className="flex items-center gap-3 px-10 py-5 border-2 border-white/20 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              <Phone size={20} />
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
