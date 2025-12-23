import { UserInterface } from '../user'

export interface VerifyCodeHttpParams {
  code: string
  email: string
}

export interface VerifyCodeHttpResponse {
  token: string
  refreshToken: string
  user: UserInterface
}
