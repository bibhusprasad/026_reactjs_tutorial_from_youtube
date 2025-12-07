import { createSlice } from '@reduxjs/toolkit'

const addProductToCart = createSlice({
  name: 'cart',
  initialState: {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  // Reducer hold the logic of add, remove, update items from cart
  // Action: all the name (addItem) is called Action
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload)
        localStorage.setItem('cart', JSON.stringify(state.items))
      },
      prepare: (item) => {
        return {
          payload: {
            ...item,
            quantity: 1
          }
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload; // product id
      // check if item exists
      const exists = state.items.some(item => item.id === id);
      if (exists) {
        // remove that item
        state.items = state.items.filter(item => item.id !== id);
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    clearCart: (state) => {
      state.items = []
      localStorage.setItem('cart', [])
    }
  }
})

//export Action
export const { addItem, removeItem, clearCart } = addProductToCart.actions;

//export reducer
export default addProductToCart.reducer;