import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      blue: '#4EA8DE',
      blueDark: '#1E6F9F',

      danger: '#E25858',

      gray700: '#0D0D0D',
      gray600: '#1A1A1A',
      gray500: '#262626',
      gray400: '#333333',
      gray300: '#808080',
      gray200: '#D9D9D9',
      gray100: '#F2F2F2',

      purple: '#8284FA',
      purpleDark: '#5E60CE',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem ',
    },
  },
})
