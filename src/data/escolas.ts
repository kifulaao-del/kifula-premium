// ==========================================
// KIFULA PREMIUM - DATABASE DE ESCOLAS ANGOLANAS
// Autor: Deive Valentim / The Vision Corp
// Contacto: 975912613
// ==========================================

export interface Escola {
  id: string;
  nome: string;
  tipo: "Público" | "Privado" | "Técnico" | "Politécnico" | "Universitário";
  provincia: string;
  municipio: string;
  localizacao: string;
  telefone?: string;
  email?: string;
  classes: string[];
  disciplinas: string[];
  logoUrl?: string;
  descricao?: string;
}

export const ESCOLAS_ANGOLANAS: Escola[] = [
  // LUANDA
  {
    id: "escola_001",
    nome: "Colégio Politécnico The Vision",
    tipo: "Politécnico",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Ingombota, Av. Henrique Galvão",
    telefone: "975912613",
    email: "info@theVisionCorp.ao",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Perfuração e Produção de Petróleo",
      "Tecnologia de Perfuração",
      "Engenharia de Produção",
      "Processos de Soldadura",
      "Metalurgia da Soldadura"
    ],
    descricao: "Instituto técnico especializado em engenharia de petróleo e tecnologia industrial"
  },
  {
    id: "escola_002",
    nome: "Escola Secundária 11 de Novembro",
    tipo: "Público",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Cazenga",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "7.ª", "8.ª", "9.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Matemática",
      "História",
      "Geografia",
      "Biologia",
      "Física",
      "Química"
    ],
    descricao: "Escola pública de ensino primário e primeiro ciclo do secundário"
  },
  {
    id: "escola_003",
    nome: "Instituto Superior de Ciências da Educação (ISCED)",
    tipo: "Universitário",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Talatona",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Filosofia",
      "Educação Moral e Cívica",
      "História da Educação",
      "Didática"
    ],
    descricao: "Instituição de formação de professores e educadores"
  },
  {
    id: "escola_004",
    nome: "Colégio Nossa Senhora da Conceição",
    tipo: "Privado",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Miramar",
    telefone: "924999999",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "7.ª", "8.ª", "9.ª", "10.ª", "11.ª", "12.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Inglês",
      "Francês",
      "Matemática",
      "Ciências",
      "História",
      "Geografia",
      "TIC"
    ],
    descricao: "Colégio privado com currículo internacional e foco em idiomas"
  },
  {
    id: "escola_005",
    nome: "Escola de Ciências e Tecnologia",
    tipo: "Técnico",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Kilamba",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "TIC",
      "Empreendedorismo",
      "Automação Industrial",
      "Programação",
      "Redes de Computadores"
    ],
    descricao: "Centro técnico especializado em tecnologia da informação e inovação"
  },
  {
    id: "escola_006",
    nome: "Escola de Formação Técnica de Luanda (EFTL)",
    tipo: "Técnico",
    provincia: "Luanda",
    municipio: "Luanda",
    localizacao: "Viana",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Soldadura Industrial",
      "Mecânica Geral",
      "Desenho Técnico",
      "Metalurgia",
      "Eletricidade"
    ],
    descricao: "Instituição de formação em ofícios técnicos e industriais"
  },

  // BENGUELA
  {
    id: "escola_007",
    nome: "Escola Secundária de Benguela",
    tipo: "Público",
    provincia: "Benguela",
    municipio: "Benguela",
    localizacao: "Centro da Cidade",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "7.ª", "8.ª", "9.ª", "10.ª", "11.ª", "12.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Matemática",
      "História",
      "Geografia",
      "Biologia",
      "Física",
      "Química",
      "Educação Moral e Cívica"
    ],
    descricao: "Escola pública com cobertura completa de ensino primário a médio"
  },
  {
    id: "escola_008",
    nome: "Instituto Politécnico de Benguela",
    tipo: "Politécnico",
    provincia: "Benguela",
    municipio: "Benguela",
    localizacao: "Zona Industrial",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Engenharia Civil",
      "Engenharia Mecânica",
      "Gestão de Projetos",
      "Construção e Obras"
    ],
    descricao: "Centro de formação técnica focado em engenharia civil e construção"
  },

  // HUAMBO
  {
    id: "escola_009",
    nome: "Escola Secundária de Huambo",
    tipo: "Público",
    provincia: "Huambo",
    municipio: "Huambo",
    localizacao: "Centro",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "7.ª", "8.ª", "9.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Matemática",
      "Estudo do Meio",
      "Educação Física",
      "Educação Manual e Plástica"
    ],
    descricao: "Escola pública no planalto central angolano"
  },

  // CABINDA
  {
    id: "escola_010",
    nome: "Escola de Formação Técnica de Cabinda (Petróleo)",
    tipo: "Técnico",
    provincia: "Cabinda",
    municipio: "Cabinda",
    localizacao: "Zona Portuária",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Perfuração de Petróleo",
      "Segurança Offshore",
      "Manutenção de Equipamentos",
      "Logística Portuária"
    ],
    descricao: "Centro especializado em formação técnica para indústria petrolífera"
  },

  // KWANZA SUL
  {
    id: "escola_011",
    nome: "Escola Secundária de Sumbe",
    tipo: "Público",
    provincia: "Kwanza Sul",
    municipio: "Sumbe",
    localizacao: "Cidade de Sumbe",
    classes: ["7.ª", "8.ª", "9.ª", "10.ª", "11.ª", "12.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Matemática",
      "História",
      "Geografia",
      "Biologia"
    ],
    descricao: "Escola pública na região costeira sul"
  },

  // CUANZA NORTE
  {
    id: "escola_012",
    nome: "Instituto de Formação Técnica de N'Dalatando",
    tipo: "Técnico",
    provincia: "Kwanza Norte",
    municipio: "N'Dalatando",
    localizacao: "Centro",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Agricultura Moderna",
      "Processos Agroindustriais",
      "Gestão Rural",
      "Tecnologia Agrícola"
    ],
    descricao: "Centro focado em formação técnica agrícola e agroindústria"
  },

  // NAMIBE
  {
    id: "escola_013",
    nome: "Escola Secundária do Namibe",
    tipo: "Público",
    provincia: "Namibe",
    municipio: "Namibe",
    localizacao: "Cidade do Namibe",
    classes: ["1.ª", "2.ª", "3.ª", "4.ª", "5.ª", "6.ª", "7.ª", "8.ª", "9.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "Matemática",
      "Educação Física",
      "Educação Musical"
    ],
    descricao: "Escola pública na região desértica do sudoeste"
  },

  // UÍGE
  {
    id: "escola_014",
    nome: "Escola de Formação Técnica de Uíge",
    tipo: "Técnico",
    provincia: "Uíge",
    municipio: "Uíge",
    localizacao: "Centro",
    classes: ["10.ª", "11.ª", "12.ª", "13.ª"],
    disciplinas: [
      "Silvicultura",
      "Gestão Florestal",
      "Processamento de Madeira",
      "Conservação Ambiental"
    ],
    descricao: "Centro de formação em recursos florestais e gestão ambiental"
  },

  // ZAIRE
  {
    id: "escola_015",
    nome: "Escola Secundária de M'Banza Congo",
    tipo: "Público",
    provincia: "Zaire",
    municipio: "M'Banza Congo",
    localizacao: "Antiga Capital",
    classes: ["7.ª", "8.ª", "9.ª", "10.ª", "11.ª", "12.ª"],
    disciplinas: [
      "Língua Portuguesa",
      "História",
      "Geografia",
      "Educação Moral e Cívica"
    ],
    descricao: "Escola pública na histórica região do norte"
  }
];

export const PROVINCIAS_ANGOLA = [
  "Luanda",
  "Bengo",
  "Kwanza Norte",
  "Kwanza Sul",
  "Huambo",
  "Bié",
  "Moxico",
  "Cuando Cubango",
  "Namibe",
  "Benguela",
  "Cabinda",
  "Uíge",
  "Zaire"
];

export const TIPOS_ESCOLA = ["Público", "Privado", "Técnico", "Politécnico", "Universitário"];

// Função para buscar escolas com filtros
export function buscarEscolas(filtros: {
  provincia?: string;
  tipo?: string;
  nome?: string;
}): Escola[] {
  return ESCOLAS_ANGOLANAS.filter((escola) => {
    if (filtros.provincia && escola.provincia !== filtros.provincia) return false;
    if (filtros.tipo && escola.tipo !== filtros.tipo) return false;
    if (filtros.nome && !escola.nome.toLowerCase().includes(filtros.nome.toLowerCase()))
      return false;
    return true;
  });
}

// Função para obter escola por ID
export function obterEscolaPorId(id: string): Escola | undefined {
  return ESCOLAS_ANGOLANAS.find((escola) => escola.id === id);
}

// Função para obter escolas por província
export function obterEscolasPorProvincia(provincia: string): Escola[] {
  return ESCOLAS_ANGOLANAS.filter((escola) => escola.provincia === provincia);
}

// Função para obter escolas por tipo
export function obterEscolasPorTipo(tipo: string): Escola[] {
  return ESCOLAS_ANGOLANAS.filter((escola) => escola.tipo === tipo);
}
