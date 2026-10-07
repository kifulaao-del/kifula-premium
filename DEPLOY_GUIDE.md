# Guia Completo de Deployment - Kifula Premium

## 📋 Pré-requisitos

- Conta GitHub (onde o repositório já está)
- Conta Vercel (criar em https://vercel.com)
- Domínio customizado (opcional)
- Node.js 18+ instalado localmente

## 🚀 Passo 1: Preparar o Projeto Localmente

### 1.1 Verificar se tudo está funcionando

```bash
# Entre na pasta do projeto
cd kifula-premium

# Instale dependências
npm install

# Teste o build
npm run build

# Teste localmente
npm run dev
```

Abra http://localhost:3000 e verifique se está funcionando.

### 1.2 Fazer commit final

```bash
# Confirme que tudo está pronto
git status

# Se há mudanças não commitadas
git add .
git commit -m "chore: versão final pronta para deployment"
git push origin main
```

---

## 🔗 Passo 2: Conectar GitHub e Vercel

### 2.1 Acesso à Vercel

1. Abra https://vercel.com
2. Clique em **Sign Up** (ou faça login se já tiver conta)
3. Escolha **Continue with GitHub**
4. Autorize a Vercel a acessar seus repositórios GitHub

### 2.2 Importar o Projeto

1. Após fazer login na Vercel, clique em **Add New**
2. Selecione **Project**
3. Na seção "Import Git Repository", procure por `kifula-premium`
4. Selecione o repositório `kifulaao-del/kifula-premium`
5. Clique em **Import**

---

## ⚙️ Passo 3: Configurar o Projeto na Vercel

### 3.1 Definições do Build

A Vercel deve detectar automaticamente que é um projeto Vite. Verifique:

**Framework Preset:** Vite  
**Build Command:** `npm run build`  
**Output Directory:** `dist`  
**Install Command:** `npm install`  

✅ Se tudo estiver correto, deixe como está.

### 3.2 Variáveis de Ambiente (Opcional)

Clique em **Environment Variables** e adicione se necessário:

```
VITE_APP_NAME = "Kifula Premium"
VITE_APP_VERSION = "2.7"
```

✅ Para este projeto, você pode deixar em branco (não há APIs sensíveis).

### 3.3 Deploy

Clique no botão **Deploy** e aguarde.

**Tempo estimado:** 2-3 minutos

Depois de concluído, você receberá:
- ✅ URL automática: `seu-projeto.vercel.app`
- ✅ Domínio temporário da Vercel
- ✅ Link para compartilhar o projeto

---

## 🌐 Passo 4: Configurar Domínio Customizado

### 4.1 Se você tem um domínio (kifula.ao, etc.)

1. Na dashboard da Vercel do seu projeto
2. Clique em **Settings**
3. Selecione **Domains**
4. Clique em **Add Domain**
5. Digite seu domínio: `kifula.ao` ou `app.kifula.ao`
6. Clique em **Add**

### 4.2 Configurar o DNS

A Vercel mostrará dois tipos de configuração:

#### Opção A: Apontar Nameservers (Recomendado)

```
NS  ns1.vercel-dns.com
NS  ns2.vercel-dns.com
NS  ns3.vercel-dns.com
NS  ns4.vercel-dns.com
```

**Como fazer:**
1. Abra o painel do seu provedor de domínio (GoDaddy, Namecheap, etc.)
2. Procure por **DNS Settings** ou **Nameservers**
3. Remova os nameservers atuais
4. Adicione os 4 nameservers da Vercel
5. Salve as alterações

**⏱️ Espere 24-48 horas** para a propagação total.

#### Opção B: Registros DNS Individuais (Se Nameservers não funcionarem)

A Vercel mostrará registros como:

```
Type    Name        Value
---------------------------------------
A       @           76.76.19.89
CNAME   www         cname.vercel-dns.com
```

1. No painel do seu provedor de domínio
2. Procure por **DNS Records** ou **Zone File**
3. Adicione os registros exatamente como aparecem
4. Salve

### 4.3 Verificar Configuração

Depois que o DNS propagar:

```bash
# No terminal, verifique se o DNS está apontando
nslookup seu-dominio.com

# Ou use dig
dig seu-dominio.com
```

Devem aparecer os IPs da Vercel.

---

## 🔒 Passo 5: SSL/HTTPS

✅ **A Vercel ativa SSL automaticamente** quando você adiciona um domínio.

Você não precisa fazer nada — o certificado é gerado e renovado automaticamente.

---

## 📊 Passo 6: Monitorar o Projeto

No dashboard da Vercel, você terá acesso a:

- **Deployments:** Histórico de versões publicadas
- **Analytics:** Visitantes, requisições, performance
- **Logs:** Erros e eventos do servidor
- **Settings:** Configurações gerais

### Para atualizar o site

Quando fazer mudanças no código:

```bash
git add .
git commit -m "descrição da mudança"
git push origin main
```

✅ O Vercel fará o **deploy automático** a cada push.

---

## 🆘 Troubleshooting

### O site não carrega depois do deploy

**Solução 1:** Verifique se o build foi bem-sucedido
- Na Vercel, clique em **Deployments**
- Procure por erros no log do build
- Se houver erro, corrija no código e faça push novamente

**Solução 2:** Limpe o cache do navegador
```bash
Ctrl+Shift+Delete (ou Cmd+Shift+Delete no Mac)
```

**Solução 3:** Espere a propagação do DNS
- Se mudou DNS recentemente, aguarde 24-48h
- Teste com: https://dnschecker.org

### O domínio customizado não funciona

**Verificar:**
1. Os nameservers foram atualizados no provedor de domínio?
2. O domínio foi adicionado corretamente no Vercel?
3. Já passaram 24-48 horas desde a mudança de DNS?

### Performance lenta

- Verifique o **Analytics** da Vercel
- Se o projeto estiver lento, pode ser:
  - Muitos usuários simultâneos
  - Muitas requisições à biblioteca de temas
  - Cache não ativado

---

## ✅ Checklist Final

Antes de considerar o deployment completo:

- [ ] O build funciona localmente (`npm run build` sem erros)
- [ ] O site está responsivo (teste em móvel)
- [ ] As funcionalidades funcionam:
  - [ ] Gerador de PDF
  - [ ] Pesquisa de temas
  - [ ] Filtro de escolas
  - [ ] Sistema de créditos
- [ ] O domínio está apontando corretamente
- [ ] SSL/HTTPS está ativo (🔒 no navegador)
- [ ] Analytics da Vercel mostra visitantes

---

## 📞 Suporte

**Vercel Support:** https://vercel.com/support  
**GitHub Issues:** https://github.com/kifulaao-del/kifula-premium/issues  
**Contacto:** 975912613  

---

**Versão:** 2.7 Final  
**Última atualização:** Outubro 2026  
**Mantido por:** The Vision Corp
