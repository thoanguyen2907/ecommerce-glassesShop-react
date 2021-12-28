import React, { useEffect, useState } from 'react'
import {Route} from 'react-router-dom';
import { Layout } from 'antd';
const {  Sider, Content } = Layout;

export default function LoginTemplate(props: any) {
    const [{width,height }, setSize] = useState({width: window.innerWidth,height:window.innerHeight });
    useEffect(()=>{
        window.onresize = () =>{
            setSize({
                width: window.innerWidth, 
                height: window.innerHeight, 
            })
        }
    }, [])

    const {Component, ...resRoute} = props; 

    return <Route {...resRoute} render = {(props) => {
        return <>
        <Layout>
            <Sider width={width/2} style={{height:height,backgroundImage:'url(https://picsum.photos/2000)',backgroundSize:'100%'}}>
            </Sider>
            <Content>
            <Component {...props}/>
            </Content>
        </Layout>
           
        </>
    }} />
}
