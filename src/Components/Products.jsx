import React, { useEffect, useState } from "react";
import API_Handle,{Category, Category_data} from "../API/API_Handle";
import { Link } from "react-router-dom";

const Products = () => {
  const [Productsdata, setProductsdata] = useState([]);
  const [category, setCategory] = useState([]);
  
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetch_products = async () => {
      try{
        const api_data = await API_Handle();
        setProductsdata(api_data.products);
      }
      catch(err){
        seterror(err.message);
      }
      finally{
        setloading(false);
      }
    };
    fetch_products();
    const fetch_category = async () => {
      try{
        const api_data = await Category();
        setCategory(api_data);
      }
      catch(err){
        seterror(err.message);
      }
      finally{
        setloading(false);
      }
    };
    fetch_category();
  }, []);

  const all_products = async () => {
    try{
      const api_data = await API_Handle();
      setProductsdata(api_data.products);
    }
    catch(err){
      seterror(err.message);
    }
    finally{
      setloading(false);
    }
  }

  const category_filter = async(name)=>{
    try{
      const api_data = await Category_data(name);
      setProductsdata(api_data.products);
    }
    catch(err){
      seterror(err.message);
    }
    finally{
      setloading(false);
    }
  }

  return (
    <>
      <h1 className="mt-14 ml-1 mb-5 text-4xl">Products</h1>
      {loading && 
      <div className="spinner w-40 h-40 rounded-full mx-auto mt-20"></div>
      }

      {!loading && !error && 
      <div>
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden custom-scrollbar my-6 pb-2 mx-2">
          {category.length > 0 && <button className="bg-blue-200 cursor-pointer w-4xl h-8 border border-blue-600 rounded-b-2xl rounded-t-sm text-nowrap px-2 text-center" onClick={all_products}>All Products</button>}
          {category.map((Element,index)=>(
            <button onClick={()=>(category_filter(Element))} className="bg-blue-200 cursor-pointer w-4xl h-8 border border-blue-600 rounded-b-2xl rounded-t-sm text-nowrap px-2 text-center" key={index}>{Element}</button>
          ))}  
        </div>
        <div className="flex flex-wrap justify-start gap-2 mx-8 my-6">
          {Productsdata.map((product) => (
            <div
              className="flex flex-col justify-center mb-6 items-center w-50 h-auto border border-blue-800 relative"
              key={product.id}
            >
              <Link to={`/${product.id}`}>
                <img src={product.thumbnail} alt="img" className="w-40 h-40" />
              </Link>
              <div>
                <h3 className="font-bold">{product.title}</h3>
                <p>
                  ${product.price}
                  <span className="bg-red-600 text-white w-20 rounded-3xl ml-3 absolute top-8 right-0 rotate-45 text-center">         
                    <s>${product.discountPercentage}</s>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
      {error &&
        <h1 className="bg-red-500 text-white w-80 text-center text-4xl mx-auto p-1">{error}</h1>
      }
    </>
  );
};

export default Products;