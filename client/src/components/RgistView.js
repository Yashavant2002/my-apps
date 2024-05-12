import React from 'react'
import { useState,useEffect } from 'react';

import axios  from 'axios';

const RegistView = () => {
    const[RegistData, setRegistData] = useState([])
    useEffect(()=>{
        getRegist();

    });

    const getRegist = async() =>{
        const result = await axios.get(`http://localhost:3001/viewregist`);
        setRegistData(result.data);
        console.log(result.data)
    };

    const DeleteRegist = id =>{
        // alert(id)
        axios.delete(`http://localhost:3001/delregist/${id}`)
        .then(response=>{
         getRegist();
 
        });
     }

  return (
    <div>
        <div className='row'>
            <h1>Registration Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                <th>fname</th>
                <th>lname</th>
                <th>dob</th>
                <th>gender</th>
                <th>address</th>
                <th>pincode</th>
                <th>email</th>
                
                <th>mobile_no</th>
                <th>Action</th>
                
             </tr>
            </thead>
             
             <tbody>
                {
                    RegistData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index + 1}</td>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>{data.dob}</td>
                        <td>{data.gender}</td>
                        <td>{data.address}</td>
                        <td>{data.pincode}</td>
                        <td>{data.email}</td>
                        <td>{data.mobile_no}</td>

                        <th><td><button className='btn btn-danger' onClick={()=> DeleteRegist(data.id)}>Delete</button></td></th>
                    </tr>)
                    })
                }
             </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default RegistView
