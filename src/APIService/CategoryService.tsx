import { Category } from '../types'
import { BaseService } from './BaseService'

export class CategoryService extends BaseService {
  getAllCategory = () => {
    return this.get('category')
  }
  deleteCategory = (id: string) => {
    return this.delete(`category/${id}`)
  }
  editCategory= (id: string, data: Category) => {
    return this.put(`category/${id}`, data)
}
  createCategory= ( data: Category) => {
  return this.post('category/', data)
}
}
export const categoryService = new CategoryService()
