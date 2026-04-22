/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import SocialResponsibility from './pages/SocialResponsibility';
import Testimonials from './pages/Testimonials';
import Solutions from './pages/Solutions';
import DigitalCatalog from './pages/DigitalCatalog';
import CityLanding from './pages/CityLanding';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalogo" element={<Catalog />} />
              <Route path="/produtos/:id" element={<ProductDetail />} />
              <Route path="/categorias/:categorySlug" element={<Catalog />} />
              <Route path="/quem-somos" element={<About />} />
              <Route path="/catalogo-digital" element={<DigitalCatalog />} />
              <Route path="/responsabilidade-social" element={<SocialResponsibility />} />
              <Route path="/depoimentos" element={<Testimonials />} />
              <Route path="/solucoes" element={<Solutions />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
              
              {/* Local SEO Pages */}
              <Route 
                path="/onde-estamos/produtos-de-limpeza-em-curitiba" 
                element={<CityLanding city="Curitiba" state="PR" description="Líder na distribuição de produtos de limpeza profissional e concentrados em Curitiba. Atendemos condomínios e indústrias com logística rápida e eficiente." />} 
              />
              <Route 
                path="/onde-estamos/produtos-de-limpeza-em-florianopolis" 
                element={<CityLanding city="Florianópolis" state="SC" description="Sua fonte confiável para produtos de limpeza profissional em Florianópolis. Soluções em atacado para empresas e setor hoteleiro." />} 
              />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}
