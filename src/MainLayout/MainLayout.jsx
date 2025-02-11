import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from "../Components/Footer/Footer"

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-gradient-to-t to-gray-400 via-slate-500 from-zinc-500'>
        <div className='min-h-[calc(100vh-275.5px)] w-11/12 mx-auto'>
          <Outlet></Outlet>
        </div>
      </div>


      <Footer></Footer>


    </div>
  )
}
