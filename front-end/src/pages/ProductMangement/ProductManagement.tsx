import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Menu } from 'antd';
import {
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table, Tag, Space , Button} from 'antd';
import  axios from 'axios'
import { DELETE_PRODUCT_SAGA, GET_PRODUCT_LIST_SAGA, OPEN_DRAWER, OPEN_FORM_CREATE, OPEN_FORM_EDIT_PRODUCT, SEND_EDITED_PRODUCT, ValueSearch } from '../../types';
import EditProduct from '../../Components/Form/EditProduct';
import CreateProduct from '../../Components/Form/CreateProduct';
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom';
import { ButtonBlue } from '../../StyledElements/Button/Button';

const { Header, Sider, Content } = Layout;

export default function ProductManagement() {
  const dispatch = useDispatch()
  const {productList} = useSelector((state: any) => state.product)
  console.log('productList', productList)
   const {userDataLogin} = useSelector((state: any) => state.userLogin)
  const userData = userDataLogin
  const valueSearch: ValueSearch = {
    brand: '',
    color: '',
    price: '', 
    category: ''
  }
  const getProduct = async () =>  {
    dispatch({
      type: GET_PRODUCT_LIST_SAGA,
      payload: {
        valueSearch: valueSearch
      }
    })
  }

  useEffect(() => {
    getProduct() 
  }, [])

  if (userData?.role === 'user') {
    Swal.fire({
    title: 'Not Admin',
    text: 'You are user. Not allow to access!!',
  })
 
    return <Redirect to='/login/user' />
}

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Color',
      key: 'color',
      dataIndex: 'color',
      render: (record: any) => (
        <>
          {record.map((color: any, index: any) => {       
            return (
              <Tag color={color} key={index}>
                {color.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Size',
      key: 'size',
      dataIndex: 'size',
      render: (record: any) => (
        <>
          {record.map((size: any, index: any) => {
           
            return (
              <Tag key={index}>
                {size}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <EditOutlined onClick={() => {
            dispatch({
              type: SEND_EDITED_PRODUCT,
              payload: {
                product: record
              }
            })
            console.log(record)
            dispatch({
              type: OPEN_FORM_EDIT_PRODUCT,
              payload: {
                visible: true,
                title: "Edit Product Form", 
                ComponentDrawerContent : <EditProduct/>,        
              }
            })
          }}/>
          <DeleteOutlined style={{ color: '#eb2f96' }} onClick={() => {
          
            dispatch({
              type: DELETE_PRODUCT_SAGA,
              payload: {
                id: record._id
              }
             
            })
          }}
            />
        </Space>
      ),
    },
  ];

  return (
    <>
    <Layout className="site-layout">

      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >

<ButtonBlue className='mb-3' onClick = {() => {
  dispatch({
    type: OPEN_FORM_CREATE,
    payload: {
      visible: true,
      title: "Create Product Form", 
      ComponentDrawerContent : <CreateProduct/>,        
    }
  })
}}>Create Product</ButtonBlue>
  <Table columns={columns} dataSource={productList} />
      </Content>
    </Layout>
  </>
  )
}


