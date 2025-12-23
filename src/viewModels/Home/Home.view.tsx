import { FC } from 'react'
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'

import { router } from 'expo-router'

import { Button } from '../../components/Button'
import { useHomeViewModel } from './useHome.viewModel'

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ justifyContent: 'center', height: '100%' }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex justify-center items-center gap-16 m-safe-offset-8">
          <Image
            alt="banner"
            className="w-[230px] h-[210px] rounded-3xl"
            source={require('../../../assets/memonoir.png')}
          />

          <View className="flex-col gap-2">
            <Text className="font-bold text-5xl text-center font-roboto">
              MemoNoir
            </Text>

            <Text className="text-center font-medium leading-relaxed font-roboto">
              O desafio definitivo para sua {'\n'}mente em preto e branco.
            </Text>
          </View>

          <View className="w-full flex flex-col gap-4">
            <Button
              title="Cadastrar"
              onPress={() => router.navigate('/register')}
              icon="arrow-forward"
            />

            <Button
              title="Entrar"
              color="black"
              onPress={() => router.navigate('/login')}
            />

            <TouchableOpacity
              className="flex h-12 items-center justify-center px-6"
              onPress={() => {
                router.navigate('/')
              }}
            >
              <Text>Entrar como convidado</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
