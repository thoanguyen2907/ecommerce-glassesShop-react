import {
    GET_USER,
    GetUserAction,
    UserState,
    SEND_EDITED_USER,
    SendEditedUserAction,
  } from './../../types'
  
  const initialState: UserState = {
    userList: [],
    userEdited: {
    'id': '',
'lastName': '',
'firstName': '',
'email': '',
'phone': '',
'role': '',
    }
  }
  
  const user = (
    state = initialState,
    action: GetUserAction | SendEditedUserAction
  ): UserState => {
    switch (action.type) {
    case GET_USER:
      
      return { ...state, userList: action.payload.userList }
    case SEND_EDITED_USER: 
    
    return { ...state, userEdited: action.payload.user }
    default:
      return {...state}
    }
  }
  
  export default user
  