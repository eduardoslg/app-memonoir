import { tv, type VariantProps } from 'tailwind-variants'

export const separatorVariants = tv({
  slots: {
    container: 'w-full flex-row items-center my-4',
    line: 'flex-1 h-[1px] bg-gray-300',
    label: 'mx-3 text-gray-500',
  },
  variants: {
    size: {
      sm: {
        label: 'text-xs mx-3 text-gray-500',
      },
      md: {
        label: 'text-sm mx-3 text-gray-500',
      },
      lg: {
        label: 'text-base mx-3 text-gray-500',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type SeparatorVariantsProps = VariantProps<typeof separatorVariants>
