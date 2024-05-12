import React from 'react'
import { useState,useEffect } from 'react';

import axios  from 'axios';

const PaymentView = () => {
    const[PaymentData, setPaymentData] = useState([])
    useEffect(()=>{
        getPayment();

    });

    const getPayment = async() =>{
        const result = await axios.get(`http://localhost:3001/viewPayment`);
        setPaymentData(result.data);
        console.log(result.data)
    };

    const DeletePayment = id =>{
        // alert(id)
        axios.delete(`http://localhost:3001/delPayment/${id}`)
        .then(response=>{
         getPayment();
 
        });
     }
 

  return (
    <div>
        <div className='row'>
            <h1>Payment Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                <th>order_id</th>
                <th>order_amount</th>
                <th>payment_date</th>
                <th>user_id</th>
                <th>transaction_no</th>
                <th>Action</th>
                
             </tr>
            </thead>
             
             <tbody>
                {
                    PaymentData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index + 1}</td>
                        <td>{data.order_id}</td>
                        <td>{data.order_amount}</td>
                        <td>{data.payment_date}</td>
                        <td>{data.user_id}</td>
                        <td>{data.transaction_no}</td>
                        <td><button className='btn btn-danger' onClick={()=> DeletePayment(data.id)}>Delete</button></td>
       
                    </tr>)
                    
                    })
                }
             </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default PaymentView
