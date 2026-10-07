// ==========================================
// KIFULA PREMIUM - SISTEMA DE PAGAMENTO E MONETIZAÇÃO
// Autor: Deive Valentim / The Vision Corp
// Contacto: 975912613
// ==========================================

export interface PlanoSubscricao {
  id: string;
  nome: string;
  preco: number; // em AOA (Kwanzas angolanos)
  moedas: string; // "USD" | "AOA" | "BRL"
  creditos: number;
  trabalhosPDF: number; // quantos PDFs pode gerar
  templatesPremium: boolean;
  suportePrioritario: boolean;
  renovacao: "mensal" | "trimestral" | "anual";
  desconto?: number; // percentagem
  descricao: string;
  beneficios: string[];
}

export interface Credito {
  id: string;
  usuarioId: string;
  saldo: number;
  dataCriacao: Date;
  dataUltimoUso?: Date;
  expiracaoData?: Date;
}

export interface Transacao {
  id: string;
  usuarioId: string;
  tipo: "compra" | "uso" | "reembolso" | "bonus";
  descricao: string;
  valor: number;
  dataTransacao: Date;
  metodo?: "cartao" | "transferencia" | "m-pesa" | "emola" | "moedim";
  status: "pendente" | "concluida" | "falhada" | "cancelada";
  referencia?: string;
}

export interface Compra {
  id: string;
  usuarioId: string;
  planoId: string;
  dataCompra: Date;
  dataExpiracao: Date;
  status: "ativa" | "expirada" | "cancelada";
  valor: number;
  creditos: number;
  trabalhosPDF: number;
  metodo: string;
}

export interface Usuario {
  id: string;
  email: string;
  nome: string;
  creditoDisponivel: number;
  planoAtivo?: string;
  trabalhosCriadosHoje: number;
  trabalhosCriadosMes: number;
  dataCadastro: Date;
  ultimoAcesso: Date;
  isPremium: boolean;
  metodosPagamento: MetodoPagamento[];
}

export interface MetodoPagamento {
  id: string;
  tipo: "cartao" | "transferencia" | "m-pesa" | "emola" | "moedim";
  principal: boolean;
  ultimosDigitos?: string;
  nomeTitular?: string;
  dataValidade?: string;
}

// ==========================================
// PLANOS DE SUBSCRICAO
// ==========================================

export const PLANOS_SUBSCRICAO: PlanoSubscricao[] = [
  {
    id: "plano_basico",
    nome: "Basico (Gratuito)",
    preco: 0,
    moedas: "AOA",
    creditos: 0,
    trabalhosPDF: 1, // 1 PDF por mês
    templatesPremium: false,
    suportePrioritario: false,
    renovacao: "mensal",
    descricao: "Ideal para quem quer experimentar",
    beneficios: [
      "1 PDF por mês",
      "Pesquisa ilimitada de matérias",
      "Suporte básico por email",
      "Biblioteca de temas grátis"
    ]
  },
  {
    id: "plano_estudante",
    nome: "Estudante (Mensal)",
    preco: 5000, // ~40 USD
    moedas: "AOA",
    creditos: 50,
    trabalhosPDF: 5,
    templatesPremium: true,
    suportePrioritario: false,
    renovacao: "mensal",
    desconto: 0,
    descricao: "Perfeito para estudantes ativos",
    beneficios: [
      "5 PDFs por mês",
      "50 créditos",
      "Templates premium",
      "QR Code de validação",
      "Logo personalizado",
      "Pesquisa avançada de escolas",
      "Suporte por email"
    ]
  },
  {
    id: "plano_estudante_trimestral",
    nome: "Estudante (Trimestral)",
    preco: 14000, // ~110 USD (10% desconto)
    moedas: "AOA",
    creditos: 160,
    trabalhosPDF: 16,
    templatesPremium: true,
    suportePrioritario: false,
    renovacao: "trimestral",
    desconto: 10,
    descricao: "Melhor economia para 3 meses",
    beneficios: [
      "16 PDFs por trimestre",
      "160 créditos",
      "Templates premium",
      "QR Code de validação",
      "Logo personalizado",
      "Pesquisa avançada",
      "Suporte prioritário",
      "Acesso a biblioteca premium"
    ]
  },
  {
    id: "plano_estudante_anual",
    nome: "Estudante (Anual)",
    preco: 50000, // ~400 USD (20% desconto)
    moedas: "AOA",
    creditos: 600,
    trabalhosPDF: 60,
    templatesPremium: true,
    suportePrioritario: true,
    renovacao: "anual",
    desconto: 20,
    descricao: "Melhor valor anual com máximo desconto",
    beneficios: [
      "60 PDFs por ano",
      "600 créditos",
      "Templates premium ilimitados",
      "QR Code de validação",
      "Logo personalizado",
      "Pesquisa avançada",
      "Suporte prioritário 24/7",
      "Acesso completo biblioteca",
      "Temas exclusivos por escola",
      "Geração em lote",
      "Exportação em PNG e PDF"
    ]
  },
  {
    id: "plano_professor",
    nome: "Professor (Mensal)",
    preco: 10000, // ~80 USD
    moedas: "AOA",
    creditos: 150,
    trabalhosPDF: 20,
    templatesPremium: true,
    suportePrioritario: true,
    renovacao: "mensal",
    desconto: 0,
    descricao: "Para educadores e instituições",
    beneficios: [
      "20 PDFs por mês",
      "150 créditos",
      "Templates premium",
      "Geração para múltiplos alunos",
      "Relatório de atividades",
      "Integração com escola",
      "Suporte prioritário",
      "Ferramentas administrativas"
    ]
  },
  {
    id: "plano_professor_anual",
    nome: "Professor (Anual)",
    preco: 100000, // ~800 USD (20% desconto)
    moedas: "AOA",
    creditos: 2000,
    trabalhosPDF: 250,
    templatesPremium: true,
    suportePrioritario: true,
    renovacao: "anual",
    desconto: 20,
    descricao: "Anual com máxima capacidade",
    beneficios: [
      "250 PDFs por ano",
      "2000 créditos",
      "Templates premium ilimitados",
      "Geração para turmas inteiras",
      "Relatório detalhado de progresso",
      "Integração com sistema escolar",
      "Suporte prioritário 24/7",
      "Acesso a análiticas avançadas",
      "Criar temas personalizados",
      "Validação digital de trabalhos"
    ]
  },
  {
    id: "plano_instituicao",
    nome: "Instituição (Anual)",
    preco: 500000, // ~4000 USD
    moedas: "AOA",
    creditos: 10000,
    trabalhosPDF: 2000,
    templatesPremium: true,
    suportePrioritario: true,
    renovacao: "anual",
    desconto: 30,
    descricao: "Para escolas, colégios e institutos",
    beneficios: [
      "2000 PDFs por ano",
      "10000 créditos",
      "Templates premium personalizados",
      "Geração ilimitada",
      "Contas para professores e alunos",
      "Painel administrativo completo",
      "Relatórios detalhados",
      "Integração com sistema LMS",
      "Suporte técnico dedicado",
      "Customização de marca",
      "Servidor dedicado",
      "API de integração",
      "Backup automático"
    ]
  }
];

// ==========================================
// OPCOES DE PAGAMENTO DISPONÍVEIS
// ==========================================

export const METODOS_PAGAMENTO = [
  {
    id: "cartao_credito",
    nome: "Cartão de Crédito",
    descricao: "Visa, Mastercard, AmEx",
    disponivel: true,
    taxaProcessamento: 2.9, // %
    icone: "💳"
  },
  {
    id: "transferencia_bancaria",
    nome: "Transferência Bancária",
    descricao: "Transferência para banco em Angola",
    disponivel: true,
    taxaProcessamento: 1.5, // %
    icone: "🏦"
  },
  {
    id: "m_pesa",
    nome: "M-Pesa",
    descricao: "Pagamento móvel via Vodacom",
    disponivel: true,
    taxaProcessamento: 0.5, // %
    icone: "📱"
  },
  {
    id: "emola",
    nome: "E-Mola",
    descricao: "Pagamento via e-wallet",
    disponivel: true,
    taxaProcessamento: 1, // %
    icone: "💰"
  },
  {
    id: "moedim",
    nome: "Moedim",
    descricao: "Carteira digital angolana",
    disponivel: true,
    taxaProcessamento: 0.5, // %
    icone: "📲"
  }
];

// ==========================================
// TABELA DE PRECOS (CREDITOS INDIVIDUAIS)
// ==========================================

export const TABELA_CREDITOS = [
  { creditos: 10, preco: 1000, moeda: "AOA", desconto: 0 },
  { creditos: 50, preco: 4500, moeda: "AOA", desconto: 10 },
  { creditos: 100, preco: 8000, moeda: "AOA", desconto: 20 },
  { creditos: 500, preco: 35000, moeda: "AOA", desconto: 30 },
  { creditos: 1000, preco: 60000, moeda: "AOA", desconto: 40 }
];

// ==========================================
// CUSTO DE OPERACOES (EM CREDITOS)
// ==========================================

export const CUSTO_OPERACOES = {
  gerar_pdf_simples: 5, // créditos por PDF simples
  gerar_pdf_premium: 10, // créditos por PDF com template premium
  gerar_pdf_lote: 40, // créditos por lote (5+ trabalhos)
  exportar_png: 3, // créditos por exportação em PNG
  usar_template_premium: 2, // créditos por template premium
  pesquisa_avancada: 1, // créditos por pesquisa avançada
  validacao_qr_code: 1, // créditos por QR Code
  assinatura_digital: 2 // créditos por assinatura digital
};

// ==========================================
// FUNCOES DE NEGOCIO (PAGAMENTO)
// ==========================================

export function obterPlano(planoId: string): PlanoSubscricao | undefined {
  return PLANOS_SUBSCRICAO.find((p) => p.id === planoId);
}

export function obterPlanosPorTipo(
  tipo: "basico" | "estudante" | "professor" | "instituicao"
): PlanoSubscricao[] {
  return PLANOS_SUBSCRICAO.filter((p) => p.nome.toLowerCase().includes(tipo));
}

export function calcularPrecoComDesconto(preco: number, desconto?: number): number {
  if (!desconto) return preco;
  return preco - (preco * desconto) / 100;
}

export function verificarCreditoSuficiente(
  creditoDisponivel: number,
  custoOperacao: number
): boolean {
  return creditoDisponivel >= custoOperacao;
}

export function calcularCustoPDF(
  isPremium: boolean,
  quantidadeLote?: number
): number {
  if (quantidadeLote && quantidadeLote >= 5) {
    return CUSTO_OPERACOES.gerar_pdf_lote;
  }
  return isPremium
    ? CUSTO_OPERACOES.gerar_pdf_premium
    : CUSTO_OPERACOES.gerar_pdf_simples;
}

export function obterMetodoPagamento(id: string) {
  return METODOS_PAGAMENTO.find((m) => m.id === id);
}

export function validarMetodoPagamento(metodo: string): boolean {
  return METODOS_PAGAMENTO.some((m) => m.id === metodo && m.disponivel);
}

// ==========================================
// FUNCOES DE SIMULACAO (MOCK)
// ==========================================

export function simularProcessamentoPagamento(
  valor: number,
  metodo: string,
  planoId: string
): {
  sucesso: boolean;
  idTransacao: string;
  creditos: number;
  mensagem: string;
} {
  const metodoPag = obterMetodoPagamento(metodo);
  if (!metodoPag || !metodoPag.disponivel) {
    return {
      sucesso: false,
      idTransacao: "",
      creditos: 0,
      mensagem: "Método de pagamento não disponível"
    };
  }

  const plano = obterPlano(planoId);
  if (!plano) {
    return {
      sucesso: false,
      idTransacao: "",
      creditos: 0,
      mensagem: "Plano não encontrado"
    };
  }

  // Simular processamento bem-sucedido
  const idTransacao = `TRX-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  return {
    sucesso: true,
    idTransacao,
    creditos: plano.creditos,
    mensagem: `Pagamento de ${valor} AOA confirmado! Você recebeu ${plano.creditos} créditos.`
  };
}

export function formatarMoeda(valor: number, moeda: string = "AOA"): string {
  if (moeda === "AOA") {
    return `${valor.toLocaleString("pt-AO")} AOA`;
  } else if (moeda === "USD") {
    return `$${valor.toFixed(2)}`;
  } else if (moeda === "BRL") {
    return `R$ ${valor.toFixed(2)}`;
  }
  return `${valor} ${moeda}`;
}

export function calcularEconomia(preco: number, desconto?: number): number {
  if (!desconto) return 0;
  return (preco * desconto) / 100;
}
