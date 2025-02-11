import React from 'react'
import caro1 from "./banner1.webp"
import caro2 from "./banner2.webp"
import caro3 from "./banner-3.webp"
import { Typewriter } from "react-simple-typewriter";
export default function Slider() {
  return (
    <div>
    <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro1} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
   <div className='text-3xl mb-5 text-stone-400 font-bold pt-3'>
   <Typewriter
        words={["Hello, Learners! Welcome to our Website!"]}
        loop={0} // Set to 0 for infinite loops
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />
   </div>
      <h1 className="mb-5 text-2xl font-bold">Discover Your Next Favorite Book</h1>
      <h2 className="mb-5 text-xl font-bold">Explore a vast collection of Bangla literature, English classics, sports thrillers, and mouthwatering cooking guides. Start your reading journey today!</h2>
      <p className="mb-5">
      Browse Our Collection
      </p>
     
    </div>
  </div>
</div>
  </div>
  <div id="item2" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro2} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
    <div className='text-3xl mb-5 text-green-800 font-bold pt-3'>
   <Typewriter
        words={["Hello, Learners! Welcome to our Website!"]}
        loop={0} // Set to 0 for infinite loops
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />
   </div>
      <h1 className="mb-5 text-2xl font-bold">Where Every Story Begins</h1>
      <h2 className="mb-5 text-xl font-bold">Whether you're into gripping novels, inspiring sports stories, or delicious recipes, we have something for everyone. Dive into your next adventure now.</h2>
      <p className="mb-5">
      xplore Genres


      </p>
    
    </div>
  </div>
</div>
  </div>
  <div id="item3" className="carousel-item w-full">
    <div
  className="hero "
  >
    <img className='h-[500px] w-full' src={caro3} alt="" />
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center bg-gray-500">
    <div className="max-w-md">
    <div className='text-3xl mb-5 text-red-800 font-bold pt-3'>
   <Typewriter
        words={["Hello, Learners! Welcome to our Website!"]}
        loop={0} // Set to 0 for infinite loops
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        
      />
   </div>
   <h1 className="mb-5 text-2xl font-bold">Books That Inspire, Entertain, and Educate</h1>
      <h2 className="mb-5 text-xl font-bold">From timeless Bangla and English literature to exciting sports tales and savory cooking books, find the perfect read to ignite your passion.</h2>
    
     
    </div>
  </div>
</div>
  </div>
 
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>

</div>
 </div>
  )
}
