/**
 * KIFULA - Base de dados completa de escolas de Angola
 * Luanda → Cabinda (Privadas e Públicas)
 * Autor: Deive Valentim / David Afonso Valentim Calungo
 * The Vision Corp - 975912613
 */

export type SchoolType = "Privado" | "Público";
export type EducationLevel = "Primário" | "1º Ciclo" | "2º Ciclo" | "Secundário" | "Médio" | "Misto";

export interface School {
  id: string;
  name: string;
  type: SchoolType;
  province: string;
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  levels: EducationLevel[];
  logo?: string;
  website?: string;
  founded?: number;
}

export const SCHOOLS: School[] = [
  // ==========================================
  // LUANDA - ESCOLAS PRIVADAS
  // ==========================================
  
  // Maianga
  {
    id: "cp-politecnico",
    name: "Colégio Politécnico The Vision",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Maianga, Rua Principal",
    phone: "975912613",
    email: "info@colgio-politecnico.ao",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário", "Médio"],
    founded: 2015,
    website: "www.colegio-politecnico.ao"
  },
  {
    id: "cp-ki-ntotila",
    name: "Colégio Ki-Ntotila",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Maianga",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2005
  },
  {
    id: "cp-malhangalene",
    name: "Colégio Malhangalene",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Maianga",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2010
  },

  // Alvalade
  {
    id: "cp-alvalade-premium",
    name: "Colégio Alvalade Premium",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Alvalade, Viana",
    phone: "222 123 456",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2012
  },
  {
    id: "cp-kkiama",
    name: "Colégio K-Kiama",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Alvalade",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2008
  },
  {
    id: "cp-caminho-certo",
    name: "Colégio Caminho Certo",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Alvalade, Viana",
    levels: ["Primário", "1º Ciclo"],
    founded: 2016
  },

  // Cazenga
  {
    id: "cp-cazenga-elite",
    name: "Colégio Cazenga Elite",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Cazenga",
    phone: "222 234 567",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2009
  },
  {
    id: "cp-futuro-brilhante",
    name: "Colégio Futuro Brilhante",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Cazenga",
    levels: ["Primário", "1º Ciclo"],
    founded: 2014
  },
  {
    id: "cp-sabedoria",
    name: "Colégio Sabedoria",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Cazenga",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2011
  },

  // Viana
  {
    id: "cp-viana-success",
    name: "Colégio Viana Success",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Viana",
    phone: "222 345 678",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário", "Médio"],
    founded: 2007
  },
  {
    id: "cp-nova-educacao",
    name: "Colégio Nova Educação",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Viana",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2013
  },
  {
    id: "cp-mundo-infantil",
    name: "Colégio Mundo Infantil",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Viana",
    levels: ["Primário"],
    founded: 2018
  },

  // Benilson
  {
    id: "cp-benilson-acao",
    name: "Colégio Benilson em Ação",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Benilson",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2010
  },
  {
    id: "cp-genesis",
    name: "Colégio Gênesis",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Benilson",
    levels: ["Primário", "1º Ciclo"],
    founded: 2015
  },

  // Ingombota
  {
    id: "cp-ingombota-top",
    name: "Colégio Ingombota Top",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Ingombota",
    phone: "222 456 789",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2008
  },
  {
    id: "cp-conhecimento",
    name: "Colégio Conhecimento",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Ingombota",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2009
  },
  {
    id: "cp-horizonte-novo",
    name: "Colégio Horizonte Novo",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Ingombota",
    levels: ["Primário", "1º Ciclo"],
    founded: 2017
  },

  // Sambizanga
  {
    id: "cp-sambizanga-premium",
    name: "Colégio Sambizanga Premium",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Sambizanga",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2012
  },
  {
    id: "cp-desenvolvimento",
    name: "Colégio Desenvolvimento",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Sambizanga",
    levels: ["Primário", "1º Ciclo"],
    founded: 2014
  },

  // Samba
  {
    id: "cp-samba-inteligencia",
    name: "Colégio Samba Inteligência",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Samba",
    phone: "222 567 890",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2006
  },
  {
    id: "cp-sucesso-total",
    name: "Colégio Sucesso Total",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Samba",
    levels: ["Primário", "1º Ciclo"],
    founded: 2016
  },

  // Praia do Bispo
  {
    id: "cp-praia-bispo-elite",
    name: "Colégio Praia do Bispo Elite",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Praia do Bispo",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2011
  },

  // Kinaxixe
  {
    id: "cp-kinaxixe-saber",
    name: "Colégio Kinaxixe Saber",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Kinaxixe",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2013
  },

  // Maculusso
  {
    id: "cp-maculusso-top",
    name: "Colégio Maculusso Top",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Maculusso",
    phone: "222 678 901",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2010
  },

  // Patriota
  {
    id: "cp-patriota-educacao",
    name: "Colégio Patriota Educação",
    type: "Privado",
    province: "Luanda",
    city: "Luanda",
    address: "Patriota",
    levels: ["Primário", "1º Ciclo"],
    founded: 2015
  },

  // ==========================================
  // LUANDA - ESCOLAS PÚBLICAS
  // ==========================================

  {
    id: "ep-ensino-nacional",
    name: "Escola Primária Nacional Nº 1",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Maianga",
    levels: ["Primário"],
    founded: 1980
  },
  {
    id: "ep-nacional-2",
    name: "Escola Primária Nacional Nº 2",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Alvalade",
    levels: ["Primário"],
    founded: 1985
  },
  {
    id: "ep-nacional-3",
    name: "Escola Primária Nacional Nº 3",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Cazenga",
    levels: ["Primário"],
    founded: 1982
  },
  {
    id: "escola-secundaria-nacional-1",
    name: "Escola Secundária Nacional 17 de Setembro",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Ingombota",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1975
  },
  {
    id: "escola-secundaria-nacional-2",
    name: "Escola Secundária Nacional 4 de Fevereiro",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Maianga",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1978
  },
  {
    id: "escola-secundaria-nacional-3",
    name: "Escola Secundária Nacional 16 de Junho",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Viana",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1981
  },
  {
    id: "escola-secundaria-nacional-4",
    name: "Escola Secundária Nacional Mártires de Cassinga",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Cazenga",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1977
  },
  {
    id: "escola-secundaria-nacional-5",
    name: "Escola Secundária Nacional 11 de Novembro",
    type: "Público",
    province: "Luanda",
    city: "Luanda",
    address: "Samba",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1979
  },

  // ==========================================
  // BENGO - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-bengo-premium",
    name: "Colégio Bengo Premium",
    type: "Privado",
    province: "Bengo",
    city: "Caxito",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2012
  },
  {
    id: "ep-bengo-nacional",
    name: "Escola Primária Nacional Caxito",
    type: "Público",
    province: "Bengo",
    city: "Caxito",
    levels: ["Primário"],
    founded: 1985
  },

  // ==========================================
  // KWANZA SUL - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-sumbe-elite",
    name: "Colégio Sumbe Elite",
    type: "Privado",
    province: "Kwanza Sul",
    city: "Sumbe",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2010
  },
  {
    id: "ep-sumbe-nacional",
    name: "Escola Secundária Nacional Sumbe",
    type: "Público",
    province: "Kwanza Sul",
    city: "Sumbe",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1980
  },

  // ==========================================
  // KWANZA NORTE - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-ndalatando-success",
    name: "Colégio Ndalatando Success",
    type: "Privado",
    province: "Kwanza Norte",
    city: "Ndalatando",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2011
  },
  {
    id: "ep-ndalatando-nacional",
    name: "Escola Secundária Nacional Ndalatando",
    type: "Público",
    province: "Kwanza Norte",
    city: "Ndalatando",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1978
  },

  // ==========================================
  // MALANGE - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-malange-futuro",
    name: "Colégio Malange Futuro",
    type: "Privado",
    province: "Malange",
    city: "Malange",
    phone: "252 234 567",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2009
  },
  {
    id: "cp-malange-saber",
    name: "Colégio Malange Saber",
    type: "Privado",
    province: "Malange",
    city: "Malange",
    levels: ["Primário", "1º Ciclo"],
    founded: 2015
  },
  {
    id: "ep-malange-nacional",
    name: "Escola Secundária Nacional Malange",
    type: "Público",
    province: "Malange",
    city: "Malange",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1975
  },

  // ==========================================
  // LUNDA SUL - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-saurimo-elite",
    name: "Colégio Saurimo Elite",
    type: "Privado",
    province: "Lunda Sul",
    city: "Saurimo",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2013
  },
  {
    id: "ep-saurimo-nacional",
    name: "Escola Secundária Nacional Saurimo",
    type: "Público",
    province: "Lunda Sul",
    city: "Saurimo",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1982
  },

  // ==========================================
  // LUNDA NORTE - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-dundo-success",
    name: "Colégio Dundo Success",
    type: "Privado",
    province: "Lunda Norte",
    city: "Dundo",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 2010
  },
  {
    id: "ep-dundo-nacional",
    name: "Escola Secundária Nacional Dundo",
    type: "Público",
    province: "Lunda Norte",
    city: "Dundo",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1980
  },

  // ==========================================
  // CABINDA - ESCOLAS PRIVADAS E PÚBLICAS
  // ==========================================

  {
    id: "cp-cabinda-futuro",
    name: "Colégio Cabinda Futuro",
    type: "Privado",
    province: "Cabinda",
    city: "Cabinda",
    phone: "231 234 567",
    levels: ["Primário", "1º Ciclo", "2º Ciclo", "Secundário", "Médio"],
    founded: 2008
  },
  {
    id: "cp-cabinda-elite",
    name: "Colégio Cabinda Elite",
    type: "Privado",
    province: "Cabinda",
    city: "Cabinda",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2014
  },
  {
    id: "cp-cabinda-saber",
    name: "Colégio Cabinda Saber",
    type: "Privado",
    province: "Cabinda",
    city: "Cabinda",
    levels: ["Primário", "1º Ciclo"],
    founded: 2016
  },
  {
    id: "ep-cabinda-nacional",
    name: "Escola Secundária Nacional Cabinda",
    type: "Público",
    province: "Cabinda",
    city: "Cabinda",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1976
  },
  {
    id: "ep-cabinda-primaria",
    name: "Escola Primária Nacional Cabinda",
    type: "Público",
    province: "Cabinda",
    city: "Cabinda",
    levels: ["Primário"],
    founded: 1978
  },

  // ==========================================
  // ZAIRE - ESCOLAS (Próximo a Cabinda)
  // ==========================================

  {
    id: "cp-zaire-educacao",
    name: "Colégio Zaire Educação",
    type: "Privado",
    province: "Zaire",
    city: "M'banza-Kongo",
    levels: ["Primário", "1º Ciclo", "2º Ciclo"],
    founded: 2012
  },
  {
    id: "ep-zaire-nacional",
    name: "Escola Secundária Nacional Zaire",
    type: "Público",
    province: "Zaire",
    city: "M'banza-Kongo",
    levels: ["1º Ciclo", "2º Ciclo", "Secundário"],
    founded: 1979
  }
];

export const PROVINCES = [
  "Luanda",
  "Bengo",
  "Kwanza Sul",
  "Kwanza Norte",
  "Malange",
  "Lunda Sul",
  "Lunda Norte",
  "Cabinda",
  "Zaire"
];

export function getSchoolsByProvince(province: string): School[] {
  return SCHOOLS.filter(s => s.province === province);
}

export function getSchoolsByType(type: SchoolType): School[] {
  return SCHOOLS.filter(s => s.type === type);
}

export function searchSchools(query: string): School[] {
  const q = query.toLowerCase();
  return SCHOOLS.filter(s =>
    s.name.toLowerCase().includes(q) ||
    s.city.toLowerCase().includes(q) ||
    s.province.toLowerCase().includes(q)
  );
}

export function getSchoolById(id: string): School | undefined {
  return SCHOOLS.find(s => s.id === id);
}
