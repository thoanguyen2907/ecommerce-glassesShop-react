
// Product Action  types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const INCREASE_DECREASE_PRODUCT = 'INCREASE_DECREASE_PRODUCT'
export const CHANGE_THEME = 'CHANGE_THEME'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const SEND_EDITED_PRODUCT = 'SEND_EDITED_PRODUCT'
export const GET_PRODUCT_NEW_ARRIVAL = 'GET_PRODUCT_NEW_ARRIVAL'
export const GET_PRODUCT_POPULAR = 'GET_PRODUCT_POPULAR'
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const GET_PRODUCT_DETAIL_REDUCER = 'GET_PRODUCT_DETAIL_REDUCER'
export const CREATE_NEW_PRODUCT= 'CREATE_NEW_PRODUCT'
export const ADD_PRODUCT_NO_LOGIN= 'ADD_PRODUCT_NO_LOGIN'


// User Action types
export const GET_USER = 'GET_USER'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_GOOGLE = 'USER_LOGIN_GOOGLE'
export const USER_FORGOT_PASSWORD = 'USER_FORGOT_PASSWORD'
export const USER_SIGN_UP= 'USER_SIGN_UP'
export const GET_USER_TOKEN_LOGIN= 'GET_USER_TOKEN_LOGIN'
export const GET_USER_DATA_LOGIN= 'GET_USER__DATA_LOGIN'
export const GET_USER_DATA_BY_ID= 'GET_USER_DATA_BY_ID'
export const GET_USER_BY_ID= 'GET_USER_BY_ID'
export const DELETE_USER= 'DELETE_USER'
export const SET_SUBMIT_EDITED_USER = 'SET_SUBMIT_EDITED_USER'
export const SEND_EDITED_USER= 'SEND_EDITED_USER'
export const  UPDATE_USER = 'UPDATE_USER'
export const  UPDATE_USER_SAGA = 'UPDATE_USER_SAGA'


//Category Action Types
export const GET_CATEGORY = 'GET_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const EDIT_CATEGORY= 'EDIT_CATEGORY'
export const SEND_EDITED_CATEGORY= 'SEND_EDITED_CATEGORY'
export const CREATE_CATEGORY= 'CREATE_CATEGORY'
export const SET_SUBMIT_CREATE_CATEGORY = 'SET_SUBMIT_CREATE_CATEGORY'
export const SET_SUBMIT_EDITED_CATEGORY = 'SET_SUBMIT_EDITED_CATEGORY'
// Order Action types
export const GET_ORDER = 'GET_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const INCREASE_ORDER_QUANTITY= 'INCREASE_ORDER_QUANTITY'
export const DECREASE_ORDER_QUANTITY= 'DECREASE_ORDER_QUANTITY'
export const GET_ORDERS_BY_USER_ID = 'GET_ORDERS_BY_USER_ID'
export const GET_ORDERS_BY_USER_REDUCER = 'GET_ORDERS_BY_USER_REDUCER'
export const DELETE_ORDER_BY_ID = 'DELETE_ORDER_BY_ID'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const EDIT_ORDER = 'EDIT_ORDER'
export const SEND_EDITED_ORDER = 'SEND_EDITED_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const DELETE_ORDER_NO_LOGIN= 'DELETE_ORDER_NO_LOGIN'
export const INCREASE_QUANTITY_NO_LOGIN= 'INCREASE_QUANTITY_NO_LOGIN'
export const DECREASE_QUANTITY_NO_LOGIN= 'DECREASE_QUANTITY_NO_LOGIN'

// Drawer Action types
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const CLOSE_DRAWER = 'CLOSE_DRAWER'

// Form Action types
export const OPEN_FORM_CREATE = 'OPEN_FORM_CREATE'
export const OPEN_FORM_EDIT_PRODUCT = 'OPEN_FORM_EDIT_PRODUCT'
export const SET_SUBMIT_EDIT_PRODUCT = 'SET_SUBMIT_EDIT_PRODUCT'
export const SET_SUBMIT_CREATE_PRODUCT = 'SET_SUBMIT_CREATE_PRODUCT'
export const OPEN_FORM_EDIT_ORDER = 'OPEN_FORM_EDIT_ORDER'
export const SET_SUBMIT_EDIT_ORDER = 'SET_SUBMIT_EDIT_ORDER'
export const OPEN_FORM_EDIT_CATEGORY = 'OPEN_FORM_EDIT_CATEGORY'
export const OPEN_FORM_EDIT_USER = 'OPEN_FORM_EDIT_USER'

//Loading Action types
export const DISPLAY_LOADING = 'DISPLAY_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

// Saga constant 
//category
export const GET_CATEGORY_LIST_SAGA = 'GET_CATEGORY_LIST_SAGA'
export const DELETE_CATEGORY_SAGA = 'DELETE_CATEGORY_SAGA'
export const CREATE_CATEGORY_SAGA = 'CREATE_CATEGORY_SAGA'
export const UPDATE_CATEGORY_SAGA = 'UPDATE_CATEGORY_SAGA'
//order 
export const GET_ORDER_LIST_SAGA = 'GET_ORDER_LIST_SAGA'
export const GET_ORDERS_BY_USERID_SAGA = 'GET_ORDERS_BY_USERID_SAGA'
export const INCREASE_PRODUCT_QUANTITY_SAGA = 'INCREASE_PRODUCT_QUANTITY_SAGA'
export const DECREASE_PRODUCT_QUANTITY_SAGA = 'DECREASE_PRODUCT_QUANTITY_SAGA'
export const DELETE_ORDER_SAGA = 'DELETE_ORDER_SAGA'
export const ADD_ORDER_SAGA = 'ADD_ORDER_SAGA'
export const DELETE_ORDER_SAGA_ADMIN = 'DELETE_ORDER_SAGA_ADMIN'

//product
export const GET_PRODUCT_LIST_SAGA = 'GET_PRODUCT_LIST_SAGA'
export const DELETE_PRODUCT_SAGA = 'DELETE_PRODUCT_SAGA'
export const UPDATE_PRODUCT_SAGA = 'UPDATE_PRODUCT_SAGA'
export const CREATE_PRODUCT_SAGA = 'CREATE_PRODUCT_SAGA'
export const GET_PRODUCT_NEW_ARRIVAL_SAGA = 'GET_PRODUCT_NEW_ARRIVAL_SAGA'
export const GET_PRODUCT_POPULAR_SAGA = 'GET_PRODUCT_POPULAR_SAGA'
export const GET_PRODUCT_DETAIL_SAGA = 'GET_PRODUCT_DETAIL_SAGA'
export const ADD_PRODUCT_NO_LOGIN_SAGA = 'ADD_PRODUCT_NO_LOGIN_SAGA'
export const DELETE_PRODUCT_NO_LOGIN_SAGA = 'DELETE_PRODUCT_NO_LOGIN_SAGA'
export const INCREASE_DECREASE_CART_SAGA = 'INCREASE_DECREASE_CART_SAGA'
//user 

export const GET_USER_LIST_SAGA = 'GET_USER_LIST_SAGA'
export const USER_LOGIN_SAGA = 'USER_LOGIN_SAGA'
export const USER_FORGOT_PASSWORD_SAGA = 'USER_FORGOT_PASSWORD_SAGA'
export const USER_LOGIN_GOOGLE_SAGA = 'USER_LOGIN_GOOGLE_SAGA'
export const USER_SIGN_UP_SAGA   = 'USER_SIGN_UP_SAGA'
export const GET_USER_DETAIL_BY_ID = 'GET_USER_DETAIL_BY_ID'
export const DELETE_USER_BY_ID_SAGA = 'DELETE_USER_BY_ID_SAGA'

//  Product
export type Product = {
  name: string,
	price: number,
	description: string,
  dislike?: number,
	like?: number,
	brand: string,
	size: [string],
	color: [string],
  category: string,
  productImg: string,
  newArrival: true,
  popular: true,
  _id?: string
}

//array of Cart to store product when user not login but add to cart
export type Cart = Product & {quantity: number}

// Product Edited 
export type ProductEdited = {
  id: string,
  name: string,
	price: number,
	description: string,
  dislike?: number,
	like?: number,
	brand: string,
	size: [string],
	color: [string],
  category: string,
  productImg: string
}
export type UserEdited = {
  id?: string,
  lastName: string
  firstName: string
  email: string
  phone: string
  role?: string,
}

export type User = {
  
  lastName: string
  firstName: string
  email: string
  phone: string
  password: string
  role?: string,
  order: []
}
export type UserDataLogin = {
  email: string
  id: string,
  password?: string
  role: string
}
export type UserDataGetById = {
  email: string,
  id: string,
  password?: string,
  role: string,
  orders?: Order[]
}
 export type ProductInCart = {
  product: string,
  quantity?: number,
}

export type Order = {
  user: string,
  products:  ProductInCart,
  _id?: string
}

export type Category = {
  name: string,
	title: string,
	slug: string
}

export type ValueSearch = {
  brand: String,
  color: String, 
  price: String,
  category: String
}

export type GetProductAction = {
  type: typeof GET_PRODUCT
  payload: {
    productList: Product[],
    valueSearch: ValueSearch
  }
}
export type GetNewArrivalProductAction = {
  type: typeof GET_PRODUCT_NEW_ARRIVAL
  payload: {
    productNewArrival: Product[]
  }
}
export type GetPopularProductAction = {
  type: typeof GET_PRODUCT_POPULAR
  payload: {
    productPopular: Product[]
  }
}
export type GetProductDetailAction = {
  type: typeof GET_PRODUCT_DETAIL
  payload: {
    productId: string
  }
}
export type GetProductDetailReducerAction = {
  type: typeof GET_PRODUCT_DETAIL_REDUCER
  payload: {
    productDetail: Product
  }
}


export type GetCategoryAction = {
  type: typeof GET_CATEGORY
  payload: {
    categoryList: Category[]
  }
}
export type CreateCategoryAction = {
  type: typeof CREATE_CATEGORY
  payload: {
  name: string,
	title: string,
	slug: string
  }
}

export type GetUserAction = {
  type: typeof GET_USER
  payload: {
    userList: User[]
  }
}

export type DeleteUserAction = {
  type: typeof DELETE_USER
  payload: {
    userId : string
  }
}


export type GetUserLoginAction = {
  type: typeof GET_USER_TOKEN_LOGIN
  payload: {
    token: string,
    userData: UserDataLogin
  }
}
export type GetUserDataLoginAction = {
  type: typeof GET_USER_DATA_LOGIN
  payload: {
    userDataLogin: UserDataLogin
  }
}


export type GetOrderAction = {
  type: typeof GET_ORDER
  payload: {
    order: Order[]
  }
}
export type GetOrderListByUserIdAction = {
  type: typeof GET_ORDERS_BY_USER_REDUCER
  payload: {
    orderListByUserId: Order[]
  }
}


export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}
export type AddOrderNoLoginAction = {
  type: typeof ADD_PRODUCT_NO_LOGIN
  payload: {
    cart: Product
  }
}
export type SendEditedUserAction = {
  type: typeof SEND_EDITED_USER
  payload: {
    user: UserEdited
  }
}
export type SendEditedProductAction = {
  type: typeof SEND_EDITED_PRODUCT
  payload: {
    product: ProductEdited
  }
}
export type SendEditedCategoryAction = {
  type: typeof SEND_EDITED_CATEGORY
  payload: {
    category: Category
  }
}
export type EditProductAction = {
  type: typeof EDIT_PRODUCT
  payload: {
    product: Product,
    id: string
  }
}
export type CreateNewProductAction = {
  type: typeof CREATE_NEW_PRODUCT
  payload: {
    product: Product,
  }
}

export type EditCategoryAction = {
  type: typeof EDIT_CATEGORY
  payload: {
    category: Category,
    id: string
  }
}
export type EditUserAction = {
  type: typeof UPDATE_USER
  payload: {
    userEdited: UserEdited,
    userId: string
  }
}

export type InDecreaseOrderNoLoginAction = {
  type: typeof INCREASE_QUANTITY_NO_LOGIN
  payload: {
    code: string
    inDecrease: boolean
  }
}


export type OpenDrawerAction = {
  type: typeof OPEN_DRAWER
  payload: {
    visible: boolean
  }
}
export type OpenEditCategoryAction = {
  type: typeof OPEN_FORM_EDIT_CATEGORY
  payload: {
    visible: boolean,
    title: string, 
    ComponentDrawerContent: React.ReactNode,
  }
}
export type OpenEditUserAction = {
  type: typeof OPEN_FORM_EDIT_USER
  payload: {
    visible: boolean,
    title: string, 
    ComponentDrawerContent: React.ReactNode,
  }
}




export type OpenFormEditAction = {
  type: typeof OPEN_FORM_EDIT_PRODUCT
  payload: {
    visible: boolean,
    title: string, 
    ComponentDrawerContent: React.ReactNode,
  }
}

export type RemoveOrderAction = {
  type: typeof DELETE_ORDER
  payload: {
    orderId: string
  }
}

export type OpenFormEditOrderAction = {
  type: typeof OPEN_FORM_EDIT_ORDER
  payload: {
    visible: boolean,
    title: string, 
    ComponentDrawerContent: React.ReactNode,
  }
}

export type OpenFormCreateAction = {
  type: typeof OPEN_FORM_CREATE
  payload: {
    visible: boolean,
    title: string, 
    ComponentDrawerContent: React.ReactNode,
  }
}

export type CloseDrawerAction = {
  type: typeof CLOSE_DRAWER
  payload: {
    visible: boolean
  }
}
export type SubmitEditUserAction = {
  type: typeof SET_SUBMIT_EDITED_USER
  payload: {
    submitFunction:  (...args: any) => any
  }
}
export type SubmitEditProductAction = {
  type: typeof SET_SUBMIT_EDIT_PRODUCT
  payload: {
    submitFunction:  (...args: any) => any
  }
}
export type SubmitCreateProductAction = {
  type: typeof SET_SUBMIT_CREATE_PRODUCT
  payload: {
    submitFunction:  (...args: any) => any
  }
}
export type SubmitCreateCategoryAction = {
  type: typeof SET_SUBMIT_CREATE_CATEGORY
  payload: {
    submitFunction:  (...args: any) => any
  }
}
export type SubmitEditCategoryAction = {
  type: typeof SET_SUBMIT_EDITED_CATEGORY
  payload: {
    submitFunction:  (...args: any) => any
  }
}


export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    id: string
  }
}
export type RemoveCategoryAction = {
  type: typeof REMOVE_CATEGORY
  payload: {
    id: string
  }
}

export type OrderActions = GetOrderAction | GetOrderListByUserIdAction | SendEditedOrderAction | AddOrderNoLoginAction | DeleteOrderNoLoginAction | InDecreaseOrderNoLoginAction


// Use this union in reducer
export type DrawerActions =
  | OpenDrawerAction
  | CloseDrawerAction
  | OpenFormEditAction
  | SubmitEditProductAction
  | SubmitCreateProductAction
  | OpenFormCreateAction
  | OpenFormEditOrderAction
  | SubmitCreateCategoryAction
  | OpenEditCategoryAction
  | SubmitEditCategoryAction
  | OpenEditUserAction
  | SubmitEditUserAction

// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | GetProductAction
  | EditProductAction
  | GetNewArrivalProductAction
  | GetPopularProductAction
  | GetProductDetailAction
  | GetProductDetailReducerAction
  | CreateNewProductAction

export type ProductEditedActions = SendEditedProductAction

export type CategoryActions = GetCategoryAction | RemoveCategoryAction | EditCategoryAction | SendEditedCategoryAction | CreateCategoryAction

export type ProductState = {
  productList: Product[],
  productFilterList:  Product[],
  productNewArrival: Product[],
  productPopular: Product[],
  productDetail: Product
}
export type UserState = {
  userList: User[],
  userEdited: UserEdited
}
export type OrderState = {
  orderList: Order[],
  orderListByUserId: Order[],
  orderEdited: Order,
  cartList: Cart[]
}
export type CategoryState = {
  categoryList: Category[],
  category: {
  name: string,
	title: string,
	slug: string
  }
}
export type ProductEditState = {
  productEdit: ProductEdited
}
export type CategoryEditState = {
  categoryEdit: Category
}
export type AppState = {
  product: ProductState,
  user: UserState,
  order: OrderState,
  drawer: DrawerState,
  category: CategoryState,
  productEdit: ProductEditState,
  categoryEdit: CategoryEditState,
  isLoading: LoadingState,
  userDataLogin: UserLoginState,

}

export type DrawerState =  DrawerController

export type DrawerController = {
  visible: boolean, 
  title: string, 
  ComponentDrawerContent: React.ReactNode,
  callBackSubmit: (...args: any) => any
}

export type LoadingController = {
  isLoading: boolean
} 

export type LoadingState =  LoadingController

export type DisplayLoadingAction = {
  type: typeof DISPLAY_LOADING
  payload: {
    isLoading: boolean
  }
}
export type HideLoadingAction = {
  type: typeof HIDE_LOADING
  payload: {
    isLoading: boolean
  }
}
export type LoadingActions =  HideLoadingAction | DisplayLoadingAction


export type UserLogin = {
  email: string, 
  password: string
}

export type UserSignUp = {
  lastName: string
  firstName: string
  email: string
  phone: string
  password: string
}
export type UserSignUpAction = {
  type: typeof USER_SIGN_UP
  payload: {
    lastName: string
    firstName: string
    email: string
    phone: string
    password: string
  }
}
export type GetUserByIdAction = {
  type: typeof GET_USER_BY_ID
  payload: {
    userId: string
  }
}
export type GetUserDataByIdAction = {
  type: typeof GET_USER_DATA_BY_ID
  payload: {
    userDataById: UserDataGetById
  }
}
export type GetOrderDataByUserId = {
  type: typeof GET_ORDERS_BY_USER_ID
  payload: {
    userId: string
  }
}

export type UserLoginAction = {
  type: typeof USER_LOGIN
  payload: {
    email: string, 
    password: string
  }
}
export type UserForgotPasswordAction = {
  type: typeof USER_FORGOT_PASSWORD
  payload: {
    email: string, 
   
  }
}

export type UserLoginGoogleAction = {
  type: typeof USER_LOGIN_GOOGLE
  payload: {
    tokenId: string
  }
}
export type UserDataLoginAction = {
  type: typeof  GET_USER_DATA_LOGIN
  payload: {
    email: string, 
    password: string
  }
}
export type UserActions =  UserLoginAction | UserSignUpAction | GetUserByIdAction | GetUserLoginAction | GetUserDataByIdAction | UserLoginGoogleAction | UserForgotPasswordAction | DeleteUserAction | SendEditedUserAction | EditUserAction

export type UserLoginState = {
  userDataLogin : UserDataLogin,
  userTokenDataLogin: string,
  userDataById: UserDataGetById
}  

export type SendEditedOrderAction = {
  type: typeof SEND_EDITED_ORDER
  payload: {
    orderEdited: Order
  }
}

export type EditOrderAction = {
  type: typeof EDIT_ORDER
  payload: {
    order: Order,
    id: string
  }
}

export type IncreaseOrderAction = {
  type: typeof INCREASE_ORDER_QUANTITY
  payload: {
    orderId: string,
    userId: string
  }
}
export type DecreaseOrderAction = {
  type: typeof DECREASE_ORDER_QUANTITY
  payload: {
    orderId: string,
    userId: string
  }
}

export type DeleteOrderAction = {
  type: typeof DELETE_ORDER_BY_ID
  payload: {
    orderId: string,
    userId: string
  }
}
export type DeleteOrderNoLoginAction = {
  type: typeof DELETE_ORDER_NO_LOGIN
  payload: {
    cartDeleted: Cart
  }
}

export type AddOrderAction = {
  type: typeof ADD_ORDER
  payload: Order
}



