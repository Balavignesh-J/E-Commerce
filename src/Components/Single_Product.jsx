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

  if (!Productdata) return <p className="text-center">Loading product...</p>;

  return (
    <div>
      <div className="flex justify-around items-center">
        <div className="">
          <img
            src={Productdata.images[0]}
            style={{ width: "500px", height: "500px" }}
            alt="img"
          />
        </div>
        <div className="p-4">
          <h1 className="font-semibold text-3xl">{Productdata.title}</h1>
          <p>
            {detail.map((item, index) => (
              <span key={index}>#{item} </span>
            ))}
          </p>
          <p className="text-4xl font-light">${Productdata.price}</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-black text-white rounded-md shadow-md hover:bg-gray-600 transition">
              Add to cart
            </button>
            <button
              className="p-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
              aria-label="Add to Wishlist"
              title="Add to Wishlist"
            >
              &#x2661;
            </button>
          </div>
        </div>
      </div>

      <div className="flex text-2xl gap-2 ms-7">
        <button
          className="text-gray-500 font-bold hover:text-gray-800"
          onClick={() => handleclk("review")}
        >
          Review
        </button>
        <button
          className="text-gray-500 font-bold hover:text-gray-800"
          onClick={() => handleclk("description")}
        >
          Description
        </button>
        <button
          className="text-gray-500 font-bold hover:text-gray-800"
          onClick={() => handleclk("details")}
        >
          Details
        </button>
      </div>
      <div className="ms-7">
        {active === "review" && (
          <div>
            {review.map((item, index) => (
              <div key={index}>
                <p>
                  <strong>{item.reviewerName}</strong> - {item.date}
                </p>
                <p>Rating: {"⭐".repeat(item.rating)}</p>
                <h4>{item.comment}</h4>
                <hr />
              </div>
            ))}
          </div>
        )}

        {active === "description" && <div>{Productdata.description}</div>}

        {active === "details" && (
          <div>
            <h4>{Productdata.returnPolicy}</h4>

            <h5>{Productdata.shippingInformation}</h5>

            {detail.map((item, index) => (
              <span key={index}>#{item} </span>
            ))}

            <h6>{Productdata.warrantyInformation}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Single_Product;
