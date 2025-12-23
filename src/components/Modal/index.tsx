import { Modal as RNModal, TouchableWithoutFeedback, View } from 'react-native'

import { useModalStore } from '../../shared/store/modal-store'

export const Modal = () => {
  const { isOpen, config, content, close } = useModalStore()

  if (!isOpen || !content) return null

  return (
    <RNModal
      visible={isOpen}
      animationType={config.animationType}
      transparent={config.transparent}
      statusBarTranslucent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <TouchableWithoutFeedback onPress={() => {}}>
            {content}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  )
}
