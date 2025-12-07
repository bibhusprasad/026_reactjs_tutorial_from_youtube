import { configureStore } from "@reduxjs/toolkit";
//cartReducer we can give any name
import cartReducer from '../features/eCart/eCartSlice'
import productReducer from '../features/eCart/productSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
})