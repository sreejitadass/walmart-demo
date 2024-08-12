import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem.js";

export default function RecycleProducts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/data/products-info.json") // Correct path
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
    <div>
      <ul id="products">
        {data.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
}
