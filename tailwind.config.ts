import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {

      screens:{
            "custom":"1366px"
      },

      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        'butt-color': '#0093CB',
        'purple': '#49478E',
        'custom-gray': '#F0F6F8',
      },

      height: {
        '96': '24rem',
        '112': '27rem',
        '117': '28rem',
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '150': '37rem',
        '160': '40rem',
        '192': '48rem',
        '200': '51rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '352': '88rem',
        '384': '96rem',
        '416': '104rem',
        '448': '112rem',
        '480': '120rem',
        '500': '125rem',
        '532': '132rem',
        '564': '140rem',
        '596': '148rem',
        '628': '156rem',
        '660': '164rem',
        '692': '172rem',
        '724': '180rem',
        '756': '188rem',
        '788': '196rem',
        '820': '204rem',
        '852': '212rem',
        '884': '220rem',
        '916': '228rem',
        '948': '236rem',
        '980': '244rem',
        '1000': '250rem',
      },

      width: {
        '96': '24rem',
        '112': '27rem',
        '128': '32rem',
        '140': '35rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
        '288': '72rem',
        '320': '80rem',
        '352': '88rem',
        '384': '96rem',
        '416': '104rem',
        '448': '112rem',
        '480': '120rem',
        '500': '125rem',
        '532': '132rem',
        '564': '140rem',
        '596': '148rem',
        '628': '156rem',
        '660': '164rem',
        '692': '172rem',
        '724': '180rem',
        '756': '188rem',
        '788': '196rem',
        '820': '204rem',
        '852': '212rem',
        '884': '220rem',
        '916': '228rem',
        '948': '236rem',
        '980': '244rem',
        '1000': '250rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config


