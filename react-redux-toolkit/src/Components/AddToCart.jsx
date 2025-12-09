import { useDispatch, useSelector } from 'react-redux';
import '../css/header.css'
import { clearCart } from '../features/eCart/productCartSlice';
import { Link } from 'react-router';

function AddToCart() {

  const dispatch = useDispatch()
  
  const cartItems = useSelector((state) => state.productsCart.items)

  return (
    <div className="cart">
      <span className="cart-icon"><Link to='/cart'>🛒</Link></span>
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