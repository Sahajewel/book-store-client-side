// import Lottie from "lottie-react";
// import LoginJson from "./login.json"
import React from 'react';
import UseAuth from "../../Components/UseAuth/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
export default function Login() {
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const {signInUser,handleGoogleProvider} = UseAuth()
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email= form.email.value
        const password= form.password.value
        form.reset()
        console.log(email,password)
        signInUser(email, password)
        .then((result)=>{
            console.log(result.user)
            navigate(location?.state?location.state:"/")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleGoogle=()=>{
        handleGoogleProvider()
        .then((result)=>{
            console.log(result.user)
           
            toast.success("Succefully registered by google",{
                position:"top-right",
                duration: 3000,
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: '#713200',
                  },
                  
            })
            navigate(location?.state? location.state: "/")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className="md:flex items-center justify-center flex-row-reverse ">
        <Toaster></Toaster>
       <div className="flex-1">
       {/* <Lottie animationData={LoginJson}></Lottie> */}
        </div>
       <form onSubmit={handleLogin} className="card-body flex-1">
        <div>
            <h1 className="lg:text-4xl font-bold text-white">Login Now</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-white text-lg">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="p-4 rounded-lg bg-black text-white text-lg border border-purple-500">Login</button>
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-center border border-purple-500 p-4 bg-black rounded-lg  text-white">
            <button  onClick={handleGoogle}>Sign In With Google</button>
        </div>
        <div>
            <p className="text-center">Don't you have an account? please <Link className="text-red-400" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  )
}
