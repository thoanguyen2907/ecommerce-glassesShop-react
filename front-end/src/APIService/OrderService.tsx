import { Order } from '../types'
import { BaseService } from './BaseService'

export class OrderService extends BaseService {
  getAllOrder = () => {
    return this.get('orders')
  }
  increaseQuantity = (orderId: string) => {
    return this.put(`orders/event/increase/${orderId}`, orderId)
  }
  decreaseQuantity = (orderId: string) => {
    return this.put(`orders/event/decrease/${orderId}`,orderId )
  }

  getOrdersByUserId = (userId: string) => {
    return this.get(`orders/user/${userId}`)
  }
  deleteOrderById = (orderId: string) => {
    return this.delete(`orders/${orderId}`)
  }

  addOrder = (data: Order) => {
    return this.post('orders',data)
  }
  deleteOrder = (orderId: string) => {
    return this.delete(`orders/${orderId}` )
  }
}
export const orderService = new OrderService()
