import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Button, Radio, Checkbox } from 'antd'
import {
    Form,
    Input,
    Select
  } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from '../../StyledElements/DropDown/DropDown'
import { CREATE_PRODUCT_SAGA, GET_CATEGORY_LIST_SAGA, SET_SUBMIT_CREATE_PRODUCT } from '../../types'
import { DropDownNormal } from '../../StyledElements/DropDownNormal/DropDownNormal'
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart'


  
 export default function CreateProduct(props: any) {
    // const [file, setFile] = useState('')
    const {categoryList} = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
    const { Option } = Select;
    useEffect(() => {
       dispatch({
           type: GET_CATEGORY_LIST_SAGA
       })
       dispatch({ 
        type: SET_SUBMIT_CREATE_PRODUCT,
        payload: {
            submitFunction: handleSubmit
        }
         });
    }, [])

  
    const  validationSchema =  Yup.object().shape({
        name: Yup.string().required('Please enter a name'),
        size: Yup.string().required('Please enter a size'),
        color: Yup.string().required('Please enter a color'),
        price: Yup.string().required('Please enter a price'),
        category: Yup.string().required('Please enter a category'),
        brand: Yup.string().required('Please enter a brand'),
        productImg: Yup.string().required('Please enter a productImg'),
        description: Yup.string().required('Please enter a description'),
        virtualImg:  Yup.string().required('Please enter a virtualImg')
  })
    const { handleSubmit,errors, handleChange, values, setFieldValue }= useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            color : "",
            price : "",
            description: "",
            category: "61ad29c4520b1921c2c33fb6",
            brand: "",
            size : "",
            productImg: "",
            newArrival: false,
            popular: false,
            virtualImg: ""
          
        },
        validationSchema,
        onSubmit: async (values) => {
          const color = values.color; 
          const size = values.size; 
          const colorArray = color.split(',')
          const sizeArray = size.split(',')
          const newState = {...values,color:  colorArray, size:  sizeArray}
        
            dispatch({
                type: CREATE_PRODUCT_SAGA,
                payload: {
                    product: newState
                }
            })
        }
   
    })
    const onCategoryChange = (value: string) => {
        setFieldValue('category', value)
      };

    return (
        <div>
        <Form className="container"  onSubmitCapture={handleSubmit}  layout="horizontal">
        <h3 className="text-center"> Create Product</h3>    
        <Form.Item className="form-group">
                    <p>Size</p>
                    <Input type="text" 
                    className="form-control" 
                    name="size" 
                    onChange = {handleChange}
            />
        <div className="text-danger"> {errors.size ? errors.size : null}</div> 
        </Form.Item>
        
    
      <Form.Item name="category" label="Category" rules={[{ required: true }]}>
      <Select
          placeholder="Select a category"
          onChange={onCategoryChange}
          allowClear
        >
        {categoryList?.map((item: any, index: any) => {
                return  <Option value={item.id} key= {index}>{item.name} </Option>
            })}
        </Select>
        <div className="text-danger"> {errors.category ? errors.category : null}</div> 
      </Form.Item>

        <Form.Item  className="form-group">
                    <p>Color</p>
                    <Input type="text" 
                    className="form-control" 
                    name="color"   
                    onChange = {handleChange}
            />
                  <div className="text-danger"> {errors.color ? errors.color : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="name"        
                    onChange = {handleChange}
            />
          <div className="text-danger"> {errors.name ? errors.name : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Price</p>
                    <Input type="number" 
                    className="form-control" 
                    name="price"
                    onChange = {handleChange}
            />
                  <div className="text-danger"> {errors.price ? errors.price : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Brand</p>
                    <Input type="text" 
                    className="form-control" 
                    name="brand"    
                    onChange = {handleChange}
            />
                  <div className="text-danger"> {errors.brand ? errors.brand : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Description</p>
                    <Input type="text" 
                    className="form-control" 
                    name="description"
            
                    onChange = {handleChange}
            />
             <div className="text-danger"> {errors.description ? errors.description : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Product Img</p>
                    <Input type="text" 
                    className="form-control" 
                    name="productImg"           
                    onChange = {handleChange}
            />
                     <div className="text-danger"> {errors.productImg ? errors.productImg : null}</div> 
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Virtual Img</p>
                    <Input type="text" 
                    className="form-control" 
                    name="virtualImg"           
                    onChange = {handleChange}
            />
                     <div className="text-danger"> {errors.virtualImg ? errors.virtualImg : null}</div> 
        </Form.Item>
        
        <Form.Item  className="form-group"> 
        <Checkbox onChange={handleChange}  name = "newArrival">New Arrival</Checkbox>
        </Form.Item>
       
        <Form.Item  className="form-group"> 
        <Checkbox onChange={handleChange}  name = "popular">Popular</Checkbox>
        </Form.Item>

        </Form>
        </div>
    )
}


