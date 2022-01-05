import { UserEdited } from '../types'
import { BaseService } from './BaseService'

export class UserService extends BaseService {
  getAllUser = () => {
    return this.get('users')
  }
  getUserById = (userId: string) => {
    return this.get(`users/${userId}`)
  }
  deleteUserById = (userId: string) => {
    return this.delete(`users/${userId}`)
  }
  updateUserById = (userId: string, data: UserEdited) => {
    return this.put(`users/${userId}`, data)
  }
  
}
export const userService = new UserService()
