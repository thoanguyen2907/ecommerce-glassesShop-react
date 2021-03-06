import React from 'react'
import {Route} from 'react-router-dom'; 
import SiderBar from '../../Components/Sider/SiderBar';
import { Layout } from 'antd';
import '../../sass/_reset.scss'
export default function AdminTemplate(props: any) {
    const {Component, ...restParam} = props; 
    return <Route {...restParam} render = {(propsRoute)=>{
        return <>
       <Layout style = {{height: "100vh"}} >
        <SiderBar/> 
        <Layout className="site-layout">
        <Component {...propsRoute}/>    

        </Layout>       
    
        </Layout>

        </>
    }}/>
}
