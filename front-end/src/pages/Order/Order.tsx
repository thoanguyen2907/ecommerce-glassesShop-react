import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Space , Button} from 'antd';
import {
    DeleteOutlined, EditOutlined, MinusCircleOutlined, PlusCircleOutlined, SearchOutlined
  } from '@ant-design/icons';
import { NavLink, Redirect } from 'react-router-dom';
import Payment from '../Payment/Payment';
import Swal from 'sweetalert2'

import { Container } from '../../StyledElements/Container/Container';
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart';
import { ButtonBlue } from '../../StyledElements/Button/Button';
import { openNotification } from '../../utils/notification/notification';
import { DECREASE_PRODUCT_QUANTITY_SAGA, DELETE_ORDER_SAGA, GET_ORDERS_BY_USERID_SAGA, INCREASE_PRODUCT_QUANTITY_SAGA } from '../../types';
  
export default function Order() {

    const {userDataLogin} = useSelector((state: any) => state.userLogin)
    const {orderListByUserId} = useSelector((state: any) => state?.order)
    // const {cartList} = useSelector((state: any) => state.order)
    
    const userData = userDataLogin
    const userId = userData.id
    let productOrderByUser = []
    if(orderListByUserId.length > 0) {
       productOrderByUser = orderListByUserId?.map((item: any, index: any) => {
        return item.products
      })
    }
  
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch({
       type: GET_ORDERS_BY_USERID_SAGA,
       payload: {
        userId
       }
     })
    }, [])
  //   if (!localStorage.getItem('token')) {
  //     Swal.fire({
  //     title: '<Login></Login>!',
  //     text: 'Please Login',
  //   })
   
  //     return <Redirect to='/login/user' />
  // }


    const columns = [
        {
          title: 'Product',
          dataIndex: 'product',
          key: 'product',
         
          render: (text: any, record: any) => {
            return <div>
            <p>{record?.product?.name}</p>
          <Tag color={record?.products?.color}>{record?.products?.color}</Tag> 
            <div>
             <Tag> {record?.products?.size}</Tag>
             </div>
            </div>
          },
          
        },
        {
          title: 'Image',
          dataIndex: 'product',
          key: 'product',
        
          render: (text: any, record: any) => {
            return <div>
            <img src={record?.products?.product?.productImg} alt={record?.product?.name} 
            style={{width: "100px", height: "100px"}} />
            
            </div>
          }
        },
        {
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
       
          render: (text: any, record: any) => {
          
           return <div>
               <ButtonAddToCart className="mr-3"
                onClick={() => {
              
                    if(!(Number.isInteger(record.products.quantity) && record.products.quantity  > 0)) {
                      openNotification('Error', 'Quantity must be greater 0');
                      return;
                    }
                    dispatch({
                        type: INCREASE_PRODUCT_QUANTITY_SAGA,
                        payload: {
                            orderId: record._id,
                            userId: record.user.id
                        }
                    
                    })
                }}
               >
                 + 
          </ButtonAddToCart>
          <span>{record.products.quantity}</span>
          <ButtonAddToCart   className="ml-3" 
          onClick={() => {
     
            if(!(Number.isInteger(record.products.quantity) && record.products.quantity  > 0)) {
              openNotification('Error', 'Quantity must be greater  0');
              return;
            }
            dispatch({
                type: DECREASE_PRODUCT_QUANTITY_SAGA,
                payload: {
                    orderId: record._id,
                    userId: record.user.id
                }
            })
        }}
          >
            -
          </ButtonAddToCart>
          </div>
          }
        },
        {
          title: 'Price',
          dataIndex: 'products',
          key: 'products',
          render: (text: any, record: any) => {
          
           return <div>
               {record?.products?.product?.price * record?.products?.quantity}
          
          </div>
          }
        },
      
        {
          title: 'Action',
          key: 'action',
          render: (text: any, record: any) => (
            <Space size="middle">

              <DeleteOutlined style={{color: '#eb2f96' }} 
              onClick={() => {
                dispatch({
                  type: DELETE_ORDER_SAGA,
                  payload: {
                    orderId: record._id,
                    userId: record.user.id
                  }
                 
                })
              }}
                />
            </Space>
          ),
        },
      ];



    return (
      <Container>
         {orderListByUserId.length > 0 ? 
         <div>
         <Table columns={columns} dataSource={orderListByUserId} />
            <div className="row">
              <div className="col-7"></div>
              <div className="col-2">
                <h6>Total Price </h6>
              </div>
              <div className="col-2">
                <h6 className = "total-price"> {productOrderByUser.reduce((total: number, item: any) => {
                 return total += item.quantity * item.product.price
                }, 0)} </h6>
              </div>
             
          </div>
          <div className="row">
              <div className="col-10"></div>
              <div className="col-2">
              <NavLink to = "/payment"> <Payment/> </NavLink>
              </div>
            </div>
         
          </div>: <div className="row"> <h3> No order list</h3></div>
         }
            
            </Container>
  
    )
}
