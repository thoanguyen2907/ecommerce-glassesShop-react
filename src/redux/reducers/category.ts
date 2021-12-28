import {
    GET_CATEGORY,
    CategoryActions,
    CategoryState,
  } from './../../types'
  
  const initialState: CategoryState = {
        categoryList: [],
        category: {
          name: '',
          title: '',
          slug: ''
          }
  }
  
  const category = (
    state = initialState,
    action: CategoryActions
  ): CategoryState => {
    switch (action.type) {
    case GET_CATEGORY: 
        state.categoryList = action.payload.categoryList
      return { ...state}
  
    default:
      return state
    }
  }
  
  export default category
  