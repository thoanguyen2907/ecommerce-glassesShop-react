import {
    SEND_EDITED_PRODUCT,
    ProductEditedActions,
    ProductEditState,
  } from './../../types'
  
  const initialState: ProductEditState = {
    productEdit: {
        id: '',
        name: "",
        color : [""],
        price : 0,
        description: "",
        like : 0,
        category : "",
        brand : "",
        size : [""],
        productImg: ""
      }
  }
  
  const productEdit = (
    state = initialState,
    action: ProductEditedActions
  ): ProductEditState => {
    switch (action.type) {
    case SEND_EDITED_PRODUCT: 
       
        state.productEdit = action.payload.product
     
      return { ...state}
  
    default:
      return state
    }
  }
  
  export default productEdit
  