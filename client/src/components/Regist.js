import axios from 'axios'
import React,{useState} from 'react'

const Regist = ()=> {
  const initialValues = {fname:"", lname:"" , dob:"",gender:"", address:"", pincode:"", email:"",password:"",mobile_no:""}
  const [formValues,setFormvalues] = useState(initialValues)

const handleChange = (e) =>{
const {name,value} = e.target
setFormvalues({...formValues,[name]:value});
console.log(formValues.gender)
}

const FormRegist = (e)=>{
e.preventDefault();
axios.post("http://localhost:3001/regist",{
 feeddata:formValues
 
}).then((response)=>{
 console.log(response);
 alert("Thank you for your Registration")

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
              <h2 className="text-uppercase text-center mb-5"><b><u>REGISTRATION</u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={FormRegist}>

                

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Fname</b></label>
                  <input type="text" value={formValues.fname} name='fname' className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Lname</b></label>
                  <input type="text" value={formValues.lname} name='lname' className="form-control form-control-lg"  onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>DOB</b></label>
                  <input type="date" value={formValues.dob} name='dob' className="form-control form-control-lg" onChange={handleChange} required/>
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Gender</b></label><br></br>
                 Male <input type="radio" value="male" checked={formValues.gender === 'male'}  name='gender' className="form-check-input" onChange={handleChange} />
				         Female <input type="radio" value="female" checked={formValues.gender === 'female'}  name='gender' className="form-check-input" onChange={handleChange} />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Address</b></label>
                  <textarea  name='address' defaultValue= {formValues.address}  className="form-control form-control-lg" onChange={handleChange} required>
               
                    </textarea>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label"><b>Pincode</b></label>
                  <input type="number" value={formValues.pincode} name='pincode'  className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Email</b></label>
                  <input type="email" value={formValues.email} name='email'  className="form-control form-control-lg" onChange={handleChange} required />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Password</b></label>
                  <input type="number" value={formValues.password} name='password' className="form-control form-control-lg" onChange={handleChange} required  />
                </div>

				<div className="form-outline mb-4">
                <label className="form-label" ><b>Mobile_no</b></label>
                  <input type="number" value={formValues.mobile_no} name='mobile_no'  className="form-control form-control-lg" onChange={handleChange} required />
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

export default Regist
