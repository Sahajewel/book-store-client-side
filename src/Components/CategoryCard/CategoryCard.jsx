import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CategoryCard({category}) {
    const navigate = useNavigate()
    console.log(category)
  return (
    <div className='bg-gray-600 rounded-xl text-center text-white p-5'>
     <h1 className='text-xl font-bold '> {category.name}</h1>
      <div className=''>
        {category.subcategories.map((sub,idx)=><div className='hover:underline pb-2 pt-2' key={idx}><Link to={`/books/${category.name.split(" ").join("_").toLowerCase()}_${sub.split(" ").join("_").toLowerCase()}`}>{sub}</Link></div>)}
      </div>
    </div>
  )
}
