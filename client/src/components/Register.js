import React from 'react'

function Register() {
  return (
    <div>

<div className="container mt-2 bg-light">
		<div className="row">
			<div className="card">
				<div className="card-header mt-3 w-100">
			<div className="col-lg-12">
				<h2 className="bg-primary p-3 text-white">CREATE AN ACCOUNT</h2>
			</div>
			<div className="card-body">
				<label>Name</label>
				<input type="text" name="l1" placeholder="Enter Your Name" class="form-control w-50"/>
				<p className="mt-3">Gender  male<input type="radio" name="l1"/>female<input type="radio" name="j1"/></p>
				<label>City</label>
				<p><select className="w-50 p-1" style={{borderRadius:'7px',border:'1px solid silver'}}>
					<option value="">---Select City--- </option>
					<option value="bhatkal"> Bhatkal</option>
					<option value="hubli">Hubi</option>
				</select></p>
				<label>Address</label>
				<input type="text" name="m1" placeholder="Enter Your Address" className="form-control w-50"/>
				<label className="mt-2">Email</label>
				<input type="email" name="n1" placeholder="Enter Your Email" className="form-control w-50"/>
				<label className="mt-2">Password</label>
				<input type="m1" name="b1" placeholder="Enter Your Password" className="form-control w-50"/>
				<label className="mt-2">Mobile No</label>
				<input type="text" name="c1" placeholder="Enter Your Number" className="form-control w-50"/>
				<input type="submit" name="l1" placeholder="Submit" className="form-control w-50 text-center text-white bg-primary mt-3"/>


			</div>
		</div>
	</div>
</div>
</div>

      
    </div>
  )
}

export default Register
