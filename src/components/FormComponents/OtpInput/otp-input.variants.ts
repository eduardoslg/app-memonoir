// otp.variants.ts
import { tv, type VariantProps } from 'tailwind-variants'

export const otpInputVariants = tv({
  slots: {
    container: 'flex flex-row gap-3 w-full my-1',
    cell: 'w-14 h-14 rounded-xl bg-gray-50 items-center justify-center',
    textInput: 'text-center text-xl font-bold p-2.5 m-2 w-full h-full',
    errorText: 'mt-1 text-sm text-danger',
  },
  variants: {
    state: {
      default: {
        cell: 'border-gray-200 bg-gray-50',
        textInput: 'text-gray-400',
      },
      focused: {
        textInput: '',
      },
      filled: {
        cell: 'border-gray-400 bg-gray-50',
        textInput: 'text-gray-900',
      },
      error: {
        cell: 'border-danger border-2 bg-red-50',
        textInput: 'text-danger',
      },
    },
    isDisabled: {
      true: {
        cell: 'opacity-50',
        textInput: 'text-gray-200',
      },
    },
  },
  defaultVariants: {
    isDisabled: false,
  },
})

export type OtpInputVariantsProps = VariantProps<typeof otpInputVariants>
