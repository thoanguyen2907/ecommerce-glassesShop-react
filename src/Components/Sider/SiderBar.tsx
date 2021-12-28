import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DeleteOutlined, EditOutlined
  } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
  const { Header, Sider, Content } = Layout;
export default function SiderBar() {
    return (
        <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
          <NavLink to = '/admin/productmanagement' exact > Products Management</NavLink> 
          </Menu.Item>
      
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <NavLink to = '/admin/usermanagement' exact> User Management  </NavLink>
          </Menu.Item>
              
          <Menu.Item key="3">
          <NavLink to = '/admin/categorymanagement' exact>Category Management </NavLink>
          </Menu.Item>
         
        <Menu.Item key="4" icon={<UploadOutlined />}>
    <NavLink to = '/admin/ordermanagement' exact>  Order Management</NavLink>
          </Menu.Item>
          
        </Menu>
      </Sider>
    )
}
