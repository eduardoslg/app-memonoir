type TabItem = {
  label: string
  value: string
}

type UseTabsViewModelProps = {
  tabs: TabItem[]
  selected: string
  onChange: (value: string) => void
}

export const useTabsViewModel = ({
  tabs,
  selected,
  onChange,
}: UseTabsViewModelProps) => {
  const handleSelect = (value: string) => {
    onChange(value)
  }

  return {
    tabs,
    selected,
    handleSelect,
  }
}
