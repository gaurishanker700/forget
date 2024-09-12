import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [formData,setFormData]=useState({
        email:'',
        password:'',

    })
    const handleLogin =async (e)=>{
        e.preventDefault()
        try {
            const result = (await axios.post("http://localhost:4000/users/login",formData)).data
            console.log(result)
            localStorage.setItem('token',result.token)
            window.location.href = '/'

            
        } catch (error) {
            console.log("login error",error)
            
        }
    }
   



    console.log(formData)
  return (
    <>
    <h1>Login</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}} />
  </div>
  
  <button  onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
  <Link to="/forget"> forget password</Link>
</form>

      
    </>
  )
}

export default Login
