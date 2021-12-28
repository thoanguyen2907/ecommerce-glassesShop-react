import { STATUSCODE } from './../../utils/constants/settingSystem'

import { select, takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import {
CategoryActions,
  CLOSE_DRAWER,
  CreateCategoryAction,
  EditCategoryAction,
GET_CATEGORY,
RemoveCategoryAction
} from '../../types'
import { categoryService } from '../../APIService/CategoryService'

function* getListCategorySaga(action: CategoryActions) {
  try {
    const { data, status } = yield call(() => categoryService.getAllCategory())
    console.log(data)
    console.log(status)
    //DATA GET FROM API
      yield put({
        type: GET_CATEGORY,
        payload: {
            categoryList: data.data,
        },
      })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetListCategorySaga() {
  yield takeLatest('GET_CATEGORY_LIST_SAGA', getListCategorySaga)
}
function* deleteCategorySaga(action: RemoveCategoryAction) {
  console.log(action.payload)
  try {
    const { data, status } = yield call(() => categoryService.deleteCategory(action.payload.id))
    yield put({
      type: "GET_CATEGORY_LIST_SAGA"
    })

  } catch (err) {
    console.log(err)
  }
}
export function* trackingDeleteCategorySaga() {
  yield takeLatest('DELETE_CATEGORY_SAGA', deleteCategorySaga)
}
function* createCategorySaga(action: CreateCategoryAction) {
    const {name, title, slug} = action.payload
  try {
    const { data, status } = yield call(() => categoryService.createCategory({name, title, slug}))
    console.log(data)
    yield put({
      type: "GET_CATEGORY_LIST_SAGA"
    })
    yield put({
      type: CLOSE_DRAWER
    })

  } catch (err) {
    console.log(err)
  }
}
export function* trackingCreateCategorySaga() {
  yield takeLatest('CREATE_CATEGORY_SAGA', createCategorySaga)
}


function* updateCategorySaga(action: EditCategoryAction) {
  console.log(action.payload)
  const {id, category} = action.payload
  try {
    const { data } = yield call(() => categoryService.editCategory(id, category))
    console.log(data)
    yield put({
      type: "GET_CATEGORY"
    })

  } catch (err) {
    console.log(err)
  }
}
export function* trackingUpdateCategorySaga() {
  yield takeLatest('UPDATE_CATEGORY_SAGA', updateCategorySaga)
}
