import React from 'react'
import { useState,useEffect } from 'react';

import axios  from 'axios';

const FeedbackView = () => {
    const[FeedbackData, setFeedbackData] = useState([])
    useEffect(()=>{
        getFeedback();

    });

    const getFeedback = async() =>{
        const result = await axios.get(`http://localhost:3001/viewfeedback`);
        setFeedbackData(result.data);
        console.log(result.data)
    };

    const DeleteFeedback = id =>{
       // alert(id)
       axios.delete(`http://localhost:3001/delfeedback/${id}`)
       .then(response=>{
        getFeedback();

       });
    }

  return (
    <div>
        <div className='row'>
            <h1>Feedback Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>#</th>
                <th>user_id</th>
                <th>pid</th>
                <th>about_product</th>
                <th>about_service</th>
                <th>suggestion</th>
                <th>Action</th>
             </tr>
            </thead>
             
             <tbody>
                {
                    FeedbackData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index+1}</td>
                        <td>{data.user_id}</td>
                        <td>{data.pid}</td>
                        <td>{data.about_product}</td>
                        <td>{data.about_service}</td>
                        <td>{data.suggestion}</td>
                        <td><button className='btn btn-danger' onClick={()=> DeleteFeedback(data.id)}>Delete</button></td>
                    </tr>)
                    })
                }
             </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default FeedbackView
