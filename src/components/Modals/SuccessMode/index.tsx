import { FC } from 'react'
import { Text, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { colors } from '../../../../styles/colors'
import { Button } from '../../Button'

export interface SuccessModalParams {
  title: string
  message?: string
  buttonText?: string
  onButtonPress?: () => void
}

export const SuccessModal: FC<SuccessModalParams> = ({
  title,
  message,
  buttonText = 'Fechar',
  onButtonPress,
}) => {
  return (
    <View className="bg-white rounded-2xl p-6 w-[85%] mx-auto max-w-sm">
      <View className="items-center">
        <View className="mb-4 size-16 bg-green-100 rounded-full items-center justify-center">
          <Ionicons name="checkmark-circle" size={40} color={colors.success} />
        </View>

        <Text className="text-xl font-bold text-gray-900 text-center mb-3">
          {title}
        </Text>

        <Text className="text-base text-gray-600 text-center mb-6 leading-6">
          {message}
        </Text>

        <Button title={buttonText} onPress={onButtonPress} />
      </View>
    </View>
  )
}
