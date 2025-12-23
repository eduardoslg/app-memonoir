import { tv, type VariantProps } from 'tailwind-variants'

export const textVariants = tv({
  slots: {
    container: 'text-base font-', // tamanho padrão
  },

  variants: {
    color: {
      black: { container: 'text-black' },
      white: { container: 'text-white' },
      gray: { container: 'text-gray-500' },
      red: { container: 'text-red-500' },
      green: { container: 'text-green-500' },
      blue: { container: 'text-blue-500' },
      brown: { container: 'text-brown-700' },
      'peach-400': { container: 'text-peach-400' },
      custom: { container: '' }, // será usado colorValue
      subtleLight: { container: 'subtleLight' },
      textLight: { container: 'text-textLight' },
    },
    size: {
      sm: { container: 'text-sm' },
      md: { container: 'text-base' },
      lg: { container: 'text-lg' },
      xl: { container: 'text-xl' },
      '2xl': { container: 'text-2xl' },
    },
    align: {
      center: { container: 'text-center' },
    },
    weight: {
      light: { container: 'font-light' },
      normal: { container: 'font-normal' },
      medium: { container: 'font-medium' },
      bold: { container: 'font-bold' },
    },
    uppercase: {
      true: { container: 'uppercase' },
      false: { container: '' },
    },
    letterSpacing: {
      sm: { container: 'tracking-tight' },
      md: { container: 'tracking-normal' },
      lg: { container: 'tracking-wide' },
    },
  },

  defaultVariants: {
    color: 'black',
    size: 'xl',
    weight: 'bold',
    uppercase: false,
    letterSpacing: 'md',
  },
})

export type TextVariantsProps = VariantProps<typeof textVariants>
