import { CLOSE_DRAWER, DeleteUserAction, DELETE_USER_BY_ID_SAGA, DISPLAY_LOADING, EditUserAction, GET_USER_DATA_BY_ID, GET_USER_DETAIL_BY_ID, GET_USER_LIST_SAGA, HIDE_LOADING, UPDATE_USER_SAGA, UserForgotPasswordAction, UserLoginGoogleAction, USER_FORGOT_PASSWORD_SAGA, USER_LOGIN_GOOGLE_SAGA, USER_LOGIN_SAGA, USER_SIGN_UP_SAGA } from './../../types';
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
import { openNotification } from '../../utils/notification/notification';

function* getListUserSaga(action: GetUserAction) {
  try {
    const { data, status } = yield call(() => userService.getAllUser())
    //DATA GET FROM API
      yield put({
        type: GET_USER,
        payload: {
          userList: data.data,
        },
      })
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingGetListUserSaga() {
  yield takeLatest(GET_USER_LIST_SAGA, getListUserSaga)
}

function* userLoginSaga(action: UserLoginAction): any {
  const {email, password} = action.payload
  try {
    const { data } = yield call(() => authUserService.loginUser({email, password}))

    //DATA GET FROM API
      if(data.success) {
        openNotification('Login Success', 'Hello! Welcome to our website')
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
      }
    history.push('/homepage')

  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserLoginSaga() {
  yield takeLatest(USER_LOGIN_SAGA, userLoginSaga)
}

function* userForgotPasswordSaga(action: UserForgotPasswordAction): any {

  const {email} = action.payload
  try {
    const { data } = yield call(() => authUserService.forgotPassword({email}))

    if(data.success) {
      openNotification('Success', 'Check your email, please ')
    }  

  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserForgotPasswordSaga() {
  yield takeLatest(USER_FORGOT_PASSWORD_SAGA, userForgotPasswordSaga)
}


function* userLoginGoogleSaga(action: UserLoginGoogleAction): any {
  const {tokenId} = action.payload

  try {
  
     const { data } = yield call(() => authUserService.loginGoogleUser({tokenId}))
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
  yield takeLatest(USER_LOGIN_GOOGLE_SAGA, userLoginGoogleSaga)
}



function* userSignUpSaga(action: UserSignUpAction) {
  const {lastName, firstName, email, phone, password } = action.payload
  try {
    const { data } = yield call(() => authUserService.signUpUser({lastName, firstName, email, phone, password}) )
    if(data.success) {
      openNotification('Success Signup', 'Signup Successfully! Please log in ')
    } 
    history.push('/login/user')
    
  } catch (err) {
    console.log(err)
  }
}
export function* trackingUserSignUpSaga() {
  yield takeLatest(USER_SIGN_UP_SAGA, userSignUpSaga)
}

function* getUserDataByIdSaga(action: GetUserByIdAction): any {
  yield put({
    type: DISPLAY_LOADING
})
  const {userId} = action.payload

  try {
    const { data } = yield call(() => userService.getUserById(userId) )
    
    yield delay(1200)
  
    yield put({
      type: GET_USER_DATA_BY_ID,
      payload: {
        userDataById: data.data
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
  yield takeLatest(GET_USER_DETAIL_BY_ID, getUserDataByIdSaga)
}

function* deleteUserDataByIdSaga(action: DeleteUserAction): any {
  const {userId} = action.payload
  try {
    const { data } = yield call(() => userService.deleteUserById(userId) )
    openNotification('Success', 'Delete User Successfully ')
  
    yield put({
      type: GET_USER_LIST_SAGA
    })
  } catch (err) {
    console.log(err)
  }
}
export function* trackingDeleteUserDataByIdSaga() {
  yield takeLatest(DELETE_USER_BY_ID_SAGA, deleteUserDataByIdSaga)
}

function* updateUserDataByIdSaga(action: EditUserAction): any {
  const {userId, userEdited} = action.payload
  try {
    const { data } = yield call(() => userService.updateUserById(userId, userEdited) )
    console.log(data)
    if(data.success) {
      openNotification('Success', 'Update user successfully')
      yield put({
        type: GET_USER_LIST_SAGA
      })
    }
    
  } catch (err) {
    console.log(err)
  }
  yield put ({
    type: CLOSE_DRAWER
  })
}
export function* trackingUpdateUserDataByIdSaga() {
  yield takeLatest(UPDATE_USER_SAGA, updateUserDataByIdSaga)
}





