import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Single_API_Handle } from "../API/API_Handle";

const Single_Product = () => {
  const [Productdata, setProductdata] = useState(null);
  const [active, setactive] = useState("description");
  const [review, setreview] = useState([]);
  const [detail, setdetail] = useState([]);
  const { id } = useParams();

  const handleclk = (tab) => {
    if (tab === "review") {
      setreview(Productdata.reviews);
    }
    if (tab === "details") {
      setdetail(Productdata.tags);
    }
    setactive(tab);
  };

  useEffect(() => {
    const fetch_product = async () => {
      try {
        const api_data = await Single_API_Handle(id);
        console.log("Fetched Data:", api_data);
        setProductdata(api_data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (id) fetch_product();
  }, [id]);

  if (!Productdata) return <p className="text-center mt-10 text-lg">Loading product...</p>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <img
            src={Productdata.images[0]}
            alt="img"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold text-blue-800">{Productdata.title}</h1>
          <p className="text-gray-600">
            {detail.map((item, index) => (
              <span key={index} className="text-blue-600 font-medium mr-2">#{item}</span>
            ))}
          </p>
          <p className="text-4xl font-bold text-green-700">${Productdata.price}</p>

          <div className="flex items-center gap-4 mt-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Add to cart
            </button>
            <button
              className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Add to Wishlist"
              title="Add to Wishlist"
            >
              &#9825;
            </button>
          </div>
        </div>
      </div>

      <div className="flex text-xl gap-6 mt-6 border-b pb-3">
        <button
          className={`font-semibold ${
            active === "review" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={() => handleclk("review")}
        >
          Review
        </button>
        <button
          className={`font-semibold ${
            active === "description" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={() => handleclk("description")}
        >
          Description
        </button>
        <button
          className={`font-semibold ${
            active === "details" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500"
          }`}
          onClick={() => handleclk("details")}
        >
          Details
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {active === "review" && (
          <div className="space-y-4">
            {review.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg shadow">
                <p className="font-semibold text-gray-800">{item.reviewerName} - {item.date}</p>
                <p className="text-yellow-500">{"⭐".repeat(item.rating)}</p>
                <p className="text-gray-600">{item.comment}</p>
                <hr className="mt-2"/>
              </div>
            ))}
          </div>
        )}

        {active === "description" && (
          <div className="text-gray-700 leading-relaxed">{Productdata.description}</div>
        )}

        {active === "details" && (
          <div className="space-y-2">
            <p className="font-semibold">{Productdata.returnPolicy}</p>
            <p>{Productdata.shippingInformation}</p>
            <div>
              {detail.map((item, index) => (
                <span key={index} className="text-blue-600 font-medium mr-2">#{item}</span>
              ))}
            </div>
            <p>{Productdata.warrantyInformation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Single_Product;
