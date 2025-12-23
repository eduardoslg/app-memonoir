import { FC, useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { buttonVariants, ButtonVariantsProps } from './button.variants'
import { useButtonViewModel } from './useButtonViewModel'

interface ButtonProps extends ButtonVariantsProps {
  title: string
  icon?: keyof typeof Ionicons.glyphMap
  onPress?: () => void
  disabled?: boolean
  className?: string
  colorValue?: string
}

export const Button: FC<ButtonProps> = ({
  title,
  icon,
  onPress,
  disabled,
  variant = 'solid',
  color,
  colorValue,
  className,
}) => {
  const { handlePress } = useButtonViewModel({ disabled, onPress })
  const styles = buttonVariants({ variant, color, disabled })

  const [pressed, setPressed] = useState(false)

  const opacity = disabled ? 0.5 : pressed ? 0.6 : 1

  const textColor = variant === 'solid' ? '#fff' : undefined

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className={styles.container({ className })}
      style={[
        color === 'custom' && variant === 'solid'
          ? { backgroundColor: colorValue }
          : undefined,
        { opacity },
      ]}
    >
      <View className="flex-row items-center justify-center gap-2">
        <Text className={styles.label()} style={{ color: textColor }}>
          {title}
        </Text>

        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={textColor}
            className={styles.icon()}
          />
        )}
      </View>
    </Pressable>
  )
}
