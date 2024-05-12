import React from 'react'
import about from "../Assets/bag.jpeg"

function Abaut() {
  return (
    <div>
        <div className="container-fluid mt-4">
			<div className="row">
				<div className="col-lg-6 ms-4" style={{backgroundColor:'white',boxShadow:'1px 3px 5px 5px lightgray'}}>
					
					<h1 style={{marginLeft:'20px'}}>ABOUT</h1>
					<hr/>
					<p class="" style={{textAlign:'justify',marginLeft:'20px'}}>Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones. An online shop evokes the physical analogy of buying products or services at a regular "bricks-and-mortar" retailer or shopping center; the process is called  to buy from another businesses, the process is called business-to-business (B2B) online shopping. A typical online store enables the customer to browse the firm's range of products and services, view photos or images of the products, along with information about the product specifications, features and prices.</p>
					
				
                </div>

				<div class="col-lg-5  ">
                <img src={about} width={600} height={450}  alt='about'/> 
				</div>
			</div>
		</div>
      
    </div>
  )
}

export default Abaut
