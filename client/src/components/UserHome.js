import React, { useEffect, useState } from 'react'
import slide1 from "../Assets/w1.png"
import slide2 from "../Assets/w2.png"
import slide3 from "../Assets/w3.png"
import slide4 from "../Assets/w4.png"


import axios from 'axios'
 const uid = localStorage.getItem('user')
const UserHome = ()=>{

	const [ProductList,setProductList] = useState([])
	useEffect(()=>{
		getProducts();
	},[]);

	const getProducts = async()=>{
		const result = await axios.get("http://localhost:3001/viewproduct");
		setProductList(result.data);
		console.log(result.data)
	};

	const AddCart = id =>{
		//e.preventDefault();
		//alert(id)
		axios.post(`http://localhost:3001/addcart/${id}/${uid}`,{	
		}).then((response)=>{
			console.log(response);
			alert("Add to cart Successfully")
			window.location="http:/localhost:3000/userhome"
		})
		.catch(error => {
	       console.log(error)
		})
	}

  return (
    <div>

<div id="slider" className="carousel slide mt-3" data-bs-ride="carousel" style={{marginLeft:'10px',marginRight:'10px'}}>
				<div className="carousel-indicators"><button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active"></button>
				<button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button> 
				<button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button> 
				<button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
				</div>

				<div className="carousel-inner">

					<div className="carousel-item active">
						<img src={slide1} style={{ height:'350px',width:'100%',backgroundSize:'100%'}}  alt='NotFound'  />
						
					</div>

					<div className="carousel-item ">
						<img src={slide2} style={{ height:'350px',width:'100%',backgroundSize:'100%'}} alt='NotFound'/>
					</div>

                     <div className="carousel-item ">
						<img src={slide3} alt='Not Found'  style={{ height:'350px',width:'100%',backgroundSize:'100%'}}/>
					</div>



				<div className="carousel-item ">
						<img src={slide4} alt="Not Found"  style={{ height:'350px',width:'100%',backgroundSize:'100%'}}/>
					</div>
				</div>



				<button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</button>

				<button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
					<span className="carousel-control-next-icon"></span>
				</button>
				</div>

			<div className='container'>
              <div className='row'>
			  <h1 className='text-danger text-center  mt-4  fs-1 mb-5'>Hurry Up..! Buy Products..</h1>

             {
				ProductList.map((data,index)=>{
			return(<div className=' col-lg-3 mt-2' key={data.id}>
				<h5>{data.product_name}</h5>
				<p><img src={`../Upload/${data.image}`} alt='not found' width={200} height={200}></img></p>
				<p>&#8377;{data.price}/-</p>
				
				
				
				
                <p className=' mt-4'><button className='text-dark btn btn-outline-primary'
				 onClick={()=> AddCart(data.id)}>Add to cart</button> 
                <button className='text-dark btn btn-outline-success ms-4 '><a href={`/buy/${data.id}`} style={{textDecoration:"none"}}> Buy now</a></button></p>
                 
				 
			</div>)
				}
				)}
			
			</div>
      </div>
    </div>
  )
}

export default UserHome
