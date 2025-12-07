import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const jsonResponse = await response.json();
  return jsonResponse.products;
})

const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: undefined,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded',
        state.items = action.payload
      })
  }
})

export const { } = products.actions;

export default products.reducer;