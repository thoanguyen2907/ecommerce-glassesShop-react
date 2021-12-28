import { AddOrderNoLoginAction, ADD_PRODUCT_NO_LOGIN, DeleteOrderNoLoginAction, DELETE_ORDER_NO_LOGIN, InDecreaseOrderNoLoginAction, INCREASE_QUANTITY_NO_LOGIN } from './../../types';
import { STATUSCODE } from './../../utils/constants/settingSystem'

import { productService } from './../../APIService/ProductService'
import { select, takeLatest } from 'redux-saga/effects'
import { call, put, delay } from 'redux-saga/effects'
import {
  GetProductAction,
  RemoveProductAction,
  EditProductAction,
  GET_PRODUCT,
  DISPLAY_LOADING,
  HIDE_LOADING,
  CLOSE_DRAWER,
  GetNewArrivalProductAction,
  GET_PRODUCT_NEW_ARRIVAL,
  GetPopularProductAction,
  GET_PRODUCT_POPULAR,
  GetProductDetailAction,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_REDUCER,
  CreateNewProductAction,
} from '../../types'

function* getListProductSaga(action: GetProductAction) {
  yield put({
    type: DISPLAY_LOADING
})
  const {valueSearch}  = action.payload;

  let url = '?'
  if(valueSearch.brand !== '') url+= '&brand=' + valueSearch.brand
  if(valueSearch.color !== '') url+= '&color[in]=' + valueSearch.color
  if(valueSearch.price !== '') url+= '&price[gte]=' + valueSearch.price
  if(valueSearch.category !== '') url+= '&category=' + valueSearch.category
 
  try {
    const { data, status } = yield call(() => productService.getAllProduct(url))

    yield delay(1200)
    //DATA GET FROM API
    if (status === STATUSCODE.SUCCESS) {
      yield put({
        type: GET_PRODUCT,
        payload: {
          productList: data.data,
        },
      })
    }
  } catch (err) {
    console.log(err)
  }
  yield put({
    type: HIDE_LOADING
})
}
export function* trackingGetListProductSaga() {
  yield takeLatest('GET_PRODUCT_LIST_SAGA', getListProductSaga)
}

function* deleteProductSaga(action: RemoveProductAction) {
  console.log(action.payload)
  yield put({
    type: DISPLAY_LOADING
})

  try {
    const { data, status } = yield call(() => productService.deleteProduct(action.payload.id))
   
    yield put({
      type: "GET_PRODUCT_LIST_SAGA",
      payload: {
        valueSearch: {
          brand: '',
          color: '',
          price: '', 
          category: ''
        }
      }
    })

    yield delay(1200)
  } catch (err) {
    console.log(err)
  }
  yield put({
    type: HIDE_LOADING
})
}
export function* trackingDeleteProductSaga() {
  yield takeLatest('DELETE_PRODUCT_SAGA', deleteProductSaga)
}

function* updateProductSaga(action: EditProductAction) {
  yield put({
    type: DISPLAY_LOADING
})
  const {id, product} = action.payload
  try {
    const { data, status } = yield call(() => productService.editProduct(id, product))
    yield put({
      type: "GET_PRODUCT_LIST_SAGA",
      payload: {
        valueSearch: {
          brand: '',
          color: '',
          price: '',
          category: ''
        }
    }})
    yield delay(1200)

  } catch (err) {
    console.log(err)
  }
  yield put({
    type: HIDE_LOADING
})
  yield put({
  type: CLOSE_DRAWER
})
}
export function* trackingUpdateProductSaga() {
  yield takeLatest('UPDATE_PRODUCT_SAGA', updateProductSaga)
}


function* createProductSaga(action: CreateNewProductAction) {
  yield put({
    type: DISPLAY_LOADING
})
  const {product} = action.payload
  try {
    const { data } = yield call(() => productService.createProduct(product))

    yield put({
      type: "GET_PRODUCT_LIST_SAGA",
      payload: {
        valueSearch: {
          brand: '',
          color: '',
          price: '',
          category: ''
        }
    }})
    yield delay(1200)

  } catch (err) {
    console.log(err)
  }
  yield put({
    type: HIDE_LOADING
})
  yield put({
  type: CLOSE_DRAWER
})
}
export function* trackingCreateProductSaga() {
  yield takeLatest('CREATE_PRODUCT_SAGA', createProductSaga)
}


function* getNewArrivalProductSaga(action: GetNewArrivalProductAction) {
  try {
    const { data, status } = yield call(() => productService.getNewArrivalProduct())

    //DATA GET FROM API
    if (status === STATUSCODE.SUCCESS) {
      yield put({
        type: GET_PRODUCT_NEW_ARRIVAL,
        payload: {
          productNewArrival: data.data
        },
      })
    }
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetNewArrivalProductSaga() {
  yield takeLatest('GET_PRODUCT_NEW_ARRIVAL_SAGA', getNewArrivalProductSaga)
}
function* getPopularProductSaga(action: GetPopularProductAction) {
  try {
    const { data, status } = yield call(() => productService.getPopularProduct())
    //DATA GET FROM API
    if (status === STATUSCODE.SUCCESS) {
      yield put({
        type: GET_PRODUCT_POPULAR,
        payload: {
          productPopular: data.data
        },
      })
    }
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetPopularProductSaga() {
  yield takeLatest('GET_PRODUCT_POPULAR_SAGA', getPopularProductSaga)
}

function* getProductDetailSaga(action: GetProductDetailAction) {
  yield put({
    type: DISPLAY_LOADING
})

  const {productId} = action.payload

  try {
    const { data, status } = yield call(() => productService.getProductDetail(productId))
     yield delay(1200)
    //DATA GET FROM API
    if (status === STATUSCODE.SUCCESS) {
      yield put({
        type: GET_PRODUCT_DETAIL_REDUCER,
        payload: {
          productDetail: data
        },
      })
    }
  } catch (err) {
    console.log(err)
  }
  yield put({
    type: HIDE_LOADING
})
}
export function* trackingGetProductDetailSaga() {
  yield takeLatest('GET_PRODUCT_DETAIL_SAGA', getProductDetailSaga)
}

function* addProductNoLoginSaga(action: AddOrderNoLoginAction): any {
  yield put({
    type: ADD_PRODUCT_NO_LOGIN,
    payload: {
      cart: action.payload.cart,
    },
  })

  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
}

export function* trackingAddProductNoLoginSaga() {
  yield takeLatest('ADD_PRODUCT_NO_LOGIN_SAGA', addProductNoLoginSaga)
}

function* deleteProductNoLoginSaga(action: DeleteOrderNoLoginAction): any {
  yield put({
    type: DELETE_ORDER_NO_LOGIN,
    payload: {
      cartDeleted: action.payload.cartDeleted,
    },
  })
}

export function* trackingDeleteProductNoLoginSaga() {
  yield takeLatest('DELETE_PRODUCT_NO_LOGIN_SAGA', deleteProductNoLoginSaga)
}

function* inDecreaseProductNoLoginSaga(action: InDecreaseOrderNoLoginAction) {
  let { code, inDecrease } = action.payload
  yield put({
    type: INCREASE_QUANTITY_NO_LOGIN,
    payload: {
      code,
      inDecrease,
    },
  })
}

export function* trackingInDecreaseProductNoLoginSaga() {
  yield takeLatest('INCREASE_DECREASE_CART_SAGA', inDecreaseProductNoLoginSaga)
}

