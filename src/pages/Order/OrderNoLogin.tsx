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
  
export default function OrderNoLogin() {

    const {cartList} = useSelector((state: any) => state.order)
    
    const dispatch = useDispatch()


  console.log(cartList);
    const columns = [
        {
          title: 'Product',
          dataIndex: 'name',
          key: 'name',
         
          render: (text: any, record: any) => {
            return <div>
            <p>{record?.name}</p>
            
            </div>
          },         
        },
        {
          title: 'Image',
          dataIndex: 'productImg',
          key: 'productImg',
        
          render: (text: any, record: any) => {
            return <div>
            <img src={record?.productImg} alt={record?.name} 
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
                      type: "INCREASE_DECREASE_CART_SAGA",
                      payload: {
                          code: record._id,
                          inDecrease: true
                      }
                  })
                }}
               >
                 + 
          </ButtonAddToCart>
          <span>{record?.quantity}</span>
          <ButtonAddToCart   className="ml-3" 
          onClick={() => {
        
            dispatch({
                type: "INCREASE_DECREASE_CART_SAGA",
                payload: {
                    code: record._id,
                    inDecrease: false
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
          dataIndex: 'price',
          key: 'price',
          render: (text: any, record: any) => {
          
           return <div>
               {record?.price * record?.quantity}
          
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
                  type: "DELETE_PRODUCT_NO_LOGIN_SAGA",
                  payload: {
                    cartDeleted: record
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
  
            <Table columns={columns} dataSource={cartList} />
            <div className="row">
              <div className="col-7"></div>
              <div className="col-2">
                <h6>Total Price </h6>
              </div>
              <div className="col-2">
                <h6 className = "total-price"> {cartList.reduce((total: number, item: any) => {
                 return total += item.quantity * item.price
                }, 0)} </h6>
              </div>
          
          </div>
            
        </Container>
    )
}
