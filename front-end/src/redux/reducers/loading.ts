import {
    DISPLAY_LOADING,
    HIDE_LOADING,
    LoadingActions,
    LoadingState,
  } from './../../types'
  
  const initialState: LoadingState = {
    isLoading: false
  }
  
  const loading = (
    state = initialState,
    action: LoadingActions
  ): LoadingState => {
    switch (action.type) {
    case DISPLAY_LOADING:    
      return { ...state, isLoading: true}

    case HIDE_LOADING: 
    return { ...state, isLoading: false }

      default:
      return state
    }
  }
  
  export default loading
  