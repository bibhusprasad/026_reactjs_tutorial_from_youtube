import { createSlice } from '@reduxjs/toolkit'

const addToCart = createSlice({
  name: 'cart',
  initialState: {
    value: 0
  },
  // Reducer hold the logic of add, remove, update items from cart
  // Action: all the name (addItem) is called Action
  reducers: {
    addItem: {
      reducer: (state) => {
        state.value += 1;
      }
    },
    removeItem: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    clearCart: (state) => {
      state.value = 0;
    }
  }
})

//export Action
export const { addItem, removeItem, clearCart } = addToCart.actions;

//export reducer
export default addToCart.reducer;