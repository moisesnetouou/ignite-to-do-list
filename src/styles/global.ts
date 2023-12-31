import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray500',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
})
