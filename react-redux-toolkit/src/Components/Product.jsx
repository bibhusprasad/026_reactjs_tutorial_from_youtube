
import { useDispatch, useSelector } from 'react-redux';

import '../css/product.css';
import { addItem, removeItem } from '../features/eCart/eCartSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../features/eCart/productSlice'

function Product() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const productsList = useSelector(state => state.products.items)
  console.log(productsList)

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
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>Add
        </button>

        <button className="remove-cart-btn" onClick={() => dispatch(removeItem(1))} disabled={cartValue === 0}>
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>Remove
        </button>
      </div>
    </div>
  )
}

export default Product;