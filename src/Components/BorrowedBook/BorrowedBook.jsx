import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BorrowCard from '../BorrowCard/BorrowCard'

export default function BorrowedBook() {
    const [borrowed, setBorrowed] = useState([])
  
   useEffect(()=>{
      axios.get("http://localhost:5000/borrowed-books",{
        withCredentials:true
      })
    .then((result)=>setBorrowed(result.data))
   },[])


  return (
    <div>
    <h1 className='text-center text-white font-bold text-4xl pt-36 pb-12'>Borrowed-Books</h1>
    <div className='grid justify-center  gap-6 pt-10 w-10/12 mx-auto xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20'>
       
     {
        borrowed.map(borrow=><BorrowCard key={borrow._id} setBorrowed={setBorrowed} borrowed={borrowed} borrow={borrow}></BorrowCard>)
     }
    </div>
    </div>
  )
}
