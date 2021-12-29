import {
    OPEN_DRAWER,
    CLOSE_DRAWER,
    DrawerActions,
    DrawerState,
    OPEN_FORM_EDIT_PRODUCT,
    SET_SUBMIT_EDIT_PRODUCT,
    SET_SUBMIT_CREATE_PRODUCT,
    OPEN_FORM_CREATE,
    OPEN_FORM_EDIT_ORDER,
    SET_SUBMIT_CREATE_CATEGORY,
  } from './../../types'
  
  const initialState: DrawerState = {
        visible: false, 
        title: '', 
        ComponentDrawerContent: undefined,
        callBackSubmit: (propsValue) => { alert('click demo!') }
  }
  
  const drawer = (
    state = initialState,
    action: DrawerActions
  ): DrawerState => {
    switch (action.type) {
    case OPEN_DRAWER:    
      return { ...state, visible: true}

    case CLOSE_DRAWER: 
    return { ...state, visible: false }

    case OPEN_FORM_EDIT_PRODUCT:  
      return {...state, visible: true, ComponentDrawerContent: action.payload.ComponentDrawerContent, title: action.payload.title}

    case OPEN_FORM_CREATE:  
      return {...state, visible: true, ComponentDrawerContent: action.payload.ComponentDrawerContent, title: action.payload.title} 

      case OPEN_FORM_EDIT_ORDER:  

        return {...state, visible: true, ComponentDrawerContent: action.payload.ComponentDrawerContent, title: action.payload.title} 
      

    case SET_SUBMIT_EDIT_PRODUCT: 
      state.callBackSubmit = action.payload.submitFunction
    return {...state}

    case SET_SUBMIT_CREATE_PRODUCT: 
    state.callBackSubmit = action.payload.submitFunction
  return {...state}
  
  case SET_SUBMIT_CREATE_CATEGORY: 
    state.callBackSubmit = action.payload.submitFunction
  return {...state}

      default:
      return state
    }
  }
  
  export default drawer
  