import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Button, Checkbox } from 'antd'
import {
    Form,
    Input,
    Select
  } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SET_SUBMIT_EDIT_PRODUCT } from '../../types'
import { Container } from '../../StyledElements/Container/Container'
import { Dropdown } from '../../StyledElements/DropDown/DropDown'
import { DropDownNormal } from '../../StyledElements/DropDownNormal/DropDownNormal'


export default function EditProduct() {
    const {categoryList} = useSelector((state: any) => state.category)
    let {productEdit} = useSelector((state: any) => state.productEdit)
    const dispatch = useDispatch()
    const  {id}: any = useParams();
    const  validationSchema =  Yup.object().shape({
        name: Yup.string().required('Please enter a name'),
  })
 
  useEffect(() => {
    dispatch({
        type: "GET_CATEGORY_LIST_SAGA"
    })
    dispatch({ 
        type: SET_SUBMIT_EDIT_PRODUCT,
        payload: {
            submitFunction: handleSubmit
        }
         });
  }, [])

    const { handleSubmit,errors, handleChange, values }= useFormik({
        enableReinitialize: true,
        initialValues: {
            name: productEdit.name,
            color : productEdit.color,
            price : productEdit.price,
            description: productEdit.description,
            category: productEdit.category,
            brand: productEdit.brand,
            size : productEdit.size,
            productImg: productEdit.productImg,
            
    
        },
        validationSchema,
        onSubmit: async (values) => {
          const color = values.color.toString() 
          const size = values.size.toString()  
          const colorArray = color.split(',')
          const sizeArray = size.split(',')
          const newState = {...values,color:  colorArray, size:  sizeArray}
            dispatch({
                type: "UPDATE_PRODUCT_SAGA",
                payload: {
                    product: newState,
                    id: productEdit._id
                  }
            })
        },
    })
    
    console.log(values)
    return (
        <div>
            <Container>
        <Form  onSubmitCapture={handleSubmit} >
        <h3 className="text-center"> Edit Product Form</h3>    
        <Form.Item className="form-group">
                    <p>Size</p>
                    <Input type="text" 
                    className="form-control" 
                    name="size"
                    value={values.size}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item>
        <h3 className="text-center"> Category</h3>
        <DropDownNormal name = "category" onChange={handleChange} value={values.category}>
            {categoryList.map((item: any, index: any) => {
                return  <option value={item.id} key= {index}>{item.name} </option>
            })}
    </DropDownNormal>
        </Form.Item>

        <Form.Item  className="form-group">
                    <p>Color</p>
                    <Input type="text" 
                    className="form-control" 
                    name="color"
                    value={values.color}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="name" 
                    value={values.name}       
                    onChange = {handleChange}
            />
            {errors.name ? errors.name : null}
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Price</p>
                    <Input type="number" 
                    className="form-control" 
                    name="price"
                    value={values.price}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Brand</p>
                    <Input type="text" 
                    className="form-control" 
                    name="brand"
                    value={values.brand}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Description</p>
                    <Input type="text" 
                    className="form-control" 
                    name="description"
                    value={values.description}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Product Img</p>
                    <Input type="text" 
                    className="form-control" 
                    name="productImg"
                    value={values.productImg}
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
        </Container>
        </div>
    )
}
