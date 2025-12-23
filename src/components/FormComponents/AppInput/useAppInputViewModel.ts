import { useRef, useState } from 'react'
import { TextInput, FocusEvent, BlurEvent } from 'react-native'

import { colors } from '../../../styles/colors'

interface Props {
  isError?: boolean
  isDisabled?: boolean
  secureTextEntry?: boolean
  onFocus?: (e: FocusEvent) => void
  onBlur?: (e: BlurEvent) => void
  mask?: (value: string) => string | void
  onChangeText?: (text: string) => void | string
  value?: string
}

export const useAppInputViewModel = ({
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(secureTextEntry)
  const inputRef = useRef<TextInput>(null)

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true)
    onFocus?.(e)
  }

  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false)
    onBlur?.(e)
  }

  const getIconColor = () => {
    if (isError) return colors.danger
    if (isFocused) return colors.brown[600]
    if (value) return colors.brown[600]
    return colors.gray[200]
  }

  const handlePasswordToggle = () => setShowPassword((prev) => !prev)

  const handleTextChange = (t: string) => {
    if (mask) return onChangeText?.(mask(t) || '')
    return onChangeText?.(t)
  }

  return {
    isFocused,
    showPassword,
    handleFocus,
    handleBlur,
    handlePasswordToggle,
    getIconColor,
    handleTextChange,
    inputRef,
  }
}
