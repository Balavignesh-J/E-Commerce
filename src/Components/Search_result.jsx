import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { search_data } from "../API/API_Handle";

const Search_result = () => {
  const [Productsdata, setProductsdata] = useState([]);
  const [searchvalue] = useSearchParams();
  const query = searchvalue.get("q");
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const search_products = async () => {
      try {
        const api_data = await search_data(query);
        setProductsdata(api_data.products || []);
      } catch (err) {
        seterror(err.message);
      } finally {
        setloading(false);
      }
    };
    search_products();
  }, [query]);

  return (
    <div>
      {loading && (
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mt-20"></div>
      )}

      {!loading && error && (
        <h1 className="bg-red-500 text-white text-center text-2xl font-bold py-2 mt-6 mx-auto max-w-md">
          {error}
        </h1>
      )}

      {!loading && !error && Productsdata.length === 0 && (
        <div className="text-center text-2xl mt-10 text-gray-600">
          No products found for <span className="font-semibold text-blue-700">"{query}"</span>
        </div>
      )}

      {!loading && !error && Productsdata.length > 0 && (
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
      )}
    </div>
  );
};

export default Search_result;
