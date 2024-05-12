import React from 'react'
import slide1 from "../Assets/lslide1.png"
import slide2 from "../Assets/lslide2.png"
import slide3 from "../Assets/lslidee3.png"
import slide4 from "../Assets/lslidee4.png"
import hp from "../Assets/hp1.webp"
import dell from "../Assets/dell1.jpeg"
import acer from "../Assets/acer3.webp"
import apple from "../Assets/apple1.jpeg"

function HomeSlide (){
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
               
			
		

			<h1 className='text-center fw-bold mt-4 text-success fs-1 mb-5'><u>Our Products</u></h1>
			<div className='container-fluid'>
              <div className='row'>
			<div className=' col-lg-3'>
				<h2 className='text-center fw-bold'>HP</h2>
				<img src={hp}  style={{height:'250px',width:'300px' }} alt='notfount' className='mt-4 mb-4'></img>
				<h5 className='text-center' style={{ color:'blue'}}> Prize:&#8377; 23000</h5>
				<p className='text-center'><button className='text-white bg-warning'style={{ border:'none', height:'35px',width:'130px'}} >Add to cart</button> <button className='text-white bg-success ms-4'style={{border:'none',height:'35px',width:'130px' }}>Buy now</button></p>

			</div>

			<div className=' col-lg-3'>
				<h2 className='text-center fw-bold'>DELL</h2>
				<img src={dell}  style={{height:'250px',width:'300px' }} alt='notfount' className='mt-4 mb-4'></img>
				<h5 className='text-center' style={{ color:'blue'}}> Prize:&#8377; 25000</h5>
				<p className='text-center'><button className='text-white bg-warning'style={{ border:'none', height:'35px',width:'130px'}} >Add to cart</button> <button className='text-white bg-success ms-4'style={{border:'none',height:'35px',width:'130px' }}>Buy now</button></p>

			</div>

			<div className='col-lg-3'>
				<h2 className='text-center fw-bold'>ACER</h2>
				<img src={acer}  style={{height:'250px',width:'300px' }} alt='notfount' className='mt-4 mb-4'></img>
				<h5 className='text-center' style={{ color:'blue'}}> Prize:&#8377; 43000</h5>
				<p className='text-center'><button className='text-white bg-warning'style={{ border:'none', height:'35px',width:'130px'}} >Add to cart</button> <button className='text-white bg-success ms-4'style={{border:'none',height:'35px',width:'130px' }}>Buy now</button></p>

			</div>
			
			<div className=' col-lg-3'>
				<h2 className='text-center fw-bold'>APPLE</h2>
				<img src={apple}  style={{height:'250px',width:'300px' }} alt='notfount' className='mt-4 mb-4'></img>
				<h5 className='text-center' style={{ color:'blue'}}> Prize:&#8377; 2,53000</h5>
				<p className='text-center'><button className='text-white bg-warning'style={{ border:'none', height:'35px',width:'130px'}} >Add to cart</button> <button className='text-white bg-success ms-4'style={{border:'none',height:'35px',width:'130px' }}>Buy now</button></p>

			</div>
			</div>
      </div>
    </div>
  )
}

export default HomeSlide
