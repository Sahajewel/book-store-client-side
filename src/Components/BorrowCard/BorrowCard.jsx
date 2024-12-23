import React from 'react'
import { Helmet } from "react-helmet";
export default function BorrowCard({borrow}) {
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
      <button className='btn w-full text-lg'>Return</button>
      </div>
    </div>
  )
}

