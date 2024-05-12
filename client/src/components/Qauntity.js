import React,{useState}from 'react'
import axios from "axios"
import {useParams} from 'react-router-dom'

let uid = localStorage.getItem('user');
const Quantity = ()=>{
  const{id}= useParams();
  console.log("Item Id:" +id)
  const [qty,setQty] = useState(1)

  const handleChange = (e)=>{
    setQty(e.target.value);
    console.log(e.target.value);
  }

  const SendQty = (e)=>{
   e.preventDefault();
   axios.post(`http://localhost:3001/buy/${id}`,{
    qty:qty,
    id:id,
    uid:uid
   }).then((response)=>{
    console.log(response);
    alert("Order has been placed successfully")
    window.location="http://localhost:3000/userhome"
   })
   .catch(error =>{
    console.log(error)
   })
  }




  return (
    <div>
       <section className="vh-100 ">
  <div className="mask d-flex align-items-center h-100">
    <div className="container h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6 mt-5 mb-5">
          <div className="card" style={{borderRadius: "15px",backgroundColor:"aqua"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b><u>Quantity </u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={SendQty}>

               

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Quantity</b></label>
                  <input type="number" min={1} value={qty} name='qty'  className="form-control form-control-lg" required onChange={handleChange} />
                </div>

        
                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-primary" style={{border:'none'}}>Submit</button>
                </div>

                

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
  }

export default Quantity
