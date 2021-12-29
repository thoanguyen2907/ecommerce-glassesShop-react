
import {
    GET_ORDER,
    OrderState,
    OrderActions,
    GET_ORDERS_BY_USER_REDUCER,
    SEND_EDITED_ORDER,
    ADD_PRODUCT_NO_LOGIN,
    DELETE_ORDER_NO_LOGIN,
    INCREASE_QUANTITY_NO_LOGIN,
  } from './../../types'
  
  const initialState: OrderState = {
    orderList: [],
    orderListByUserId: [],
    orderEdited: {
      user: '',
      products: {
        product: '',
        quantity: 1
      },
      _id: ''
    }, 
    cartList: []
  }
  
  const order = (
    state = initialState,
    action: OrderActions
  ): OrderState => {
    switch (action.type) {
    case GET_ORDER:
      return { ...state, orderList: action.payload.order}
    
    case GET_ORDERS_BY_USER_REDUCER: 
    return { ...state, orderListByUserId: action.payload.orderListByUserId}

    case SEND_EDITED_ORDER: 
    const orderEdited = action.payload.orderEdited
    return { ...state, orderEdited: orderEdited}

    case ADD_PRODUCT_NO_LOGIN: 
    console.log(action.payload.cart)
    const cartUpdated = [...state.cartList]
    const {cart} = action.payload
    let indexAddProduct = state.cartList.findIndex(
      (product) => product._id === cart._id
    ) 
    if(indexAddProduct !== -1) {
      cartUpdated[indexAddProduct].quantity += 1
    } else {
      cartUpdated.push({...cart, quantity: 1})
    }
   
 
    return { ...state, cartList: cartUpdated}

    case DELETE_ORDER_NO_LOGIN: 
    const cartDelete = [...state.cartList]
    let index = cartDelete.findIndex(
      (cart) => cart._id === action.payload.cartDeleted._id
    )
    if(index !== -1) {
      cartDelete.splice(index, 1)
    } 
   return { ...state, cartList: cartDelete}

   case INCREASE_QUANTITY_NO_LOGIN: 
   const cartUpdateQuantity = [...state.cartList]
   const { code, inDecrease } = action.payload
   const cartIndex = cartUpdateQuantity?.findIndex(
    (cart) => cart._id === code
  ) 
  if (cartIndex !== -1) {
    if (inDecrease) {
      if (cartUpdateQuantity[cartIndex]) {
      }
      cartUpdateQuantity[cartIndex].quantity += 1
    } else {
      if (cartUpdateQuantity[cartIndex].quantity > 1) {
        cartUpdateQuantity[cartIndex].quantity -= 1
      } else {
        alert('Quantinty should be at least 1')
      }
    }
  }
   return { ...state, cartList: cartUpdateQuantity}
    default:
      return {...state}
    }
  }
  
  export default order
  