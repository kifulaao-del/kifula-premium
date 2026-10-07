// ==========================================
// KIFULA PREMIUM - BIBLIOTECA INTELIGENTE DE TEMAS
// Autor: Deive Valentim / The Vision Corp
// Contacto: 975912613
// ==========================================

export interface Tema {
  id: string;
  titulo: string;
  descricao: string;
  disciplina: string;
  classe: string;
  escola?: string;
  provincia: string;
  tipo: "público" | "privado" | "técnico" | "politécnico";
  nivelAcademico: "primário" | "I-ciclo" | "II-ciclo" | "médio" | "politécnico";
  tipoTrabalho: "monografia" | "dissertação" | "resumo" | "ensaio" | "artigo" | "projeto";
  anoAcademico: number;
  creditosPara: "gratis" | "pesquisa_avancada" | "completo";
  custoCreditos?: number;
  palavrasChave: string[];
  conteudoPreview: string;
  conteudoCompleto?: string;
  autor?: string;
  dataPublicacao: Date;
  visualizacoes: number;
  avaliacaoMedia?: number;
  avaliacaos?: number;
  pago: boolean;
  destaque: boolean;
  premium: boolean;
}

export interface BuscaFiltros {
  palavra?: string;
  disciplina?: string;
  classe?: string;
  escola?: string;
  provincia?: string;
  tipo?: string;
  nivelAcademico?: string;
  tipoTrabalho?: string;
  anoAcademico?: number;
  ordenarPor?: "relevancia" | "popular" | "recente" | "rating";
  apenas_gratis?: boolean;
  apenas_premium?: boolean;
}

export interface ResultadoBusca {
  total: number;
  pagina: number;
  porPagina: number;
  temas: Tema[];
  filtrosAplicados: BuscaFiltros;
  tempoBusca: number;
}

// ==========================================
// BIBLIOTECA DE TEMAS (DATABASE SIMULADA)
// ==========================================

export const BIBLIOTECA_TEMAS: Tema[] = [
  // MATEMÁTICA - 12.ª CLASSE
  {
    id: "tema_001",
    titulo: "Funções Quadráticas e Suas Aplicações na Física Moderna",
    descricao: "Análise profunda de funções quadráticas com aplicações práticas em problemas de física",
    disciplina: "Matemática",
    classe: "12.ª",
    escola: "Colégio Politécnico The Vision",
    provincia: "Luanda",
    tipo: "privado",
    nivelAcademico: "médio",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 1,
    palavrasChave: ["funções", "quadráticas", "física", "parábola"],
    conteudoPreview: "As funções quadráticas são fundamentais em diversas áreas da física...",
    autor: "Prof. Dr. José Silva",
    dataPublicacao: new Date("2026-01-15"),
    visualizacoes: 1250,
    avaliacaoMedia: 4.8,
    avaliacaos: 156,
    pago: false,
    destaque: true,
    premium: false
  },
  {
    id: "tema_002",
    titulo: "Cálculo Diferencial e Integral - Métodos Avançados",
    descricao: "Técnicas avançadas de cálculo com aplicações em engenharia",
    disciplina: "Matemática",
    classe: "12.ª",
    escola: "Instituto Superior de Ciências da Educação",
    provincia: "Luanda",
    tipo: "público",
    nivelAcademico: "médio",
    tipoTrabalho: "dissertação",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 2,
    palavrasChave: ["cálculo", "derivadas", "integrais"],
    conteudoPreview: "O cálculo diferencial e integral é essencial para a engenharia...",
    dataPublicacao: new Date("2026-02-01"),
    visualizacoes: 890,
    avaliacaoMedia: 4.6,
    avaliacaos: 98,
    pago: true,
    destaque: false,
    premium: true
  },

  // FÍSICA - 12.ª CLASSE
  {
    id: "tema_003",
    titulo: "Termologia e Leis da Termodinâmica",
    descricao: "Estudo completo de temperatura, calor e processos termodinâmicos",
    disciplina: "Física",
    classe: "12.ª",
    escola: "Colégio Politécnico The Vision",
    provincia: "Luanda",
    tipo: "privado",
    nivelAcademico: "médio",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "gratis",
    palavrasChave: ["termologia", "termodinâmica", "calor", "temperatura"],
    conteudoPreview: "A termologia estuda os fenômenos relacionados ao calor...",
    dataPublicacao: new Date("2026-01-20"),
    visualizacoes: 2100,
    avaliacaoMedia: 4.9,
    avaliacaos: 234,
    pago: false,
    destaque: true,
    premium: false
  },
  {
    id: "tema_004",
    titulo: "Óptica Geométrica e Lentes - Aplicações Práticas",
    descricao: "Fenômenos ópticos com foco em instrumentos ópticos e suas aplicações",
    disciplina: "Física",
    classe: "11.ª",
    escola: "Escola Secundária 11 de Novembro",
    provincia: "Luanda",
    tipo: "público",
    nivelAcademico: "médio",
    tipoTrabalho: "ensaio",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 1,
    palavrasChave: ["óptica", "lentes", "refração", "reflexão"],
    conteudoPreview: "A óptica geométrica descreve o comportamento da luz...",
    dataPublicacao: new Date("2026-02-10"),
    visualizacoes: 1456,
    avaliacaoMedia: 4.7,
    avaliacaos: 178,
    pago: false,
    destaque: true,
    premium: false
  },

  // QUÍMICA - 12.ª CLASSE
  {
    id: "tema_005",
    titulo: "Reações Químicas e Estequiometria em Processos Industriais",
    descricao: "Análise de reações químicas com aplicações industriais em Angola",
    disciplina: "Química",
    classe: "12.ª",
    escola: "Escola de Formação Técnica de Luanda",
    provincia: "Luanda",
    tipo: "técnico",
    nivelAcademico: "médio",
    tipoTrabalho: "projeto",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 2,
    palavrasChave: ["reações", "estequiometria", "indústria"],
    conteudoPreview: "As reações químicas são fundamentais em todos os processos industriais...",
    dataPublicacao: new Date("2026-01-25"),
    visualizacoes: 980,
    avaliacaoMedia: 4.5,
    avaliacaos: 112,
    pago: true,
    destaque: false,
    premium: true
  },

  // BIOLOGIA - TODOS OS NIVEIS
  {
    id: "tema_006",
    titulo: "Genética Moderna e Leis de Mendel",
    descricao: "Herança genética e aplicações da genética moderna",
    disciplina: "Biologia",
    classe: "10.ª",
    escola: "Colégio Nossa Senhora da Conceição",
    provincia: "Luanda",
    tipo: "privado",
    nivelAcademico: "médio",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "gratis",
    palavrasChave: ["genética", "mendel", "herança", "cromossomos"],
    conteudoPreview: "A genética é a ciência que estuda a hereditariedade...",
    dataPublicacao: new Date("2026-02-05"),
    visualizacoes: 2345,
    avaliacaoMedia: 4.9,
    avaliacaos: 289,
    pago: false,
    destaque: true,
    premium: false
  },
  {
    id: "tema_007",
    titulo: "Ecologia e Biodiversidade de Angola",
    descricao: "Estudo dos ecossistemas angolanos e sua conservação",
    disciplina: "Biologia",
    classe: "9.ª",
    escola: "Escola Secundária de Benguela",
    provincia: "Benguela",
    tipo: "público",
    nivelAcademico: "I-ciclo",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "gratis",
    palavrasChave: ["ecologia", "biodiversidade", "fauna", "flora"],
    conteudoPreview: "Angola possui uma extraordinária riqueza biológica...",
    dataPublicacao: new Date("2026-01-30"),
    visualizacoes: 1678,
    avaliacaoMedia: 4.6,
    avaliacaos: 145,
    pago: false,
    destaque: true,
    premium: false
  },

  // ENGENHARIA DE PRODUÇÃO - TÉCNICO
  {
    id: "tema_008",
    titulo: "Tecnologias de Perfuração Offshore em Blocos Petrolíferos de Angola",
    descricao: "Análise detalhada de tecnologias de perfuração moderna",
    disciplina: "Engenharia de Produção",
    classe: "12.ª",
    escola: "Colégio Politécnico The Vision",
    provincia: "Luanda",
    tipo: "técnico",
    nivelAcademico: "politécnico",
    tipoTrabalho: "dissertação",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 3,
    palavrasChave: ["perfuração", "petróleo", "offshore", "tecnologia"],
    conteudoPreview: "A perfuração offshore é uma tecnologia crítica para a exploração de petróleo...",
    autor: "Prof. Eng. Mário dos Santos",
    dataPublicacao: new Date("2026-02-15"),
    visualizacoes: 3456,
    avaliacaoMedia: 4.9,
    avaliacaos: 412,
    pago: true,
    destaque: true,
    premium: true
  },
  {
    id: "tema_009",
    titulo: "Processos de Soldadura Industrial - MIG, MAG e TIG",
    descricao: "Processos avançados de soldadura com segurança industrial",
    disciplina: "Processos de Soldadura",
    classe: "11.ª",
    escola: "Escola de Formação Técnica de Luanda",
    provincia: "Luanda",
    tipo: "técnico",
    nivelAcademico: "politécnico",
    tipoTrabalho: "projeto",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 2,
    palavrasChave: ["soldadura", "MIG", "MAG", "TIG", "segurança"],
    conteudoPreview: "A soldadura é um processo essencial na indústria...",
    dataPublicacao: new Date("2026-01-18"),
    visualizacoes: 1234,
    avaliacaoMedia: 4.7,
    avaliacaos: 156,
    pago: true,
    destaque: false,
    premium: true
  },

  // HISTÓRIA E HISTÓRIA DE ANGOLA
  {
    id: "tema_010",
    titulo: "A Independência de Angola - 11 de Novembro de 1975",
    descricao: "Análise histórica do processo de independência angolano",
    disciplina: "História",
    classe: "9.ª",
    escola: "Escola Secundária 11 de Novembro",
    provincia: "Luanda",
    tipo: "público",
    nivelAcademico: "I-ciclo",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "gratis",
    palavrasChave: ["independência", "angola", "1975", "história"],
    conteudoPreview: "O 11 de Novembro de 1975 marca a data da independência de Angola...",
    dataPublicacao: new Date("2026-02-01"),
    visualizacoes: 5123,
    avaliacaoMedia: 4.9,
    avaliacaos: 598,
    pago: false,
    destaque: true,
    premium: false
  },
  {
    id: "tema_011",
    titulo: "O Reino do Ndongo e a Rainha Nzinga Mbandi",
    descricao: "Estudo sobre a história colonial de Angola",
    disciplina: "História",
    classe: "8.ª",
    escola: "Colégio Nossa Senhora da Conceição",
    provincia: "Luanda",
    tipo: "privado",
    nivelAcademico: "I-ciclo",
    tipoTrabalho: "ensaio",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 1,
    palavrasChave: ["ndongo", "nzinga", "história", "colonial"],
    conteudoPreview: "A história do reino do Ndongo é fundamental para entender Angola...",
    dataPublicacao: new Date("2026-02-08"),
    visualizacoes: 2876,
    avaliacaoMedia: 4.8,
    avaliacaos: 234,
    pago: false,
    destaque: true,
    premium: false
  },

  // GEOGRAFIA
  {
    id: "tema_012",
    titulo: "Hidrografia de Angola - Rios Kwanza e Cunene",
    descricao: "Análise dos principais rios angolanos e seu papel económico",
    disciplina: "Geografia",
    classe: "8.ª",
    escola: "Escola Secundária 11 de Novembro",
    provincia: "Luanda",
    tipo: "público",
    nivelAcademico: "I-ciclo",
    tipoTrabalho: "monografia",
    anoAcademico: 2026,
    creditosPara: "gratis",
    palavrasChave: ["hidrografia", "kwanza", "cunene", "rios"],
    conteudoPreview: "Os rios Kwanza e Cunene são fundamentais para Angola...",
    dataPublicacao: new Date("2026-01-22"),
    visualizacoes: 1234,
    avaliacaoMedia: 4.6,
    avaliacaos: 145,
    pago: false,
    destaque: false,
    premium: false
  },

  // PORTUGUÊS
  {
    id: "tema_013",
    titulo: "Movimentos Literários Angolanos - Agostinho Neto e Pepetela",
    descricao: "Literatura angolana moderna e seus principais autores",
    disciplina: "Língua Portuguesa",
    classe: "11.ª",
    escola: "Instituto Superior de Ciências da Educação",
    provincia: "Luanda",
    tipo: "público",
    nivelAcademico: "médio",
    tipoTrabalho: "dissertação",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 2,
    palavrasChave: ["literatura", "angolana", "agostinho neto", "pepetela"],
    conteudoPreview: "A literatura angolana é uma das mais ricas de África...",
    dataPublicacao: new Date("2026-02-12"),
    visualizacoes: 1987,
    avaliacaoMedia: 4.8,
    avaliacaos: 201,
    pago: false,
    destaque: true,
    premium: false
  },

  // TIC E TECNOLOGIA
  {
    id: "tema_014",
    titulo: "Programação Web Moderna com React e Node.js",
    descricao: "Tecnologias modernas de desenvolvimento web",
    disciplina: "TIC",
    classe: "12.ª",
    escola: "Escola de Ciências e Tecnologia",
    provincia: "Luanda",
    tipo: "técnico",
    nivelAcademico: "médio",
    tipoTrabalho: "projeto",
    anoAcademico: 2026,
    creditosPara: "pesquisa_avancada",
    custoCreditos: 2,
    palavrasChave: ["programação", "react", "node.js", "web"],
    conteudoPreview: "A programação web moderna utiliza frameworks poderosos...",
    dataPublicacao: new Date("2026-01-10"),
    visualizacoes: 3456,
    avaliacaoMedia: 4.9,
    avaliacaos: 567,
    pago: false,
    destaque: true,
    premium: true
  }
];

// ==========================================
// FUNCOES DE BUSCA E FILTRO
// ==========================================

export function buscarTemas(filtros: BuscaFiltros): ResultadoBusca {
  const inicio = Date.now();
  let resultados = [...BIBLIOTECA_TEMAS];

  // Filtro por palavra-chave
  if (filtros.palavra) {
    const palavraBaixa = filtros.palavra.toLowerCase();
    resultados = resultados.filter(
      (t) =>
        t.titulo.toLowerCase().includes(palavraBaixa) ||
        t.descricao.toLowerCase().includes(palavraBaixa) ||
        t.palavrasChave.some((p) => p.toLowerCase().includes(palavraBaixa))
    );
  }

  // Filtro por disciplina
  if (filtros.disciplina) {
    resultados = resultados.filter((t) => t.disciplina === filtros.disciplina);
  }

  // Filtro por classe
  if (filtros.classe) {
    resultados = resultados.filter((t) => t.classe === filtros.classe);
  }

  // Filtro por escola
  if (filtros.escola) {
    resultados = resultados.filter((t) => t.escola === filtros.escola);
  }

  // Filtro por província
  if (filtros.provincia) {
    resultados = resultados.filter((t) => t.provincia === filtros.provincia);
  }

  // Filtro por tipo de ensino
  if (filtros.tipo) {
    resultados = resultados.filter((t) => t.tipo === filtros.tipo);
  }

  // Filtro por nível académico
  if (filtros.nivelAcademico) {
    resultados = resultados.filter((t) => t.nivelAcademico === filtros.nivelAcademico);
  }

  // Filtro por tipo de trabalho
  if (filtros.tipoTrabalho) {
    resultados = resultados.filter((t) => t.tipoTrabalho === filtros.tipoTrabalho);
  }

  // Filtro por ano académico
  if (filtros.anoAcademico) {
    resultados = resultados.filter((t) => t.anoAcademico === filtros.anoAcademico);
  }

  // Filtro apenas grátis
  if (filtros.apenas_gratis) {
    resultados = resultados.filter((t) => !t.pago);
  }

  // Filtro apenas premium
  if (filtros.apenas_premium) {
    resultados = resultados.filter((t) => t.premium);
  }

  // Ordenação
  const ordenarPor = filtros.ordenarPor || "relevancia";
  if (ordenarPor === "popular") {
    resultados.sort((a, b) => b.visualizacoes - a.visualizacoes);
  } else if (ordenarPor === "recente") {
    resultados.sort((a, b) => b.dataPublicacao.getTime() - a.dataPublicacao.getTime());
  } else if (ordenarPor === "rating") {
    resultados.sort((a, b) => (b.avaliacaoMedia || 0) - (a.avaliacaoMedia || 0));
  }

  const tempoBusca = Date.now() - inicio;

  return {
    total: resultados.length,
    pagina: 1,
    porPagina: 12,
    temas: resultados.slice(0, 12),
    filtrosAplicados: filtros,
    tempoBusca
  };
}

export function obterTemaPorId(id: string): Tema | undefined {
  return BIBLIOTECA_TEMAS.find((t) => t.id === id);
}

export function obterTemasPorDisciplina(disciplina: string): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.disciplina === disciplina);
}

export function obterTemasPorClasse(classe: string): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.classe === classe);
}

export function obterTemasPorEscola(escola: string): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.escola === escola);
}

export function obterTemasPorProvincia(provincia: string): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.provincia === provincia);
}

export function obterTemasDestaque(): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.destaque).slice(0, 6);
}

export function obterTemasMaisVistos(): Tema[] {
  return [...BIBLIOTECA_TEMAS].sort((a, b) => b.visualizacoes - a.visualizacoes).slice(0, 12);
}

export function obterTemasRecentes(): Tema[] {
  return [...BIBLIOTECA_TEMAS].sort((a, b) => b.dataPublicacao.getTime() - a.dataPublicacao.getTime()).slice(0, 12);
}

export function obterTemasGratis(): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => !t.pago);
}

export function obterTemasPremium(): Tema[] {
  return BIBLIOTECA_TEMAS.filter((t) => t.premium);
}

export function contarTemasPorDisciplina(): Record<string, number> {
  const contagem: Record<string, number> = {};
  BIBLIOTECA_TEMAS.forEach((t) => {
    contagem[t.disciplina] = (contagem[t.disciplina] || 0) + 1;
  });
  return contagem;
}

export function contarTemasPorClasse(): Record<string, number> {
  const contagem: Record<string, number> = {};
  BIBLIOTECA_TEMAS.forEach((t) => {
    contagem[t.classe] = (contagem[t.classe] || 0) + 1;
  });
  return contagem;
}
