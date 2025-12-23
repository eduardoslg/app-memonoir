import * as yup from 'yup'

export const loginScheme = yup.object({
  login: yup.string().required('Login é obrigatório'),
  email: yup.string().email('Email inválido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})

export type LoginFormData = yup.InferType<typeof loginScheme>
