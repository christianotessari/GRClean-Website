import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <img 
                src="http://www.agencianest.com.br/renova2026/logopontual.png?v=3" 
                alt="Pontual Clean Logo" 
                className="h-12 w-auto object-contain self-start"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Distribuição premium de produtos de limpeza profissional e equipamentos. Qualidade superior para condomínios e empresas.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/gruporenovaclean" target="_blank" rel="noopener noreferrer" className="p-2 bg-white shadow-sm border border-gray-100 rounded-full text-gray-500 hover:text-accent-green transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/PontualCleanCWB/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white shadow-sm border border-gray-100 rounded-full text-gray-500 hover:text-accent-green transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-accent-green transition-colors">Home</Link></li>
              <li>
                <Link 
                  to="/catalogo-digital" 
                  className="text-gray-600 hover:text-accent-green transition-colors underline decoration-accent-green/30 underline-offset-4"
                >
                  Catálogo Digital
                </Link>
              </li>
              <li><Link to="/quem-somos" className="text-gray-600 hover:text-accent-green transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contato" className="text-gray-600 hover:text-accent-green transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Categorias</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/categorias/limpeza-pesada" className="text-gray-600 hover:text-accent-green transition-colors">Limpeza Pesada</Link></li>
              <li><Link to="/categorias/aromatizantes-ambientes" className="text-gray-600 hover:text-accent-green transition-colors">Aromatizantes</Link></li>
              <li><Link to="/categorias/utilitarios-equipamentos" className="text-gray-600 hover:text-accent-green transition-colors">Equipamentos</Link></li>
              <li><Link to="/catalogo?brand=renova" className="text-gray-600 hover:text-accent-green transition-colors">Linha Renova Clean</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Localidades</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/onde-estamos/produtos-de-limpeza-em-curitiba" className="text-gray-600 hover:text-accent-green transition-colors">Curitiba - PR</Link></li>
              <li><Link to="/onde-estamos/produtos-de-limpeza-em-florianopolis" className="text-gray-600 hover:text-accent-green transition-colors">Florianópolis - SC</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-gray-600">
                <MapPin size={18} className="text-accent-green shrink-0" />
                <span>R. Piauí, 580 - Rebouças<br />Curitiba - PR</span>
              </li>
              <li className="flex flex-col space-y-2 ml-7">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={14} className="text-accent-green" />
                  <span className="font-bold text-xs">Curitiba:</span>
                  <span className="text-xs">(41) 3156-3343</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={14} className="text-accent-green" />
                  <span className="font-bold text-xs">B. Camboriú:</span>
                  <span className="text-xs">(47) 3311-1203</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={14} className="text-accent-green" />
                  <span className="font-bold text-xs">Florianópolis:</span>
                  <span className="text-xs">(48) 3375-8625</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} className="text-accent-green shrink-0" />
                <span>contato@pontualclean.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0 text-center md:text-left">
          <p>© 2026 Grupo Renova Clean. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
