import { AddOrderAction, ADD_ORDER_SAGA, DECREASE_PRODUCT_QUANTITY_SAGA, DELETE_ORDER_SAGA, DELETE_ORDER_SAGA_ADMIN, GET_ORDERS_BY_USERID_SAGA, GET_ORDER_LIST_SAGA, INCREASE_PRODUCT_QUANTITY_SAGA, RemoveOrderAction } from './../../types';
import { STATUSCODE } from './../../utils/constants/settingSystem'

import { delay, select, takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import {
  DeleteOrderAction,
  DISPLAY_LOADING,
  GetOrderAction,
  GetOrderDataByUserId,
  GET_ORDER,
  GET_ORDERS_BY_USER_REDUCER,
  HIDE_LOADING,
  IncreaseOrderAction,
} from '../../types'
import { orderService } from '../../APIService/OrderService'
import { openNotification } from '../../utils/notification/notification';

function* getListOrderSaga(action: GetOrderAction) {
  try {
    const { data, status } = yield call(() => orderService.getAllOrder())

    //DATA GET FROM API
      yield put({
        type: GET_ORDER,
        payload: {
            order: data.data,
        },
      })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetListOrderSaga() {
  yield takeLatest(GET_ORDER_LIST_SAGA, getListOrderSaga)
}

function* increaseQuantitySaga(action: IncreaseOrderAction) {
  const {orderId, userId} = action.payload
  try {
    const { data, status } = yield call(() => orderService.increaseQuantity(orderId))
    //DATA GET FROM API

    yield put({
      type: GET_ORDERS_BY_USERID_SAGA,
      payload: {
        userId: userId
    },
    })
  } catch (err) {
    console.log(err)
  }
}
export function* trackingIncreaseQuantitySaga() {
  yield takeLatest(INCREASE_PRODUCT_QUANTITY_SAGA, increaseQuantitySaga)
}

function* decreaseQuantitySaga(action: IncreaseOrderAction) {
  const {orderId, userId} = action.payload
  try {
    const { data, status } = yield call(() => orderService.decreaseQuantity(orderId))
    //DATA GET FROM API
    yield put({
      type: GET_ORDERS_BY_USERID_SAGA,
      payload: {
        userId: userId
    },
    })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingDecreaseQuantitySaga() {
  yield takeLatest(DECREASE_PRODUCT_QUANTITY_SAGA, decreaseQuantitySaga)
}

function* getOrdersByUserIdSaga(action: GetOrderDataByUserId): any {
  
  const {userId} = action.payload
  try {
    const { data, status } = yield call(() => orderService.getOrdersByUserId(userId))
  
    //DATA GET FROM API
    yield put({
      type: GET_ORDERS_BY_USER_REDUCER,
      payload: {
          orderListByUserId: data.data,
      },
    })
    const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
   

  } catch (err) {
    console.log(err)
  }
 
}
export function* trackingGetOrdersByUserIdSaga() {
  yield takeLatest(GET_ORDERS_BY_USERID_SAGA, getOrdersByUserIdSaga)
}

function* deleteOrderSagaByUserOrderId(action: DeleteOrderAction) {
  const {orderId, userId} = action.payload
  try {
    const { data, status } = yield call(() => orderService.deleteOrderById(orderId));
    openNotification('Delete Successfully', 'Delete Order Successfully !!');
    //DATA GET FROM API
    yield put({
      type: GET_ORDERS_BY_USERID_SAGA,
      payload: {
        userId: userId
    },
    })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingDeleteOrderSagaByUserOrderId() {
  yield takeLatest(DELETE_ORDER_SAGA, deleteOrderSagaByUserOrderId)
}

function* addOrderSaga(action: AddOrderAction) {
  const {products, user} = action.payload
  
  try {
    const { data, status } = yield call(() => orderService.addOrder({user, products}))
 
    openNotification('Successfully', 'Add Order Successfully !!');
    //DATA GET FROM API
    yield put({
      type: GET_ORDERS_BY_USERID_SAGA,
      payload: {
        userId: user
    },
    })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingAddOrderSaga() {
  yield takeLatest(ADD_ORDER_SAGA, addOrderSaga)
}
function* deleteOrderSaga(action: RemoveOrderAction) {
  const {orderId} = action.payload

  try {
    const { data, status } = yield call(() => orderService.deleteOrder(orderId))
    openNotification('Successfully', 'Delete Order Successfully !!');
    //DATA GET FROM API
    yield put({
      type: GET_ORDER_LIST_SAGA,
      
    })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingDeleteOrderSaga() {
  yield takeLatest(DELETE_ORDER_SAGA_ADMIN, deleteOrderSaga)
}
