import {
    SEND_EDITED_PRODUCT,
    ProductEditedActions,
    ProductEditState,
  } from './../../types'
  
  const initialState: ProductEditState = {
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
  }
  
  const productEdit = (
    state = initialState,
    action: ProductEditedActions
  ): ProductEditState => {
    switch (action.type) {
    case SEND_EDITED_PRODUCT: 
       
        state.productEdit = action.payload.product
        console.log(state.productEdit)
      return { ...state}
  
    default:
      return state
    }
  }
  
  export default productEdit
  