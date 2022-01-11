import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { GET_USER_TOKEN_LOGIN } from '../../types'
export default function GoogleLoginFunction() {
const dispatch = useDispatch()
const responseGoogle = async (response: any) => {

    dispatch({
        type: 'USER_LOGIN_GOOGLE_SAGA',
        payload: {
            tokenId: response?.tokenId
        }
    })
    // console.log(response)
    // await axios({
    //     method: 'POST',
    //     url: 'http://localhost:5000/api/v1/auth/google-login',
    //     data: {tokenId: response.tokenId} 
    // }).then(response => {
    //     console.log(response)
    //      dispatch({
    //         type: GET_USER_TOKEN_LOGIN,
    //         payload: {
    //             token: response?.data?.token,
    //              userData: response?.data
    //     },
    //     })
    //     localStorage.setItem('state', JSON.stringify(response?.data))
    //   localStorage.setItem('token', response?.data?.token)
    //})
  }
    return (
        <div>
             <GoogleLogin
    clientId='627197289438-4dve54rv215phlj7u24edpjprt96ij92.apps.googleusercontent.com'
    buttonText="Login Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div>
    )
}
