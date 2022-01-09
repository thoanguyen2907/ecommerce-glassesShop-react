import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '../../StyledElements/Container/Container'
import { ValueSearch } from '../../types'
import './TryOnGlasses.scss'


export default function TryOnGlasses() {
  const dispatch = useDispatch()
  const category_women = '61ad29c4520b1921c2c33fb6'
  const {productList} = useSelector((state: any) => state.product)
  const [glasses, setGlasses] = useState({
    display: false,
    chosenGlasses: ''
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


  const productListForWomen = productList?.filter((item: any) => item.category === category_women)

  const renderVirtualImg = () => {
    return productListForWomen?.map((item: any, index: any) => {
      return   <div className="col-4 d-flex align-items-center" key = {index}>
         <img src={item.virtualImg} onClick = {() => {
           setGlasses({...glasses, chosenGlasses: item.virtualImg, display: true})

         }} key ={index} alt= {item.virtualImg} className='img-fluid vglasses__items my-3'  />
      </div>
      
    })
  }
  const displayClass = glasses.display? 'd-block' : 'd-none'
  
    return (
      <Container>
       <div className="vglasses py-3">
  <div className="row justify-content-between">
    <div className="col-12 col-lg-6 vglasses__left">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-2">Virtual Glasses</h1>
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
            setGlasses({...glasses, display: false})
          }}>Before</button>
          <button className="btn-after" onClick = {()=> {
            setGlasses({...glasses, display: true})
          }}>After</button>
        </div>
        <div className="vglasses__model" id="avatar">
        <img src={glasses.chosenGlasses} className = {displayClass} id="glasses" alt='chosenGlasses'/>
        </div>
        <div id="glassesInfo" className="vglasses__info">
        </div>
      </div>
    </div>
  </div>
</div>
</Container>
    )
}