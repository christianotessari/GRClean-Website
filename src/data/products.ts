import { Product, Category } from '../types';

const BASE_IMAGE_URL = 'http://www.agencianest.com.br/renova2026';

export const categories: Category[] = [
  {
    id: "aromatizantes",
    name: "Aromatizantes",
    slug: "aromatizantes-ambientes",
    description: "Fragrâncias exclusivas para criar ambientes marcantes e agradáveis.",
    image: `${BASE_IMAGE_URL}/aromatizantes-ambientes/header.jpg`
  },
  {
    id: "limpeza-geral",
    name: "Limpeza em Geral",
    slug: "limpeza-geral",
    description: "Soluções versáteis para o dia a dia de empresas e condomínios.",
    image: `${BASE_IMAGE_URL}/limpeza-geral/header.jpg`
  },
  {
    id: "limpeza-pesada",
    name: "Limpeza Pesada",
    slug: "limpeza-pesada",
    description: "Produtos de alta concentração para encarar as sujeiras mais difíceis.",
    image: `${BASE_IMAGE_URL}/limpeza-pesada/header.jpg`
  },
  {
    id: "lavanderia",
    name: "Lavanderia",
    slug: "lavanderia",
    description: "Cuidado profissional para tecidos com eficiência e economia.",
    image: `${BASE_IMAGE_URL}/lavanderia/header.jpg`
  },
  {
    id: "tratamento-piso",
    name: "Tratamento de Piso",
    slug: "tratamento-piso",
    description: "Proteção e brilho que preservam e valorizam seus revestimentos.",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/header.jpg`
  },
  {
    id: "material-limpeza-quimicos",
    name: "Produtos Químicos",
    slug: "material-limpeza-quimicos",
    description: "Componentes puros e misturas técnicas para diversas finalidades.",
    image: `${BASE_IMAGE_URL}/Quimicosconcentrados/header.jpg`
  },
  {
    id: "material-limpeza-vidros-moveis",
    name: "Vidros e Móveis",
    slug: "material-limpeza-vidros-moveis",
    description: "Cuidado específico para superfícies delicadas e acabamentos finos.",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/header.jpg`
  },
  {
    id: "material-limpeza-saboes-sapolios",
    name: "Sabões e Sapólios",
    slug: "material-limpeza-saboes-sapolios",
    description: "Limpeza clássica e eficiente para cozinhas e áreas de serviço.",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/header.jpg`
  },
  {
    id: "higiene-alcool-gel",
    name: "Higiene Pessoal - Álcool e Gel",
    slug: "higiene-alcool-gel",
    description: "Soluções para higienização e proteção das mãos.",
    image: `${BASE_IMAGE_URL}/Higienepessoal/header.jpg`
  },
  {
    id: "higiene-sabonetes",
    name: "Higiene Pessoal - Sabonetes",
    slug: "higiene-sabonetes",
    description: "Sabonetes líquidos e em barra para o cuidado pessoal.",
    image: `${BASE_IMAGE_URL}/Higienepessoal/header.jpg`
  },
  {
    id: "papel-higienico",
    name: "Papel Higiênico",
    slug: "papel-higienico",
    description: "Qualidade e suavidade em papel higiênico profissional.",
    image: `${BASE_IMAGE_URL}/Descartaveis/header.jpg`
  },
  {
    id: "papel-toalha",
    name: "Papel Toalha",
    slug: "papel-toalha",
    description: "Papéis de alta absorção para secagem eficiente e higiênica.",
    image: `${BASE_IMAGE_URL}/Descartaveis/header.jpg`
  },
  {
    id: "utilitarios-pas-vassouras",
    name: "Utilitários - Pás e Vassouras",
    slug: "utilitarios-pas-vassouras",
    description: "Ferramentas essenciais para varrição e coleta de resíduos.",
    image: `${BASE_IMAGE_URL}/Utilitarios/header.jpg`
  },
  {
    id: "utilitarios-baldes-esponjas",
    name: "Utilitários - Baldes e Esponjas",
    slug: "utilitarios-baldes-esponjas",
    description: "Insumos para aplicação e limpeza de superfícies.",
    image: `${BASE_IMAGE_URL}/Utilitarios/header.jpg`
  },
  {
    id: "utilitarios-ferramentas",
    name: "Utilitários - Ferramentas",
    slug: "utilitarios-ferramentas",
    description: "Acessórios e utensílios profissionais complementares.",
    image: `${BASE_IMAGE_URL}/Utilitarios/header.jpg`
  },
  {
    id: "utilitarios-equipamentos",
    name: "Equipamentos",
    slug: "utilitarios-equipamentos",
    description: "Maquinários e carrinhos para alta produtividade.",
    image: `${BASE_IMAGE_URL}/Equipamentos/header.jpg`
  },
  {
    id: "lixeiras-coleta",
    name: "Lixeiras e Coleta",
    slug: "lixeiras-coleta",
    description: "Gestão inteligente de resíduos e coleta seletiva.",
    image: `${BASE_IMAGE_URL}/Lixeiras/header.jpg`
  },
  {
    id: "dispensers-distribuidores",
    name: "Dispensers",
    slug: "dispensers-distribuidores",
    description: "Sistemas de dosagem organizados e econômicos.",
    image: `${BASE_IMAGE_URL}/Dispenser/header.jpg`
  },
  {
    id: "descartaveis-epis",
    name: "EPIs e Descartáveis",
    slug: "descartaveis-epis",
    description: "Segurança e proteção para sua equipe e ambientes.",
    image: `${BASE_IMAGE_URL}/Descartaveis/header.jpg`
  },
  {
    id: "copa-cozinha",
    name: "Copa e Cozinha",
    slug: "copa-cozinha",
    description: "Soluções completas para ambientes de alimentação.",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/header.jpg`
  },
  {
    id: "material-limpeza-diversos",
    name: "Produtos Diversos",
    slug: "material-limpeza-diversos",
    description: "Soluções variadas para manutenção, conservação e necessidades específicas.",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/header.jpg`
  }
];

export const products: Product[] = [
  // AROMATIZANTES (RENOVA CLEAN)
  {
    id: "limpador-perfumado-bouquet",
    name: "Limpador Perfumado - Bouquet",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Bouquet",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVABUQUE.jpg`,
    isRenovaClean: true,
    featured: true
  },
  {
    id: "limpador-perfumado-green-apple",
    name: "Limpador Perfumado - Green Apple",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Green Apple",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAGREENAPPLE.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-cereja-avela",
    name: "Limpador Perfumado - Cereja e Avelã",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Cereja e Avelã",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAGELCEREJAAVELA-1.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-oceano",
    name: "Limpador Perfumado - Oceano",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Oceano",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAoceano.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-flor-lavanda",
    name: "Renova Lavanda",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Lavanda",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_LAVANDA_.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-silvestre",
    name: "Limpador Perfumado - Silvestre",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Silvestre",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAsilvestre.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-flor-campo",
    name: "Limpador Perfumado - Flor do Campo",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Flor do Campo",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_floral_do_campo.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-sensacoes",
    name: "Limpador Perfumado - Sensações",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Sensações",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVASENSACOES-1.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-bamboo",
    name: "Limpador Perfumado - Bamboo",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Bamboo",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVABAMBOO.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-equilibrio",
    name: "Limpador Perfumado - Equilíbrio",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Equilíbrio",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAEQUILIBRIO-1.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-fantasy",
    name: "Limpador Perfumado - Fantasy",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Fantasy",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAFANTASY-1.jpg`,
    isRenovaClean: true
  },
  {
    id: "limpador-perfumado-harmonia",
    name: "Limpador Perfumado - Harmonia",
    description: "Limpador perfumado concentrado e econômico",
    dilution: "1/10",
    fragrance: "Harmonia",
    category: "Limpador Perfumado",
    categorySlug: "aromatizantes-ambientes",
    tags: ["concentrado", "econômico", "perfumado", "multiuso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAHARMONIA-1.jpg`,
    isRenovaClean: true
  },
  {
    id: "desodorizador-refil-12ml",
    name: "Desodorizador de Ar Refil 12ml",
    description: "Para aparelho automático - Diversas fragrâncias",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/refil-12ml-lavanda.jpg`,
    isRenovaClean: false
  },
  {
    id: "desodorizador-aparelho-automatico-12ml",
    name: "Desodorizador de Ar Aparelho Automático 12ml",
    description: "Com refil incluso - Diversas fragrâncias",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/APREFIL-12ML-LAVANDA.jpg`,
    isRenovaClean: false
  },
  {
    id: "desodorizador-360ml-bom-ar",
    name: "Desodorizador de Ar 360ml BomAr",
    description: "Diversas fragrâncias",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/BOM-AR-TALCO-360ML.jpg`,
    isRenovaClean: false
  },
  {
    id: "desodorizador-360ml-ultra-fresh",
    name: "Desodorizador de Ar 360ml Ultra Fresh",
    description: "Diversas fragrâncias",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/AROMATIZANTE-ULTRA-FRESH-PETALAS-DE-ROSA.jpg`,
    isRenovaClean: false
  },
  {
    id: "essencia-coala-120ml",
    name: "Essência Coala 120ml",
    description: "Para aromatização personalizada",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/ESSENCIA-COALA-EUCALIPTO.jpg`,
    isRenovaClean: false
  },
  {
    id: "placa-mictorio",
    name: "Placa para Mictório",
    description: "Diversas fragrâncias",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Equipamentos/PLACA-SINALIZADORA-PISO-MOLHADO.jpg`,
    isRenovaClean: false
  },
  {
    id: "pastilha-adesiva-harpic-3un",
    name: "Pastilha Adesiva Harpic 3un",
    description: "Ação purificante",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/PASTILHA-SANIT.-ADESIVA-HARPIC-C_3-.jpg`,
    isRenovaClean: false
  },
  {
    id: "pastilha-adesiva-pato-purific-3un",
    name: "Pastilha Adesiva Pato Purific 3un",
    description: "Ação purificante",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/PASTILHA-SANIT.-ADESIVA-HARPIC-C_3-.jpg`,
    isRenovaClean: false
  },
  {
    id: "pastilha-adesiva-sanny-3un",
    name: "Pastilha Adesiva Sanny 3un",
    description: "Ação purificante",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/PASTILHA-SANIT.-ADESIVA-HARPIC-C_3-.jpg`,
    isRenovaClean: false
  },
  {
    id: "pastilha-25gr-sanitaria",
    name: "Pastilha 25gr Sanitária",
    description: "Para caixa acoplada",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/PASTILHA-SANIT.-ADESIVA-HARPIC-C_3-.jpg`,
    isRenovaClean: false
  },
  {
    id: "pastilha-caixa-acoplada",
    name: "Pastilha para Caixa Acoplada",
    description: "Com gancho e aplicador",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/CAIXA-ACOPLADA.jpg`,
    isRenovaClean: false
  },
  {
    id: "gel-com-aplicador-caixa",
    name: "Gel Com Aplicador",
    description: "Para caixa acoplada",
    category: "Aromatizante de Ambientes",
    categorySlug: "aromatizantes-ambientes",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/jimo-gel.jpg`,
    isRenovaClean: false
  },

  // LIMPEZA GERAL (RENOVA CLEAN)
  {
    id: "multiuso-renova",
    name: "Multiuso Renova",
    description: "Limpador multiuso concentrado e econômico. Indicado para limpeza do dia a dia em qualquer tipo de superfície. Biodegradável.",
    dilution: "1/10",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["multiuso", "concentrado", "biodegradável", "econômico"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAmultiusonovo.jpg`,
    isRenovaClean: true,
    featured: true
  },
  {
    id: "vidros-renova",
    name: "Vidros Renova",
    description: "Produto biodegradável concentrado para limpeza de vidros. Proporciona remoção rápida e eficaz de sujeiras sem enxágue, finalizando com película protetora.",
    dilution: "1/10",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["vidros", "biodegradável", "sem enxágue", "película protetora"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_VIDROS.jpg`,
    isRenovaClean: true
  },
  {
    id: "louca-renova",
    name: "Louça Renova",
    description: "Ideal para limpar e eliminar gorduras de louças sujas. Detergente de alto desempenho com espuma que remove facilmente a sujeira de louças, utensílios e superfícies em geral.",
    dilution: "Pronto Uso",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["louça", "detergente", "gordura", "espuma"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVALOUCA.jpg`,
    isRenovaClean: true
  },
  {
    id: "renova-grill",
    name: "Renova Grill",
    description: "Poderoso desengordurante que penetra na superfície removendo sujeiras mais difíceis.",
    dilution: "1/10",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["desengordurante", "grill", "limpeza pesada"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_GRILL1_site.jpg`,
    isRenovaClean: true
  },
  {
    id: "power-ox",
    name: "Power Ox",
    description: "Limpador à base de peróxido de hidrogênio e tensoativos biodegradáveis. Fórmula concentrada com liberação de microbolhas de oxigênio para limpeza eficaz.",
    dilution: "1/19",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["peróxido", "oxigênio", "biodegradável", "tecnologia"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_OXY.jpg`,
    isRenovaClean: true
  },
  {
    id: "inox-renova",
    name: "Inox Renova",
    description: "Ideal para restaurar brilho de superfícies metálicas com manchas e desgastes. Elimina resíduos acumulados em inox sem deixar superfície oleosa.",
    dilution: "Pronto Uso",
    category: "Limpeza em Geral",
    categorySlug: "limpeza-geral",
    tags: ["inox", "metal", "brilho", "restaurador"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAINOX.jpg`,
    isRenovaClean: true
  },
  // LIMPEZA PESADA (RENOVA CLEAN)
  {
    id: "magnifico",
    name: "Magnífico",
    description: "Limpador versátil com tecnologia de flotação de partículas, facilitando a remoção da sujeira. Promove limpeza sem esforço.",
    dilution: "1/10",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["flotação", "tecnologia", "versátil", "sem esforço"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAmagnifico.jpg`,
    isRenovaClean: true,
    featured: true
  },
  {
    id: "gel-clor",
    name: "Gel Clor",
    description: "Limpador em gel com alto poder de espuma. Fórmula concentrada para limpeza pesada. Indicado também para tratamento de tecidos brancos.",
    dilution: "1/10",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["gel", "espuma", "tecidos brancos", "concentrado"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAGELCLOR.jpg`,
    isRenovaClean: true
  },
  {
    id: "pine",
    name: "Pine",
    description: "Produto em gel concentrado, biodegradável with fragrância de pinho para inibir odores desagradáveis. Remove diversos tipos de sujeiras.",
    dilution: "1/10",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["pinho", "biodegradável", "odor", "gel"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_Pine.jpg`,
    isRenovaClean: true
  },
  {
    id: "pedras",
    name: "Pedras",
    description: "Detergente ácido concentrado com ação decapante para limpeza de pedras sujas e encardidas. Aplicar em pisos porosos, pedras, paver e concretos.",
    dilution: "1/10",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["ácido", "pedras", "decapante", "poroso"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_PEDRAS.jpg`,
    isRenovaClean: true
  },
  {
    id: "desengraxante",
    name: "Desengraxante",
    description: "Desengraxante concentrado biodegradável que dissolve com eficiência acumulações orgânicas e incrustações de graxas, óleos e fuligens sem danificar a superfície.",
    dilution: "1/10",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["desengraxante", "graxa", "óleo", "biodegradável"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_Desengraxante.jpg`,
    isRenovaClean: true
  },
  {
    id: "desincrustante-acido",
    name: "Desincrustante Ácido",
    description: "Poderoso desincrustante ácido concentrado para eliminar sujeiras fortemente incrustadas em superfícies porosas, brutas e pavimentos antigos.",
    dilution: "1/5",
    category: "Limpeza Pesada",
    categorySlug: "limpeza-pesada",
    tags: ["ácido", "incrustação", "poroso", "pavimento"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_Desincrustante.jpg`,
    isRenovaClean: true
  },

  // LAVANDERIA (RENOVA CLEAN)
  {
    id: "roupas",
    name: "Roupas",
    description: "Sabão líquido concentrado biodegradável com formulação exclusiva para higienizar, perfumar e proteger tecidos.",
    category: "Lavanderia",
    categorySlug: "lavanderia",
    tags: ["sabão líquido", "tecidos", "biodegradável", "perfumado"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_Roupas.jpg`,
    isRenovaClean: true
  },
  {
    id: "oxy",
    name: "Oxy",
    description: "Alvejante concentrado biodegradável. Promove limpeza profunda removendo manchas e odores.",
    category: "Lavanderia",
    categorySlug: "lavanderia",
    tags: ["alvejante", "manchas", "odores", "biodegradável"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVAOXY.jpg`,
    isRenovaClean: true
  },
  {
    id: "maciez",
    name: "Maciez",
    description: "Amaciante concentrado biodegradável. Deixa a fibra do tecido macia, perfumada e fácil de passar, garantindo proteção ao tecido.",
    category: "Lavanderia",
    categorySlug: "lavanderia",
    tags: ["amaciante", "maciez", "perfumado", "proteção"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_MACIEZ-1.jpg`,
    isRenovaClean: true
  },

  // TRATAMENTO DE PISO (RENOVA CLEAN)
  {
    id: "removedor",
    name: "Removedor",
    description: "Tecnologia avançada com agentes capazes de remover sujeiras difíceis e ceras. Aplicar em superfícies laváveis em geral.",
    dilution: "1/5",
    category: "Tratamento de Piso",
    categorySlug: "tratamento-piso",
    tags: ["removedor", "ceras", "tecnologia", "superfícies"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_removedor.jpg`,
    isRenovaClean: true
  },
  {
    id: "brilho",
    name: "Brilho",
    description: "Fórmula exclusiva que realça o brilho do piso, proporcionando limpeza e perfume no ambiente.",
    dilution: "1/40",
    category: "Tratamento de Piso",
    categorySlug: "tratamento-piso",
    tags: ["brilho", "piso", "perfume", "realçador"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_brilho.jpg`,
    isRenovaClean: true
  },

  // HIGIENE PESSOAL (RENOVA CLEAN)
  {
    id: "renova-gel-70",
    name: "Álcool Gel Renova 70%",
    description: "Gel antisséptico para mãos com extrato hidratante.",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    tags: ["gel", "antisséptico", "álcool 70%", "higiene"],
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-GEL-70-5LT-PREMISSE.jpg`,
    isRenovaClean: true,
    featured: true
  },
  {
    id: "renova-sab-liq",
    name: "Sabonete Líquido Renova",
    description: "Limpa suavemente as mãos deixando uma fragrância delicada.",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    tags: ["sabonete", "líquido", "higiene", "premium"],
    image: `${BASE_IMAGE_URL}/Renova/RENOVA_Desengraxante.jpg`,
    isRenovaClean: true
  },

  // OUTROS (PONTUAL CLEAN / BRANDS)
  {
    id: "base-seladora-5l",
    name: "Base Seladora 5L",
    description: "Impermeabilizante para tratamento de pisos profissionais.",
    category: "Tratamento de Piso",
    categorySlug: "tratamento-piso",
    tags: ["impermeabilizante", "seladora", "proteção", "5L"],
    image: `${BASE_IMAGE_URL}/Quimicosconcentrados/base-seladora.jpeg`,
    isRenovaClean: false
  },
  {
    id: "impermeabilizantes-5l",
    name: "Impermeabilizantes 5L",
    description: "Proteção de alto brilho para pisos e superfícies.",
    category: "Tratamento de Piso",
    categorySlug: "tratamento-piso",
    tags: ["impermeabilizante", "proteção", "pisos", "5L"],
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Limpador-Multiuso-Da-Casa-5L.jpg`,
    isRenovaClean: false
  },
  {
    id: "lavadora-piso-auto",
    name: "Lavadora de Piso Automática",
    description: "Equipamento industrial para lavagem e secagem de pisos em uma única passada.",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false,
    featured: true
  },
  {
    id: "balde-espremedor-32l",
    name: "Conjunto Balde Espremedor 32L",
    description: "Para limpeza úmida profissional com sistema de espremedor lateral.",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/BALDE-ESPREMEDOR-DOBLO-PONTUAL-CLEAN-BRALIMPIA.jpg`,
    isRenovaClean: false
  },
  {
    id: "papel-toalha-luxo",
    name: "Papel Toalha Extra Luxo",
    description: "100% Celulose, alta absorção e gramatura profissional.",
    category: "Papel Toalha",
    categorySlug: "papel-toalha",
    image: `${BASE_IMAGE_URL}/Higienepessoal/papel-toalha-2000.jpeg`,
    isRenovaClean: false
  },
  // TRATAMENTO DE PISO (PONTUAL CLEAN)
  {
    id: "cera-liquida-piso",
    name: "Cera Líquida",
    description: "Para acabamento e proteção de pisos",
    category: "Tratamento de Piso",
    categorySlug: "tratamento-piso",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Cera-liquida-300x300.jpeg`,
    isRenovaClean: false
  },
  // PRODUTOS QUÍMICOS
  {
    id: "alvejante-cloro",
    name: "Alvejante com Cloro (5L e 1L)",
    description: "Alvejante com Cloro para lavagem e desinfecção",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/alvejante-sem-cloro-900x900-1.jpg`,
    isRenovaClean: false
  },
  {
    id: "alvejante-sem-cloro",
    name: "Alvejante sem Cloro",
    description: "Cuidado extra para tecidos coloridos",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/alvejante-sem-cloro-900x900-1.jpg`,
    isRenovaClean: false
  },
  {
    id: "hipoclorito-5l",
    name: "Hipoclorito 5L (1%, 5% e 12%)",
    description: "Hipoclorito concentrado para higienização profissional",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Cloro-–-Hipoclorito-de-Sodio-12-Quimibel-5L.jpg`,
    isRenovaClean: false
  },
  {
    id: "desinfetante-5l",
    name: "Desinfetante Pronto Uso 5L",
    description: "Diversas fragrâncias para limpeza e desinfecção",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Limpador-Multiuso-Da-Casa-5L.jpg`,
    isRenovaClean: false
  },
  {
    id: "pinho-sol-500ml",
    name: "Pinho Sol Original 500ml",
    description: "Desinfetante clássico with fragrância de pinho",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/pinho-sol-original.jpg`,
    isRenovaClean: false
  },
  {
    id: "pinho-bril-500ml",
    name: "Pinho Bril 500ml",
    description: "Limpeza profunda e perfume duradouro",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/pinho-brill-original.jpg`,
    isRenovaClean: false
  },
  {
    id: "limpol-5l",
    name: "Limpol 5L",
    description: "Detergente neutro de alta eficiência",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LIMPOL-5L.jpeg`,
    isRenovaClean: false
  },
  {
    id: "limpol-type-5l",
    name: "Limpol Type 5L",
    description: "Detergente profissional para limpezas específicas",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LIMPOL-5L.jpeg`,
    isRenovaClean: false
  },
  {
    id: "detergente-500ml",
    name: "Detergente 500ml",
    description: "Diversas opções de fragrâncias e tipos",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/AJAX-FRESH-lemon-500ML.jpg`,
    isRenovaClean: false
  },
  {
    id: "facilita-500ml",
    name: "Facilita 500ml",
    description: "Limpador multiuso de uso diário",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/AJAX-FRESH-lemon-500ML.jpg`,
    isRenovaClean: false
  },
  {
    id: "multiuso-pronto-uso-5l",
    name: "Multiuso Pronto Uso 5L",
    description: "Praticidade para grandes áreas",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Limpador-Multiuso-Da-Casa-5L.jpg`,
    isRenovaClean: false
  },
  {
    id: "veja-500ml",
    name: "Veja 500ml",
    description: "Limpador multiuso líder de mercado",
    category: "Produtos Químicos",
    categorySlug: "material-limpeza-quimicos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/VEJA-SENSACOES-LAVANDA-500ML.jpg`,
    isRenovaClean: false
  },
  // VIDROS E MÓVEIS
  {
    id: "limpa-vidros-butterflor",
    name: "Limpa Vidros Butterflor 500ml",
    description: "Limpador especializado para vidros",
    category: "Vidros e Móveis",
    categorySlug: "material-limpeza-vidros-moveis",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LIMPA-VIDROS-5L.jpeg`,
    isRenovaClean: false
  },
  {
    id: "limpa-vidros-audax",
    name: "Limpa Vidros Audax 500ml",
    description: "Solução profissional para superfícies vítreas",
    category: "Vidros e Móveis",
    categorySlug: "material-limpeza-vidros-moveis",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LIMPA-VIDROS-5L.jpeg`,
    isRenovaClean: false
  },
  {
    id: "vidrex-500ml",
    name: "Vidrex 500ml",
    description: "Limpador para vidros de alto rendimento",
    category: "Vidros e Móveis",
    categorySlug: "material-limpeza-vidros-moveis",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/AJAX-FRESH-lemon-500ML.jpg`,
    isRenovaClean: false
  },
  {
    id: "lustra-moveis-facilita",
    name: "Lustra Móveis Facilita 500ml",
    description: "Para polir e proteger móveis",
    category: "Vidros e Móveis",
    categorySlug: "material-limpeza-vidros-moveis",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LUSTRA-MOVEIS-POLIFLOR-LAVANDA-200ML.jpg`,
    isRenovaClean: false
  },
  {
    id: "lustra-moveis-type",
    name: "Lustra Móveis Type 200ml",
    description: "Proteção e brilho superior para madeiras",
    category: "Vidros e Móveis",
    categorySlug: "material-limpeza-vidros-moveis",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LUSTRA-MOVEIS-POLIFLOR-LAVANDA-200ML.jpg`,
    isRenovaClean: false
  },
  // SABÕES E SAPÓLIOS
  {
    id: "sabao-liquido-da-casa",
    name: "Sabão Líquido Da Casa (5L, Squeeze, Refil e Gatilho)",
    description: "Sabão líquido multiuso para diversas aplicações",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/Limpador-Multiuso-Da-Casa-5L.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabao-barra-neutro",
    name: "Sabão em Barra Neutro (5 unidades)",
    description: "Sabão neutro para diversas aplicações de limpeza",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/SABAO-EM-PO-ULTRACLASS-1KG.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabao-po-facilita",
    name: "Sabão em Pó Facilita (5kg e 1kg)",
    description: "Sabão em pó eficiente para lavagem de roupas",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/SABAO-EM-PO-ULTRACLASS-1KG.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabao-po-lavanda",
    name: "Sabão em Pó Lavanda (5kg e 1kg)",
    description: "Sabão em pó com perfume de lavanda",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/SABAO-EM-PO-ULTRACLASS-1KG.jpg`,
    isRenovaClean: false
  },
  {
    id: "sapolio-cremoso",
    name: "Sapolio Cremoso 250ml",
    description: "Limpador cremoso abrasivo para superfícies difíceis",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/SAPOLIO-CREMOSO-RADIUM-CLASSICO.jpg`,
    isRenovaClean: false
  },
  {
    id: "sapolio-po",
    name: "Sapolio em Pó 300g",
    description: "Limpador em pó com alto poder abrasivo",
    category: "Sabões e Sapólios",
    categorySlug: "material-limpeza-saboes-sapolios",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/SABAO-EM-PO-ULTRACLASS-1KG.jpg`,
    isRenovaClean: false
  },
  // MATERIAL DE LIMPEZA - DIVERSOS
  {
    id: "naftalina",
    name: "Naftalina (30g, 200g)",
    description: "Contra traças e insetos",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Aromatizantesparaambientes/NAFTALINA-LEVE-BRISA.jpg`,
    isRenovaClean: false
  },
  {
    id: "easy-off-300ml",
    name: "Easy Off 300ml",
    description: "Removedor de gordura para fornos",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/easy-off.jpg`,
    isRenovaClean: false
  },
  {
    id: "diabo-verde-250ml",
    name: "Diabo Verde 250ml",
    description: "Desentupidor de pias e ralos",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/LIMPA-FORNO-DIABO-VERDE.jpg`,
    isRenovaClean: false
  },
  {
    id: "inseticidas-200g",
    name: "Inseticidas 200g",
    description: "Controle de insetos rasteiros e voadores",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/ajax-.jpg`,
    isRenovaClean: false
  },
  {
    id: "silicone-liquido-sany",
    name: "Silicone Líquido Sany 300g",
    description: "Lubrificante e protetor de superfícies",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/jimo-liquido.jpg`,
    isRenovaClean: false
  },
  {
    id: "silicone-gel",
    name: "Silicone Gel",
    description: "Lubrificante em gel para proteção duradoura",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/jimo-gel.jpg`,
    isRenovaClean: false
  },
  {
    id: "oleo-de-peroba",
    name: "Óleo de Peroba 100ml",
    description: "Para conservação e brilho de madeiras",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/óleo-de-peroba-1.jpeg`,
    isRenovaClean: false
  },
  {
    id: "querosene-900ml",
    name: "Querosene 900ml",
    description: "Combustível e solvente de limpeza",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/QUEROSENE.jpeg`,
    isRenovaClean: false
  },
  {
    id: "soda-caustica-500g",
    name: "Soda Cáustica 500g",
    description: "Para desentupimento pesado e limpeza técnica",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/ajax-.jpg`,
    isRenovaClean: false
  },
  {
    id: "vaselina-liquida",
    name: "Vaselina Líquida",
    description: "Lubrificante e protetor multiuso",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/ajax-.jpg`,
    isRenovaClean: false
  },
  {
    id: "wd-40-multiuso",
    name: "WD-40",
    description: "Multiuso lubrificante, penetrante e protetor",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/ajax-.jpg`,
    isRenovaClean: false
  },
  {
    id: "evita-mofo-king",
    name: "Evita Mofo King",
    description: "Preventivo contra mofo em armários e gavetas",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/evita-mofo.jpg`,
    isRenovaClean: false
  },
  {
    id: "evita-mofo-king",
    name: "Evita Mofo King",
    description: "Preventivo contra mofo em armários e gavetas",
    category: "Produtos Diversos",
    categorySlug: "material-limpeza-diversos",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/evita-mofo.jpg`,
    isRenovaClean: false
  },
  // HIGIENE PESSOAL - ÁLCOOL E GEL
  {
    id: "alcool-70-liq",
    name: "Álcool 70%",
    description: "Álcool líquido para higienização geral",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-70-1LT-TUPI.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-46-liq",
    name: "Álcool 46,2%",
    description: "Álcool líquido para higienização e limpeza",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-462-1LT-TUPI.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-92-liq",
    name: "Álcool 92,8%",
    description: "Álcool líquido concentrado para uso profissional",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-462-1LT-TUPI.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-perfumado-46",
    name: "Álcool Perfumado 46,2%",
    description: "Álcool com fragrância para limpeza e perfume",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-462-1LT-TUPI.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-gel-allclean-5l",
    name: "Álcool Gel AllClean 5L",
    description: "Gel antisséptico em embalagem econômica",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/alcool-gel-5l.jpeg`,
    isRenovaClean: false
  },
  {
    id: "alcool-gel-antisseptico-480g",
    name: "Álcool Gel Antisséptico 480g",
    description: "Com pump para distribuição facilitada",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-GEL-70-5LT-PREMISSE.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-gel-refil",
    name: "Álcool Gel Refil",
    description: "Para reposição de dispensers de parede",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-GEL-70-5LT-PREMISSE.jpg`,
    isRenovaClean: false
  },
  {
    id: "alcool-gel-antisseptico-pump",
    name: "Álcool Gel Antisséptico Pump",
    description: "Pronto para uso com válvula dosadora",
    category: "Higiene Pessoal",
    categorySlug: "higiene-alcool-gel",
    image: `${BASE_IMAGE_URL}/Higienepessoal/ALCOOL-GEL-70-5LT-PREMISSE.jpg`,
    isRenovaClean: false
  },
  // HIGIENE PESSOAL - SABONETES
  {
    id: "sabonete-premisse-5l",
    name: "Sabonete Líquido Premisse 5L",
    description: "Sabonete líquido para mãos profissional",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-5LT-PREMISSE-ERVA-DOCE-SOFT.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabonete-premisse-1l",
    name: "Sabonete Líquido Premisse 1L",
    description: "Sabonete líquido para mãos - Diversas fragrâncias",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-5LT-PREMISSE-ERVA-DOCE-SOFT.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabonete-premisse-450ml",
    name: "Sabonete Líquido Premisse 450ml",
    description: "Sabonete líquido para mãos suave",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-450ML-PUMP-PREMISSE-MORANGO-E-HIBISCUS.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabonete-premisse-800ml",
    name: "Sabonete Líquido Premisse 800ml",
    description: "Refil para diversos sistemas de dispensers",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-800ML-PREMISSE-ERVA-DOCE-SOFT.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabonete-espuma-premisse-5l",
    name: "Sabonete Espuma Premisse 5L",
    description: "Sabonete em espuma antisséptico econômico",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-ESPUMA-700ML-PREMISSE-ERVA-DOCE.jpg`,
    isRenovaClean: false
  },
  {
    id: "sabonete-albany-80g",
    name: "Sabonete em Barra Albany 80g",
    description: "Sabonete sólido para higiene pessoal diária",
    category: "Higiene Pessoal",
    categorySlug: "higiene-sabonetes",
    image: `${BASE_IMAGE_URL}/Higienepessoal/SABONETE-5LT-PREMISSE-ERVA-DOCE-SOFT.jpg`,
    isRenovaClean: false
  },
  // PAPEL HIGIÊNICO
  {
    id: "ph-rolinho-extra-luxo-30mt-fd",
    name: "P.H. Rolinho Extra Luxo 30mt - Folha Dupla",
    description: "Folha dupla, 100% celulose - Qualidade superior",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Higienepessoal/PAPEL-HIGIENICO-30MT-F.DUPLA-DUETTO-NEUTRO-C_4.jpg`,
    isRenovaClean: false
  },
  {
    id: "ph-rolinho-extra-luxo-30mt-fs",
    name: "P.H. Rolinho Extra Luxo 30mt - Folha Simples",
    description: "Folha simples de alta absorção",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Higienepessoal/PAPEL-HIGIENICO-30MT-F.SIMPLES-PALOMA-NEUTRO-C_4.jpg`,
    isRenovaClean: false
  },
  {
    id: "ph-rolinho-extra-luxo-60mt",
    name: "P.H. Rolinho Extra Luxo 60mt",
    description: "Folha simples, rolo econômico de 60 metros",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPANADOR-SINTETICO-NOMO-P.jpg`,
    isRenovaClean: false
  },
  {
    id: "ph-rolao-extra-luxo",
    name: "P.H. Rolão Extra Luxo/Bco Luxo",
    description: "Folha dupla/simples - 200mt e 300mt",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPANADOR-SINTETICO-NOMO-P.jpg`,
    isRenovaClean: false
  },
  {
    id: "ph-cai-cai-extra-luxo",
    name: "P.H. Cai Cai Extra Luxo",
    description: "Folha dupla/simples - 6.000 / 8.000 / 10.000 folhas",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Higienepessoal/caicai-8000.jpg`,
    isRenovaClean: false
  },
  {
    id: "guardanapo-vipp-extra-luxo",
    name: "Guardanapo Vipp Extra Luxo",
    description: "Medidas: 32,5x29,5 e 23x20 - Alta gramatura",
    category: "Papel Higiênico",
    categorySlug: "papel-higienico",
    image: `${BASE_IMAGE_URL}/Higienepessoal/vipp-G.jpg`,
    isRenovaClean: false
  },
  // PAPEL TOALHA
  {
    id: "papel-toalha-bobina-200mt",
    name: "Papel Toalha Bobina Extra Luxo - 200mt",
    description: "Branco luxo, embalagem com 2 rolos de 200 metros",
    category: "Papel Toalha",
    categorySlug: "papel-toalha",
    image: `${BASE_IMAGE_URL}/Descartaveis/PAPEL-TOALHA-BOBINA-ALVEFLOR.jpeg`,
    isRenovaClean: false
  },
  {
    id: "papel-toalha-interfolha-1000fls",
    name: "Papel Toalha Extra Luxo Interfolha",
    description: "Branco luxo, folha simples - 1.000 folhas",
    category: "Papel Toalha",
    categorySlug: "papel-toalha",
    image: `${BASE_IMAGE_URL}/Higienepessoal/papel-toalha-2000.jpeg`,
    isRenovaClean: false
  },
  {
    id: "papel-toalha-bobina-varios",
    name: "Papel Toalha Bobina Extra Luxo (Várias med.)",
    description: "Folha dupla/simples - 2.000 / 4.800 / 5.000 folhas",
    category: "Papel Toalha",
    categorySlug: "papel-toalha",
    image: `${BASE_IMAGE_URL}/Descartaveis/PAPEL-TOALHA-BOBINA-ALVEFLOR.jpeg`,
    isRenovaClean: false
  },
  // UTILITÁRIOS - PÁS E VASSOURAS
  {
    id: "pa-metalica-curta",
    name: "Pá Metálica Cabo Curto",
    description: "Coletora Bettanin - 50 e 70cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-METAL-curta.jpg`,
    isRenovaClean: false
  },
  {
    id: "pa-metalica-longa",
    name: "Pá Metálica Cabo Longo",
    description: "Coletora Bettanin - 50 e 70cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-METAL-LONGA.jpg`,
    isRenovaClean: false
  },
  {
    id: "pa-plastica-curta-perovinha",
    name: "Pá Plástica Cabo Curto - Perovinha",
    description: "Disponível em 40 e 60cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-PLASTICA-cabo-longo.jpg`,
    isRenovaClean: false
  },
  {
    id: "pa-plastica-curta-nycolplast",
    name: "Pá Plástica Cabo Curto - Nycolplast",
    description: "Disponível em 45, 55 e 62cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-PLASTICA-cabo-longo.jpg`,
    isRenovaClean: false
  },
  {
    id: "pa-plastica-longa-perovinha",
    name: "Pá Plástica Cabo Longo - Perovinha",
    description: "Disponível em 40 e 60cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-PLASTICA-cabo-longo.jpg`,
    isRenovaClean: false
  },
  {
    id: "pa-plastica-longa-pontual",
    name: "Pá Plástica Cabo Longo - Pontual Clean",
    description: "Disponível em 45, 55 e 65cm",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/PA-DE-LIXO-PLASTICA-cabo-longo.jpg`,
    isRenovaClean: false
  },
  {
    id: "borracha-vassoura",
    name: "Borracha Simples e Dupla",
    description: "Borracha de reposição para vassouras",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/Bettanin 50 e 70 cm Borracha Simples e Dupla .webp`,
    isRenovaClean: false
  },
  {
    id: "vassoura-higienica-suporte",
    name: "Vassoura Cerdas Rígidas Sanitária",
    description: "Com suporte - Higienização de vasos sanitários",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-PELO-.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-esfregao-bettanin",
    name: "Vassoura Cerdas Rígidas Esfregão",
    description: "Esfregão com Cabo Bettanin",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESFREGÃO-1.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-esfregao-verplat",
    name: "Vassoura Cerdas Rígidas com Cabo",
    description: "Esfregão Verplat resistente",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-NOVICA-AMARELA-SUPERPRO-BETTANIN-COM-CABO.png`,
    isRenovaClean: false
  },
  {
    id: "vassoura-nylon-casa-rua",
    name: "Vassoura Nylon com Cabo - Casa e Rua",
    description: "Bettanin - Ideal para ambientes internos e externos",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/casa-e-rua.jpeg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-nylon-novissima",
    name: "Vassoura Nylon com Cabo - Novíssima",
    description: "Varre Canta Novíssima - Cerdas macias",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-PELO-.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-nylon-multiuso",
    name: "Vassoura Nylon com Cabo - Multiuso",
    description: "Multiuso Bettanin com 1,40mt de cabo",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-PELO-.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-pelo-sintetico",
    name: "Vassoura Pelo Sintético",
    description: "Sem cabo - Ideal para pisos delicados",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-PELO-.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassoura-palha",
    name: "Vassoura Palha",
    description: "Com cabo - Tradicional vassoura de palha",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/VASSOURA-DE-PALHA-3-FIOS.jpg`,
    isRenovaClean: false
  },
  {
    id: "vassourao-gari-bettanin",
    name: "Vassourão Gari",
    description: "Com cabo Bettanin - Para grandes áreas e ruas",
    category: "Utilitários - Pás e Vassouras",
    categorySlug: "utilitarios-pas-vassouras",
    image: `${BASE_IMAGE_URL}/Utilitarios/ASSOLAN.jpg`,
    isRenovaClean: false
  },
  // UTILITÁRIOS - BALDES E ESPONJAS
  {
    id: "balde-plastico-7l",
    name: "Balde Plástico Shangrila 7L",
    description: "Capacidade de 7 litros",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/BALDE-15L.jpg`,
    isRenovaClean: false
  },
  {
    id: "balde-plastico-15l",
    name: "Balde Plástico Shangrila 15L",
    description: "Capacidade de 15 litros",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/BALDE-15L.jpg`,
    isRenovaClean: false
  },
  {
    id: "balde-com-medidor-15l",
    name: "Balde Plástico com Medidor 15L",
    description: "Com escala de medição interna",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/BALDE-15L.jpg`,
    isRenovaClean: false
  },
  {
    id: "balde-oval-14l",
    name: "Balde Plástico Oval 14L",
    description: "Bettanin - Design ergonômico",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/BALDE-15L.jpg`,
    isRenovaClean: false
  },
  {
    id: "suporte-multifuncional-superpro",
    name: "Suporte Multifuncional SuperPro",
    description: "Sistema para pendurar e organizar vassouras e rodos",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Equipamentos/SUPORTE-MOP-UMIDO-BRALIMPIA.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-dupla-face-sem-pelicula",
    name: "Esponja Dupla Face Verde/Amarela - Sem Película",
    description: "Bettanin profissional para limpeza pesada",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-VERDE_AMARELA-BOMBRIL.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-dupla-face-com-pelicula",
    name: "Esponja Dupla Face Verde/Amarela - Com Película",
    description: "Bettanin profissional com proteção extra",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-VERDE_AMARELA-BOMBRIL.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-dupla-face-azul",
    name: "Esponja Dupla Face Azul",
    description: "Bettanin - Higiene e durabilidade",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-AZUL-INDIVIDUAL-BETTANIN.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-dupla-face-rosa",
    name: "Esponja Dupla Face Rosa",
    description: "Bettanin - Para superfícies delicadas",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-BRANCA_ROSA-BETTANIN.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-3m-verde-amarela",
    name: "Esponja Dupla Face 3M",
    description: "Verde e amarela - Alta performance",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-AZUL-INDIVIDUAL-BETTANIN.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-aco-assolan",
    name: "Esponja de Aço Assolan",
    description: "Pacote com 8 unidades",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-aco-bombril",
    name: "Esponja de Aço Bom Bril",
    description: "Pacote com 8 unidades",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/LA-DE-ACO-BOMBRIL.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-aco-qlustro",
    name: "Esponja de Aço Q'Lustro",
    description: "Pacote com 8 unidades",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "palha-de-aco",
    name: "Palha de Aço",
    description: "Para limpeza pesada industrial e profissional",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "esponja-metalica-fibra",
    name: "Esponja Metálica",
    description: "Com fibra resistente",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPONJA-AZUL-INDIVIDUAL-BETTANIN.jpg`,
    isRenovaClean: false
  },
  {
    id: "fibra-preta",
    name: "Fibra Preta",
    description: "Ideal para limpeza pesada e incrustações",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FIBRA-PRETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "fibra-verde",
    name: "Fibra Verde",
    description: "Limpeza pesada/geral multiuso",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FIBRA-PRETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "fibra-branca",
    name: "Fibra Branca",
    description: "Limpeza leve para superfícies delicadas",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FIBRA-PRETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "fibra-azul",
    name: "Fibra Azul",
    description: "Limpeza delicada e sem riscos",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FIBRA-PRETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "fibra-bettaco",
    name: "Fibra Bettaco",
    description: "Multiuso Bettanin profissional",
    category: "Utilitários - Baldes e Esponjas",
    categorySlug: "utilitarios-baldes-esponjas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FIBRA-PRETA.jpg`,
    isRenovaClean: false
  },
  // UTILITÁRIOS - FERRAMENTAS E ACESSÓRIOS
  {
    id: "pulverizador-transparente",
    name: "Pulverizador Transparente (500ml e 1L)",
    description: "Para aplicação precisa de produtos de limpeza",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Renova/Renova_inox_500ml.jpg`,
    isRenovaClean: false
  },
  {
    id: "kit-esguicho",
    name: "Kit Esguicho",
    description: "Para mangueiras - Diversos tipos de jato",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/KIT-ESGUICHO.jpeg`,
    isRenovaClean: false
  },
  {
    id: "papel-a4-500",
    name: "Papel A4",
    description: "Resma com 500 folhas de alta qualidade",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ASSOLAN.jpg`,
    isRenovaClean: false
  },
  {
    id: "flanelas-limpeza",
    name: "Flanelas (Branca/Laranja)",
    description: "Tamanhos: 28x38 e 38x58 - Alta absorção",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/FLANELA-28X38-BRANCA-.jpg`,
    isRenovaClean: false
  },
  {
    id: "saco-alvejado",
    name: "Saco Alvejado",
    description: "Tamanhos diversos para limpeza de superfícies",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/SACO-ALVEJADO-XADREZ.jpeg`,
    isRenovaClean: false
  },
  {
    id: "panos-de-prato",
    name: "Panos de Prato",
    description: "Branco e colorido com padronagem xadrez",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "pano-microfibra-multiuso",
    name: "Pano Multiuso Microfibra",
    description: "Grande e Pequeno - Picotado para praticidade",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/PANO-MICROFIBRA-40X60.jpg`,
    isRenovaClean: false
  },
  {
    id: "escova-nylon-unha",
    name: "Escova de Nylon Plástica",
    description: "Para limpeza de unhas - Bettanin",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "escova-pegador-canada",
    name: "Escova com Pegador Canadá",
    description: "Bettanin e Canadá - Ergonômica",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-OVAL-COM-PEGADOR.jpeg`,
    isRenovaClean: false
  },
  {
    id: "escova-plastica-cantinho",
    name: "Escova Plástica Cantinho",
    description: "Especial para áreas de difícil acesso",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-OVAL-PLASTICA-CEPA.jpg`,
    isRenovaClean: false
  },
  {
    id: "escova-aco-oval",
    name: "Escova de Aço Oval",
    description: "Para limpeza pesada e remoção de resíduos",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "penas-shangrila",
    name: "Penas Shangrila",
    description: "Espanador para limpeza de superfícies delicadas",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Equipamentos/LIXEIRA-SHANGRILA-PTA.jpg`,
    isRenovaClean: false
  },
  {
    id: "po-sintetico-shangrila",
    name: "Pó Sintético Shangrila",
    description: "Espanador eletrostático",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESPANADOR-SINTETICO-NOMO-P.jpg`,
    isRenovaClean: false
  },
  {
    id: "escada-3-degraus",
    name: "Escada 3 Degraus",
    description: "Perfect e Bralimpia - Segurança e resistência",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Equipamentos/ESCADA-3-DEGRAUS.jpg`,
    isRenovaClean: false
  },
  {
    id: "escada-5-degraus",
    name: "Escada 5 Degraus",
    description: "Perfect e Bralimpia - Profissional",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Equipamentos/ESCADA-5-DEGRAUS.jpg`,
    isRenovaClean: false
  },
  {
    id: "escada-7-degraus",
    name: "Escada 7 Degraus",
    description: "Perfect e Bralimpia - Para grandes alturas",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Equipamentos/ESCADA-7-DEGRAUS.jpg`,
    isRenovaClean: false
  },
  {
    id: "desentupidor-pia-50",
    name: "Desentupidor de Pia",
    description: "Cabo de 50cm - Eficiência doméstica",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/DESENTUPIDOR-DE-PIA-1.jpeg`,
    isRenovaClean: false
  },
  {
    id: "desentupidor-banheiro-140",
    name: "Desentupidor de Banheiro",
    description: "Cabo alumínio 1,40m com manopla",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "cabo-chapa-aco",
    name: "Cabo Chapa de Aço",
    description: "1,40mt - Bralimpia - Resistência industrial",
    category: "Utilitários - Ferramentas",
    categorySlug: "utilitarios-ferramentas",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  // EQUIPAMENTOS PROFISSIONAIS
  {
    id: "carrinho-condominio-100l",
    name: "Carrinho para Condomínio 100L",
    description: "Uso em transporte de grandes volumes",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/Carrinho-para-Condomínio-140L-JSN_01364-500x500.jpg`,
    isRenovaClean: false
  },
  {
    id: "carro-funcional-residuos",
    name: "Carro Funcional",
    description: "Para coleta de resíduos e limpeza itinerante",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/EMBALADOR.jpg`,
    isRenovaClean: false
  },
  {
    id: "placas-sinalizadoras",
    name: "Placas Sinalizadoras",
    description: "Segurança na limpeza - Diversos modelos",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/EMBALADOR.jpg`,
    isRenovaClean: false
  },
  {
    id: "discos-especiais",
    name: "Discos para Máquinas de Limpeza",
    description: "Para máquinas de limpeza industrial - Diversas finalidades",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "embalador-guarda-chuva",
    name: "Embalador de Guarda-Chuva",
    description: "Para proteção de ambientes em dias de chuva",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/REFIL-EMBALADOR-DE-GUARDA-CHUVA.jpg`,
    isRenovaClean: false
  },
  {
    id: "extensor-telescopico",
    name: "Extensor Telescópico",
    description: "4MT, 6MT e 7,5MT - Para limpezas em altura",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/EXTENSOR-750M-3-ESTAGIOS-BRALIMPIA.jpg`,
    isRenovaClean: false
  },
  {
    id: "escova-rejunte",
    name: "Escova para Rejunte",
    description: "Ideal para limpeza profunda de frestas e rejuntes",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "kit-mopinho",
    name: "Kit Mopinho",
    description: "Peças separadas: refil mop, suporte e cabo 1,40",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/EMBALADOR.jpg`,
    isRenovaClean: false
  },
  {
    id: "mop-po",
    name: "Mop Pó",
    description: "40 e 60cm - Peças separadas: trava e cabo 1,40",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/suporte-mop-po-60.jpg`,
    isRenovaClean: false
  },
  {
    id: "mop-umido",
    name: "Mop Úmido",
    description: "Peças separadas: refil mop e aplicador",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/SUPORTE-MOP-UMIDO-BRALIMPIA.jpg`,
    isRenovaClean: false
  },
  {
    id: "mop-perfect-sistema",
    name: "Mop Perfect",
    description: "Sistema completo de limpeza profissional",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/REFIL-BRANCO-MOP-PERFECT.jpg`,
    isRenovaClean: false
  },
  {
    id: "rodo-limpa-vidros-varios",
    name: "Rodo Limpa Vidros",
    description: "25cm/35cm - Peças separadas: refil, cabo e rodo combinado",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/rodo-vidros-canadá.jpg`,
    isRenovaClean: false
  },
  {
    id: "raspador-de-vidro",
    name: "Raspador de Vidro",
    description: "Para remoção de resíduos incrustados em vidros",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Utilitarios/ESCOVA-DE-ACO.jpg`,
    isRenovaClean: false
  },
  {
    id: "aplicador-de-cera-piso",
    name: "Aplicador de Cera",
    description: "25cm/35cm - Peças separadas: refil e cabo",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/APLICADOR-DE-CERA-35CM-.jpg`,
    isRenovaClean: false
  },
  {
    id: "suporte-para-fibras-cabo",
    name: "Suporte para Fibras",
    description: "Peças separadas: fibra/cabo/suporte",
    category: "Equipamentos Profissionais",
    categorySlug: "utilitarios-equipamentos",
    image: `${BASE_IMAGE_URL}/Equipamentos/SUPORTE-MOP-UMIDO-BRALIMPIA.jpg`,
    isRenovaClean: false
  },
  // LIXEIRAS E COLETA DE RESÍDUOS
  {
    id: "lixeira-inox-premium",
    name: "Lixeira Inox",
    description: "Para ambientes premium - Diversos tamanhos disponíveis",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/lixeira-50-inox.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-basculante-seletiva",
    name: "Lixeira Basculante",
    description: "Ideal para coleta seletiva (Metais, Plásticos, Vidro, Papéis, Orgânicos, etc)",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/lixeira-basculante-30.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-polipropileno-pedal",
    name: "Lixeira Polipropileno com Pedal",
    description: "Tampa simples - 15L e 23L",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/lixeira_de_aco_inox_com_pedal.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-pedal-60l-100l",
    name: "Lixeira com Pedal (60L e 100L)",
    description: "Cores: Branca, preta, marrom e verde",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/lixeira_de_aco_inox_com_pedal.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-pedal-13l",
    name: "Lixeira com Pedal (13L)",
    description: "Cores: Branca e preta - Ideal para escritórios e banheiros",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/lixeira_de_aco_inox_com_pedal.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-pedal-multitamanho",
    name: "Lixeira com Pedal (18L, 36L, 50L e 100L)",
    description: "Cores: Branca, preta e cinza",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/LIXEIRA-36L-PEDAL-PRETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-fixacao-40l",
    name: "Lixeira para Fixação 40L",
    description: "Para fixação em poste ou parede",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/LIXEIRA-SHANGRILA-PTA.jpg`,
    isRenovaClean: false
  },
  {
    id: "lixeira-contentor-grandes-volumes",
    name: "Lixeira Contentor",
    description: "Para grandes volumes - 120L e 240L",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Equipamentos/LIXEIRA-SHANGRILA-PTA.jpg`,
    isRenovaClean: false
  },
  {
    id: "descarte-pilhas-baterias",
    name: "Descarte para Pilhas e Baterias",
    description: "Coleta seletiva especializada e segura",
    category: "Lixeiras e Coleta",
    categorySlug: "lixeiras-coleta",
    image: `${BASE_IMAGE_URL}/Dispenser/060188-Lixeira-Retangular-Para-Descarte-de-Pilhas-e-Baterias-8L-Esmaltado-Laranja-600x600.jpg`,
    isRenovaClean: false
  },
  // DISPENSERS E DISTRIBUIDORES
  {
    id: "dispenser-copo-interject",
    name: "Dispenser de Copo Interject",
    description: "Para copos de água e café - Variações para ambos",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-para-descarte-de-copo-cafe-premisse_1_600.jpg`,
    isRenovaClean: false
  },
  {
    id: "dispenser-copo-multicopo",
    name: "Dispenser de Copo Multicopo",
    description: "Para copos de água e café",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-para-descarte-de-copo-cafe-premisse_1_600.jpg`,
    isRenovaClean: false
  },
  {
    id: "dispenser-copo-acrilico",
    name: "Dispenser de Copo Acrílico",
    description: "Para copos de água e café - Design premium",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-para-descarte-de-copo-cafe-premisse_1_600.jpg`,
    isRenovaClean: false
  },
  {
    id: "descarte-copos-1-boca",
    name: "Descarte de Copos 1 Boca",
    description: "Para descarte organizado de copos de água ou café",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-para-descarte-de-copo-cafe-premisse_1_600.jpg`,
    isRenovaClean: false
  },
  {
    id: "descarte-copos-2-bocas",
    name: "Descarte de Copos 2 Bocas",
    description: "Descarte separado para copos de água e café",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-para-descarte-de-copo-cafe-premisse_1_600.jpg`,
    isRenovaClean: false
  },
  {
    id: "higienizador-interfolha-auto",
    name: "Higienizador Interfolha",
    description: "Auto corte e alavanca - Praticidade e economia",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/RESERVATORIO-PREMISSE.jpg`,
    isRenovaClean: false
  },
  {
    id: "higienizador-rolao-toalha",
    name: "Higienizador Rolão",
    description: "Para papel toalha em rolo",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/RESERVATORIO-PREMISSE.jpg`,
    isRenovaClean: false
  },
  {
    id: "toalha-interfolha-distribuidor",
    name: "Distribuidor de Toalha Interfolha",
    description: "Sistema prático de distribution de toalhas",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "toalha-bobina-distribuidor",
    name: "Distribuidor de Toalha Bobina",
    description: "Para papel toalha em bobina",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/DISPENSER-BOBINA-ALAVANCA.jpg`,
    isRenovaClean: false
  },
  {
    id: "saboneteira-liquida-espuma",
    name: "Saboneteira Líquida/Espuma",
    description: "Para sabonete líquido ou em espuma",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/DISPENSER-ESPUMA.jpeg`,
    isRenovaClean: false
  },
  {
    id: "dispenser-absorvente",
    name: "Dispenser Absorvente",
    description: "Para higiene feminina - Refil separado",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/DISPENSER-BOBINA-ALAVANCA.jpg`,
    isRenovaClean: false
  },
  {
    id: "dispenser-assento-sanitario",
    name: "Dispenser Assento Sanitário",
    description: "Para protetores de assento - Refil separado",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/dispenser-assento-sanitario.jpg`,
    isRenovaClean: false
  },
  {
    id: "dispenser-multiplo-caicai",
    name: "Dispenser Múltiplo Cai Cai e Toalha",
    description: "Para P.H. Rolão Premisse - Cores: Branca, Azul e Verde",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/DISPENSER-BOBINA-ALAVANCA.jpg`,
    isRenovaClean: false
  },
  {
    id: "reservatorio-saboneteira-800",
    name: "Reservatório para Saboneteira 800ml",
    description: "Sistemas Premisse - Cores: Branca, Verde e Azul",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/RESERVATORIO-PREMISSE.jpg`,
    isRenovaClean: false
  },
  {
    id: "disp-sabonete-premisse-urban",
    name: "Dispenser Saboneteira Premisse Urban",
    description: "Saboneteira moderna e compacta",
    category: "Dispensers",
    categorySlug: "dispensers-distribuidores",
    image: `${BASE_IMAGE_URL}/Dispenser/DISPENSER-SABONETE-URBAN-BRANCA-PREMISSE-.jpg`,
    isRenovaClean: false
  },
  // DESCARTÁVEIS E EPIs
  {
    id: "luva-latex-volk",
    name: "Luva Látex",
    description: "Marca Volk - Antialérgica e descartável",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "luva-vinil-volk",
    name: "Luva Vinil",
    description: "Marca Volk - Multiuso e descartável",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "luva-plastica-cano-longo",
    name: "Luva Plástica",
    description: "Cano longo, ideal para limpeza leve",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-PLASTICA-C_100-UN.jpg`,
    isRenovaClean: false
  },
  {
    id: "luva-vaqueta-trabalho-pesado",
    name: "Luva Vaqueta",
    description: "Resistente para trabalho pesado e atrito",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "luva-pigmentada-preta",
    name: "Luva Pigmentada",
    description: "Preta, resistente - Marca Volk",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "luva-nitrilica-resistente",
    name: "Luva Nitrílica",
    description: "Alta resistência química - Marca Volk",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "touca-descartavel-volk",
    name: "Touca Descartável",
    description: "Para higiene e proteção - Marca Volk",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/TOUCA-DESCARTAVEL.jpg`,
    isRenovaClean: false
  },
  {
    id: "mascara-descartavel-volk",
    name: "Máscara Descartável",
    description: "Proteção respiratória profissional - Marca Volk",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/TOUCA-DESCARTAVEL.jpg`,
    isRenovaClean: false
  },
  {
    id: "prope-descartavel-volk",
    name: "Prope Descartável",
    description: "Proteção higiênica para sapatos - Marca Volk",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/PROPE-BRANCO-COOPERSURG.jpg`,
    isRenovaClean: false
  },
  {
    id: "copo-descartavel-cafe-agua",
    name: "Copos Descartáveis",
    description: "Copo 50ml (café), 150ml e 180ml (água/drinks)",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "mexedores-mexa-bem",
    name: "Mexedores 'Mexa Bem'",
    description: "Para café e bebidas - Preto e coloridos",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  {
    id: "saco-para-lixo-varios",
    name: "Saco para Lixo",
    description: "Diversos tamanhos - Preto e coloridos (seletiva)",
    category: "EPIs e Descartáveis",
    categorySlug: "descartaveis-epis",
    image: `${BASE_IMAGE_URL}/EPI/LUVA-DE-VAQUETA.jpg`,
    isRenovaClean: false
  },
  // COPA E COZINHA
  {
    id: "cafe-damasco-forte",
    name: "Café Damasco / Forte",
    description: "Torrado e Moído - 500g",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/CAFE-DAMASCO.jpg`,
    isRenovaClean: false
  },
  {
    id: "leite-tirol-po",
    name: "Leite Tirol / em Pó",
    description: "Integral 3%, 1L e caixas / Leite em Pó",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/leite-tirol-integral-uht-1l.webp`,
    isRenovaClean: false
  },
  {
    id: "acucar-alto-alegre-uniao",
    name: "Açúcar Alto Alegre / União",
    description: "1kg e envelopes de sachê para adoçar",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/acucar-alto-alegre.jpeg`,
    isRenovaClean: false
  },
  {
    id: "cha-natural-sabores",
    name: "Chá (Natural e sabores)",
    description: "Chá natural e diversos sabores em caixas",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/CHA.jpg`,
    isRenovaClean: false
  },
  {
    id: "fosforo-fiat-lux",
    name: "Fósforo Fiat Lux",
    description: "De segurança, com 40 fósforos - Caixa extra longo",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/FOSFORO.jpg`,
    isRenovaClean: false
  },
  {
    id: "filtro-cafe-melitta",
    name: "Filtro de Café Melitta",
    description: "Original 102 e 103 - Pacote com 30 unidades",
    category: "Copa e Cozinha",
    categorySlug: "copa-cozinha",
    image: `${BASE_IMAGE_URL}/Materialdelimpeza/FILTRO-CAFE.jpg`,
    isRenovaClean: false
  },
];

