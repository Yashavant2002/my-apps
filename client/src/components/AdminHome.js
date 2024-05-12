import React from 'react'
import { useState,useEffect } from 'react';

import axios  from 'axios';

const AdminHome = () => {
    const[ProductData, setProductData] = useState([])
    useEffect(()=>{
        getProduct();

    });

    const getProduct = async() =>{
        const result = await axios.get(`http://localhost:3001/viewproduct`);
        setProductData(result.data);
        console.log(result.data)
    };

    const DeleteProduct = id =>{
        // alert(id)
        axios.delete(`http://localhost:3001/delproduct/${id}`)
        .then(response=>{
         getProduct();
 
        });
     }

  return (
    <div>
        <div className='row'>
            <h1>ADMIN Product Details</h1>
            <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
             <tr>
                <th>S.no</th>
                <th>category</th>
                <th>product_name</th>
                <th>qty</th>
                <th>uom</th>
                <th>price</th>
                <th>stock</th>
                <th>image</th>
                <th>description</th>
                <th>Action</th>
             </tr>
            </thead>
             
             <tbody>
                {
                    ProductData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index + 1}</td>
                        <td>{data.category}</td>
                        <td>{data.product_name}</td>
                        <td>{data.qty}</td>
                        <td>{data.uom}</td>
                        <td>{data.price}</td>
                        <td>{data.stock}</td>
                        <td><img src={`../Upload/${data.image}`} alt='not found' width={100} height={100}></img> </td>
                        <td>{data.description}</td>
                        <td><button className='btn btn-danger' onClick={()=> DeleteProduct(data.id)}>Delete</button></td>
                    </tr>)
                    })
                }
             </tbody>

            </table>

        </div>
      
    </div>
  )
}

export default AdminHome
