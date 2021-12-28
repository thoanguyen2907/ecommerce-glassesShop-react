import { Product } from '../types'
import { BaseService } from './BaseService'

export class ProductService extends BaseService {
  getAllProduct = (url: string) => {
    return this.get(`products${url}`)
  }
  deleteProduct = (id: string) => {
    return this.delete(`products/${id}`)
  }
  editProduct = (id: string, data: Product) => {
    return this.put(`products/${id}`, data)
}
  createProduct = (data: Product) => {
  return this.post(`products`, data)
}
  getNewArrivalProduct = () => {
    return this.get('products/?newArrival=true')
  }
  getPopularProduct = () => {
    return this.get('products/?popular=true')
  }
  getProductDetail = (productId: string) => {
    return this.get(`products/${productId}`)
  }
}
export const productService = new ProductService()
