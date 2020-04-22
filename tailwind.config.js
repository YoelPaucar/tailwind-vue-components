const {colors} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors:{
        transparent: colors.transparent,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple, 
        primary: colors.indigo[500],
        success: '#34C759',
        danger:'#EC4433',
        orange:'#FE9500',
        warning:'#FFB400',
        secondary: 'var(--color-secondary)',
        dark:'#333333',
        neutral: colors.gray,
      },
      inset:{
        '0':'0',
        '12':'0.75rem',
        '4%':'4%',
        '6%':'6%',
        '8%':'8%',
        '1/2':'50%',
        '40%':'40%',
      },
      screens: {
        'sm': {'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px'},
      },
    },
  },
  variants: {},
  plugins: [],
}
