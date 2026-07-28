# ALCAAMFAP Elétrica – Portfólio Profissional

Site portfólio moderno, responsivo e otimizado para SEO para **Adálio Nunes de Matos Filho**, especialista em infraestrutura elétrica e fundador da **ALCAAMFAP Elétrica – Suporte Especializado**.

---

## 1. Sobre o Projeto

O site foi desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS), seguindo as melhores práticas de UI/UX, acessibilidade (WCAG), performance e SEO. O objetivo é transmitir profissionalismo, credibilidade, segurança e excelência técnica, destacando os serviços prestados em instalações elétricas residenciais, comerciais e industriais.

### Tecnologias Utilizadas
- **HTML5** semântico
- **CSS3** moderno com variáveis e Grid/Flexbox
- **JavaScript Vanilla** (sem frameworks)
- **Google Fonts** (Poppins e Inter)
- **Font Awesome** para ícones
- **SEO**: meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap.xml, robots.txt
- **Acessibilidade**: roles, labels, contraste, navegação por teclado, reduced motion

### Páginas Criadas
1. `index.html` – Página inicial completa (Hero, Sobre, Serviços, Portfólio, Diferenciais, Depoimentos, FAQ, Contato)
2. `sobre.html` – Página sobre o profissional e a empresa
3. `servicos.html` – Catálogo completo de serviços com busca e filtros
4. `portfolio.html` – Galeria de projetos com filtros
5. `contato.html` – Página de contato com formulário e informações

---

## 2. Funcionalidades Implementadas

- ✅ Layout totalmente responsivo (Mobile First)
- ✅ Menu fixo com efeito ao rolar e menu mobile hambúrguer
- ✅ Hero com imagem de fundo, overlay e contadores animados
- ✅ Seção Sobre com foto e texto
- ✅ Seção Serviços com cards, ícones, busca e filtros
- ✅ Seção Portfólio com galeria e filtros por categoria
- ✅ Seção Diferenciais com cards animados
- ✅ Carrossel de depoimentos automático e manual
- ✅ FAQ com acordeão interativo
- ✅ Seção Contato com cartão de informações e formulário validado
- ✅ Botões flutuantes do WhatsApp e ligação rápida
- ✅ Botão "Voltar ao Topo"
- ✅ Modo Escuro (Dark Mode) com persistência no localStorage
- ✅ Preloader animado
- ✅ Barra de progresso da rolagem
- ✅ Rolagem suave (Smooth Scroll)
- ✅ Animações fade-in e hover elegantes
- ✅ Efeito Glassmorphism no menu e cards
- ✅ Lazy loading em imagens
- ✅ Parallax suave no hero
- ✅ Máscara de telefone no formulário
- ✅ SEO completo: meta tags, JSON-LD, sitemap, robots, favicon
- ✅ Rodapé com logo, links, contato e redes sociais

---

## 3. Estrutura de Pastas

```
/
│
├── index.html
├── sobre.html
├── servicos.html
├── portfolio.html
├── contato.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── app.js
│   ├── portfolio.js
│   ├── counter.js
│   └── darkmode.js
│
├── images/
│   ├── logo.svg
│   ├── hero-bg.jpg
│   ├── adalio-profile.jpg
│   ├── about-adalio.jpg
│   └── projects/
│       ├── project-1.jpg
│       ├── project-2.jpg
│       ├── project-3.jpg
│       ├── project-4.jpg
│       ├── project-5.jpg
│       └── project-6.jpg
│
└── assets/
    ├── robots.txt
    └── sitemap.xml
```

---

## 4. Paleta de Cores

| Cor | Hex |
|-----|-----|
| Azul Principal | `#0A4DA2` |
| Azul Escuro | `#082A54` |
| Azul Claro | `#1CA7EC` |
| Branco | `#FFFFFF` |
| Cinza Claro | `#F4F4F4` |
| Cor de Destaque | `#FF3B30` |

---

## 5. Como Personalizar

### Substituir as imagens
As fotos de Adálio Nunes de Matos Filho e do ambiente corporativo são placeholders. Para substituir:

1. **Foto do Hero**: substituir `images/adalio-profile.jpg`
2. **Foto da seção Sobre**: substituir `images/about-adalio.jpg`
3. **Fundo do Hero**: substituir `images/hero-bg.jpg`
4. **Imagens do Portfólio**: substituir os arquivos em `images/projects/`

> ⚠️ **Importante**: mantenha os mesmos nomes de arquivo ou atualize as referências no HTML.

### Substituir o logo
O logo atual está em `images/logo.svg` (formato SVG vetorial). Substitua pelo logo oficial da ALCAAMFAP.

### Atualizar dados de contato
Edite o telefone, e-mail, endereço e links de WhatsApp em todos os arquivos HTML. Atualmente configurado para:
- **Telefone/WhatsApp**: (85) 99655-9851
- **E-mail**: contato@alcaamfap-eletrica.com.br
- **Cidade**: Fortaleza – Ceará

### Atualizar URLs do sitemap
Edite `assets/sitemap.xml` com o domínio real do site.

---

## 6. SEO Implementado

- Meta tags de descrição e keywords em todas as páginas
- Open Graph e Twitter Cards
- JSON-LD (LocalBusiness e Service) para dados estruturados
- `sitemap.xml` com URLs e prioridades
- `robots.txt` configurado
- Favicon em SVG
- Imagens com atributos `alt` descritivos
- Lazy loading em imagens
- Estrutura semântica HTML5
- URLs amigáveis (ex: `sobre.html`, `servicos.html`)

---

## 7. Entry Points (URIs)

| Página | Arquivo | Descrição |
|--------|---------|-----------|
| Início | `index.html` | Página principal com todas as seções |
| Sobre | `sobre.html` | História, valores e atuação |
| Serviços | `servicos.html` | Catálogo de serviços com busca e filtros |
| Portfólio | `portfolio.html` | Galeria de projetos com filtros |
| Contato | `contato.html` | Formulário e informações de contato |

---

## 8. Próximos Passos Recomendados

1. **Substituir imagens placeholder** pelas fotos reais de Adálio e dos projetos.
2. **Configurar domínio real** e atualizar `sitemap.xml` e links de OG/Twitter.
3. **Conectar formulário de contato** a um serviço de backend (Formspree, EmailJS, Google Forms ou API própria).
4. **Adicionar links reais** das redes sociais no footer e botões flutuantes.
5. **Publicar o site** usando a aba **Publish** do Genspark para deploy automático.
6. **Testar no Google Lighthouse** e ajustar pontuação de performance/acessibilidade.
7. **Adicionar Google Analytics** e/ou Google Tag Manager para rastreamento.
8. **Criar um endereço de e-mail profissional** correspondente ao domínio.

---

## 9. Acessibilidade e Performance

- Navegação por teclado suportada
- Contraste adequado entre cores
- Animações respeitam `prefers-reduced-motion`
- Imagens otimizadas com lazy loading
- Código semântico e limpo
- Design Mobile First

---

## 10. Direitos Autorais

© 2026 ALCAAMFAP Elétrica – Todos os direitos reservados.

Desenvolvido para Adálio Nunes de Matos Filho.
