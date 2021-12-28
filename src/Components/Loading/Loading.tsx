import React from 'react'
import { useSelector } from 'react-redux';
import './Loading.scss'
import bgImg from '../../assets/img/loading.gif';

export default function Loading(): JSX.Element  {
    const isLoading =  useSelector((state: any) => state.loading.isLoading); 
    if(isLoading){
        return (
            <div className="loading">
                {/* <img src={"../../assets/img/loading.gif"} alt="loading"/> */}
                <img src={bgImg} alt="loading"/>
            </div>
        )
    } else {
        return <div></div>
    }
}
