import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem.js";

export default function Deals() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/data/clothes.json") // Make sure this path is correct
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full p-14 mt-6 pl-30 pr-30">
      <h2 className="text-center font-extrabold text-4xl text-[#0071dc] mb-10">
        Shop Products
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 justify-items-center">
        {data.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
            tag="home"
            className="w-[300px]" // Add a fixed width to each item
          />
        ))}
      </ul>
    </div>
  );
}
