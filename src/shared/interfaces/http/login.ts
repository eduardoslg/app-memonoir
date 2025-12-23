import { UserInterface } from '../user'

export interface LoginHttpParams {
  email: string
  password: string
}

export interface LoginHttpResponse {
  token: string
  refreshToken: string
  user: UserInterface
}
