import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ButtonBlue } from '../../StyledElements/Button/Button';
import { Redirect } from 'react-router-dom';
import { history } from '../../utils/history/history';
import { useSelector } from 'react-redux';

import Swal from 'sweetalert2'
export default function Payment() {
    const {orderListByUserId} = useSelector((state: any) => state.order)
  
    if (!localStorage.getItem('token')) {
        Swal.fire({
        title: '<Login></Login>!',
        text: 'Please Login',
      })
     
        return <Redirect to='/login/user' />
    }
const ordersList =  orderListByUserId?.map((item: any, index: any) => {
    return {
        id: index, 
        quantity: item?.products?.quantity, 
        price: item?.products?.product?.price,
        name: item?.products?.product?.name, 
        description: item?.products?.product?.description
    }
})


    const checkOut = async () => {
        axios.post('http://localhost:5000/api/v1/checkout/create-checkout-session',{
            order: ordersList
        },
        ).then(res => {
            if(res.status === 200) {
        
                window.location = res.data.url
            }
        }).catch((error) => {
            console.log(error);
        })
    }
  
    return (
        <div>
            
        <ButtonBlue onClick = {checkOut}>Check out</ButtonBlue>
        </div>
    )
}
