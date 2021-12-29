import React from 'react'
import logo from '../../assets/img/logo.svg';
import img1 from '../../assets/img/hero-1.jpg';
import Carousel from '../../Components/Carousel/Carousel';
import FeatureCompany from '../FeatureCompany/FeatureCompany';
import PopularProduct from '../PopularProduct/PopularProduct';
import NewArrivalProduct from '../NewArrivalProduct/NewArrivalProduct';
export default function HomePage() {
    return (
    <div className="">
    <Carousel/>
    <FeatureCompany/>
    <PopularProduct/>

    <NewArrivalProduct/>
    </div>
        

    )
}
