import { tv, type VariantProps } from 'tailwind-variants'

export const appInputVariants = tv({
  slots: {
    container: 'w-full my-1',
    label: 'text-base text-gray-400 mb-2 font-semibold',
    wrapper:
      'flex-row items-center rounded-xl border border-gray-100 bg-white px-4 py-1',
    input: 'flex-1 text-base text-gray-400',
    error: 'mt-1 text-sm text-danger flex-row items-center',
  },

  variants: {
    isFocused: {
      true: {
        wrapper: 'border-brown-600',
        label: 'text-base',
      },
    },
    isError: {
      true: {
        wrapper: 'border-danger border-2 bg-[#FEE4E4]',
        label: 'text-danger',
      },
    },
    isDisabled: {
      true: {
        wrapper: 'opacity-50',
        input: 'text-gray-200',
      },
    },
  },

  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
})

export type AppInputVariantsProps = VariantProps<typeof appInputVariants>
