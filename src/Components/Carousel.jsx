import React, { useState } from 'react'
import Products from './Products'
import slide1 from '../Img/slide1.jpg'
import slide2 from '../Img/slide2.jpg'
import slide3 from '../Img/slide3.jpg'
import slide4 from '../Img/slide4.jpg'
import slide5 from '../Img/slide5.jpg'

const Carousel = () => {
  const img = [
    {url: slide1},
    {url: slide2},
    {url: slide3},
    {url: slide4},
    {url: slide5}
  ]
  
  const [currentindex ,setcurrentindex] = useState(0)
  const slidestyles = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${img[currentindex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "background-image 0.5s ease-in-out"
  }

  const previous = ()=>{
      setcurrentindex((prev)=> ((prev === 0) ? img.length-1 : prev - 1))
  }

  const next = ()=>{
    setcurrentindex((prev)=> ((prev === img.length-1) ? 0 : prev + 1))
  }

  
  return (
    <div className='h-100 w-full mx-auto my-5'>
      <div style={slidestyles} className='h-full relative'>
        <button onClick={previous} className='rounded-l-lg absolute left-0 top-1/2 transform -translate-y-1/2 text-neutral-500 text-6xl hover:bg-sky-200/50 hover:text-slate-700 w-14 h-14 flex items-center justify-center leading-none'>{"<"}</button>
        <button onClick={next} className='rounded-r-lg absolute right-0 top-1/2 transform -translate-y-1/2 text-neutral-500 text-6xl hover:bg-sky-200/50 hover:text-slate-700 w-14 h-14 flex items-center justify-center leading-none'>{">"}</button>
        <div className="flex gap-3 absolute bottom-2 left-1/2 transform -translate-x-1/2">
          {img.map((_, index) => (
            <button
              key={index}
              onClick={() => setcurrentindex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentindex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Carousel