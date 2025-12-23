import { tv, type VariantProps } from 'tailwind-variants'

export const tabsVariants = tv({
  slots: {
    container: 'flex-row bg-[#F1EEEB] rounded-2xl p-1 w-full',
    tab: 'flex-1 h-12 py-2 rounded-xl items-center justify-center',
    label: 'font-medium',
  },

  variants: {
    selected: {
      true: {
        tab: 'bg-white',
        label: 'text-[#3D3D3D]',
      },
      false: {
        tab: 'bg-transparent',
        label: 'text-[#A68463]',
      },
    },
  },

  defaultVariants: {
    selected: false,
  },
})

export type tabsVariantsProps = VariantProps<typeof tabsVariants>
