import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  slots: {
    container:
      'w-full rounded-2xl flex-row items-center justify-center py-5 px-6',
    label: 'font-semibold text-base ml-2',
    icon: '',
  },
  variants: {
    variant: {
      solid: '',
      outline: 'bg-transparent',
      ghost: 'bg-transparent border-transparent',
      subtle: 'bg-gray-100 border-transparent',
    },
    color: {
      blue: {
        container: 'bg-[#135bec]',
        label: 'text-white',
      },
      black: {
        container: 'bg-[#111318]',
        label: 'text-white',
      },
      orange: {
        container: 'border-[#F28A1F] bg-[#F28A1F]',
        label: 'text-white',
      },
      red: {
        container: 'border-[#DC3545] bg-[#DC3545]',
        label: 'text-white',
      },
      gray: {
        container: 'border-[#ADADAD] bg-[#ADADAD]',
        label: 'text-white',
      },
      custom: {
        container: '',
        label: '',
      },
    },
    disabled: {
      true: {
        container: 'opacity-50',
        label: 'opacity-50',
      },
    },
  },
  compoundVariants: [
    {
      variant: 'outline',
      color: ['orange', 'red', 'gray'],
      class: {
        container: 'bg-transparent',
        label: 'text-current',
      },
    },
    {
      variant: 'ghost',
      color: ['orange', 'red', 'gray'],
      class: {
        container: 'bg-transparent border-transparent',
        label: 'text-current',
      },
    },
    {
      variant: 'subtle',
      color: ['orange', 'red', 'gray'],
      class: {
        container: 'bg-opacity-10',
        label: 'text-current',
      },
    },
  ],

  defaultVariants: {
    variant: 'solid',
    color: 'blue',
    disabled: false,
  },
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
