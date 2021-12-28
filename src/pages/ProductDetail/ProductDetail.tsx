import { ShoppingCartOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart';
import { ButtonNormal } from '../../StyledElements/Button/Button';
import { Container } from '../../StyledElements/Container/Container';
import { useFormik } from 'formik'
import './ProductDetail.scss'
import Swal from 'sweetalert2';
import { history } from '../../utils/history/history';
export default function ProductDetail() {
    const  {productId}: any = useParams()
    const {productDetail} = useSelector((state: any) => state.product)
    const {userDataLogin} = useSelector((state: any) => state.userLogin)
    const userData = userDataLogin
    const userId = userData?.id

    const dispatch = useDispatch()
 
    useEffect(() => {   
       dispatch({
           type: "GET_PRODUCT_DETAIL_SAGA",
           payload: {
            productId
           }
       })
    }, [])
    const { handleSubmit,errors, handleChange, values, setFieldValue }= useFormik({
        enableReinitialize: true,
        initialValues: {
            size: '',
            color: '',
        
        },

        onSubmit: async (values) => {
            console.log(values);
            if(userId !== '') {
                         dispatch({
                    type: "ADD_ORDER_SAGA",
                    payload: {
                        user: userId,
                        products: {
                            product: productDetail?._id,
                            size: values.size,
                            color: values.color
                        }
                           }  })
            } else {
                await Swal.fire({
                    title: 'Not Login',
                    text: 'Please login to purchase product!!',
                  })
                 await history.push('/login/user')
               
            }
            


        },
    })
   const renderProductDetail = () => {
           return   <div className="row">
           <div className="col-12 col-lg-5">
                <div className="product_detail_page_photo">
                    <img src={productDetail?.productImg} alt="product_detail_page_photo" 
                    />
                </div>
           </div>
           <div className="col-12 col-lg-7">
                <div className="product_detail_page_info">
                    <p className="product_detail_page_category badge badge-dark" 
                    style={{padding: "15px", marginTop: "10px"}}> {productDetail?.brand}</p>
                    <h4>{productDetail?.name}</h4>
                    
                    <h5>Price: {productDetail?.price}$</h5>
                    <p style={{padding: "15px 0", lineHeight:"25px"}}>{productDetail?.description}</p>
                    <form onSubmit = {handleSubmit}>
                        <div className="my-3">
                        <Radio.Group onChange={handleChange} name = "color"   value={values.color} >
      <Radio.Button value="black">Black</Radio.Button>
      <Radio.Button value="blue">Blue</Radio.Button>
      <Radio.Button value="grey">Grey</Radio.Button>
    </Radio.Group>
                        </div>
                 <div className="my-3">
                 <Radio.Group onChange={handleChange} name = "size" value={values.size}>
      <Radio.Button value="s">S</Radio.Button>
      <Radio.Button value="m">M</Radio.Button>
      <Radio.Button value="x">X</Radio.Button>
    </Radio.Group>
                 </div>

   


                    <div className="product__add__to__cart">
        <ButtonAddToCart  type = "submit" 
            >  Add to cart
    <span><ShoppingCartOutlined /></span> </ButtonAddToCart>
   
    </div>
    </form>
                </div>
           </div>
       </div>
    }
    return (
        <Container>
            <div className="product_detail_page">
          <NavLink to = "/productlist">
          <ButtonNormal className="btn-back">Back</ButtonNormal>
          </NavLink>
                {renderProductDetail()}
            </div>
           
   
        </Container>
       
    )
}
