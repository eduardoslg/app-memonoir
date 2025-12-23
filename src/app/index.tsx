import { Redirect } from 'expo-router'

import { useUserStore } from '../shared/store/user-store'

export default function App() {
  const { user, token } = useUserStore()

  if (user && token) {
    return <Redirect href={'/'} />
  }

  return <Redirect href={'/home'} />
}
