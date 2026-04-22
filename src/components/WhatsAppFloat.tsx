import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const whatsAppContacts = [
  {
    city: "Curitiba",
    number: "554131563343",
    label: "(41) 3156-3343"
  },
  {
    city: "Balneário Camboriú",
    number: "554733111203",
    label: "(47) 3311-1203"
  },
  {
    city: "Florianópolis",
    number: "554833758625",
    label: "(48) 3375-8625"
  }
];

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden w-72"
          >
            <div className="bg-accent-green p-6 text-black">
              <h3 className="font-black text-lg leading-tight uppercase tracking-tight">Atendimento WhatsApp</h3>
              <p className="text-xs font-bold opacity-70 uppercase tracking-widest mt-1">Escolha sua região</p>
            </div>
            
            <div className="p-4 space-y-2 bg-white">
              {whatsAppContacts.map((contact, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${contact.number}?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-black hover:text-white transition-all group border border-transparent hover:border-black"
                >
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 mb-0.5">{contact.city}</p>
                    <p className="font-bold text-sm">{contact.label}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-accent-green flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    <ChevronRight size={16} />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50 text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Atendimento Comercial</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-black text-white' : 'bg-accent-green text-black'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-black font-black text-[10px] uppercase tracking-widest shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 md:block hidden">
            Fale Conosco
          </span>
        )}
      </motion.button>
    </div>
  );
}
