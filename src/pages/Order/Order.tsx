import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Tag, Space , Button} from 'antd';
import {
    DeleteOutlined, EditOutlined, MinusCircleOutlined, PlusCircleOutlined, SearchOutlined
  } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'

import { Container } from '../../StyledElements/Container/Container';
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart';
  
export default function Order() {

    const {userDataLogin} = useSelector((state: any) => state.userLogin)
    const {orderListByUserId} = useSelector((state: any) => state?.order)
    // const {cartList} = useSelector((state: any) => state.order)
    
    const userData = userDataLogin
    const userId = userData.id
    
    const productOrderByUser = orderListByUserId?.map((item: any, index: any) => {
      return item.products
    })
    const dispatch = useDispatch()

    useEffect(() => {
     dispatch({
       type: "GET_ORDERS_BY_USERID_SAGA",
       payload: {
        userId
       }
     })
    }, [])
    if (!localStorage.getItem('token')) {
      Swal.fire({
      title: '<Login></Login>!',
      text: 'Please Login',
    })
   
      return <Redirect to='/login/user' />
  }


    const columns = [
        {
          title: 'Product',
          dataIndex: 'product',
          key: 'product',
         
          render: (text: any, record: any) => {
            return <div>
            <p>{record?.product?.name}</p>
            <span> {record?.products?.product?.color.map((item: any, index: any) => {
              return <Tag key={index} color={item}>
              {item}
            </Tag>
            })} </span>
             <div> {record?.products?.product?.size.map((item: any, index: any) => {
              return <span key={index} className='badge'>
              {item}
            </span>
            })} </div>
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
                    console.log(record)
                    dispatch({
                        type: "INCREASE_PRODUCT_QUANTITY_SAGA",
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
        
            dispatch({
                type: "DECREASE_PRODUCT_QUANTITY_SAGA",
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
                  type: "DELETE_ORDER_SAGA",
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
            
        </Container>
    )
}
