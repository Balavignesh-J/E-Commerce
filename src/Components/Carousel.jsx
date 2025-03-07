import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import slide1 from '../Img/slide1.jpg'
import slide2 from '../Img/slide2.jpg'
import slide3 from '../Img/slide3.jpg'
import slide4 from '../Img/slide4.jpg'
import slide5 from '../Img/slide5.jpg'

const Carousel = () => {
  const img = [
    {url: slide1,key: "laptop"},
    {url: slide2,key: "decoration"},
    {url: slide3,key: "skincare"},
    {url: slide4,key: "grocery"},
    {url: slide5,key: "grocery"}
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

  const previous = ()=> setcurrentindex((prev)=> ((prev === 0) ? img.length-1 : prev - 1))
  const next = ()=> setcurrentindex((prev)=> ((prev === img.length-1) ? 0 : prev + 1))

  return (
    <div className='w-full h-[500px] mx-auto my-5 overflow-hidden rounded-xl shadow-lg'>
      <div style={slidestyles} className='h-full relative'>
          <button 
            onClick={previous} 
            className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center'>
            {"<"}
          </button>
          <button 
            onClick={next} 
            className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl bg-black/30 hover:bg-black/50 rounded-full w-12 h-12 flex items-center justify-center'>
            {">"}
          </button>
          <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
            {img.map((_, index) => (
              <button
                key={index}
                onClick={() => setcurrentindex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentindex ? "bg-blue-600 scale-110" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
          <Link to={`/search?q=${encodeURIComponent(img[currentindex].key)}`}>
            <button className="absolute bottom-4 left-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 py-2 px-5 rounded-lg shadow-lg">
              Buy Now
            </button>
          </Link>
       </div>
    </div>
  )
}

export default Carousel
