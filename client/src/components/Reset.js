import axios from 'axios'
import React,{useState} from 'react'

const uid=localStorage.getItem('user')
const Reset = () => {
    const[newpass,setNewpass]=useState('')
    const[confirmpass,setConfirmpass]=useState('')
  

    const handleChange = (e) =>{
        //const {name,value}= e.target
        setNewpass(e.target.value);  
    }

    const ResethandleChange = (e) =>{
      //const {name,value}= e.target
      setConfirmpass(e.target.value);  
  }

    const ResetFormSubmit=(e)=>{
        e.preventDefault();
        if(newpass===confirmpass)
        {
        axios.post("http://localhost:3001/resetpass",{
         newpass:newpass,
         confirmpass:confirmpass,
         uid:uid
        
        }).then((response)=>{
          window.location="http://localhost:3000/log/"
          //console.log(response);
         
        }) 
        .catch(error => {
          console.log(error)
      }) 

       }

       else
       {
         alert("New password and confirm password must be same")
       }
    
      }
    
  return (
    <div>
       <div className="container pt-5">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div className='card'  style={{width:'50%'}}>
                    <div id="login-box" className="col-md-12">
                        <form onSubmit={ResetFormSubmit} id="login-form" className="form">
                            <div className='card-header' >
                            <h3 className="text-center mt-3">Reset Password</h3>
                            </div>
                            <div className='card-body'>
                            <div className="form-group ms-4 mt-4" style={{display:"flex"}}>
                                <label for="username" className='mt-1'>New Password:</label><br/>
                                <input type="text" value={newpass} name='newpass' required onChange={handleChange} className="form-control w-50 ms-2"/>
                            </div>
                            <div className="form-group mt-4" style={{display:"flex"}}>
                                <label for="password" className='mt-1'>Confirm Password  :</label><br/>
                                <input type="text" value={confirmpass} name="confirmpass"  className="form-control w-50 ms-1" onChange={ResethandleChange} required/>
                            </div>
                            </div>
                            <div className="form-group text-center mt-3 mb-3">
                            <input type="submit" name="submit" className="btn btn-outline-success btn-md" value="Reset Password"/>
                            </div>
                            
                        </form>
                    </div>
                </div>
            
        </div>
        </div>
    </div>
  )
}

export default Reset
