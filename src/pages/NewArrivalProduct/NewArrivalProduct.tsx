import React, { useEffect } from 'react'
import img1 from '../../assets/img/hero-1.jpg';
import './NewArrivalProduct.scss'
import { DislikeFilled, LikeFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../StyledElements/Container/Container';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

export default function NewArrivalProduct() {
  const {productNewArrival} = useSelector((state: any) => state.product)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: "GET_PRODUCT_NEW_ARRIVAL_SAGA"
    })
  }, [])
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
          
        }
      },
      {
        breakpoint: 758,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

   const renderNewArrivalProduct = () => {
     return productNewArrival?.map((item: any, index: any) => {
       return <div className="product__info" key = {index}>
         <div className="product__pic">
           <img src={item.productImg} alt="product__pic" />
         </div>
         <div className="product___detail">
         <NavLink to = {`/products/${item._id}`}>   <h4>{item.name}</h4> </NavLink>
           <h6>Price: {item.price}</h6>    
         </div>
       
       </div>
  
     })
   }
    return (
      <Container>
        <section className="product">
        <h2>New Arrival Products</h2>
        
            <Slider {...settings}>
          {renderNewArrivalProduct()}

     
        </Slider>
        </section>
        </Container>
    )
}
