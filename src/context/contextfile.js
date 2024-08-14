import React, { createContext, useState, useEffect } from "react";

export const context_data = createContext(null);

function ContextProvider(props) {
  const [cartItems, modifyCart] = useState({});
  const [item_list, setItemList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data/products-info.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItemList(data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }
    fetchData();
  }, []);

  function cartdot() {
    let tot = 0;
    for (const i in cartItems) {
      if (cartItems[i] > 0) {
        tot += cartItems[i];
      }
    }
    return tot;
  }

  function addItem_cart(item_id) {
    modifyCart(prevCart => {
      const currentCount = prevCart[item_id] || 0;
      return { ...prevCart, [item_id]: currentCount + 1 };
    });
  }

  const remove_cart = (item_id) => {
    modifyCart(prevCart => {
      const currentCount = prevCart[item_id];
      if (currentCount >= 1) {
        return { ...prevCart, [item_id]: currentCount - 1 };
      } else {
        const updatedCart = { ...prevCart };
        delete updatedCart[item_id];
        return updatedCart;
      }
    });
  };

  function totalAmount() {
    let totalamount = 0;
    for (const [item_id, count] of Object.entries(cartItems)) {
      if (count > 0) {
        const item_detail = item_list.find((item) => item.id === item_id);
        if (item_detail) {
          totalamount += parseFloat(item_detail.price) * count;
        }
      }
    }
    return totalamount;
  }

  function greenPoints() {
    let points = 0;
    for (const [item_id, count] of Object.entries(cartItems)) {
      if (count > 0) {
        const item_detail = item_list.find((item) => item.id === item_id);
        if (item_detail && item_id.startsWith('p')) {
          points += 10 * count; // Example: 10 points per eco-friendly item
        }
      }
    }
    return points;
  }

  const points = greenPoints();

  const context_value = { item_list, cartItems, addItem_cart, remove_cart, totalAmount, cartdot, greenPoints };

  return (
    <context_data.Provider value={context_value}>
      {props.children}
    </context_data.Provider>
  );
}

export default ContextProvider;

