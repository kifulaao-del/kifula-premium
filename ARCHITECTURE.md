# Arquitetura do Kifula Premium

## 🏗️ Estrutura do Projeto

```
kifula-premium/
├── src/
│   ├── App.tsx                    # Componente raiz
│   ├── main.tsx                   # Ponto de entrada React
│   ├── index.css                  # Estilos globais
│   ├── data/
│   │   ├── escolas.ts            # Database de escolas angolanas
│   │   ├── temas.ts              # Biblioteca inteligente de temas
│   │   └── pagamento.ts          # Sistema de pagamento e créditos
│   └── vite-env.d.ts             # Type definitions do Vite
├── index.html                     # HTML principal
├── vite.config.ts                # Configuração do Vite
├── tsconfig.json                 # Configuração TypeScript
├── package.json                  # Dependências e scripts
├── vercel.json                   # Configuração Vercel
└── README.md                      # Documentação
```

## 🔄 Fluxo da Aplicação

### 1. Inicialização
```
main.tsx
  ↓
ReactDOM.createRoot()
  ↓
App.tsx
  ↓
Componentes de UI
```

### 2. Estados Principais

**CurrentTab**: Controla qual página está visível
- `inicio` → Página inicial com hero section
- `gerador` → Gerador de trabalhos com preview
- `biblioteca` → Pesquisa de temas
- `planos` → Planos de assinatura
- `escolas` → Busca de escolas angolanas

**Form**: Dados do trabalho a ser gerado
- Instituição, disciplina, tema, classe, etc.

**Creditos**: Créditos disponíveis do utilizador

**Resultados de Busca**: Temas filtrados da biblioteca

### 3. Fluxo de Dados

```
Utilizador Input
  ↓
Estado Local (useState)
  ↓
Filtros aplicados
  ↓
Database em memória (escolas.ts, temas.ts)
  ↓
Resultados renderizados
  ↓
Geração de PDF (jsPDF)
```

## 📦 Dependências Principais

### Produção

| Pacote | Versão | Uso |
|--------|--------|-----|
| react | ^18.3.1 | Framework principal |
| react-dom | ^18.3.1 | Renderização DOM |
| jspdf | ^2.5.5 | Geração de PDFs |
| lucide-react | ^0.408.0 | Ícones |

### Desenvolvimento

| Pacote | Uso |
|--------|-----|
| typescript | Type safety |
| vite | Build tool |
| @vitejs/plugin-react | Suporte React no Vite |

## 🎨 Design System

### Cores (CSS Variables)
```css
--bg: #f4f7fb              /* Fundo principal */
--panel: #ffffff           /* Painéis/cards */
--ink: #10213d             /* Texto principal */
--primary: #1d4ed8         /* Cor primária (azul) */
--success: #16a34a         /* Verde para sucesso */
--warning: #f59e0b         /* Amarelo para aviso */
--muted: #526480           /* Texto secundário */
--border: rgba(...)        /* Bordas */
```

### Tipografia
- Font: Inter (sans-serif)
- Weights: 400, 500, 600, 700, 800, 900
- Scale: 0.75rem → 4.2rem

### Espaçamento
- Gaps: 8px, 12px, 14px, 16px, 18px, 20px, 22px, 24px, 28px
- Paddings: 18px → 30px
- Radius: 12px → 30px

## 🔐 Segurança

### Implementado
- ✅ CSP Headers (Content Security Policy)
- ✅ X-Frame-Options (previne clickjacking)
- ✅ X-XSS-Protection
- ✅ Cache-Control apropriado

### A Implementar (quando houver backend)
- [ ] Rate limiting
- [ ] CORS configurado
- [ ] Validação de input no servidor
- [ ] Hashing de senhas
- [ ] JWT tokens

## 🚀 Performance

### Otimizações Implementadas
- ✅ Code splitting automático (Vite)
- ✅ CSS crítico inline
- ✅ Imagens otimizadas
- ✅ Lazy loading de componentes

### Métricas Alvo
- **Lighthouse Score:** > 90
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1

## 🔄 Escalabilidade

### Fase 1 (Atual): MVP
- Database em memória (TypeScript arrays)
- Geração de PDF no cliente
- Sem backend

### Fase 2: Backend
- API REST (Node.js/Express ou similar)
- Database real (MongoDB/PostgreSQL)
- Autenticação com JWT
- Sistema de pagamento integrado

### Fase 3: Avançado
- Multi-tenant para escolas
- Analytics avançado
- Integrações com LMS
- Mobile app

## 📊 API Routes (Futuro)

```
POST   /api/auth/login
POST   /api/auth/register
GET    /api/escolas
GET    /api/escolas/:id
GET    /api/temas
POST   /api/trabalhos
GET    /api/trabalhos/:id
POST   /api/pagamento/checkout
GET    /api/usuario/creditos
POST   /api/usuario/comprar-creditos
```

## 🧪 Testes (A Implementar)

```bash
# Unit tests
npm run test

# Coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## 📝 Deployment

Veja `DEPLOY_GUIDE.md` para instruções completas.

### Ambientes
- **Desenvolvimento:** `localhost:3000`
- **Staging:** `staging-kifula.vercel.app`
- **Produção:** `kifula.ao` (ou domínio customizado)

## 🔄 CI/CD

GitHub → Vercel (automático)
- Branch `main` → Deploy automático
- PRs → Preview deployment
- Falhas de build bloqueiam deploy

---

**Versão:** 2.7  
**Mantido por:** The Vision Corp  
**Contacto:** 975912613
