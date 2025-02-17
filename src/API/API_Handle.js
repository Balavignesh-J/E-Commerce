const API_Handle = async()=>{
    const URL = "https://dummyjson.com/products"

    const response = await fetch(URL)
    const data = await response.json()
    return (data)
}

export default API_Handle;

export const Single_API_Handle = async(id)=>{
    const URL = `https://dummyjson.com/products/${id}`

    const response = await fetch(URL)
    const data = await response.json()
    return (data)
}
