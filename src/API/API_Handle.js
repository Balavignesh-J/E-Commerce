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

export const Category = async()=>{
    const URL = `https://dummyjson.com/products/category-list`

    const response = await fetch(URL)
    const data = await response.json()
    return (data)
}

export const Category_data = async(name)=>{
    const URL = `https://dummyjson.com/products/category/${name}`

    const response = await fetch(URL)
    const data = await response.json()
    return (data)
}

export const search_data = async(name)=>{
    const URL = `https://dummyjson.com/products/search?q=${name}`

    const response = await fetch(URL)
    const data = await response.json()
    return (data)
}
