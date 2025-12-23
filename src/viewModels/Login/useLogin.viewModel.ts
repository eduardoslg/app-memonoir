import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

import { LoginFormData, loginScheme } from './login.scheme'

export const useLoginViewModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      login: '',
      email: '',
      password: '',
    },
  })

  return {
    control,
    handleSubmit,
    errors,
  }
}
