import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../api';

export type productT = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type productsDataT = {
  isLoading: boolean;
  productsData: productT[];
  error: string;
};

const initialState: productsDataT = {
  isLoading: false,
  productsData: [],
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'product/allproducts',
  async (thunkAPI) => {
    try {
      const response = await API.get('https://dummyjson.com/products');
      return response.data;
      console.log(response.data);
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.productsData = [];
      state.error = '';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsData = action.payload.products;
      state.error = '';
    });
  },
});

export default productSlice.reducer;
