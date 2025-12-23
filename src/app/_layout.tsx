import { useEffect } from 'react'
import { StatusBar } from 'react-native'

import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import ToastManager from 'toastify-react-native'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '../styles/global.css'
import { Modal } from '../components/Modal'

const queryClient = new QueryClient()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'plus-jakarta-sans': require('../fonts/plus-jakarta-sans.ttf'),
    roboto: require('../fonts/roboto.ttf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(private)" />
        </Stack>

        <Modal />
        <ToastManager useModal={false} />
      </QueryClientProvider>
    </>
  )
}
