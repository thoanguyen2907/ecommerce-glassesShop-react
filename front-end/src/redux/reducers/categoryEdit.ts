import {
    CategoryActions,
    CategoryEditState,
    SEND_EDITED_CATEGORY,
  } from './../../types'
  
  const initialState: CategoryEditState = {
    categoryEdit: {
            name: "Athletic Shoes",
            title: "Giầy cho bộ môn thể thao",
            slug: "athletic-shoes"
    }
  }
  
  const categoryEdit = (
    state = initialState,
    action: CategoryActions
  ): CategoryEditState => {
    switch (action.type) {
    case SEND_EDITED_CATEGORY: 
        state.categoryEdit = action.payload.category
        console.log(state.categoryEdit)
      return { ...state}
  
    default:
      return {...state}
    }
  }
  
  export default categoryEdit
  