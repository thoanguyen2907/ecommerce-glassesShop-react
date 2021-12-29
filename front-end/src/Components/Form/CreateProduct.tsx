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
import { SET_SUBMIT_CREATE_PRODUCT } from '../../types'
import { DropDownNormal } from '../../StyledElements/DropDownNormal/DropDownNormal'
import { ButtonAddToCart } from '../../StyledElements/ButtonAddToCart/ButtonAddToCart'


  
 export default function CreateProduct(props: any) {
    // const [file, setFile] = useState('')
    const {categoryList} = useSelector((state: any) => state.category)
    const dispatch = useDispatch()
    const { Option } = Select;
    useEffect(() => {
       dispatch({
           type: "GET_CATEGORY_LIST_SAGA"
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
          
        },
        validationSchema,
        onSubmit: async (values) => {
          const color = values.color; 
          const size = values.size; 
          const colorArray = color.split(',')
          const sizeArray = size.split(',')
          const newState = {...values,color:  colorArray, size:  sizeArray}
            console.log(values)
            dispatch({
                type: "CREATE_PRODUCT_SAGA",
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

      </Form.Item>

        <Form.Item  className="form-group">
                    <p>Color</p>
                    <Input type="text" 
                    className="form-control" 
                    name="color"   
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="name"        
                    onChange = {handleChange}
            />
            {errors.name ? errors.name : null}
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Price</p>
                    <Input type="number" 
                    className="form-control" 
                    name="price"
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Brand</p>
                    <Input type="text" 
                    className="form-control" 
                    name="brand"
      
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Description</p>
                    <Input type="text" 
                    className="form-control" 
                    name="description"
            
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Product Img</p>
                    <Input type="text" 
                    className="form-control" 
                    name="productImg"
            
                    onChange = {handleChange}
            />
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


