import React, { useContext } from "react";
import { context_data } from "../context/contextfile"; // Adjust path as needed

export default function ProductItem({ id, name, price, description, image, tag }) {
  const { addItem_cart } = useContext(context_data);

  // Handler function to add item to the cart
  const handleAddToCart = () => {
    addItem_cart(id);
    console.log("addItem_cart:", addItem_cart);
console.log("Item ID:", id);

  };

  return (
    <li className={tag === "home" ? "meal-item-home" : "meal-item"}>
      <article>
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p
            className={
              tag === "home"
                ? "meal-item-description-home"
                : "meal-item-description"
            }
          >
            {description}
          </p>
          <p
            className={
              tag === "home" ? "meal-item-price-home" : "meal-item-price"
            }
          >{`₹${price}`}</p>
        </div>
        <p className="meal-item-actions">
          <button className="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </p>
      </article>
    </li>
  );
}
