import { useDispatch, useSelector } from 'react-redux';
import '../css/header.css'
import { clearCart } from '../features/eCart/productCartSlice';

function AddToCart() {

  const dispatch = useDispatch()
  
  const cartItems = useSelector((state) => state.productsCart.items)

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartItems ? cartItems.length : 0}</span>

      <button
        className="clear-cart-btn"
        onClick={() => dispatch(clearCart())}
        disabled={cartItems.length === 0}
      >
        Clear Cart
      </button>
    </div>
  )
}

export default AddToCart;