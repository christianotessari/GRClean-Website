export type CategorySlug = 
  | 'aromatizantes-ambientes'
  | 'limpeza-geral'
  | 'limpeza-pesada'
  | 'lavanderia'
  | 'tratamento-piso'
  | 'material-limpeza-quimicos'
  | 'material-limpeza-vidros-moveis'
  | 'material-limpeza-saboes-sapolios'
  | 'material-limpeza-diversos'
  | 'higiene-alcool-gel'
  | 'higiene-sabonetes'
  | 'papel-higienico'
  | 'papel-toalha'
  | 'utilitarios-pas-vassouras'
  | 'utilitarios-baldes-esponjas'
  | 'utilitarios-ferramentas'
  | 'utilitarios-equipamentos'
  | 'lixeiras-coleta'
  | 'dispensers-distribuidores'
  | 'descartaveis-epis'
  | 'copa-cozinha';

export type CategoryName = 
  | 'Aromatizantes de Ambientes'
  | 'Limpeza em Geral'
  | 'Limpeza Pesada'
  | 'Lavanderia'
  | 'Tratamento de Piso'
  | 'Produtos Químicos'
  | 'Vidros e Móveis'
  | 'Sabões e Sapólios'
  | 'Diversos'
  | 'Higiene Pessoal'
  | 'Papel Higiênico'
  | 'Papel Toalha'
  | 'Utilitários'
  | 'Lixeiras e Coleta'
  | 'Dispensers'
  | 'EPIs e Descartáveis'
  | 'Copa e Cozinha';

export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: CategorySlug;
  subcategory?: string;
  description: string;
  dilution?: string;
  fragrance?: string;
  tags?: string[];
  sizes?: string[];
  brand?: string;
  image: string;
  isRenovaClean: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description?: string;
  image?: string;
  subcategories?: { name: string; products?: any[] }[];
}
