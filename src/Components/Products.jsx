import React, { useEffect, useState } from "react";
import API_Handle, { Category, Category_data } from "../API/API_Handle";
import { Link } from "react-router-dom";

const Products = () => {
  const [Productsdata, setProductsdata] = useState([]);
  const [category, setCategory] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetch_products = async () => {
      try {
        const api_data = await API_Handle();
        setProductsdata(api_data.products);
      } catch (err) {
        seterror(err.message);
      } finally {
        setloading(false);
      }
    };
    fetch_products();

    const fetch_category = async () => {
      try {
        const api_data = await Category();
        setCategory(api_data);
      } catch (err) {
        seterror(err.message);
      } finally {
        setloading(false);
      }
    };
    fetch_category();
  }, []);

  const all_products = async () => {
    try {
      const api_data = await API_Handle();
      setProductsdata(api_data.products);
    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  };

  const category_filter = async (name) => {
    try {
      const api_data = await Category_data(name);
      setProductsdata(api_data.products);
    } catch (err) {
      seterror(err.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      <h1 className="mt-14 ml-4 mb-5 text-4xl font-bold text-blue-900">Products</h1>

      {loading && (
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mt-20"></div>
      )}

      {!loading && !error && (
        <div>
          <div className="flex gap-3 overflow-x-auto custom-scrollbar px-4 py-3 bg-blue-100 rounded-md">
            {category.length > 0 && (
              <button
                className="bg-blue-600 text-white font-medium px-4 py-1 rounded-lg shadow-sm hover:bg-blue-700 transition"
                onClick={all_products}
              >
                All Products
              </button>
            )}
            {category.map((Element, index) => (
              <button
                onClick={() => category_filter(Element)}
                className="bg-blue-500 text-white px-4 py-1 rounded-lg shadow-sm hover:bg-blue-600 transition whitespace-nowrap"
                key={index}
              >
                {Element}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-4">
            {Productsdata.map((product) => (
              <div
                className="bg-white border border-blue-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                key={product.id}
              >
                <Link to={`/${product.id}`} className="block">
                  <img
                    src={product.thumbnail}
                    alt="Product Thumbnail"
                    className="w-full h-40 object-cover"
                  />
                </Link>
                <div className="p-3 text-center">
                  <h3 className="font-semibold text-blue-800 truncate">{product.title}</h3>
                  <p className="text-lg font-medium text-gray-700">
                    ${product.price}
                    <span className="text-red-500 ml-2 text-sm line-through">
                      ${product.discountPercentage}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <h1 className="bg-red-500 text-white text-center text-2xl font-bold py-2 mt-6 mx-auto max-w-md">
          {error}
        </h1>
      )}
    </>
  );
};

export default Products;
