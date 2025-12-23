import { FC } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import { TextVariantsProps } from './text.variants'
import { useTextViewModel } from './useTextViewModel'

interface AppTextProps extends RNTextProps, TextVariantsProps {
  colorValue?: string // para custom hex
}

export const Text: FC<AppTextProps> = ({
  children,
  color,
  colorValue,
  size,
  weight,
  className,
  align,
  ...rest
}) => {
  const { styles } = useTextViewModel({ color, size, weight, align, className })

  return (
    <RNText
      className={styles.container}
      style={color === 'custom' ? { color: colorValue } : undefined}
      {...rest}
    >
      {children}
    </RNText>
  )
}
