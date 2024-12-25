import React from 'react'
import Slider from '../../Components/Slider/Slider'
import CategoryPage from '../../Components/Categories/Categories'
import BookStore from '../../Components/BookStore/BookStore'
import { Helmet } from 'react-helmet'
// import CategoryCards from '../../Components/Test/Test'
// import NewCategory from '../../Components/NewCategory/NewCategory'



export default function Home() {
  return (
    <div className='w-10/12 mx-auto'>
       <Helmet>
            <title>Home</title>
        </Helmet>
      <Slider></Slider>
      {/* <CategoryCards></CategoryCards> */}
   <CategoryPage></CategoryPage>
   <BookStore></BookStore>
   {/* <NewCategory></NewCategory> */}
    </div>
  )
}
