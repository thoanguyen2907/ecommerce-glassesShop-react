import React, { useEffect }  from 'react'
import { Container } from '../../StyledElements/Container/Container';
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import useProducts from '../../useHook/useProducts'
import { NavLink } from 'react-router-dom';

interface IProps {
    category: string;
  }

export default function ProductByCategory(props: IProps) {
    const dispatch = useDispatch()
    const {productList} = useSelector((state: any) => state.product)
    const valueSearch = {
        category: props.category,
        brand: "",  
        color: "",
        price: ""
    }
    const getProduct = async () =>  {        
        dispatch({
         type: "GET_PRODUCT_LIST_SAGA",
         payload: {
            valueSearch
         }
       })
    }
       useEffect(() => {
        getProduct() 
      }, [])
    
    
      const renderProduct = () => {
        return productList?.map((item: any, index: any) => {
          return <div className="col-12 col-md-6 col-lg-3 my-2">
              <div className="product__info" key = {index}>
            <div className="product__pic">
              <img src={item.productImg} alt="product__pic" />
            </div>
            <div className="product___detail">
              <NavLink to = {`/products/${item._id}`}> <h4>{item.name}</h4> </NavLink> 
              <h6>Price: {item.price}</h6>    
            </div>
            
          </div>
          </div>
           
    
        })
      }
    return (
        <Container>
        <section className="product">
        <h2> Products Relevant</h2>
            
             <div className="row">
 
   
        {renderProduct()}
     
      
      </div>
        </section>
    
       
        </Container>
    )
}
