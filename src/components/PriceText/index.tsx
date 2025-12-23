import { FC } from 'react'

import { PriceTextView } from './PriceText.view'
import { usePriceTextViewModel } from './usePriceText.viewModel'

interface PriceTextParams {
  classNameCurrency?: string
  classNameValue?: string
  value: number
}

export const PriceText: FC<PriceTextParams> = ({
  classNameCurrency,
  classNameValue,
  value,
}) => {
  const viewModel = usePriceTextViewModel(value)

  return (
    <PriceTextView
      {...viewModel}
      classNameCurrency={classNameCurrency}
      classNameValue={classNameValue}
    />
  )
}
