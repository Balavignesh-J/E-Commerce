import React from 'react'
import { useParams } from 'react-router-dom'

const Single_Product = () => {
  const {id} = useParams()
  console.log(id);
  
  return (
    <>
    <div>Single_Product</div>
    </>
  )
}

export default Single_Product