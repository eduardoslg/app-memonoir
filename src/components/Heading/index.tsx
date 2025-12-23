import { FC } from 'react'
import { Text as RNText, TextProps as RNTextProps } from 'react-native'

import { TextVariantsProps } from '../Text/text.variants'
import { useTextViewModel } from '../Text/useTextViewModel'

interface HeadingProps extends RNTextProps, TextVariantsProps {
  colorValue?: string
  numberOfLines?: number
}

export const Heading: FC<HeadingProps> = ({
  children,
  color,
  colorValue,
  size = 'xl',
  weight = 'bold',
  uppercase = false,
  letterSpacing = 'md',
  numberOfLines,
  className,
  ...rest
}) => {
  const { styles } = useTextViewModel({
    color,
    size,
    weight,
    uppercase,
    letterSpacing,
    className,
  })

  return (
    <RNText
      className={styles.container}
      style={color === 'custom' ? { color: colorValue } : undefined}
      numberOfLines={numberOfLines}
      {...rest}
    >
      {children}
    </RNText>
  )
}
