import axios from 'axios'
import React, { useState } from 'react'


 const Feedback=()=>{
     const initialValues = {user_id:" ",pid:"" ,about_product:"",about_service:"", suggestion:""}
     const [formValues,setFormvalues] = useState(initialValues)

   const handleChange = (e) =>{
   const {name,value} = e.target
   setFormvalues({...formValues,[name]:value});
   console.log(formValues.user_id)
 }

 const FormFeedback = (e)=>{
  e.preventDefault();
  axios.post("http://localhost:3001/feedback",{
    feeddata:formValues
    
  }).then((response)=>{
    console.log(response);
    alert("Thank you for your feedback")
  
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
              <h2 className="text-uppercase text-center mb-5"><b><u>FEEDBACK</u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={FormFeedback}>

                

                <div className="form-outline mb-4">
                  <label className="form-label"><b>User_id</b></label>
                  <input type="text" value={formValues.user_id} name='user_id'  className="form-control form-control-lg" onChange={handleChange} required/>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label"><b>PID</b></label>
                  <input type="number" value={formValues.pid} name='pid' className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label"><b>About_poduct</b></label>
                  <input type="text" value={formValues.about_product} name='about_product'  className="form-control form-control-lg" onChange={handleChange} required />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label"><b>About_service</b></label>
                  <input type="text" value={formValues.about_service} name='about_service'  className="form-control form-control-lg" onChange={handleChange} required />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label"><b>Suggestion</b></label>
                  <input type="text" value={formValues.suggestion} name='suggestion'  className="form-control form-control-lg" onChange={handleChange} required />
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

export default Feedback
