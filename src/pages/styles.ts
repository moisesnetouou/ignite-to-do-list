import { styled } from '@/styles'

export const Hero = styled('section', {
  background: '$gray700',
  height: '12.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Content = styled('section', {
  position: 'relative',
})

export const FormAddTask = styled('div', {
  width: '46rem',
  display: 'flex',
  position: 'absolute',

  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  gap: '0.5rem',

  input: {
    background: '$gray500',
    border: '0.0625rem solid $colors$gray600',
    padding: '1rem',
    borderRadius: '0.5rem',
    width: '100%',
    color: '$gray100',
    fontSize: '1rem',

    '&:focus': {
      outline: '0.0625rem solid $colors$purpleDark',
      color: '$gray100',
    },
  },

  button: {
    all: 'unset',
    background: '$blueDark',
    padding: '1rem',
    borderRadius: '0.5rem',

    fontSize: '0.875rem',
    fontWeight: 'bold',

    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    cursor: 'pointer',

    '&:hover': {
      background: '$blue',
    },
  },
})

export const Tasks = styled('section', {
  width: '46rem',
  margin: '0 auto',
  paddingTop: '5.6875rem',

  '> header': {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

export const InfoTask = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',

  p: {
    fontSize: '$sm',
    fontWeight: 'bold',
  },

  mark: {
    background: '$gray400',
    color: '$gray200',
    borderRadius: '100%',
    padding: '0.125rem 0.5rem',
    fontWeight: 'bold',
  },

  variants: {
    variant: {
      blue: {
        color: '$blue',
      },
      purple: {
        color: '$purple',
      },
    },
  },
})

export const EmptyList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: '0.0625rem solid $colors$gray300',
  marginTop: '3.5rem',
  height: '15.25rem',

  strong: {
    marginTop: '1rem',
    fontWeight: 'bold',
    fontSize: '$md',
    color: '$gray300',
  },

  span: {
    fontSize: '$md',
    fontWeight: 'normal',
    color: '$gray300',
    marginTop: '0.4rem',
  },
})

export const ListTask = styled('div', {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',

  gap: '0.75rem',
})
