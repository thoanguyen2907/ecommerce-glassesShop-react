import React from 'react'
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { UserOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import * as Yup from 'yup'

export default function SignUpUser() {
    const dispatch = useDispatch()

    const  validationSchema =  Yup.object().shape({
        lastName: Yup.string().required('Please enter a last name'),
        firstName: Yup.string().required('Please enter a first name'),
        email: Yup.string().required('Please enter a email'),
        phone: Yup.string().required('Please enter a phone'),
        password: Yup.string().required('Please enter a password'),
  })
    const { handleSubmit,errors, handleChange, values }= useFormik({
        initialValues: {
        lastName: "", 
        firstName: "",
        email: "", 
        phone: "",
        password: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values)
          
          dispatch({
              type: "USER_SIGN_UP_SAGA", 
              payload: {
                lastName: values.email,
                firstName: values.firstName,
                email: values.email,
                phone: values.phone,
                password: values.phone,
              }
          })
    }
}
    )

    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100%", width: "100%"}}>
        <form style={{width: "80%"}} onSubmit = {handleSubmit}>
        <Input name="lastName" size="large" className="my-2" placeholder="Last Name" prefix={<UserOutlined />} onChange={handleChange}/>
        <p className='text-danger'> {errors.lastName ? errors.lastName : ''}</p>
        <Input name="firstName" size="large" className="my-2" placeholder="First Name" prefix={<UserOutlined />} onChange={handleChange}/>
        <p className='text-danger'> {errors.firstName ? errors.firstName : ''}</p>
         <Input name="email" size="large" className="my-2" placeholder="email" prefix={<MailOutlined />} onChange={handleChange}/>
         <p className='text-danger'> {errors.email ? errors.email : ''}</p>

         <Input.Password placeholder="password" size="large" className="my-2" name="password" onChange={handleChange}/>
         <p className='text-danger'> {errors.password ? errors.password : ''}</p>

         <Input name="phone" size="large" className="my-2" placeholder="phone" onChange={handleChange} prefix={<PhoneOutlined />} />
         <p className='text-danger'> {errors.phone ? errors.phone : ''}</p>

    
         <div className="text-center my-3">
       
         <Button htmlType="submit" type="primary" className="my-3">Sign up</Button>
         </div>

    </form>
    </div>
    )
}
