import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { tabsVariants } from './tabs.variants'
import { useTabsViewModel } from './useTabsViewModel'

export interface TabsProps {
  tabs: { label: string; value: string; onPress?: () => void }[]
  selected: string
  onChange: (value: string) => void
  containerClassName?: string
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  selected,
  onChange,
  containerClassName,
}) => {
  const { handleSelect } = useTabsViewModel({
    tabs,
    selected,
    onChange,
  })

  return (
    <View
      className={tabsVariants().container({
        className: containerClassName,
      })}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === selected
        const styles = tabsVariants({ selected: isSelected })

        return (
          <Pressable
            key={tab.value}
            className={styles.tab()}
            onPress={() => {
              tab.onPress?.() // ⬅️ executa ação específica
              handleSelect(tab.value) // ⬅️ troca a tab
            }}
          >
            <Text className={styles.label()}>{tab.label}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}
