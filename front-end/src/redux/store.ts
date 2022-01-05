import { DrawerController } from './../types';
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { AppState } from '../types'
import createRootReducer from './reducers'
import rootSaga from './sagas'

let initState: AppState = {
    product: {
        productList: [],
        productFilterList: [],
        productNewArrival: [],
        productPopular: [],
        productDetail: {
        _id: '',
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
    },
   
    user: {
      userList: [],
      userEdited: {
        id: '',
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  role: ''
    }
  },
    order: {
      orderList: [],
      orderListByUserId: [],
      orderEdited: {
        user: '',
        products: {
          product: '',
          quantity: 1
        },
        _id: ''
      },
      cartList: [],
    },
    category: {
      categoryList: [], 
      category: {
        name: '',
        title: '',
        slug: ''
        }
    },
    drawer: {
        visible: false, 
        title: '', 
        ComponentDrawerContent: undefined,
        callBackSubmit: (propsValue) => { alert('click demo!') }
    },
    productEdit: {
      productEdit: {
        id: '12',
        name: "Adidas normal",
        color : ["red"],
        price : 100,
        description: "Lấy tín hiệu từ một trong những màu LeBron 4 được thèm muốn nhất, LeBron 17 'Graf ﬁ ti' vượt qua ranh giới của cả quá khứ và hiện tại bằng cách kết hợp các yếu tố từ cả hai đôi giày đặc trưng.Công nghệ tích hợp của LeBron 17 — được bao phủ bởi sự giải thích theo phong cách tự do về các giá trị cá nhân của LeBron trong phong cách graf dễ nhận biết của LeBron 4 — lấy cảm hứng từ nhịp điệu, nghệ thuật và văn hóa của đường phố Thành phố New York, với chữ lấy cảm hứng từ hình tượng của Quả táo lớn.",
        like : 30,
        category : "5d113995b721c3bb38a1f511",
        brand : "adidas",
        size : ["l"],
        productImg: "https://images.footway.com/sm_images/886952780593_001_0d5693a60ac742a89085f197eeca9338.png?auto=format%2Ccompress&dpr=1&fit=max&h=500&ixlib=react-13.0.4"
      }
    },
    categoryEdit: {
      categoryEdit: {
      name: "Athletic Shoes",
      title: "Giầy cho bộ môn thể thao",
      slug: "athletic-shoes"
      }
    },
    isLoading: {
      isLoading: false
    },
    userDataLogin: {
      userDataLogin : {
        email: "",
        id: "",
        password: "",
        role: ""
      },
      userTokenDataLogin: '',
      userDataById: {
        email: "",
        id: "",
        password: "",
        role: "",
        orders: []
      } 
    }
}

export default function makeStore(initialState = initState) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware, thunk]
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }
  const saveState = localStorage.getItem('state')
  if (saveState) {
    initialState = JSON.parse(saveState)
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  sagaMiddleware.run(rootSaga)

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
