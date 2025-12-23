import { useState } from 'react'

interface Params {
  pinLength: number
  value: string
  onChangeCode: (v: string) => void
  onComplete?: (v: string) => void
  isDisabled: boolean
}

export function useOtpInputViewModel({
  pinLength,
  value,
  onChangeCode,
  onComplete,
  isDisabled,
}: Params) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)

  const handleDigitChange = (digit: string, index: number) => {
    if (isDisabled) return

    const updated =
      value.substring(0, index) + digit + value.substring(index + 1)

    onChangeCode(updated)

    if (digit && index < pinLength - 1) {
      setFocusedIndex(index + 1)
    }

    if (updated.length === pinLength && !updated.includes('')) {
      onComplete?.(updated)
    }
  }

  const handleFocus = (index: number) => {
    if (!isDisabled) setFocusedIndex(index)
  }

  return {
    focusedIndex,
    handleDigitChange,
    handleFocus,
  }
}
