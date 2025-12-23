import { FC } from 'react'
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { router } from 'expo-router'

import { AppInputController } from '../../components/Form/AppInput'
import { Header } from '../../components/Header'
import { useLoginViewModel } from './useLogin.viewModel'

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  errors,
  handleSubmit,
}) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Header title="Criar conta" onBack={() => router.back()} />

          <View className="flex-1 mt-6 gap-6">
            <View>
              <Text className="font-roboto font-bold text-3xl">
                Criar conta
              </Text>
              <Text className="font-roboto font-medium">
                Insira seus dados para começar.
              </Text>
            </View>

            <View className="gap-4">
              <AppInputController
                control={control}
                errors={errors}
                name="login"
                label="Nome de usuário"
                placeholder="Seu nome no jogo"
                leftIcon="person"
              />

              <AppInputController
                control={control}
                errors={errors}
                name="email"
                label="E-mail"
                placeholder="exemplo@email.com"
                leftIcon="mail-sharp"
              />

              <AppInputController
                control={control}
                errors={errors}
                name="password"
                label="Senha"
                placeholder="Mínimo de 8 caracteres"
                leftIcon="lock-closed-sharp"
                secureTextEntry
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}
