import { useSelector } from 'react-redux';
import '../css/header.css'

function AddToCart() {

  const selector = useSelector((state) => state.cart.value)

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{selector}</span>
    </div>
  )
}

export default AddToCart;