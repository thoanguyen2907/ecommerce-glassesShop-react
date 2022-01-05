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
import { SET_SUBMIT_EDITED_CATEGORY, SET_SUBMIT_EDITED_USER, UPDATE_CATEGORY_SAGA, UPDATE_USER_SAGA } from '../../types'

export default function EditUser() {
    const {userEdited} = useSelector((state: any) => state.user)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ 
            type: SET_SUBMIT_EDITED_USER,
            payload: {
                submitFunction: handleSubmit
            }
             });
      }, [])

      const { handleSubmit,errors, handleChange, values }= useFormik({
        enableReinitialize: true,
        initialValues: {
            lastName: userEdited.lastName,
            firstName: userEdited.firstName,
            email: userEdited.email,
            role : userEdited.role,
            phone : userEdited.phone,
            
        },
        onSubmit: async (values) => {
            dispatch({
                type: UPDATE_USER_SAGA,
                payload: {
                    userEdited: values,
                    userId: userEdited.id
                  }
            })
            // axios({
            //     url:`http://localhost:5000/api/v1/users/${userEdited.id}`,
            //     method:'PUT',
            //     data: values,
               
            // })

            console.log({values});
        }
    })
    console.log('userEdited', userEdited);
    return (
      
            <Container> 
        <Form  onSubmitCapture={handleSubmit}  layout="horizontal">
        <h3 className="text-center"> Update User</h3>    
        <Form.Item className="form-group">
                    <p>Last Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="lastName"
                    onChange = {handleChange}
                    value={values.lastName}
            />
       
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>First Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="firstName"
                    onChange = {handleChange}
                    value={values.firstName}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Email</p>
                    <Input type="text" 
                    className="form-control" 
                    name="email"        
                    onChange = {handleChange}
                    value={values.email}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Role</p>
                    <Input type="text" 
                    className="form-control" 
                    name="role"        
                    onChange = {handleChange}
                    value={values.role}
            />
        </Form.Item>
        <Form.Item  className="form-group">
                    <p>Phone</p>
                    <Input type="text" 
                    className="form-control" 
                    name="phone"        
                    onChange = {handleChange}
                    value={values.phone}
            />
        </Form.Item>
    
      
        </Form>  
        </Container>
  
    )
}
