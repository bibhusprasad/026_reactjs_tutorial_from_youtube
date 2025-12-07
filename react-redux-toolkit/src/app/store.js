import { configureStore } from "@reduxjs/toolkit";
//cartReducer we can give any name. This is for Product.jsx
import cartReducer from '../features/eCart/eCartSlice'

//This is for ApiProduct.jsx
import productReducer from '../features/eCart/productSlice'
import productCartReducer from '../features/eCart/productCartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    productsCart: productCartReducer
  }
})