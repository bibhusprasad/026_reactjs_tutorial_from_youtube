import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  'products',
  async ({ page = 1, limit = 20 } = {}) => {
    const skip = (page - 1) * limit;

    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const jsonResponse = await response.json();

    return {
      items: jsonResponse.products,
      total: jsonResponse.total,
      limit: jsonResponse.limit,
      skip: jsonResponse.skip,
      page,
    };
  }
);

const products = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: undefined,
    error: null,
    page: 1,
    total: 0,
    limit: 20,
    skip: 0
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
        state.page = action.payload.page;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { } = products.actions;

export default products.reducer;