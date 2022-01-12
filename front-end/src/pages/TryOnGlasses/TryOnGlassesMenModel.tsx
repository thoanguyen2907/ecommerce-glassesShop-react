import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart'
import { Container } from '../../StyledElements/Container/Container'
import { ValueSearch } from '../../types'
import { truncateString } from '../../utils/truncateString/truncateString'
import './TryOnGlassesMenModel.scss'

export default function TryOnGlassesMenModel() {
    const dispatch = useDispatch()

    const category_men = '61ad29d4520b1921c2c33fb8'
    const {productList} = useSelector((state: any) => state.product)
    const [glasses, setGlasses] = useState({
      display: false,
      chosenGlasses: ''
    })
    const [productChosen, setProductChosen] = useState({
      display: false, 
      description: '',
      name: '',
      price: '',
      brand: '',
      _id: ''
    })
    const valueSearch: ValueSearch = {
      brand: '',
      color: '',
      price: '',
      category: ''
    }
  
    const getProduct = async () =>  {
      dispatch({
        type: "GET_PRODUCT_LIST_SAGA",
        payload: {
          valueSearch: valueSearch
        }
       
      })
    }
    useEffect(() => {
      getProduct() 
    }, [])
    const productListForMen = productList?.filter((item: any) => item.category === category_men)
  

    const renderVirtualImg = () => {
    return productListForMen?.map((item: any, index: any) => {
      return   <div className="col-4 d-flex align-items-center" key = {index}>
         <img src={item.virtualImg} onClick = {() => {
             setProductChosen({...productChosen, 
              brand: item.brand,
              price: item.price,
              description: item.description,
              name: item.name,
              _id: item._id,
              display: true})
           setGlasses({...glasses, chosenGlasses: item.virtualImg, display: true})

         }} key ={index} alt= {item.virtualImg} className='img-fluid vglasses__items my-3'  />
      </div>
      
    })
    
  }
  const displayClass = glasses.display? 'd-block' : 'd-none'
  const displayInfo = productChosen.display? 'd-block' : 'd-none'

    return (
        <Container>
        <div className="vglasses py-3">
   <div className="row justify-content-between">
     <div className="col-12 col-lg-6 vglasses__left">
       <div className="row">
         <div className="col-12">
           <h1 className="mb-2"> Men Virtual Glasses</h1>
         </div>
       </div>
       <div className="row" id="vglassesList">
         {renderVirtualImg()}
       </div>
     </div>
     <div className="col-12 col-lg-5 vglasses__right p-0">
       <div className="vglasses__card">
         <div className="mb-2 text-right mt-2 mr-2">
           <button className="btn-before" onClick = {()=> {
               setProductChosen({...productChosen, display: false})
             setGlasses({...glasses, display: false})
           }}>Before</button>
           <button className="btn-after" onClick = {()=> {
             setGlasses({...glasses, display: true})
             setProductChosen({...productChosen, display: true})
           }}>After</button>
         </div>
         <div className="vglasses__model__men" id="avatarMen">
         <img src={glasses.chosenGlasses} className = {displayClass} id="glasses" alt='chosenGlasses'/>
         </div>
         <div id="glassesInfo" className= {`vglasses__info ${displayInfo}`}>
            <h6 className='text-white'> {productChosen.brand} </h6>
            <h6 className='text-white'>{productChosen.name}</h6>
            <p className="card-text">
            <span className="btn btn-success btn-sm mr-2"> $ {productChosen.price}</span>
            </p>
            <p className="card-text"> {truncateString(productChosen.description, 100)}  </p>
            <NavLink to = {`/products/${productChosen._id}`}>
           <ButtonAddToCart>  
              Product Detail
       </ButtonAddToCart></NavLink> 
        </div>
       </div>
     </div>
   </div>
 </div>
 </Container>
    )
}