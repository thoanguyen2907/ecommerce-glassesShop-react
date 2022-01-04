import React from 'react'
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { openNotification } from '../../utils/notification/notification';

export default function CancelPayment() {
    Swal.fire({
        title: 'Canceled Payment',
        text: 'You have canceled payment. Redirect to homepage!!',
        timer: 2000,
        showConfirmButton: false,
      })
    return (
       <div>
           
           <Redirect to = "/" ></Redirect>
       </div>
       
    
    )
}
