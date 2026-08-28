/** @type {import('tailwindcss').Config} */
// Paleta portada para o Design System da Linear (linear.app): canvas quase-preto,
// Inter Variable com "cv01"/"ss03", peso 510 como padrão de ênfase e indigo-violeta
// como único acento cromático. As classes do HTML (amber-*, slate-*, rounded-*)
// não mudaram de nome — só a escala de cores/pesos por trás delas foi redesenhada,
// então rodar `npm run build:css` já é suficiente para refletir o novo visual.
module.exports = {
  darkMode: 'class',
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
        // da Linear. 50-200 viram tintas translúcidas para chips sobre fundo
        // escuro; 300-700 cobrem bordas/ícones/links em violeta legível;
        // 900 é o texto claro usado dentro dos próprios chips translúcidos.
        amber: {
          50: 'rgba(94, 106, 210, 0.06)',
          100: 'rgba(94, 106, 210, 0.12)',
          200: 'rgba(94, 106, 210, 0.24)',
          300: '#7170ff',
          400: '#828fff',
          500: '#5e6ad2',
          600: '#7170ff',
          700: '#9698ff',
          800: '#8385e8',
          900: '#c7c9ff',
        },
        // Escala slate INVERTIDA: mesma ordinalidade que o tema claro original
        // (900 = mais forte, 50 = mais fraco), mas os valores agora seguem a
        // hierarquia de luminância da Linear no escuro. Isso faz o tema claro
        // virar escuro automaticamente em ~150 usos de slate-* no HTML, sem
        // precisar trocar classe por classe.
        slate: {
          50: '#08090a', // canvas mais profundo (era o branco mais claro)
          100: '#0d0e10',
          200: '#141516', // linha/borda quase invisível
          300: '#1c1d1f',
          400: '#28282c', // superfície elevada / hover
          500: '#62666d', // texto quaternário
          600: '#8a8f98', // texto terciário
          700: '#c3c7cf', // texto secundário
          800: '#e2e4e7',
          900: '#f7f8f8', // texto primário (era o preto mais forte)
        },
        red: {
          50: 'rgba(248, 81, 73, 0.06)',
          100: 'rgba(248, 81, 73, 0.12)',
          200: 'rgba(248, 81, 73, 0.24)',
          600: '#ff6a63',
          700: '#ff8983',
        },
        blue: {
          50: 'rgba(94, 158, 255, 0.06)',
          100: 'rgba(94, 158, 255, 0.12)',
          200: 'rgba(94, 158, 255, 0.24)',
          600: '#6ca6ff',
        },
        emerald: {
          50: 'rgba(16, 185, 129, 0.06)',
          100: 'rgba(16, 185, 129, 0.12)',
          200: 'rgba(16, 185, 129, 0.24)',
          300: 'rgba(16, 185, 129, 0.4)',
          500: '#10b981',
          600: '#27a644',
          700: '#34d399',
        },
        brand: {
          gold: '#5e6ad2', // alias legado, agora aponta pro indigo
          goldLight: '#828fff',
          goldDark: '#4e58b8',
          dark: '#08090a', // Marketing Black
          card: '#0f1011', // Panel Dark
          panel: '#0f1011',
          surface: '#191a1b', // Level 3 Surface
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          cardBorderHover: 'rgba(113, 112, 255, 0.35)',
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
