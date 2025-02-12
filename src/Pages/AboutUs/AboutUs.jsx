import React from 'react'
import { Helmet } from 'react-helmet'

export default function AboutUs() {
  return (
    <div className='bg-gray-700 flex flex-col justify-center items-center min-h-[calc(100vh-280px)] '>
         <Helmet>
            <title>About Us</title>
        </Helmet>
     <h1 className="text-4xl font-bold mb-4 text-center pt-32 text-white">About Us</h1>
<p className='max-w-[700px] px-10 mx-auto text-white text-lg  pb-20 '>Welcome to Book Library, your one-stop destination for books that inspire, educate, and entertain.

At Book Library, we believe that every book has the power to transform lives. Whether you're an avid reader, a curious learner, or someone looking for a thoughtful gift, our curated collection of Bangla Literature, English Literature, Sports, and Cooking books offers something for everyone.

Our mission is to promote the joy of reading and make quality books accessible to all. We take pride in offering a seamless online shopping experience, supported by fast delivery and exceptional customer service.

Join our community of book lovers and let’s embark on a journey of endless discovery together.

Happy Reading! </p>
    </div>
  )
}
