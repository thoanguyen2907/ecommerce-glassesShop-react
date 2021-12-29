import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import  axios from 'axios'
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux';
import { OPEN_FORM_CREATE, SEND_EDITED_CATEGORY } from '../../types';
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart';
import CreateCategory from '../../Components/Form/CreateCategory';
import { Redirect } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function CategoryManagement() {
  const dispatch = useDispatch()
  const {categoryList} = useSelector((state: any) => state.category)
  const {userDataLogin} = useSelector((state: any) => state.userLogin)
  const userData = userDataLogin
  console.log(categoryList);
  console.log(userData);
   useEffect(() => {
   dispatch({
     type: "GET_CATEGORY_LIST_SAGA"
   })
  }, [])
  if (userData?.role === 'user' || userData?.role === '') {
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
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
            <EditOutlined onClick={() => {
            dispatch({
              type: SEND_EDITED_CATEGORY,
              payload: {
                category: record
              }
            })
          }}/>
          <DeleteOutlined style={{ color: '#eb2f96' }} onClick={() => {
            dispatch({
              type: "DELETE_CATEGORY_SAGA",
              payload: {
                id: record.id
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
    <ButtonAddToCart className='my-3' onClick = {() => {
  dispatch({
    type: OPEN_FORM_CREATE,
    payload: {
      visible: true,
      title: "Create Category Form", 
      ComponentDrawerContent : <CreateCategory/>,        
    }
  })
}}>Create Category</ButtonAddToCart>

  <Table columns={columns} dataSource={categoryList} />
      </Content>
  </Layout>
  </>
  )
}


