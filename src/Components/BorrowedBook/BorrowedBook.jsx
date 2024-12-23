import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BorrowCard from '../BorrowCard/BorrowCard'

export default function BorrowedBook() {
    const [borrowed, setBorrowed] = useState([])
  
   useEffect(()=>{
      axios.get("http://localhost:5000/borrowed-books")
    .then((result)=>setBorrowed(result.data))
   },[])
  return (
    <div className='grid justify-center  gap-6 pt-10 w-10/12 mx-auto xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
     {
        borrowed.map(borrow=><BorrowCard key={borrow._id} borrow={borrow}></BorrowCard>)
     }
    </div>
  )
}
