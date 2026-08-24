/** @type {import('tailwindcss').Config} */
// Portado do bloco `tailwind.config = {...}` que ficava inline no index.html
// quando o Tailwind vinha pelo CDN. Mesmos valores, para o visual não mudar.
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './conectar-whatsapp.html'],
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
      // `bg-brand-card/98` no fundo do menu mobile. Sem isto a classe nao gera
      // regra nenhuma e o menu abre transparente.
      opacity: {
        98: '0.98',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
        brand: {
          gold: '#E5A93C',
          goldLight: '#FDE047',
          goldDark: '#B45309',
          dark: '#07090E',
          card: '#0D111A',
          cardBorder: 'rgba(255, 255, 255, 0.08)',
          cardBorderHover: 'rgba(229, 169, 60, 0.35)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.3', filter: 'blur(20px)' },
          '100%': { opacity: '0.7', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
};
