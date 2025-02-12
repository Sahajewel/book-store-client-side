import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UseAuth from '../UseAuth/UseAuth'

import logo from "./logo.jpg"
import ThemeToggle from '../DarkLightMode/DarkLightMode';

export default function Navbar() {
  const { user, Logout } = UseAuth();
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
  
    const handleScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScrolled);
    return()=>{
      window.removeEventListener("scroll", handleScrolled)
    }
  }, [])
  const handleLogout = () => {
    Logout()
      .then((result) => {
        console.log(result.user)
      })
      .catch((err) => {
        console.log(err)
      })
  }
 
  const links = <>
    <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/">Home</NavLink>
    <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/all-books">All Books</NavLink>
    {
      user? <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/add-book">Add Book</NavLink> : ""
    }
    {
      user ? <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/borrowed-books">Borrowed Books</NavLink> : ""
    }
     <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/aboutUs">About Us</NavLink>
     <NavLink className="btn mr-3 xs:mb-5 lg:mb-0" to="/contactUs">Contact Us</NavLink>


  </>
  return (
    <div className={`duration-300 fixed w-full z-10 ${scrolled? "bg-gray-600 shadow-lg" : 'bg-gradient-to-l from-slate-500 via-slate-400 to-gray-500'}`}>
      <div className="navbar   md:w-10/12 mx-auto md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
         <a href="/"> <img  className='w-20 rounded-full h-20' src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        
        <div className="navbar-end  ">
        <ThemeToggle></ThemeToggle>
          {
            user && user ? <div className='flex justify-center items-center group relative'>
              <img className='w-16 rounded-full mr-4 ' src={user?.photoURL} alt="" />
              <div className='bg-gray-800 p-5 rounded-xl hidden absolute group-hover:block top-12 z-20'>
                <p className='text-white mb-2 text-lg'>{user?.displayName}</p>
                <button className='btn text-gray-500 text-lg' onClick={handleLogout}>Logout</button>
              </div>
            </div>
              :
              <div className='sm:flex sm:flex-col gap-4 md:flex-none md:flex-row md:gap-0'>
                <Link className='mr-4 btn text-gray-500 text-lg' to="/login">Login</Link>
                <Link className='text-gray-500 text-lg btn' to="/register">Register</Link>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
