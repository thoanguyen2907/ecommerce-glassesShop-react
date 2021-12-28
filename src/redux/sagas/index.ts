import { all } from 'redux-saga/effects'

import * as productSagas from './product'

import * as userSagas from './user'
import * as orderSagas from './order'
import * as categorySagas from './category'


export default function* rootSaga() {
  yield all([
    productSagas.trackingGetListProductSaga(),
    productSagas.trackingDeleteProductSaga(),
    productSagas.trackingUpdateProductSaga(),
    productSagas.trackingGetNewArrivalProductSaga(),
    productSagas.trackingGetPopularProductSaga(),
    productSagas.trackingGetProductDetailSaga(),
    productSagas.trackingCreateProductSaga(),
    productSagas.trackingAddProductNoLoginSaga(),
    productSagas.trackingDeleteProductNoLoginSaga(),
    productSagas.trackingInDecreaseProductNoLoginSaga(),


    userSagas.trackingGetListUserSaga(),
    userSagas.trackingUserLoginSaga(),
    userSagas.trackingUserSignUpSaga(),
    userSagas.trackingGetUserDataByIdSaga(),
    userSagas.trackingUserLoginGoogleSaga(),
    
    orderSagas.trackingGetListOrderSaga(),
    orderSagas.trackingDecreaseQuantitySaga(),
    orderSagas.trackingIncreaseQuantitySaga(),
    orderSagas.trackingGetOrdersByUserIdSaga(),
    orderSagas.trackingDeleteOrderSagaByUserOrderId(),
    orderSagas.trackingAddOrderSaga(),
    orderSagas.trackingDeleteOrderSaga(),

    categorySagas.trackingGetListCategorySaga(),
    categorySagas.trackingDeleteCategorySaga(),
    categorySagas.trackingUpdateCategorySaga(),
    categorySagas.trackingCreateCategorySaga()
  ])
}
