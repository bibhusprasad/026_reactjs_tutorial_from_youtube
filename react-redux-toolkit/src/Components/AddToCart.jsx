import { useDispatch, useSelector } from 'react-redux';
import '../css/header.css'
import { clearCart } from '../features/eCart/eCartSlice';

function AddToCart() {

  const dispatch = useDispatch()
  
  const cartValue = useSelector((state) => state.cart.value)

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartValue}</span>

      <button
        className="clear-cart-btn"
        onClick={() => dispatch(clearCart())}
        disabled={cartValue === 0}
      >
        Clear Cart
      </button>
    </div>
  )
}

export default AddToCart;