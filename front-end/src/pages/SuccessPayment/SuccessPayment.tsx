import React from 'react'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { openNotification } from '../../utils/notification/notification';

export default function SuccessPayment() {
    Swal.fire({ 
        icon: 'success',
        title: 'Payment Successfully',
        text: 'Thank you for shopping with us!!',
        showConfirmButton: false,
        timer: 2500,
      })

    return (
        <div>
        <Redirect to = "/" ></Redirect>
        </div>
    )
}
