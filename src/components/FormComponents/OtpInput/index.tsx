import { useEffect, useRef, useState } from 'react'
import { Text, TextInput, View, Pressable } from 'react-native'

import { otpInputVariants } from './otp-input.variants'

type Props = {
  value?: string
  length?: number
  onChange?: (value: string) => void
  error?: string
  disabled?: boolean
}

export function OtpInput({
  value = '',
  length = 6,
  onChange,
  error,
  disabled,
}: Props) {
  const [code, setCode] = useState(value)
  const [focusedIndex, setFocusedIndex] = useState(0)

  const inputRef = useRef<TextInput>(null)

  const { container, cell, textInput, errorText } = otpInputVariants({
    isDisabled: disabled,
  })

  useEffect(() => {
    onChange?.(code)
  }, [code])

  const handlePressCell = (index: number) => {
    setFocusedIndex(index)
    inputRef.current?.focus()
  }

  const handleChangeText = (text: string) => {
    if (text.length <= length) {
      setCode(text)
      setFocusedIndex(text.length) // atualiza célula visual
    }
  }

  return (
    <View className="w-full">
      {/* TextInput real (invisível) */}
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChangeText}
        keyboardType="numeric"
        maxLength={length}
        className="absolute opacity-0"
        autoFocus={false}
      />

      {/* CÉLULAS */}
      <View className={container()}>
        {Array.from({ length }).map((_, i) => {
          const isFocused = i === focusedIndex
          const isFilled = code[i]

          const state = error
            ? 'error'
            : isFocused
            ? 'focused'
            : isFilled
            ? 'filled'
            : 'default'

          return (
            <Pressable
              key={i}
              onPress={() => handlePressCell(i)}
              className={cell({ state })}
            >
              <Text className={textInput({ state })}>{code[i] ?? ''}</Text>
            </Pressable>
          )
        })}
      </View>

      {error && <Text className={errorText()}>{error}</Text>}
    </View>
  )
}
