import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import  axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER_BY_ID_SAGA, GET_USER_LIST_SAGA, SEND_EDITED_USER } from '../../types';
import EditUser from '../../Components/Form/EditUser';
const { Header, Sider, Content } = Layout;


export default function UserManagement() {
  const dispatch = useDispatch()
  const {userList} = useSelector((state: any) => state.user)
  const columns = [
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: ( record: any) => {
        return <Tag>{record}</Tag> 
    }
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size="middle">
          <EditOutlined onClick={() => {    
     
          dispatch({
            type: SEND_EDITED_USER,
            payload: {
              user: record
            }
          })
          dispatch({
            type: "OPEN_FORM_EDIT_USER",
            payload: {
              visible: true,
              title: "Edit User Form", 
              ComponentDrawerContent : <EditUser/>,        
            }
          })
        }}
          
          
          />
          <DeleteOutlined style={{ color: '#eb2f96' }} onClick={() => {    
          
            dispatch({
              type: DELETE_USER_BY_ID_SAGA,
              payload: {
                userId: record._id
              }
            })
          }}/>
        </Space>
      ),
    },
  ];
  const getUsers = async () =>  {
    dispatch({
      type: GET_USER_LIST_SAGA
    })
  }
  useEffect(() => {
    getUsers() 
  }, [])

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

  <Table columns={columns} dataSource={userList} />
      </Content>
    </Layout>
  </>
  )
}


