import { DislikeFilled, LikeFilled } from '@ant-design/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../../assets/img/hero-1.jpg';
import { Container } from '../../StyledElements/Container/Container';
import './PopularProduct.scss'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

export default function PopularProduct() {

  const {productPopular} = useSelector((state: any) => state.product)
  
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


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: "GET_PRODUCT_POPULAR_SAGA"
    })
  }, [])
  const renderPopularProduct = () => {
    return productPopular?.map((item: any, index: any) => {
      return  <div className="product__info" key = {index}>
        <NavLink to = {`/products/${item._id}`}> <div className="product__pic">
          <img src={item.productImg} alt="product__pic" />
        </div>
        <div className="product___detail">
          <h4>{item.name}</h4> 
          <h6>Price: {item.price}</h6>    
        </div>
        </NavLink> 
      </div>

    })
  }

    return (
      <Container>
        <section className="product">
        <h2>Popular Products</h2>
            
             <div>
        <Slider {...settings}>
          {renderPopularProduct()}

     
        </Slider>
      </div>
        </section>
    
       
        </Container>
    )
}
