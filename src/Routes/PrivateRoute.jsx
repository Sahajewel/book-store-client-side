import React from 'react'
import UseAuth from '../Components/UseAuth/UseAuth'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({children}) {
    const location = useLocation()
    console.log(location)
    const {user, loading} = UseAuth()
    if(loading){
        return (
            <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-ring loading-lg "></span>
            </div>
        )
    }
    if(user){
       return children
    }
   
  return <Navigate to="/login" state={location.pathname}></Navigate>
}
