import { BaseService } from './BaseService'

export class UserService extends BaseService {
  getAllUser = () => {
    return this.get('users')
  }
  getUserById = (userId: string) => {
    return this.get(`users/${userId}`)
  }
  
}
export const userService = new UserService()
