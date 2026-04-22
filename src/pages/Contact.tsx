import { Mail, Phone, MapPin, Instagram, Facebook, Clock, MessageCircle } from 'lucide-react';
import React from 'react';

const sedes = [
  {
    cidade: "Distribuidora Curitiba",
    horario: "De segunda a sexta-feira, das 8h às 17h45.",
    endereco: "Rua Piauí, 580 Rebouças - Curitiba/PR",
    telefone: "(41) 3156-3343",
    whatsapp: "554131563343",
    mapUrl: "https://maps.google.com/maps?q=Rua%20Piau%C3%AD%2C%20580%20Rebou%C3%A7as%20Curitiba&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    cidade: "Distribuidora Balneário Camboriú",
    horario: "De segunda a sexta-feira, das 8h às 17h45.",
    endereco: "Rua 904, nº 1329; Centro – Balneario Camboriu – SC",
    telefone: "(47) 3311-1203",
    whatsapp: "554733111203",
    mapUrl: "https://maps.google.com/maps?q=Rua%20904%2C%201329%20Centro%20Balneario%20Camboriu&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },
  {
    cidade: "Distribuidora Florianópolis – SC",
    horario: "De segunda a sexta-feira, das 8h às 17h45h.",
    endereco: "Rua José João de Andrade, 2325. Real Parque, São José/SC",
    telefone: "(48) 3375-8625",
    whatsapp: "554833758625",
    mapUrl: "https://maps.google.com/maps?q=Rua%20Jos%C3%A9%20Jo%C3%A3o%20de%20Andrade%2C%202325%20Real%20Parque%20S%C3%A3o%20Jos%C3%A9&t=&z=15&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Contact() {
  const handleWhatsApp = (whatsapp: string) => {
    const text = "Olá! Gostaria de solicitar um orçamento.";
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">
            NOSSAS <span className="text-accent-green">SEDES.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
            Estamos presentes em pontos estratégicos para garantir a melhor logística e atendimento de toda a região sul do Brasil.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a 
              href="https://www.instagram.com/gruporenovaclean" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-gray-900 transition-colors group"
            >
              <Instagram size={24} className="group-hover:text-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Instagram</span>
            </a>
            <a 
              href="https://www.facebook.com/PontualCleanCWB/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-gray-900 transition-colors group"
            >
              <Facebook size={24} className="group-hover:text-accent-green" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Facebook</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-400">
              <Mail size={24} className="text-accent-green shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 overflow-hidden text-ellipsis">contato@pontualclean.com.br</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sedes.map((sede, index) => (
            <div key={index} className="bg-gray-50 rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-xl flex flex-col h-full hover:shadow-2xl hover:shadow-accent-green/5 transition-all">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight">
                  {sede.cidade}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Clock size={20} className="text-accent-green shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Horário</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{sede.horario}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin size={20} className="text-accent-green shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Endereço</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{sede.endereco}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone size={20} className="text-accent-green shrink-0 mt-1" />
                    <div>
                      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Telefone</p>
                      <p className="text-gray-600 font-medium leading-relaxed">{sede.telefone}</p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-8 rounded-2xl overflow-hidden border border-gray-100 h-48 shadow-inner bg-gray-200">
                  <iframe 
                    src={sede.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer"
                    title={`Mapa de ${sede.cidade}`}
                  ></iframe>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <button 
                  onClick={() => handleWhatsApp(sede.whatsapp)}
                  className="w-full py-5 bg-accent-green hover:bg-black hover:text-white text-black font-black uppercase tracking-widest rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-accent-green/10 flex items-center justify-center space-x-3"
                >
                  <MessageCircle size={20} />
                  <span>Pedir Orçamento</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
