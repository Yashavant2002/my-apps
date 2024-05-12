import axios from 'axios'
import React, { useState } from 'react'

const  Payment = ()=> {
     const initialValues = {order_id:" ",order_amount:" ",payment_date:" ",user_id:" ",transaction_no:" "}
     const [formValues,setFormvalues] = useState(initialValues)

  const handleChange = (e) =>{
  const {name,value} = e.target
  setFormvalues({...formValues,[name]:value});
  console.log(formValues.user_id)
}


const FormPayment = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/Payment",{
    feeddata:formValues

  }).then((response)=>{
    console.log(response);
    alert("Thank you for your payment")

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
          <div className="card" style={{borderRadius: "15px",backgroundColor:"lightblue"}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5"><b><u>PAYMENT</u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={FormPayment}>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Order_id</b></label>
                  <input type="text" value={formValues.order_id} name='order_id' className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Order_amount</b></label>
                  <input type="number" value={formValues.order_amount} name='order_amount' className="form-control form-control-lg" onChange={handleChange}  required/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Payment date</b></label>
                  <input type="date" value={formValues.payment_date} name='payment_date'  className="form-control form-control-lg" onChange={handleChange} required />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>User_id</b></label>
                  <input type="text" value={formValues.user_id} name='user_id' className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Transaction_no</b></label>
                  <input type="text" value={formValues.transaction_no} name='transaction_no' className="form-control form-control-lg" onChange={handleChange} required />
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

export default Payment
