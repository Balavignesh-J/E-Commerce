import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Single_API_Handle } from "../API/API_Handle";

const Single_Product = () => {
  const [Productdata, setProductdata] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetch_product = async () => {
      const api_data = await Single_API_Handle(id);
      setProductdata(api_data);
    };
    if (id) {
      fetch_product();
    }
  }, [id]);

  console.log(Productdata);

  return (
    <>
    </>
  );
};

export default Single_Product;
