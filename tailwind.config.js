/** @type {import('tailwindcss').Config} */
// Paleta portada para o Design System da Linear (linear.app): tipografia Inter
// Variable com "cv01"/"ss03", peso 510 como padrão de ênfase e indigo-violeta
// como único acento cromático. As classes do HTML (amber-*, slate-*, rounded-*)
// não mudaram de nome — a mudança de tema acontece aqui, apontando cada cor
// para uma CSS custom property (definida em src/input.css com um par claro/
// escuro sob @media (prefers-color-scheme: dark)). Isso faz claro/escuro trocar
// sozinho, sem classe "dark", sem toggle e sem JS — puro CSS nativo do navegador.
// `rgb(var(--x) / <alpha-value>)` preserva os modificadores de opacidade do
// Tailwind (ex: bg-amber-500/20) mesmo com o valor vindo de uma variável.
module.exports = {
  darkMode: 'media',
  content: ['./index.html'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      // 98 nao existe na escala padrao de opacidade do Tailwind, e o HTML usa
      // `bg-brand-panel/98` no fundo do menu mobile. Sem isto a classe nao gera
      // regra nenhuma e o menu abre transparente.
      opacity: {
        98: '0.98',
      },
      fontFamily: {
        sans: ['"Inter Variable"', '"Inter"', 'SF Pro Display', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      // Linear usa só 3 pesos reais: 400 (leitura), 510 (ênfase/UI, o peso
      // "assinatura" da marca) e 590 (forte). Nunca 700. Sobrescrever a escala
      // inteira aqui faz todo font-bold/extrabold/black do HTML herdar o
      // sistema certo sem precisar trocar nenhuma classe no markup.
      fontWeight: {
        thin: '300',
        extralight: '300',
        light: '300',
        normal: '400',
        medium: '510',
        semibold: '590',
        bold: '590',
        extrabold: '590',
        black: '590',
      },
      colors: {
        // Slot "amber" (antigo acento dourado) agora carrega o indigo-violeta
        // da Linear. 50-200 ficam como tintas translúcidas fixas — alpha sobre
        // qualquer fundo já se adapta sozinho, não precisa de par claro/escuro.
        // 300-900 vêm de variáveis (bordas/ícones/links/texto de chip), com o
        // par claro/escuro inteiro em src/input.css.
        amber: {
          50: 'rgba(94, 106, 210, 0.06)',
          100: 'rgba(94, 106, 210, 0.12)',
          200: 'rgba(94, 106, 210, 0.24)',
          300: 'rgb(var(--c-amber-300) / <alpha-value>)',
          400: 'rgb(var(--c-amber-400) / <alpha-value>)',
          500: 'rgb(var(--c-amber-500) / <alpha-value>)',
          600: 'rgb(var(--c-amber-600) / <alpha-value>)',
          700: 'rgb(var(--c-amber-700) / <alpha-value>)',
          800: 'rgb(var(--c-amber-800) / <alpha-value>)',
          900: 'rgb(var(--c-amber-900) / <alpha-value>)',
        },
        // Escala slate: mesma ordinalidade do tema claro original (900 = mais
        // forte, 50 = mais fraco), mas cada estação vem de uma variável com
        // par claro/escuro — o navegador troca sozinho via prefers-color-scheme,
        // sem precisar trocar nenhuma classe no HTML.
        slate: {
          50: 'rgb(var(--c-slate-50) / <alpha-value>)',
          100: 'rgb(var(--c-slate-100) / <alpha-value>)',
          200: 'rgb(var(--c-slate-200) / <alpha-value>)',
          300: 'rgb(var(--c-slate-300) / <alpha-value>)',
          400: 'rgb(var(--c-slate-400) / <alpha-value>)',
          500: 'rgb(var(--c-slate-500) / <alpha-value>)',
          600: 'rgb(var(--c-slate-600) / <alpha-value>)',
          700: 'rgb(var(--c-slate-700) / <alpha-value>)',
          800: 'rgb(var(--c-slate-800) / <alpha-value>)',
          900: 'rgb(var(--c-slate-900) / <alpha-value>)',
        },
        red: {
          50: 'rgba(248, 81, 73, 0.06)',
          100: 'rgba(248, 81, 73, 0.12)',
          200: 'rgba(248, 81, 73, 0.24)',
          600: 'rgb(var(--c-red-600) / <alpha-value>)',
          700: 'rgb(var(--c-red-700) / <alpha-value>)',
        },
        blue: {
          50: 'rgba(94, 158, 255, 0.06)',
          100: 'rgba(94, 158, 255, 0.12)',
          200: 'rgba(94, 158, 255, 0.24)',
          600: 'rgb(var(--c-blue-600) / <alpha-value>)',
        },
        emerald: {
          50: 'rgba(16, 185, 129, 0.06)',
          100: 'rgba(16, 185, 129, 0.12)',
          200: 'rgba(16, 185, 129, 0.24)',
          300: 'rgba(16, 185, 129, 0.4)',
          500: 'rgb(var(--c-emerald-500) / <alpha-value>)',
          600: 'rgb(var(--c-emerald-600) / <alpha-value>)',
          700: 'rgb(var(--c-emerald-700) / <alpha-value>)',
        },
        brand: {
          gold: 'rgb(var(--c-amber-500) / <alpha-value>)', // alias legado, agora aponta pro indigo
          goldLight: 'rgb(var(--c-brand-hover) / <alpha-value>)',
          goldDark: 'rgb(var(--c-amber-700) / <alpha-value>)',
          dark: 'rgb(var(--c-bg) / <alpha-value>)',
          card: 'rgb(var(--c-panel) / <alpha-value>)',
          panel: 'rgb(var(--c-panel) / <alpha-value>)',
          surface: 'rgb(var(--c-surface) / <alpha-value>)',
          cardBorder: 'rgb(var(--c-border) / 0.08)',
          cardBorderHover: 'rgb(var(--c-amber-300) / 0.35)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
        // Restauradas: existiam na versao publicada direto na Vercel pela
        // Antigravity, que nunca foi commitada. Quando o cache do www expirou,
        // o site passou a servir o repositorio — que nunca teve estas —, e a
        // pagina ficou parada.
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'flow-line': 'flowLine 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.3', filter: 'blur(20px)' },
          '100%': { opacity: '0.7', filter: 'blur(30px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        flowLine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
    },
  },
  plugins: [],
};
