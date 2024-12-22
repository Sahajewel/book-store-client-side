import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
  return (
    <div className='min-h-screen items-center justify-center flex flex-col'>
       <h1 className='text-4xl mb-4'>Opps!</h1>
       <h1 className='text-4xl font-bold mb-4'>{error.status}</h1>
       <p className='text-2xl'>Page {error.statusText}</p>
       <Link to="/" className='bg-gray-400 mt-5 px-4 py-3 text-lg text-white rounded-xl hover:bg-gray-300 duration-300'>Back to Home</Link>
    </div>
  )
}
