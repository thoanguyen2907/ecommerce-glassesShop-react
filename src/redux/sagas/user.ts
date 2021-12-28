import { DISPLAY_LOADING, GET_USER_DATA_BY_ID, HIDE_LOADING, UserLoginGoogleAction } from './../../types';
import { userService } from './../../APIService/UserService';
import { STATUSCODE } from './../../utils/constants/settingSystem'
import { delay, select, takeLatest } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import {
  GetUserAction,
  GetUserByIdAction,
  GET_USER,
  GET_USER_DATA_LOGIN,
  GET_USER_TOKEN_LOGIN,
  UserLoginAction,
  UserSignUpAction,
} from '../../types'
import { authUserService } from '../../APIService/AuthUserService';
import { history } from '../../utils/history/history';

function* getListUserSaga(action: GetUserAction) {
  try {
    const { data, status } = yield call(() => userService.getAllUser())
    //DATA GET FROM API
      yield put({
        type: GET_USER,
        payload: {
          userList: data,
        },
      })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetListUserSaga() {
  yield takeLatest('GET_USER_LIST_SAGA', getListUserSaga)
}

function* userLoginSaga(action: UserLoginAction): any {
  const {email, password} = action.payload
  try {
    const { data } = yield call(() => authUserService.loginUser({email, password}))
    console.log(data)
    //DATA GET FROM API
      yield put({
        type: GET_USER_TOKEN_LOGIN,
        payload: {
          token: data.token,
          userData: data.userFound
        },
      })
      const state = yield select()
      yield localStorage.setItem('state', JSON.stringify(state))
      localStorage.setItem('token', data.token)
      
    history.push('/homepage')

  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserLoginSaga() {
  yield takeLatest('USER_LOGIN_SAGA', userLoginSaga)
}

function* userLoginGoogleSaga(action: UserLoginGoogleAction): any {
  const {tokenId} = action.payload
  console.log({tokenId})
  try {
  
     const { data } = yield call(() => authUserService.loginGoogleUser({tokenId}))
     console.log(data)
    //DATA GET FROM API
      yield put({
        type: GET_USER_TOKEN_LOGIN,
        payload: {
          token: data.token,
          userData: data.user
        },
      })
      const state = yield select()
      yield localStorage.setItem('state', JSON.stringify(state))
      localStorage.setItem('token', data.token)
      
    history.push('/homepage')

  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserLoginGoogleSaga() {
  yield takeLatest('USER_LOGIN_GOOGLE_SAGA', userLoginGoogleSaga)
}



function* userSignUpSaga(action: UserSignUpAction) {
  const {lastName, firstName, email, phone, password } = action.payload
  try {
    const { data } = yield call(() => authUserService.signUpUser({lastName, firstName, email, phone, password}) )
    history.push('/login/user')
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserSignUpSaga() {
  yield takeLatest('USER_SIGN_UP_SAGA', userSignUpSaga)
}

function* getUserDataByIdSaga(action: GetUserByIdAction): any {
  yield put({
    type: DISPLAY_LOADING
})
  const {userId} = action.payload

  try {
    const { data } = yield call(() => userService.getUserById(userId) )
    console.log(data)
    yield delay(1200)
  
    yield put({
      type: GET_USER_DATA_BY_ID,
      payload: {
        userDataById: data
      },
    })
  } catch (err) {
    console.log(err)
  }
  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
  yield put({
    type: HIDE_LOADING
})
}
export function* trackingGetUserDataByIdSaga() {
  yield takeLatest('GET_USER_DETAIL_BY_ID', getUserDataByIdSaga)
}



