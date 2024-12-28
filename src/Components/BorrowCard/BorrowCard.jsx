import axios from 'axios';
import React, { useState } from 'react'
import { Helmet } from "react-helmet";
import Swal from 'sweetalert2';
export default function BorrowCard({borrow,borrowed,setBorrowed}) {
  console.log(borrow)

  const handleDelete=(id)=>{
 
    fetch(`https://assignment-11-server-two-brown.vercel.app/borrowed-books/${id}`,{
      method: "DELETE"
    })
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result)
     
      const remaining = borrowed.filter((delet)=>delet._id !=id)
      setBorrowed(remaining)
      console.log(deleted)
    })
      Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Returned Book",
                showConfirmButton: false,
                timer: 1500
              });
    
  }
  return (
    <div className='text-white text-lg bg-zinc-700 p-10 text-center rounded-3xl'>
        <Helmet>
            <title>Borrowed-Books</title>
        </Helmet>
        
      <img className='w-40 h-52 mx-auto' src={borrow.image} alt="" />
      <p className='py-3'>Book Name: {borrow.bookName}</p>
      <p>Category: {borrow.category}</p>
      <p className='py-3'>Borrow Date: {borrow.borrowDate}</p>
      <p>Returning Date: {borrow.returnDate}</p>
      <div className='w-full mt-3'>
      <button onClick={()=>handleDelete(borrow._id)} className='btn w-full text-lg'>Return</button>
      </div>
    </div>
  )
}

