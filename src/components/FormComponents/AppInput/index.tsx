import { FC } from 'react'
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  Pressable,
  TouchableOpacity,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { appInputVariants, AppInputVariantsProps } from './input.variants'
import { useAppInputViewModel } from './useAppInputViewModel'

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
  label?: string
  leftIcon?: keyof typeof Ionicons.glyphMap
  rightIcon?: keyof typeof Ionicons.glyphMap
  mask?: (v: string) => string | void
  error?: string
}

export const AppInput: FC<AppInputProps> = ({
  label,
  leftIcon,
  secureTextEntry,
  rightIcon,
  mask,
  value,
  error,
  isDisabled,
  onFocus,
  onBlur,
  onChangeText,
  ...props
}) => {
  const {
    isFocused,
    showPassword,
    handleFocus,
    handleBlur,
    handlePasswordToggle,
    getIconColor,
    handleTextChange,
  } = useAppInputViewModel({
    isError: !!error,
    isDisabled,
    secureTextEntry,
    mask,
    onFocus,
    onBlur,
    onChangeText,
    value,
  })

  const styles = appInputVariants({
    isFocused,
    isError: !!error,
    isDisabled,
  })

  return (
    <View className={styles.container()}>
      {label && <Text className={styles.label()}>{label}</Text>}

      <Pressable className={styles.wrapper()}>
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            style={{ marginRight: 10 }}
            color={getIconColor()}
          />
        )}

        <TextInput
          className={styles.input()}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleTextChange}
          secureTextEntry={showPassword}
          {...props}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={handlePasswordToggle}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={getIconColor()}
            />
          </TouchableOpacity>
        )}
      </Pressable>

      {error && <Text className={styles.error()}>{error}</Text>}
    </View>
  )
}
