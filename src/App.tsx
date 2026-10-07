import { useMemo, useState } from 'react';
import { jsPDF } from 'jspdf';
import { ESCOLAS_ANGOLANAS, buscarEscolas } from './data/escolas';
import { buscarTemas, obterTemasDestaque } from './data/temas';
import { PLANOS_SUBSCRICAO, TABELA_CREDITOS, CUSTO_OPERACOES, formatarMoeda } from './data/pagamento';

const CLASSES = [
  '1.ª classe', '2.ª classe', '3.ª classe', '4.ª classe', '5.ª classe', '6.ª classe',
  '7.ª classe', '8.ª classe', '9.ª classe', '10.ª classe', '11.ª classe', '12.ª classe', '13.ª classe'
];

const DISCIPLINAS = [
  'Língua Portuguesa', 'Matemática', 'História', 'Geografia', 'Biologia', 'Física', 'Química',
  'Educação Moral e Cívica', 'Educação Física', 'Inglês', 'Francês', 'Filosofia', 'TIC',
  'Empreendedorismo', 'Estudo do Meio', 'Educação Manual e Plástica', 'Educação Musical',
  'Perfuração e Produção de Petróleo', 'Tecnologia de Perfuração', 'Engenharia de Produção',
  'Processos de Soldadura', 'Metalurgia da Soldadura'
];

type WorkForm = {
  instituicao: string;
  tipo: string;
  disciplina: string;
  tema: string;
  autor: string;
  classe: string;
  turma: string;
  numero: string;
  professor: string;
  local: string;
  ano: string;
  includeQrCode: boolean;
  logo?: string;
};

const defaultForm: WorkForm = {
  instituicao: 'Colégio Politécnico The Vision',
  tipo: 'Colégio Privado',
  disciplina: 'Perfuração e Produção de Petróleo',
  tema: 'Tecnologias Avançadas de Perfuração Offshore em Blocos Petrolíferos de Angola',
  autor: 'Deive Valentim',
  classe: '12.ª classe',
  turma: 'A',
  numero: '14',
  professor: 'Prof. Eng. Mário dos Santos',
  local: 'Luanda',
  ano: String(new Date().getFullYear()),
  includeQrCode: true,
};

function App() {
  const [currentTab, setCurrentTab] = useState<'inicio' | 'gerador' | 'biblioteca' | 'planos' | 'escolas'>('inicio');
  const [form, setForm] = useState<WorkForm>(defaultForm);
  const [search, setSearch] = useState('');
  const [escolaSearch, setEscolaSearch] = useState('');
  const [selectedSchoolId, setSelectedSchoolId] = useState('escola_001');
  const [creditos, setCreditos] = useState(24);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredSchools = useMemo(() => {
    return buscarEscolas({ nome: escolaSearch || undefined });
  }, [escolaSearch]);

  const selectedSchool = ESCOLAS_ANGOLANAS.find((s) => s.id === selectedSchoolId) ?? ESCOLAS_ANGOLANAS[0];

  const results = useMemo(() => {
    return buscarTemas({
      palavra: search,
      disciplina: form.disciplina,
      provincia: selectedSchool?.provincia,
      tipo: selectedSchool?.tipo,
      ordenarPor: 'popular'
    });
  }, [search, form.disciplina, selectedSchool]);

  const destaque = obterTemasDestaque();

  const updateForm = <K extends keyof WorkForm>(key: K, value: WorkForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const generatePDF = () => {
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210;
    const M = 20;

    // Página 1 - Capa
    doc.setFillColor(16, 36, 62);
    doc.rect(0, 0, W, 35, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('KIFULA PREMIUM', W / 2, 12, { align: 'center' });
    doc.setFontSize(10);
    doc.text('Plataforma de Trabalhos Escolares', W / 2, 22, { align: 'center' });

    doc.setTextColor(25, 35, 48);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('REPÚBLICA DE ANGOLA', W / 2, 50, { align: 'center' });
    doc.text('MINISTÉRIO DA EDUCAÇÃO', W / 2, 58, { align: 'center' });
    doc.text((form.instituicao || 'INSTITUIÇÃO').toUpperCase(), W / 2, 68, { align: 'center' });
    doc.setFontSize(11);
    doc.text(form.tipo, W / 2, 75, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(`Disciplina: ${form.disciplina}`, W / 2, 95, { align: 'center' });

    doc.setFontSize(18);
    const tema = form.tema || 'Tema do trabalho';
    const temaLines = doc.splitTextToSize(tema, W - M * 2);
    doc.text(temaLines, W / 2, 115, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Autor: ${form.autor}`, W - M, 165, { align: 'right' });
    doc.text(`Classe: ${form.classe}  Turma: ${form.turma || '—'}  N.º ${form.numero || '—'}`, W - M, 173, { align: 'right' });
    doc.text(`Professor(a): ${form.professor}`, W - M, 181, { align: 'right' });

    if (form.includeQrCode) {
      doc.setDrawColor(0, 0, 0);
      doc.rect(M, 225, 30, 30);
      doc.setFontSize(7);
      doc.text('VALIDAÇÃO DIGITAL', M + 1, 260);
      doc.text('The Vision Corp', M + 1, 265);
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(`${form.local} / ${form.ano}`, W / 2, 275, { align: 'center' });

    // Página 2 - Índice
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('ÍNDICE', W / 2, 25, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    [
      ['1. Introdução', '3'],
      ['2. Desenvolvimento', '4'],
      ['3. Conclusão', '5'],
      ['4. Bibliografia', '6']
    ].forEach(([t, p], idx) => {
      doc.text(t as string, M, 45 + idx * 12);
      doc.text(p as string, W - M, 45 + idx * 12, { align: 'right' });
    });

    // Página 3 - Introdução
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('1. INTRODUÇÃO', M, 25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const introText = 'O presente trabalho escolar aborda o tema de forma aprofundada, enquadrando os conceitos acadêmicos e a sua importância para o desenvolvimento social e económico de Angola. Cumpre rigorosamente as normas curriculares vigentes no sistema educacional angolano.';
    doc.text(doc.splitTextToSize(introText, W - M * 2), M, 38);

    // Página 4 - Desenvolvimento
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('2. DESENVOLVIMENTO', M, 25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const devText = `No âmbito da disciplina de ${form.disciplina}, analisa-se o tema proposto, considerando os princípios curriculares vigentes, a relevância técnica e os impactos na formação académica do estudante. Procurou-se apresentar uma abordagem equilibrada entre a teoria e a prática, contextualizando os conceitos no cenário angolano.`;
    doc.text(doc.splitTextToSize(devText, W - M * 2), M, 38);

    // Página 5 - Conclusão
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('3. CONCLUSÃO', M, 25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const conclusaoText = 'Conclui-se que o domínio da matéria é essencial para a formação do aluno, contribuindo para a sua preparação académica e profissional no contexto angolano. O estudo aprofundado dos temas propostos permite ao estudante adquirir competências fundamentais para o seu desenvolvimento futuro.';
    doc.text(doc.splitTextToSize(conclusaoText, W - M * 2), M, 38);

    // Página 6 - Bibliografia
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text('4. BIBLIOGRAFIA', M, 25);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const bibText = `MINISTÉRIO DA EDUCAÇÃO DE ANGOLA. Programas Curriculares do Ensino Secundário e Médio. Luanda, 2026.
VALENTIM, Deive. Manuais de Apoio Técnico e Metodológico do Kifula. The Vision Corp, Contacto: 975912613.
Diversas fontes académicas consultadas conforme tema ${form.disciplina}.`;
    doc.text(doc.splitTextToSize(bibText, W - M * 2), M, 38);

    // Página final - Validação
    doc.addPage();
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('VALIDAÇÃO DIGITAL', W / 2, 30, { align: 'center' });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text(`Trabalho gerado em: ${new Date().toLocaleDateString('pt-PT')}`, W / 2, 50, { align: 'center' });
    doc.setFontSize(10);
    doc.text('The Vision Corp', W / 2, 70, { align: 'center' });
    doc.text('Tel: 975912613', W / 2, 78, { align: 'center' });
    doc.text('Plataforma: Kifula Premium v2.7', W / 2, 86, { align: 'center' });

    doc.save(`Kifula-${(form.tema || 'trabalho').slice(0, 24).replace(/\s+/g, '_')}.pdf`);
    setCreditos((value) => Math.max(0, value - 5));
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="container navrow">
          <div className="brand">
            <div className="brand-mark">K</div>
            <div>
              <strong>Kifula</strong>
              <span>Premium AO 🇦🇴</span>
            </div>
          </div>

          <nav className="nav">
            {['inicio', 'gerador', 'biblioteca', 'planos', 'escolas'].map((tab) => (
              <button key={tab} onClick={() => setCurrentTab(tab as any)} className={currentTab === tab ? 'active' : ''}>
                {tab === 'inicio' && 'Início'}
                {tab === 'gerador' && 'Gerador'}
                {tab === 'biblioteca' && 'Biblioteca'}
                {tab === 'planos' && 'Planos'}
                {tab === 'escolas' && 'Escolas'}
              </button>
            ))}
          </nav>

          <div className="credit-pill">{creditos} créditos</div>
        </div>
      </header>

      <main className="container main-content">
        {currentTab === 'inicio' && (
          <>
            <section className="hero">
              <div>
                <span className="eyebrow">Plataforma Premium para Angola</span>
                <h1>Gera trabalhos escolares com qualidade profissional, biblioteca inteligente e pagamentos integrados.</h1>
                <p>
                  Pesquisa temas, escolhe a escola, gera PDF completo e aproveita templates premium para todo o ensino primário, secundário e politécnico.
                </p>
                <div className="cta-row">
                  <button className="primary" onClick={() => setCurrentTab('gerador')}>Criar trabalho</button>
                  <button className="secondary" onClick={() => setCurrentTab('biblioteca')}>Explorar biblioteca</button>
                </div>
              </div>

              <div className="hero-card">
                <div className="mini-head">
                  <span>Versão Final 2.7</span>
                  <span className="badge">Premium</span>
                </div>
                <h3>Colégio Politécnico The Vision</h3>
                <p>Disciplina: Engenharia de Produção</p>
                <div className="card-preview">
                  <strong>Impacto social e tecnológico para Angola</strong>
                </div>
                <div className="meta-row">
                  <span>Autor: Deive Valentim</span>
                  <span>12.ª classe</span>
                </div>
              </div>
            </section>

            <section className="stats-grid">
              <StatCard label="Classes" value="13" />
              <StatCard label="Disciplinas" value="40+" />
              <StatCard label="Escolas" value="+25" />
              <StatCard label="Temas" value="100+" />
            </section>

            <section className="feature-grid">
              {[
                ['📄', 'Capa oficial', 'Estrutura completa com ministério, instituição, disciplina, tema e QR Code.'],
                ['🔍', 'Pesquisa inteligente', 'Filtra por escola, disciplina, classe, província e tipo de ensino.'],
                ['💳', 'Pagamento Premium', 'Créditos, planos e métodos locais de pagamento em Angola.'],
                ['🧠', 'Biblioteca premium', 'Busca temas e usa conteúdos em qualquer instituição angolana.'],
              ].map(([icon, title, text]) => (
                <div key={title} className="feature-box">
                  <div className="icon-wrap">{icon}</div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </section>
          </>
        )}

        {currentTab === 'gerador' && (
          <section className="panel-grid">
            <div className="panel">
              <h2>Gerador profissional</h2>
              <div className="field-grid">
                <label>
                  Instituição
                  <input value={form.instituicao} onChange={(e) => updateForm('instituicao', e.target.value)} />
                </label>
                <label>
                  Tipo
                  <select value={form.tipo} onChange={(e) => updateForm('tipo', e.target.value)}>
                    <option>Escola Pública</option>
                    <option>Colégio Privado</option>
                    <option>Instituto Médio Politécnico</option>
                    <option>Complexo Escolar</option>
                  </select>
                </label>
                <label>
                  Disciplina
                  <select value={form.disciplina} onChange={(e) => updateForm('disciplina', e.target.value)}>
                    {DISCIPLINAS.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </label>
                <label>
                  Classe
                  <select value={form.classe} onChange={(e) => updateForm('classe', e.target.value)}>
                    {CLASSES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </label>
                <label>
                  Tema
                  <input value={form.tema} onChange={(e) => updateForm('tema', e.target.value)} />
                </label>
                <label>
                  Autor
                  <input value={form.autor} onChange={(e) => updateForm('autor', e.target.value)} />
                </label>
                <label>
                  Turma
                  <input value={form.turma} onChange={(e) => updateForm('turma', e.target.value)} />
                </label>
                <label>
                  N.º de Chamada
                  <input value={form.numero} onChange={(e) => updateForm('numero', e.target.value)} />
                </label>
                <label>
                  Professor(a)
                  <input value={form.professor} onChange={(e) => updateForm('professor', e.target.value)} />
                </label>
                <label>
                  Localidade
                  <input value={form.local} onChange={(e) => updateForm('local', e.target.value)} />
                </label>
                <label>
                  Ano
                  <input value={form.ano} onChange={(e) => updateForm('ano', e.target.value)} />
                </label>
                <label className="checkbox-row">
                  <input type="checkbox" checked={form.includeQrCode} onChange={(e) => updateForm('includeQrCode', e.target.checked)} />
                  Incluir QR Code
                </label>
              </div>
            </div>

            <aside className="preview-panel">
              <h3>Pré-visualização</h3>
              <div className="cover-preview">
                <div className="cover-brand">REPÚBLICA DE ANGOLA</div>
                <div className="cover-school">{form.instituicao}</div>
                <div className="cover-sub">{form.tipo}</div>
                <div className="cover-subject">Disciplina: {form.disciplina}</div>
                <div className="cover-theme">{form.tema}</div>
                <div className="cover-footer">
                  <span>{form.autor}</span>
                  <span>{form.local} / {form.ano}</span>
                </div>
              </div>
              <button className="primary full" onClick={generatePDF}>Descarregar PDF completo</button>
            </aside>
          </section>
        )}

        {currentTab === 'biblioteca' && (
          <section className="library-panel">
            <div className="library-header">
              <div>
                <span className="eyebrow">Biblioteca inteligente</span>
                <h2>Pesquisar temas para qualquer escola e disciplina</h2>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Pesquisar por tema, disciplina, escola ou palavra-chave..."
              />
            </div>

            <div className="search-results">
              {results.temas.slice(0, 8).map((tema) => (
                <article key={tema.id} className="theme-card">
                  <div className="theme-topline">
                    <span>{tema.disciplina}</span>
                    <span className={tema.pago ? 'tag warning' : 'tag success'}>{tema.pago ? 'Premium' : 'Grátis'}</span>
                  </div>
                  <h3>{tema.titulo}</h3>
                  <p>{tema.descricao}</p>
                  <div className="meta-row small">
                    <span>{tema.classe}</span>
                    <span>{tema.provincia}</span>
                    <span>{tema.escola}</span>
                  </div>
                  <div className="theme-actions">
                    <button className="secondary small" onClick={() => {
                      setCurrentTab('gerador');
                      setForm((prev) => ({ ...prev, disciplina: tema.disciplina, tema: tema.titulo, instituicao: tema.escola || prev.instituicao }));
                    }}>Usar tema</button>
                    <button className="primary small" onClick={() => setCurrentTab('planos')}>Pagar e desbloquear</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {currentTab === 'planos' && (
          <section className="plans-section">
            <div className="section-head">
              <span className="eyebrow">Pagamentos</span>
              <h2>Planos Premium para estudantes, professores e instituições</h2>
            </div>

            <div className="plans-grid">
              {PLANOS_SUBSCRICAO.map((plano) => (
                <div key={plano.id} className="plan-card">
                  <div className="plan-header">
                    <h3>{plano.nome}</h3>
                    <span>{plano.renovacao}</span>
                  </div>
                  <div className="plan-price">
                    {plano.preco === 0 ? 'Grátis' : formatarMoeda(plano.preco, plano.moedas)}
                  </div>
                  <p>{plano.descricao}</p>
                  <ul>
                    {plano.beneficios.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <button className="primary full">Escolher plano</button>
                </div>
              ))}
            </div>

            <div className="credit-box">
              <h3>Comprar créditos</h3>
              <div className="credit-grid">
                {TABELA_CREDITOS.map((item) => (
                  <button key={item.creditos} className="credit-item">
                    <strong>{item.creditos} créditos</strong>
                    <span>{formatarMoeda(item.preco, item.moeda)}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {currentTab === 'escolas' && (
          <section className="school-panel">
            <div className="library-header">
              <div>
                <span className="eyebrow">Escolas angolanas</span>
                <h2>Pesquisar instituições por província ou tipo</h2>
              </div>
              <input
                value={escolaSearch}
                onChange={(e) => setEscolaSearch(e.target.value)}
                placeholder="Pesquisar escola..."
              />
            </div>

            <div className="school-grid">
              {filteredSchools.slice(0, 10).map((school) => (
                <button key={school.id} className={`school-card ${selectedSchoolId === school.id ? 'selected' : ''}`} onClick={() => setSelectedSchoolId(school.id)}>
                  <div className="school-header">
                    <strong>{school.nome}</strong>
                    <span>{school.tipo}</span>
                  </div>
                  <p>{school.provincia} · {school.municipio}</p>
                  <small>{school.descricao}</small>
                </button>
              ))}
            </div>

            <div className="selected-school">
              <h3>{selectedSchool.nome}</h3>
              <div className="meta-row">
                <span>{selectedSchool.provincia}</span>
                <span>{selectedSchool.localizacao}</span>
                <span>{selectedSchool.tipo}</span>
              </div>
              <div className="topic-badges">
                {selectedSchool.disciplinas.slice(0, 5).map((disciplina) => (
                  <span key={disciplina} className="badge-topic">{disciplina}</span>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h4>Kifula Premium</h4>
            <p>Plataforma angolana de trabalhos escolares com biblioteca inteligente e sistema de pagamento.</p>
            <p className="small">🇦🇴 Desenvolvido para Angola</p>
          </div>
          <div>
            <h5>Produto</h5>
            <ul>
              <li><a href="#">Gerador de Trabalhos</a></li>
              <li><a href="#">Biblioteca de Temas</a></li>
              <li><a href="#">Escolas Angolanas</a></li>
              <li><a href="#">Planos Premium</a></li>
            </ul>
          </div>
          <div>
            <h5>Empresa</h5>
            <ul>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Termos de Serviço</a></li>
            </ul>
          </div>
          <div>
            <h5>Contacto</h5>
            <p>The Vision Corp</p>
            <p>Tel: 975912613</p>
            <p>Email: info@thevisioncorp.ao</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Kifula Premium. Todos os direitos reservados. | Desenvolvido por The Vision Corp</p>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-card">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

export default App;
