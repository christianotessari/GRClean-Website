import { ShieldCheck, Target, Eye, Star, Factory, Package, Truck, Leaf, CheckCircle2 } from 'lucide-react';
import React from 'react';

export default function About() {
  const values = [
    "Agilidade", "Atenção", "Inovação", "Praticidade", "Prazo", "Excelência", "Qualidade"
  ];

  return (
    <div className="pt-32 bg-white selection:bg-accent-green selection:text-black">
      {/* Hero Section - Split Layout Inspiration */}
      <section className="px-6 max-w-7xl mx-auto py-12 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-accent-green font-black text-xs tracking-[0.4em] uppercase mb-8 block text-center lg:text-left">Nossa Essência</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.85] text-center lg:text-left">
              FOCO EM <br />
              <span className="text-accent-green">LIMPEZA</span> <br />
              PROFISSIONAL.
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium text-center lg:text-left">
              <p>
                A Pontual Clean surgiu da necessidade de o mercado ter uma empresa focada em limpeza profissional com tratamento diferenciado.
              </p>
              <p className="text-gray-400">
                E é essa nossa missão: oferecer produtos de qualidade com atendimento personalizado e especializado.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl skew-x-[-1deg] md:skew-x-[-2deg]">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambiente Profissional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-5 bg-black text-white p-12 rounded-[3rem] shadow-2xl hidden xl:block max-w-[280px] transform rotate-3">
               <Package className="text-accent-green mb-6" size={48} />
               <h4 className="font-black text-2xl mb-2 italic">Mix Completo</h4>
               <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Equipamentos, Químicos e Descartáveis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 md:py-32 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-green/5 translate-x-1/2 -skew-x-12" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12">
            <div className="grid md:grid-cols-12 gap-8 items-start">
               <div className="md:col-span-1 hidden md:block">
                  <div className="h-px bg-gray-300 w-full mt-4" />
               </div>
               <div className="md:col-span-11">
                  <p className="text-xl md:text-2xl text-gray-800 font-bold leading-relaxed mb-12 text-center md:text-left">
                    Trabalhamos com produtos e equipamentos de limpeza, produtos químicos concentrados e descartáveis. Além de produtos essenciais, oferecemos equipamentos de segurança como luvas, máscaras e toucas.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                    <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                      Oferecemos também carros funcionais, balde doblô, mop pó, mop úmido, suporte LT, aplicador de cera, rodo limpa vidros, mop rotatório, rodo para manopla, entre outros. Atendemos condomínios, clínicas, hospitais, escolas, indústrias, postos de combustível e escritórios.
                    </p>
                    <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
                      Um dos diferenciais da Pontual Clean é a venda exclusiva dos químicos concentrados da marca <span className="text-black font-black">Renova Clean</span>, que industrializa mais de 300 itens, abrangendo desde limpeza geral até ambientes hospitalares e tratamento de pisos.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Environment */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-video lg:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1473081556163-2a17de81fc97?q=80&w=1974&auto=format&fit=crop" 
                  alt="Sustentabilidade" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-10 -left-10 bg-accent-green p-8 rounded-3xl shadow-xl hidden lg:block">
                 <Leaf size={40} className="text-black" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight text-center lg:text-left uppercase">TECNOLOGIA E <br /> <span className="text-accent-green">SUSTENTABILIDADE.</span></h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8 text-center lg:text-left">
                A Renova Clean utiliza tecnologias nacionais e internacionais, com formulações e insumos que contribuem para o menor impacto ambiental. Nossa preocupação é oferecer produtos eficientes e comprometidos com o meio ambiente.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <div className="shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Truck size={24} className="text-accent-green" />
                </div>
                <p className="text-sm font-bold text-gray-900 leading-tight text-center sm:text-left">
                  Atendimento exclusivo, soluções personalizadas e entrega rápida para cada caso de limpeza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Container */}
      <section className="py-16 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #97D700 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-12 md:space-y-16">
              <div className="group">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent-green flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent-green">Missão</h3>
                </div>
                <p className="text-xl md:text-3xl font-black leading-tight tracking-tight text-center md:text-left">
                  Proporcionar recursos facilitadores para o cotidiano, criando uma atmosfera positiva e melhorando a vida de quem usa nossos produtos.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-2xl bg-accent-green flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent-green">Visão</h3>
                </div>
                <p className="text-xl md:text-3xl font-black leading-tight tracking-tight text-center md:text-left">
                  Oferecer soluções práticas e eficientes preservando o meio ambiente e a qualidade de vida, otimizando tempo e atividades.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                <div className="w-12 h-12 rounded-2xl bg-accent-green flex items-center justify-center text-black">
                  <Star size={24} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-accent-green">Valores</h3>
              </div>
              <div className="grid gap-4">
                {values.map((val, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all group">
                    <span className="text-lg md:text-xl font-bold tracking-tight">{val}</span>
                    <CheckCircle2 size={24} className="text-accent-green opacity-0 md:group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer Action */}
      <section className="py-20 md:py-32 bg-accent-green text-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 uppercase">PRONTO PARA A <br /> MUDANÇA?</h2>
           <button 
             onClick={() => window.location.href = '/contato'}
             className="px-10 py-5 md:px-12 md:py-6 bg-black text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-2xl text-sm md:text-base"
           >
             Solicitar Consultoria Técnica
           </button>
        </div>
      </section>
    </div>
  );
}
