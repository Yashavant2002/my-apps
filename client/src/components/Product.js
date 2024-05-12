import axios from 'axios'
import React,{useEffect, useState} from 'react'

  const Product = () => {

    const [Catlist,setCatList] = useState([])
    //const utype=localStorage.getItem('log')

    useEffect(()=>{
      getCategory();
    },[]);

    const getCategory = async() => {
      const result = await axios.get("http://localhost:3001/viewcategory");
      setCatList(result.data);
      console.log(result.data)
    };
  
    const initialValues = {category:" ",product_name:" ",qty:" ",uom:" ",price:" ",stock:" ",description:""}
    const [formValues,setFormvalues] = useState(initialValues)
    const [file,setFile] = useState("")
  
  const handleChange = (e) =>{
  const {name,value} = e.target
  setFormvalues({...formValues,[name]:value});
  console.log(formValues.category)
  }

  const setImgFile =(e) =>
  {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }
  
  const FormProduct = (e)=>{
  e.preventDefault();
  var formData = new FormData();
  formData.append("file",file)
  formData.append("category",formValues.category)
  formData.append("product_name",formValues.product_name)
  formData.append("qty",formValues.qty)
  formData.append("uom",formValues.uom)
  formData.append("price",formValues.price)
  formData.append("stock",formValues.stock)
  formData.append("description",formValues.description)
  console.log(...formData)
  const config = {
    headers:
    {
      "Content-type":"multipart/form-data"
    }
  }
  axios.post("http://localhost:3001/product",
  formData,config
   

  ).then((response)=>{
   console.log(response);
   alert("Thank you for your product")
  
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
              <h2 className="text-uppercase text-center mb-5"><b><u>PRODUCT </u></b></h2>
              <hr style={{marginTop:'10px'}}></hr>

              <form onSubmit={FormProduct}>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Category</b></label>
                  <select type="text" defaultvalue={formValues.category} name='category'
                   className="form-control form-control-lg" required onChange={handleChange} >

                    <option>--select category--</option>
                    {
                      Catlist.map((cat,index)=>{
                        return(
                          <option key = {cat.id} value={cat.category_name}>{cat.category_name}</option>
                        )
                      })
                    }
                    </select>
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" ><b>Product_name</b></label>
                  <input type="text" value={formValues.product_name}name='product_name' className="form-control form-control-lg" required onChange={handleChange} />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Quantity</b></label>
                  <input type="number" value={formValues.qty} name='qty' className="form-control form-control-lg" required onChange={handleChange} />
                </div>
                
                <div className="form-outline mb-4">
                <label className="form-label" ><b>Uom</b></label>
                  <input type="text" value={formValues.uom} name='uom' className="form-control form-control-lg" required onChange={handleChange}/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Price</b></label>
                  <input type="number" value={formValues.price} name='price' className="form-control form-control-lg" required onChange={handleChange}/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Stock</b></label>
                  <input type="number" value={formValues.stock} name='stock' className="form-control form-control-lg" required onChange={handleChange} />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Image</b></label>
                  <input type="file"  name='file' className="form-control form-control-lg" required onChange={setImgFile}/>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" ><b>Description</b></label>
                  <input type="text" value={formValues.description} name='description' className="form-control form-control-lg" required onChange={handleChange}/>
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

export default Product
