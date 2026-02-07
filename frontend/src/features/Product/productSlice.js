import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    products: [],
    error: null,
};

export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (_, { rejectWithValue}) => {
        try {
            const response = await axios.get("http://localhost:3000/api/products");
            return response.data;
        } catch (err) {
            return rejectWithValue(err?.response?.data || err.message);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        }).addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    }
});

export default productSlice.reducer;