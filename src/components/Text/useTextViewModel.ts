import { TextVariantsProps, textVariants } from './text.variants'

export const useTextViewModel = (
  props: TextVariantsProps & { className?: string },
) => {
  const { color, size, weight, uppercase, letterSpacing, className, align } =
    props

  const styles = {
    container: textVariants({
      color,
      size,
      weight,
      uppercase,
      letterSpacing,
      className,
      align,
    }).container(),
  }

  return { styles }
}
