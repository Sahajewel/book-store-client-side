import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <footer className="footer footer-center  text-base-content rounded p-10 bg-gradient-to-l via-slate-600 to-gray-600 from-slate-600">

      <nav className="grid grid-flow-col gap-4">
        <Link to="/aboutUs" className="link link-hover text-white">About us</Link>
        <Link to="/contactUs" className="link link-hover text-white">Contact us</Link>
        {/* <Link to="/aboutUs" className="link link-hover">About us</Link> */}


      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href='https://x.com/sahaJewelkumar'>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path d="M22.96 2h-3.77L12.41 9.6 7.58 2H1.04L9.14 14.12 1.04 22h3.77l6.77-7.92L17.78 22h6.18L15.9 9.6 22.96 2z"></path>
            </svg>
          </a>
          <a href='https://www.youtube.com/@sahajewelkumar'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href='https://www.facebook.com/sahajewelkumar'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Book Library Ltd. Developed by <a href="https://sahajewel.com" className='hover:text-gray-300' target='_blank'>Saha Jewel</a></p>
      </aside>
    </footer>
  )
}

