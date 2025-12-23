type UseButtonViewModelProps = {
  disabled?: boolean
  onPress?: () => void
}

export const useButtonViewModel = ({
  disabled,
  onPress,
}: UseButtonViewModelProps) => {
  const handlePress = () => {
    if (disabled) return
    onPress?.()
  }

  return {
    handlePress,
  }
}
