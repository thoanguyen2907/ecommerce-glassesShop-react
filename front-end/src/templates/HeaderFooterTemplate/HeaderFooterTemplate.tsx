import React from 'react'
import {Route} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
export default function HeaderFooterTemplate(props: any) {
    const {Component, ...resRoute} = props; 
    return <Route {...resRoute} render = {(props) => {
        return <>
            <Header/>
            
            <Component {...props}/>
            <Footer/>
           
        </>
    }} />
}
