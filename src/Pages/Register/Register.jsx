// import Lottie from "lottie-react";
// import RegisterJson from "./register.json"
import React from 'react';
import UseAuth from "../../Components/UseAuth/UseAuth";
import toast, { Toaster } from "react-hot-toast";
// import "../../Styles/Styles.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
export default function Register() {
    const location = useLocation()
    const navigate = useNavigate()
    const {creatUser, handleGoogleProvider} = UseAuth()
    const handleRegister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        form.reset()
        creatUser(email,password)
        .then((result)=>{
            console.log(result)
            toast.success("Succefully create a account",{
                position:"top-right",
                duration: 3000,
                style: {
                    border: '1px sol"id" #713200',
                    padding: '16px',
                    color: '#713200',
                  },
            })
            navigate(location?.state? location.state: "/")
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
                    border: '1px sol"id" #713200',
                    padding: '16px',
                    color: '#713200',
                  },
                  
            })
            navigate(location?.state? location.state: "/")
        })
        .catch((err)=>console.log(err))
    }
  return (

     <div className="md:flex items-center justify-center flex-row-reverse text-black">
        <Toaster></Toaster>
       <div className="flex-1">
       {/* <Lottie animationData={RegisterJson}></Lottie> */}
        </div>
       <form onSubmit={handleRegister} className="card-body flex-1">
        <div>
            <h1 className="lg:text-4xl font-bold text-white">Register Now</h1>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-lg">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg text-white">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="border border-purple-500 bg-black p-4 text-white text-lg">Register</button>
        </div>
        <div className="divider">OR</div>
        <div className="flex justify-center border p-4 bg-black rounded-lg text-white  border-purple-500">
            <button  onClick={handleGoogle}>Sign In With Google</button>
        </div>
        <div>
            <p className="text-center">Do you have an account already? please <Link className="text-red-400" to="/login">Login</Link></p>
        </div>
      </form>
    </div>

  )
}
