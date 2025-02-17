import React, { useState } from 'react'
import Products from './Products'

const Carousel = () => {
  const img = [
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"},
    {url: "https://picsum.photos/300/200"}
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
    <div className='h-100 w-7xl mx-auto my-5'>
      <div style={slidestyles} className='flex justify-between items-center'>
        <button onClick={previous} className='text-neutral-500 text-6xl h-full hover:bg-sky-200/25 hover:text-neutral-950'>{"<"}</button>
        <button onClick={next} className='text-neutral-500 text-6xl h-full hover:bg-sky-200/25 hover:text-neutral-950'>{">"}</button>
      </div>
      <Products />
    </div>
  )
}

export default Carousel