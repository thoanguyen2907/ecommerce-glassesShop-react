import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import  axios from 'axios'
import Swal from 'sweetalert2'
import { OPEN_FORM_EDIT_ORDER, SEND_EDITED_ORDER } from '../../types';
import EditOrder from '../../Components/Form/EditOrder';
import { Redirect } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


export default function OrderManagement() {
  const dispatch = useDispatch()
  const {orderList} = useSelector((state: any) => state.order)
  const {userDataLogin} = useSelector((state: any) => state.userLogin)
  const userData = userDataLogin


  const getOrder = async () =>  {
    dispatch({
      type: "GET_ORDER_LIST_SAGA"
    })
  }
  useEffect(() => {
    getOrder() 
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
      title: 'User Email',
      dataIndex: 'user',
      key: 'user',
      render: ( record: any) => {
        return <p>{record?.email}</p> 
    },
    },
    
    {
      title: 'Product Name',
      dataIndex: 'products',
      key: 'products',
      render: ( record: any) => {
        return <Tag onClick = {() => {
          console.log(record)
        }}>{record?.product?.name}</Tag> 
    },
    },
    {
      title: 'Quantity',
      dataIndex: 'products',
      key: 'products.quantity',
      render: ( record: any) => {
        return  <Tag onClick = {() => {
        }}>{record.quantity}</Tag> 
    },
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <EditOutlined onClick={() => {
            dispatch({
              type: SEND_EDITED_ORDER,
              payload: {
                orderEdited: record
              }
            })
            console.log(record)
            dispatch({
              type: OPEN_FORM_EDIT_ORDER,
              payload: {
                visible: true,
                title: "Edit Order Form", 
                ComponentDrawerContent : <EditOrder/>,        
              }
            })
          }}/>
          <DeleteOutlined style={{ color: '#eb2f96' }}
          onClick = { () => {
            dispatch({
              type: "DELETE_ORDER_SAGA_ADMIN",
              payload: {
                  orderId: record?._id
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

  <Table columns={columns} dataSource={orderList} />
      </Content>
    </Layout>
  </>
  )
}


