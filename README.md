# Avanço AI — Landing Page

Landing page oficial da **Avanço AI**, secretária virtual com IA para clínicas de estética, harmonização facial e odontologia. O site apresenta a proposta de valor, um simulador de faturamento, os planos de contratação e um formulário que gera um lead direto no WhatsApp da equipe comercial.

**[avancoai.com.br](https://avancoai.com.br)**

## Sobre o design

A interface segue o **Design System da Linear** (linear.app): canvas quase-preto, tipografia Inter com peso 510 como padrão de ênfase, um único acento cromático (indigo-violeta) e superfícies translúcidas com bordas brancas quase invisíveis no lugar de sombras tradicionais.

| | |
| --- | --- |
| **Canvas** | `#08090a` (fundo) → `#0f1011` (painéis) → `#191a1b` (superfícies elevadas) |
| **Tipografia** | Inter Variable, features `cv01`/`ss03`, pesos 400 / 510 / 590 (nunca 700) |
| **Acento** | Indigo `#5e6ad2` / Violeta `#7170ff` — reservado a CTAs e estados interativos |
| **Bordas** | Branco translúcido `rgba(255,255,255,.05–.08)`, nunca cor sólida sobre fundo escuro |
| **Raio** | 6px em botões/inputs, 8–12px em cards, pílula (`rounded-full`) só em tags e badges |

A paleta antiga (dourado/âmbar em tema claro) foi inteiramente substituída, mas o **HTML manteve as mesmas classes Tailwind** (`amber-*`, `slate-*`) — a mudança de tema aconteceu na escala de cores do [`tailwind.config.js`](tailwind.config.js), não na marcação. Isso significa que qualquer ajuste futuro de cor é feito em um único lugar.

## Stack

- **HTML estático**, sem framework de frontend
- **Tailwind CSS** (compilado, não via CDN — ver seção de build abaixo)
- **[Lucide Icons](https://lucide.dev)** via CDN
- Fonte **Inter** (Google Fonts) + **JetBrains Mono** para números/dados

## Estrutura

```
├── index.html                 # Landing page principal
├── tailwind.config.js         # Paleta, tipografia e tokens do design system
├── src/input.css              # Fonte do CSS (Tailwind + estilos próprios)
├── assets/
│   ├── style.css              # CSS compilado e versionado (é o que o site consome)
│   ├── whatsapp-mockup.png    # Mockup usado no hero
│   └── favicon*.{svg,png,ico} # Ícones
└── package.json
```

## Rodando localmente

```bash
npm install
npm run watch:css   # recompila assets/style.css a cada alteração
```

Em outro terminal, sirva os arquivos estáticos (qualquer servidor HTTP simples funciona):

```bash
npx serve .
```

> **Importante:** o Tailwind aqui é **compilado**, não carregado via CDN. Se você adicionar ou alterar uma classe do Tailwind em `index.html`, rode `npm run build:css` (ou deixe o `watch:css` ativo) — caso contrário a classe nova não existe em `assets/style.css` e simplesmente não aplica nenhum estilo. O CSS gerado é versionado de propósito para que o deploy continue 100% estático, sem etapa de build no servidor.

## Deploy

Site 100% estático — o deploy na Vercel (ou qualquer host estático) não precisa de build step, já que `assets/style.css` já vem compilado no repositório. Basta publicar a raiz do projeto.
