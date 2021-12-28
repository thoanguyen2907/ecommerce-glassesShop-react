import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Button } from 'antd'
import {
    Form,
    Input,
    Select
  } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '../../StyledElements/Container/Container'

export default function EditCategory() {
    const {categoryEdit} = useSelector((state: any) => state.categoryEdit)
    const dispatch = useDispatch()
    const  {id}: any = useParams()
      const { handleSubmit,errors, handleChange, values }= useFormik({
        enableReinitialize: true,
        initialValues: {
            name: categoryEdit.name,
            title : categoryEdit.title,
            slug : categoryEdit.slug
        },
        onSubmit: async (values) => {
            // dispatch({
            //     type: "UPDATE_CATEGORY_SAGA",
            //     payload: {
            //         category: values,
            //         id
            //       }
            // })
            axios({
                url:"http://localhost:5000/api/v1/category/619b61e6e0089870017fe080",
                method:'PUT',
                data: values,
               
            }) 

            console.log({values});
        }
    })
    return (
        <div style={{backgroundColor: '#ffffff', padding: '20px', width:'80%'}}>
            <Container> 
        <Form  onSubmitCapture={handleSubmit}  layout="horizontal">
        <h3 className="text-center"> Update Category</h3>    
        <Form.Item className="form-group">
                    <p>Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="name"
                    onChange = {handleChange}
                    value={values.name}
            />
       
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Title</p>
                    <Input type="text" 
                    className="form-control" 
                    name="title"
                    onChange = {handleChange}
                    value={values.title}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Slug</p>
                    <Input type="text" 
                    className="form-control" 
                    name="slug"        
                    onChange = {handleChange}
                    value={values.slug}
            />
        </Form.Item>
    
        <Button htmlType="submit">Update Category</Button>
        </Form>  
        </Container>
        </div>
    )
}
