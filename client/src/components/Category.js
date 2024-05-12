import axios from 'axios'
import React,{useState}from 'react'

const Category = ()=> {
  const initialValues = {category_name:" "}
  const [formValues,setFormvalues] = useState(initialValues)

const handleChange = (e) =>{
const {name,value} = e.target
setFormvalues({...formValues,[name]:value});
console.log(formValues.category_id)
}

const FormCategory = (e)=>{
e.preventDefault();
axios.post("http://localhost:3001/category",{
 feeddata:formValues
 
}).then((response)=>{
 console.log(response);
 alert("Thank you for your category")

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
              <h2 className="text-uppercase text-center mb-5"><b><u>CATEGORY </u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={FormCategory}>

               

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Category_name</b></label>
                  <input type="text" value={formValues.category_name} name='category_name' className="form-control form-control-lg" required onChange={handleChange} />
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

export default Category
