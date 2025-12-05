
import { useDispatch, useSelector } from 'react-redux';

import '../css/product.css';
import { addItem, removeItem } from '../features/eCart/eCartSlice';

function Product() {

  const dispatch = useDispatch()

  const cartValue = useSelector(state => state.cart.value)

  return (
    <div className="product-card">
      <img src="https://www.redragon.in/cdn/shop/products/K599.png?v=1628503097&width=2048" alt="Keyboard" />

      <h2 className="product-name">Mechanical Gaming Keyboard</h2>

      <p className="product-desc">
        RGB backlit mechanical keyboard with blue switches, durable keys,
        and premium aluminum build.
      </p>

      <div className="product-bottom">
        <span className="price">$49.99</span>

        <button className="add-cart-btn" onClick={() => dispatch(addItem(1))}>
          <span className="cart-icon">🛒</span> Add
        </button>
        <button className="remove-cart-btn" onClick={() => dispatch(removeItem(1))} disabled={cartValue === 0}>
          <span className="cart-icon">🛒</span> Remove
        </button>
      </div>
    </div>
  )
}

export default Product;