import { FC } from 'react'
import { Text, View } from 'react-native'

import { separatorVariants, SeparatorVariantsProps } from './separator.variants'

interface SeparatorProps extends SeparatorVariantsProps {
  label?: string
}

export const Separator: FC<SeparatorProps> = ({ label = 'ou', size }) => {
  const styles = separatorVariants({ size })

  return (
    <View className={styles.container()}>
      <View className={styles.line()} />

      <Text className={styles.label()}>{label}</Text>

      <View className={styles.line()} />
    </View>
  )
}
