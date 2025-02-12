import Lottie from "lottie-react";
import LoginJson from "./LoginJson.json"
import React from 'react';
import UseAuth from "../../Components/UseAuth/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {  toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
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
              Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Login",
                        showConfirmButton: false,
                        timer: 1500
                      });
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
           
             Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: "Successfully Login by gmail",
                       showConfirmButton: false,
                       timer: 1500
                     });
            navigate(location?.state? location.state: "/")
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className="md:flex w-11/12 mx-auto items-center justify-center flex-row-reverse ">
       <Helmet>
            <title>Login</title>
        </Helmet>
        <ToastContainer></ToastContainer>
       <div className="flex-1">
       <Lottie animationData={LoginJson}></Lottie>
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
          <button className="p-4 rounded-lg bg-gray-500 text-white text-lg border border-gray-600">Login</button>
        </div>
        <div className="divider text-white">OR</div>
        <div className="flex justify-center border border-gray-600 p-4 bg-gray-500 rounded-lg  text-white">
            <button  onClick={handleGoogle}>Sign In With Google</button>
        </div>
        <div>
            <p className="text-center text-white">Don't you have an account? please <Link className="text-red-500" to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  )
}
