import React, { useEffect, useState } from "react";
import API_Handle from "../API/API_Handle";
import { Link } from "react-router-dom";

const Products = () => {
  const [Productsdata, setProductsdata] = useState([]);

  useEffect(() => {
    const fetch_products = async () => {
      const api_data = await API_Handle();
      setProductsdata(api_data.products);
    };
    fetch_products();
  }, []);

  return (
    <>
      <h1 className="mt-14 ml-1 mb-5 text-4xl">Products</h1>
      <div className="flex flex-wrap justify-start gap-2 mx-8">
        {Productsdata.map((product) => (
          <div
            className="flex flex-col justify-center items-center w-50 h-auto border border-blue-800"
            key={product.id}
          >
            <Link to={`/${product.id}`}>
              <img src={product.thumbnail} alt="img" className="w-40 h-40" />
            </Link>
            <div>
              <h3 className="font-bold">{product.title}</h3>
              <p>
                ${product.price}
                <span className="bg-red-600 text-white w-24 rounded-3xl ml-3">
                  <b>Discount:</b>
                  <s>${product.discountPercentage}</s>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;


/* To-Do
add category in products
add single product layout 
add footer 
add search function with api module
add carousel as clickable
add a profile component
*/