import React from "react";
import { useSelector } from "react-redux";
import '../css/cartList.css'

function CartList() {
  const cartList = useSelector((state) => state.productsCart.items);

  // assuming each item = { id, title, price, description, image, quantity }
  const totalItems = cartList.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalAmount = cartList.reduce(
    (sum, item) => sum + (item.quantity || 1) * item.price,
    0
  );

  if (!cartList || cartList.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-header">
          <h1>My Cart</h1>
          <span>0 items in your cart</span>
        </div>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>My Cart</h1>
        <span>{totalItems} items in your cart</span>
      </div>

      <div className="cart-layout">
        {/* Left: Cart Items */}
        <div className="cart-items">
          {cartList.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">
                <img src={item.thumbnail} alt={item.title} />
              </div>

              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div className="cart-item-qty">
                <button>-</button>
                <span>{item.quantity || 1}</span>
                <button>+</button>
              </div>

              <div className="cart-item-price">₹{item.price}</div>

              <div className="cart-item-subtotal">
                ₹{(item.price * (item.quantity || 1)).toFixed(2)}
              </div>

              <button className="remove-btn">&times;</button>
            </div>
          ))}
        </div>

        {/* Right: Summary */}
        <div className="cart-summary">
          <div className="summary-box">
            <h2>Price Details</h2>

            <div className="summary-row">
              <span>Items ({totalItems})</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>₹0.00</span>
            </div>

            <div className="summary-row">
              <span>Delivery Charges</span>
              <span>Free</span>
            </div>

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Place Order</button>
            <button className="continue-btn">Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;