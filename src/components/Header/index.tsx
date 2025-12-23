import { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { Text } from '../Text'

interface HeaderProps {
  title?: string
  icon?: keyof typeof Ionicons.glyphMap
  onPress?: () => void
  disabled?: boolean
  className?: string
  colorValue?: string
  onBack: () => void
  buttonRight?: boolean
}

export const Header: FC<HeaderProps> = ({
  title,
  onBack,
  buttonRight = false,
  className,
}) => {
  return (
    <View className="flex-row items-center px-4">
      {/* botão esquerdo */}
      <View className="flex-1">
        <TouchableOpacity
          className="p-3 w-12 rounded-3xl bg-gray-50"
          onPress={onBack}
        >
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>
      </View>

      {/* título central */}
      <View className="flex-1 items-center">
        <Text className="text-lg font-bold">{title}</Text>
      </View>

      {/* coluna direita vazia */}
      <View className="flex-1" />
    </View>
  )
}
