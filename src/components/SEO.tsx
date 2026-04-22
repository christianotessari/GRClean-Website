import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: object;
}

export default function SEO({ 
  title = "Grupo Renova Clean - Distribuidora de Produtos de limpeza", 
  description = "Distribuidora líder de produtos de limpeza profissional e concentrados. Atendemos condomínios, indústrias e empresas em Curitiba e Florianópolis.",
  canonical = "https://www.pontualclean.com.br",
  schema
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Grupo Renova Clean" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Local Business Schema */}
      {schema ? (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ) : (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Grupo Renova Clean",
            "image": "https://www.agencianest.com.br/renova2026/logo.png",
            "@id": "https://www.pontualclean.com.br",
            "url": "https://www.pontualclean.com.br",
            "telephone": "+5541999999999",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Exemplo, 123",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "80000-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -25.4284,
              "longitude": -49.2733
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/pontualclean",
              "https://www.instagram.com/pontualclean"
            ]
          })}
        </script>
      )}
    </Helmet>
  );
}
