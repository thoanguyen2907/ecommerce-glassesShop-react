import { combineReducers } from 'redux'

import product from './product'
import user from './user'
import order from './order'
import drawer from './drawer'
import category from './category'
import productEdit from './productEdit'
import categoryEdit from './categoryEdit'
import loading from './loading'
import userLogin from './userLogin'

const createRootReducer = () =>
  combineReducers({
    product, 
    user,
    order, 
    drawer,
    category,
    productEdit,
    categoryEdit,
    loading,
    userLogin
  })

export default createRootReducer
