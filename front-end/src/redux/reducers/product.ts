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
        size: ["s"],
        color: ["s"],
        name: "CELINE MONOCHROMS 03",
        "category": "61ad29d4520b1921c2c33fb8",
        "price": 120,
        "description": "At CELINE the idea of Parisian chic, with savoir-faire and the finest quality",
        "brand": "Celine",
        "productImg": "https://i.postimg.cc/B64Z2jkf/g1.jpg",
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
  