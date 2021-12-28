import { useSelector } from 'react-redux';
import {
    UserLoginState,
    GetUserDataLoginAction,
    GetUserLoginAction,
    GET_USER_TOKEN_LOGIN,
    GET_USER_DATA_BY_ID,
    GetUserDataByIdAction,
    UserDataLogin,
  } from './../../types'
  let user: UserDataLogin = {
    email: "",
    id: "",
    password: "",
    role: ""
  }
  
  
  const initialState: UserLoginState = {
    userDataLogin : user,
    userTokenDataLogin: '',
    userDataById: {
      email: "",
      id: "",
      password: "",
      role: "",
      orders: []
    }
  }
  
  const userLogin = (
    state = initialState,
    action: GetUserDataLoginAction | GetUserLoginAction | GetUserDataByIdAction
  ): UserLoginState => {
    switch (action.type) {
    case GET_USER_DATA_BY_ID:    

        state.userDataById = action.payload.userDataById
        console.log(state.userDataById)
      return { ...state}

    case GET_USER_TOKEN_LOGIN:
   
      state.userTokenDataLogin = action.payload.token
      state.userDataLogin = action.payload.userData
      return { ...state}

    default:
      return {...state}
    }
  }
  
  export default userLogin
  