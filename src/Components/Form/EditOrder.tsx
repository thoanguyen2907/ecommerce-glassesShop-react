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


export default function EditOrder() {
    const {categoryList} = useSelector((state: any) => state.category)
    let {orderEdited} = useSelector((state: any) => state.order)
    console.log({orderEdited});
    const dispatch = useDispatch()
 
//     const  validationSchema =  Yup.object().shape({
//         name: Yup.string().required('Please enter a name'),
//   })
 
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
            quantity: orderEdited?.products?.quantity,
            orderId:  orderEdited?._id,
            lastName: orderEdited?.user?.lastName,
            firstName: orderEdited?.user?.firstName,
            productId: orderEdited?.product
        },

        onSubmit: async (values) => {
          console.log(values);
        },
    })
    
    console.log(values)
    return (
        <div>
        <Form  onSubmitCapture={handleSubmit}  layout="horizontal">
        <h3 className="text-center"> Edit Order Form</h3>    
        <Form.Item className="form-group">
                    <p>Quantity</p>
                    <Input type="text" 
                    className="form-control" 
                    name="quantity"
                    value={values.quantity}
                    onChange = {handleChange}
            />
        </Form.Item>
        <Form.Item className="form-group">
                    <p>Product Id</p>
                    <Input type="text" 
                    className="form-control" 
                    name="productId"
                    value={values.productId}
                    onChange = {handleChange}
                 
            />
        </Form.Item>
        <Form.Item className="form-group">
                    <p>First Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="lastName"
                    value={values.lastName}
                    onChange = {handleChange}
                    disabled= {true}
            />
        </Form.Item>
        <Form.Item className="form-group">
                    <p>First Name</p>
                    <Input type="text" 
                    className="form-control" 
                    name="firstName"
                    value={values.firstName}
                    onChange = {handleChange}
                    disabled= {true}
            />
        </Form.Item>
 
        </Form>
        </div>
    )
}
