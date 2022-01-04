import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  DeleteOutlined, EditOutlined
} from '@ant-design/icons';
import { Table, Tag, Space } from 'antd';
import  axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_LIST_SAGA } from '../../types';
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
          <EditOutlined/>
          <DeleteOutlined style={{ color: '#eb2f96' }} />
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


