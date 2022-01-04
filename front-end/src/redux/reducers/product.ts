import {
    GET_PRODUCT,
    GET_PRODUCT_DETAIL,
    GET_PRODUCT_DETAIL_REDUCER,
    GET_PRODUCT_NEW_ARRIVAL,
    GET_PRODUCT_POPULAR,
    ProductActions,
    ProductState,
  } from './../../types'
  
  const initialState: ProductState = {
    productList: [],
    productFilterList: [],
    productNewArrival: [],
    productPopular: [],
    productDetail: {
        size: [""],
        color: [""],
        name: "",
        "category": "",
        "price": 0,
        "description": "",
        "brand": "Celine",
        "productImg": "",
        "like": 0,
        "dislike": 0,
        "newArrival": true,
        "popular": true
        }
  }
  
  const product = (
    state = initialState,
    action: ProductActions
  ): ProductState => {
    switch (action.type) {
    case GET_PRODUCT:
        
      return { ...state, 
              productList: action.payload.productList,
              productFilterList: action.payload.productList
  }
  case GET_PRODUCT_NEW_ARRIVAL:
      return { ...state, 
        productNewArrival: action.payload.productNewArrival
  }
  case GET_PRODUCT_POPULAR:
    return { ...state, 
      productPopular: action.payload.productPopular
}
  case GET_PRODUCT_DETAIL_REDUCER:
  return { ...state, 
    productDetail: action.payload.productDetail
}

  
    default:
      return state
    }
  }
  
  export default product
  