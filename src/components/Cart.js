import React, { useContext, useState } from "react";
import { context_data } from "../context/contextfile"; // Adjust path as needed
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const [applyPoints, setApplyPoints] = useState(false);

  function togglePointsHandler() {
    setApplyPoints(!applyPoints);
  }

  const navigate = useNavigate();
  const { item_list, cartItems, remove_cart, totalAmount, greenPoints } =
    useContext(context_data);

  // Calculate amounts
  const amt = totalAmount();
  const deliveryFeePercentage = 15; // Delivery fee percentage
  const deliveryFee = amt * (deliveryFeePercentage / 100);
  const points = greenPoints();
  const discountedAmt = applyPoints ? amt - points : amt;
  const finalamt = discountedAmt + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {item_list
          .filter((item) => cartItems[item.id] > 0)
          .map((item) => {
            const itemTotal = parseFloat(item.price) * cartItems[item.id];
            return (
              <div key={item.id} className="cart-row">
                <img src={item.image} alt={item.name} className="cart-image" />
                <p>{item.name}</p>
                <p>{`₹${item.price}`}</p>
                <p>{cartItems[item.id]}</p>
                <p>₹{itemTotal.toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => remove_cart(item.id)}
                >
                  X
                </button>
              </div>
            );
          })}
      </div>
      {amt > 0 && (
        <div className="cart-green-points">
          <p>
            Congrats! You have earned <b>{points}</b> Green Points for
            eco-friendly items!
          </p>
          <button className="btn1" onClick={togglePointsHandler}>
            {applyPoints ? "Remove Points" : "Apply Points"}
          </button>
        </div>
      )}
      {amt > 0 ? (
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>CART TOTAL</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{amt.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>₹{deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              {applyPoints && (
                <>
                  <p className="font-bold text-green-700">
                    Green Points Discount
                  </p>
                  <p className="font-bold text-green-700">
                    - ₹{points.toFixed(2)}
                  </p>
                </>
              )}
              <b>TOTAL</b>
              <b>₹{finalamt.toFixed(2)}</b>
            </div>
            <button className="checkout-btn" onClick={() => navigate("/order")}>
              Proceed to checkout
            </button>
          </div>

          <div className="cart-promo">
            <p>Promo code available? Enter</p>
            <div className="promocode-input">
              <input type="text" placeholder="Enter promo code" />
            </div>
            <button className="btn1">Submit</button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <button className="shop-btn" onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
