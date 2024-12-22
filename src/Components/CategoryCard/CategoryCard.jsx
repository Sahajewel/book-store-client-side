import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function CategoryCard({category}) {
    const navigate = useNavigate()
    console.log(category)
  return (
    <div className='bg-zinc-500 text-center text-white p-5'>
     <h1 className='text-xl font-bold '> {category.name}</h1>
      <div className=''>
        {category.subcategories.map((sub)=><div className='hover:underline pb-2 pt-2'><Link onClick={()=>{navigate(`/books`)}}>{sub}</Link></div>)}
      </div>
    </div>
  )
}
