
import { useDispatch, useSelector } from 'react-redux';

import '../css/product.css';
import { useEffect } from 'react';
import { fetchProducts } from '../features/eCart/productSlice'

function ApiProducts() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const productsList = useSelector(state => state.products.items)
  console.log(productsList)

  return (
    <div className='product-container'>
      {
        productsList.length
        && productsList.map((item) => (
          <div className='product-card' key={item.id}>
            <img src={item.thumbnail} alt="Product" />
            <h3 className="product-name">{item.title}</h3>
            <h2 className="product-brand">{item.brand}</h2>
            <p className="product-desc">
              {item.description}
            </p>
            <StarRating rating={item.rating} />
            <div className="product-bottom">
              <span className="price">{item.price}</span>

              {/* <button className="add-cart-btn" onClick={() => dispatch(addItem(1))}> */}
              <button className="add-cart-btn">
                <span className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>Add
              </button>

              {/* <button className="remove-cart-btn" onClick={() => dispatch(removeItem(1))} disabled={cartValue === 0}> */}
              <button className="remove-cart-btn">
                <span className="icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </span>Remove
              </button>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default ApiProducts;

const StarRating = ({ rating }) => {
  const percentage = (rating / 5) * 100;  // convert 0–5 to 0–100%

  return (
    <div className="star-rating">
      <div className="stars-outer"></div>
      <div
        className="stars-inner"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};