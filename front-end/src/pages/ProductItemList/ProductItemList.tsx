import React, { useEffect, useState } from 'react'
import { Checkbox,  Row, Col, Slider , Button, Select, Form } from 'antd';
import './ProductItemList.scss'
import { DislikeFilled, LikeFilled, ShoppingCartOutlined } from '@ant-design/icons';
import img1 from '../../assets/img/hero-1.jpg';
import useProducts from '../../useHook/useProducts'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import RangeSlider from 'react-bootstrap-range-slider';
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart';
import { Dropdown } from '../../StyledElements/DropDown/DropDown';
import { NavLink } from 'react-router-dom';
import { ADD_PRODUCT_NO_LOGIN } from '../../types';


export default function ProductItemList() {
      const dispatch = useDispatch()
      const {userDataLogin} = useSelector((state: any) => state.userLogin)
      const {categoryList} = useSelector((state: any) => state.category)
      const userData = userDataLogin
      const userId = userData.id
      const { handleSubmit, values, setFieldValue }= useFormik({
        initialValues: {
        color: '', 
        brand: '',
        price: '' ,
        category: ''
        },
        onSubmit: async (values) => {
            console.log(values)
    }
    
})
const [error, productList] = useProducts(values)

console.log('productList', productList);
console.log('categoryList', categoryList);

const { Option } = Select;
 
const onBrandChange = (value: string) => {
  setFieldValue('brand', value)
};

const onColorChange = (value: string) => {
  setFieldValue('color', value)
};

const onCategoryChange = (value: string) => {
  setFieldValue('category', value)
};

const onChange = (value: any) => {
  console.log('onChange: ', value)
}
useEffect(() => {
  dispatch({
    type: "GET_CATEGORY_LIST_SAGA"
  })
}, [])
  const renderProductItem = () => {
    return productList.map((item: any, index: any) => {
      return <div className="col-12 col-md-6 col-lg-3 my-2" key = {index}>
      <div className="product__info" style={{width: '100%', textAlign: 'center'}}>
        <div className="product__pic">
          <img src={item.productImg} alt="product__pic"/>
        </div>
        <div className="product___detail">
         <NavLink to = {`/products/${item._id}`}> <h6 className="product___detail__name">{item.name}</h6></NavLink> 
          <p className="product___detail__price">Price: {item.price} $</p>    
        </div>
        <div className="product__add__to__cart">
        
           <NavLink to = {`/products/${item._id}`}>
           <ButtonAddToCart>  
              Product Detail
       </ButtonAddToCart></NavLink> 
        </div>
      </div>
    </div>
    })
  }
    return (
        <div className = "product__list">
        
                    <form className="product__list__filter" onSubmit = {handleSubmit}>
                    <div className='row'>
          <div className="col-12 col-lg-3 col-md-3">
          <div className="category-check-group mt-4">
                        <h3>Product Color</h3>
                        <Form.Item name="color" label="Color" rules={[{ required: true }]}>
                        <Select defaultValue="" 
                            value={values.color}
                            placeholder="Select a color"
                            onChange={onColorChange}>
            <Option value="">All</Option>              
      <Option value="black">black</Option>
      <Option value="blue">blue</Option>
     
      <Option value="grey">grey</Option>
    </Select>                          
                        </Form.Item>


                    </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3">
          <div className="brand-check-group mt-4">
                        <h3>Brand </h3>
                        <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
                        <Select defaultValue="" 
                            value={values.brand}
                            placeholder="Select a brand"
                            onChange={onBrandChange}>
          <Option value="">All</Option>   
         <Option value="Ray-Ban">Ray-Band</Option>
      <Option value="Chanel">Chanel</Option>    
      <Option value="Gucci">Gucci</Option>
     <Option value="Celine">Celine</Option>
    </Select>                          
                        </Form.Item>              
                    </div>
          </div>
          <div className="col-12 col-lg-3 col-md-3">
<div className="brand-check-group mt-4">
              <h3>Category </h3>
              <Form.Item name="category" label="Category" rules={[{ required: true }]}>
              <Select 
                  defaultValue="" 
                  value={values.category}
                  placeholder="Select a category"
                  onChange={onCategoryChange}>
<Option value="">All</Option>   
<Option value="61ad29c4520b1921c2c33fb6">Sunglasses for men</Option>
<Option value="61ad29d4520b1921c2c33fb8">Sunglasses for women</Option>    
<Option value="61ad29e1520b1921c2c33fba">Sunglasses for children</Option>
</Select>                          
              </Form.Item>              
          </div>
</div>
          <div className="col-12 col-lg-3 col-md-3">
          <div className="price-range mt-4">
                    <h3>Price </h3>
                    <Form.Item>
     <Slider defaultValue={200} className="mt-4" 
     min= {100}
     max = {300}
     onChange={onChange} 
     onAfterChange={(value)=>{setFieldValue('price', value)}} />     
   </Form.Item>           
                    </div>
          </div>
                    </div>
                    </form>         
              
                <div>
                    <div className="product">
                    <div className="row">
                   
                            {renderProductItem()}
            
                </div>
                    </div>
                </div>
            </div>
   
    )
}
