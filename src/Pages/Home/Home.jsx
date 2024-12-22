import React from 'react'
import Slider from '../../Components/Slider/Slider'
import CategoryPage from '../../Components/Categories/Categories'
import BookStore from '../../Components/BookStore/BookStore'



export default function Home() {
  return (
    <div className='w-10/12 mx-auto'>
      <Slider></Slider>
   <CategoryPage></CategoryPage>
   <BookStore></BookStore>
    </div>
  )
}
