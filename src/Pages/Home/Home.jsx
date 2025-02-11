import React from 'react'
import Slider from '../../Components/Slider/Slider'
import CategoryPage from '../../Components/Categories/Categories'
import BookStore from '../../Components/BookStore/BookStore'
import { Helmet } from 'react-helmet'
import Newsletter from '../../Components/Newsletter/Newsletter'




export default function Home() {
  return (
    <div className='w-10/12 mx-auto'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>
      <CategoryPage></CategoryPage>
      <BookStore></BookStore>
      <Newsletter></Newsletter>
    </div>
  )
}
