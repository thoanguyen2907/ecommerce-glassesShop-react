import React from 'react'
import { openNotification } from '../../utils/notification/notification';

export default function CancelPayment() {
    openNotification('Payment Canceled', 'Your payment canceled!!');
    return (
        <div className= "text-center">
        <h6>Your Payment Canceled</h6> 
        </div>
    )
}
