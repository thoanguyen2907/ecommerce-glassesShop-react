import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import { Button } from 'antd'
import {
    Form,
    Input
  } from 'antd';
import { Container } from '../../StyledElements/Container/Container'
import { SET_SUBMIT_CREATE_CATEGORY } from '../../types'

const product =  {
    name		: "Athletic Shoes",
    title	    : "Giầy cho bộ môn thể thao",
    slug		: "athletic-shoes"	
  }

  
 export default function CreateCategory(props: any) {
    // const createCategory = async (category: any) => {
    //     await axios.post('http://localhost:5000/api/v1/category', category)
    //     .then(response => console.log(response));
    // }
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: "GET_CATEGORY_LIST_SAGA"
        })
        dispatch({ 
         type: SET_SUBMIT_CREATE_CATEGORY,
         payload: {
             submitFunction: handleSubmit
         }
          });
     }, [])


    const  validationSchema =  Yup.object().shape({
        name: Yup.string().required('Please enter a name'),
        title: Yup.string().required('Please enter a title'),
        slug: Yup.string().required('Please enter a slug'),
  })

    const { handleSubmit,errors, handleChange, values }= useFormik({
        enableReinitialize: true,
        initialValues: {
            name: "",
            title : "",
            slug : ""
        },
        validationSchema,

        onSubmit: async (values) => {
            console.log(values);
    //    await createCategory(values)
    dispatch({
        type: "CREATE_CATEGORY_SAGA",
        payload: {
            name: values.name,
            title : values.title,
            slug : values.slug
        }
    })
 
        }
   
    })

    return (      
            <div>
        <form  onSubmit={handleSubmit} >
        <h3 className="text-center"> Create Category</h3>    
        <Form.Item className="form-group">
                    <p>Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="name"
                    onChange = {handleChange}
            />
            <p className='text-danger'> {errors.name ? errors.name : ''}</p>
           
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Title</p>
                    <Input type="text" 
                    className="form-control" 
                    name="title"
           
                    onChange = {handleChange}
            />
            <p className='text-danger'> {errors.title ? errors.title : null}</p>
            
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Slug</p>
                    <Input type="text" 
                    className="form-control" 
                    name="slug"        
                    onChange = {handleChange}
            />
            <p className='text-danger'> {errors.slug ? errors.slug : null}</p>
           
        </Form.Item>
        </form>  
        </div>
     
    )
}


