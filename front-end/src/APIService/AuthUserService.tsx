import { User, UserForgotPasswordAction, UserLogin, UserSignUp } from '../types'
import { AuthBaseService } from './AuthBaseService'

type UserGoogleLogin = {
  tokenId: string;
}
type  UserForgotPassword = {
  email: string
}
export class AuthUserService extends AuthBaseService {
  loginUser = (data: UserLogin) => {
    return this.post('login', data)
  }

  loginGoogleUser = (tokenId: UserGoogleLogin) => {
    return this.post('google-login', tokenId)
  }

  signUpUser = (data: UserSignUp) => {
    return this.post('register', data)
  }
  forgotPassword = (email: UserForgotPassword) => {
    return this.post('forgotPassword', email)
  }
  
}
export const authUserService = new AuthUserService()
