import { styled } from '@/styles'

export const Hero = styled('section', {
  background: '$gray700',
  height: '200px',
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

  gap: '8px',

  input: {
    background: '$gray500',
    border: '1px solid #1A1A1A',
    padding: '1rem',
    borderRadius: '0.5rem',
    width: '100%',
  },

  button: {
    all: 'unset',
    background: '$blueDark',
    padding: '1rem',
    borderRadius: '0.5rem',
  },
})
