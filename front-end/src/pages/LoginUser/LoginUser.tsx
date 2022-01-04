import React from 'react'
import { Input, Button } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { Container } from '../../StyledElements/Container/Container';
import * as Yup from 'yup'
import { NavLink } from 'react-router-dom';
import GoogleLoginFunction from '../GoogleLogin/GoogleLoginFunction';

export default function LoginUser(props: any) {
    const dispatch = useDispatch()
    const  validationSchema =  Yup.object().shape({
        email: Yup.string().required('Please enter a email'),
        password: Yup.string().required('Please enter a password')
  })

    const { handleSubmit,errors, handleChange, values }= useFormik({
        initialValues: {
            email: "", 
            password: ""
        },
        validationSchema,
        onSubmit: async (values) => {   
          dispatch({
              type: "USER_LOGIN_SAGA", 
              payload: {
                  email: values.email,
                  password: values.password
              }
          })
    }
})
    return (
        <Container>
        <form onSubmit = {handleSubmit}>
            <div className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}>
                <div className="form_group" style={{ width: "100%" }}>
                    <h3 className="text-center">{props.displayName}</h3>
                    <div style={{ width: "50%" }} className="mx-auto text-center">
                        <Input onChange={handleChange} size="large" className="my-2"  name="email"
                        type="email" 
                        placeholder="email" prefix={<UserOutlined />} />
                          <p className='text-danger'> {errors.email ? errors.email : ''}</p>
                        <Input.Password onChange={handleChange} className="my-2"  name="password" size="large" 
                        type="password"
                        placeholder="password" />
                          <p className='text-danger'> {errors.password ? errors.password : ''}</p>
                        <Button htmlType="submit" type="primary" className="my-3">Login</Button>
                        <Button className="mx-2"><NavLink to = '/forgotPassword'> Forgot Password</NavLink></Button>
                        <GoogleLoginFunction/>
                    </div>
                </div>
            </div>

        </form>

        </Container>
    )
}
