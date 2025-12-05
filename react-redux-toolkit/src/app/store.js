import { configureStore } from "@reduxjs/toolkit";
//cartReducer we can give any name
import cartReducer from '../features/eCart/eCartSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})