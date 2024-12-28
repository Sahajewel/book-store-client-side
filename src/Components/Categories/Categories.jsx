import React, { useEffect, useState } from 'react';

import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryPage = () => {
  const [categories, setCategories] = useState([])
  useEffect(()=>{
    fetch("https://assignment-11-server-two-brown.vercel.app/category")
    .then((res)=>res.json())
    .then((result)=>setCategories(result))
  },[])

    return (
        <div className="container mx-auto p-4 bg-gray-500 pb-20 px-10 my-10">
           <h1 className='text-center text-4xl py-10 font-bold text-white'>All Category</h1>
            <div className="mt-4 grid grid-cols-1  lg:grid-cols-4 gap-4 rounded-xl">
               {categories.map((category)=><CategoryCard key={category.id} category={category}></CategoryCard>)}
            </div>
        </div>
    );
};

export default CategoryPage;
