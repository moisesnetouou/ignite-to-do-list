import { styled } from '@/styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const Container = styled('div', {
  display: 'flex',
  background: '$gray500',
  border: '0.0625rem solid $colors$gray400',
  borderRadius: '0.5rem',
  padding: '1.2188rem',
  gap: '0.75rem',

  span: {
    width: '39.5rem',
  },

  button: {
    all: 'unset',
    cursor: 'pointer',

    height: '1.5rem',

    svg: {
      color: '$gray300',

      '&:hover': {
        color: '$danger',
      },
    },
  },
})

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: '1.5625rem',
  height: '1.5625rem',
  borderRadius: '100%',

  input: {},

  "&[data-state='unchecked']": {
    color: 'red',
    width: '1.5rem',
    height: '1.5rem',
    border: '0.0625rem solid $colors$blue',
    borderRadius: '100%',

    '&:hover': {
      border: '0.0625rem solid $colors$blueDark',
    },
  },

  "&[data-state='indeterminate']": {
    color: 'red',
    width: '1.5rem',
    height: '1.5rem',
    border: '0.0625rem solid $colors$blue',
    borderRadius: '100%',

    svg: {
      display: 'none',
    },

    '&:hover': {
      border: '0.0625rem solid $colors$blueDark',
    },
  },

  "&[data-state='checked']": {
    width: '1.5rem',
    height: '1.5rem',
    border: '0.0625rem solid $colors$purpleDark',
    borderRadius: '100%',
    background: '$purpleDark',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '#FFF',
      display: 'flex',
      margin: '0 auto',
    },

    '&:hover': {
      border: '0.0625rem solid $colors$purple',
      background: '$purple',
    },
  },

  '&:focus': { boxShadow: 'none' },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$purple',
})
