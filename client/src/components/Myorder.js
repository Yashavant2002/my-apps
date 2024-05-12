import React from 'react'
import { useState,useEffect } from 'react';
import axios  from 'axios';

const uid = localStorage.getItem('user')

const Myorder = () => {
    const[MyorderData, setMyorderData] = useState([])
    useEffect(()=>{
        getMyorder();

    },[]);

    const getMyorder = async() =>{
        const result = await axios.get(`http://localhost:3001/myorder/${uid}`);
        setMyorderData(result.data);
        console.log(result.data)
    };

    

   

  return (
    <div>
        <div className='row'>
            <h1>My order Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                <th>user_id</th>
                <th>product_name</th>
                <th>qty</th>
                <th>price</th>
                <th>total</th>
                <th>order_date</th>
                <th>order_time</th>
                <th>order_status</th>
                <th>payment_status</th>
                <th colSpan={2} align='center' 
                 className='text-white bg-danger'> Action </th>
             </tr>
            </thead>
             
             <tbody>
               
             {
                      MyorderData.map((mo,index) => {
                        let message
                       

                          if(mo.payment_status==='Paid')
                          {
                            message = <div className='text-primary fs-4 fw-bold'> Paid  </div>
 
                          }
                          else
                          {

                            message = <div className='text-primary fs-4 fw-bold'> <a href={`/paybill/${mo.id}/${mo.total}`} 
                            style={{textDecoration:"none"}}> Pay Now </a> </div>
                          }
                       
                      
            return(    
           <tr key={index}>
              <td>{index+1}</td>
              <td>{mo.user_id}</td>
              <td>{mo.product_name}</td>
              <td>{mo.qty}</td>
              <td>{mo.price}</td>
              <td>{mo.total}</td>
              <td>{mo.order_date}</td>
              <td>{mo.order_time}</td>
              <td className='text-success fs-4 fw-bold'>{mo.order_status}</td>
              <td className='text-danger fs-4 fw-bold'>{mo.payment_status}</td>
             
              <td> {message}  </td>
            </tr>
        
            )
            }
              )};
                         

            </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default Myorder
