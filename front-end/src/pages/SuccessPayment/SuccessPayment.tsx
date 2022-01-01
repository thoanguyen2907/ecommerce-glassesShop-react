import React from 'react'
import { openNotification } from '../../utils/notification/notification';

export default function SuccessPayment() {
    openNotification('Payment Successfully', 'Thank you for shopping with us!!');
    return (
        
        <div className= "text-center">
        <h6>Your Payment Successfully</h6> 
        </div>
    )
}
