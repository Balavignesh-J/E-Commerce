import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Single_API_Handle } from "../API/API_Handle";

const Single_Product = () => {
  const [Productdata, setProductdata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetch_product = async () => {
      try {
        const api_data = await Single_API_Handle(id);
        setProductdata(api_data);
      } catch (err) {
        setError("Failed to fetch product data.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetch_product();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mt-20"></div>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center text-2xl font-bold py-4 mt-10">
        {error}
      </h1>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10 bg-white shadow-lg rounded-lg">

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={Productdata.thumbnail}
          alt={Productdata.title}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-blue-900">{Productdata.title}</h1>
          <p className="text-gray-600">{Productdata.description}</p>

          <div className="flex items-center space-x-4">
            <p className="text-4xl font-bold text-green-700">${Productdata.price}</p>
            <p className="text-red-500 line-through text-xl">
              ${(Productdata.price + (Productdata.price * Productdata.discountPercentage / 100)).toFixed(2)}
            </p>
            <span className="text-white bg-red-500 px-3 py-1 rounded-full text-sm">
              {Productdata.discountPercentage}% Off
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">⭐️</span>
            <p className="text-lg font-semibold">{Productdata.rating} / 5</p>
          </div>

          <p className="text-gray-500">Available Stock: {Productdata.stock}</p>

          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Single_Product;
