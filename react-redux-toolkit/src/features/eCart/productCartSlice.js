import { createSlice } from '@reduxjs/toolkit'

const addProductToCart = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  // Reducer hold the logic of add, remove, update items from cart
  // Action: all the name (addItem) is called Action
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload)
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
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

//export Action
export const { addItem, removeItem, clearCart } = addProductToCart.actions;

//export reducer
export default addProductToCart.reducer;