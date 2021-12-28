import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ButtonNormal } from '../../StyledElements/Button/Button';
import { Redirect } from 'react-router-dom';
import { history } from '../../utils/history/history';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'
export default function Payment() {

    
    const [stripeToken, setStripeToken] = useState(null)
    const {orderListByUserId} = useSelector((state: any) => state.order)
    console.log('orderListByUserId', orderListByUserId)
    if (!localStorage.getItem('token')) {
        Swal.fire({
        title: '<Login></Login>!',
        text: 'Please Login',
      })
     
        return <Redirect to='/login/user' />
    }
   const onToken = async (token: any) => {
    // console.log(token.id);
    // await setStripeToken(token.id)
    try {
        const res = await axios.post('http://localhost:5000/api/v1/checkout/payment',
        {
            tokenId: token.id,
            amount: 2000
        })
        console.log(res.data)
    }
 catch(error) {
    console.log(error);
}
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
console.log(ordersList)

const items = [
    {id: 2, quantity: 3, price: 200, name: 'react', description: 'Comfortable cotton t-shirt'},
    {id: 1, quantity: 3, price: 200, name: 'css', description: 'Comfortable cotton t-shirt'}
]
    const checkOut = async () => {
        axios.post('http://localhost:5000/api/v1/checkout/create-checkout-session',{
            order: ordersList
        },
        ).then(res => {
            console.log(res);
            if(res.status === 200) {
        
                window.location = res.data.url
            }
        }).catch((error) => {
            console.log(error);
        })
    }
  
    return (
        <div>
           <StripeCheckout
        token={onToken}
        stripeKey='pk_test_51K6BPLA7J5FKQi28Qz8EYQ4e1TSsBEnTBCFmpDuAssGIZeuLq6vlfNR7g6QWiQHFJ9o3tdJqp3ZM2OO6aqa8vm3H00CZZ9jgHT'
        name= 'Sunglasses Shop' // the pop-in header title
        description= 'Choose the best sunglasses'   
        amount={100}
        currency="EUR"
        bitcoin
        shippingAddress
        billingAddress
      /> 
        <ButtonNormal onClick = {checkOut}>Check out</ButtonNormal>
        </div>
    )
}
