import React from 'react'
import { Input, Button } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { Container } from '../../StyledElements/Container/Container';
import * as Yup from 'yup'
export default function ResetPassword(props: any) {
    const dispatch = useDispatch()
    const  validationSchema =  Yup.object().shape({
        password: Yup.string().required('Please enter a password'),
  })
  const { handleSubmit,errors, handleChange, values }= useFormik({
    initialValues: {
        password: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log('values', values)
    //   dispatch({
    //       type: "USER_FORGOT_PASSWORD_SAGA", 
    //       payload: {
    //           email: values.email,
    //       }
    //   })
}
}
)

    return (
        <Container>
        <form onSubmit = {handleSubmit}>
            <div className="d-flex justify-content-center align-items-center"
                style={{ height: "100vh" }}>
                <div className="form_group" style={{ width: "100%" }}>
                    <h3 className="text-center">{props.displayName}</h3>
                    <div style={{ width: "50%" }} className="mx-auto text-center">
                        <Input onChange={handleChange} size="large" className="my-2"  name="password"
                        type="password" 
                        placeholder="password" prefix={<UserOutlined />} />
                          <p className='text-danger'> {errors.password ? errors.password : ''}</p>
                     
                        <Button htmlType="submit" type="primary" className="my-3">Reset Password</Button>
                       
                    </div>
                </div>
            </div>
        </form>
        </Container>
    )
}
