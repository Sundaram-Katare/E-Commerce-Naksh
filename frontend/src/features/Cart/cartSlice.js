import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    cartItems: [],
    isLoading: false,
    error: null,
};

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:3000/api/cart/add", {
                productId,
                quantity
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err?.response?.data || err.message);
        }
    }
);

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:3000/api/cart");
            return response.data;
        } catch (err) {
            return rejectWithValue(err?.response?.data || err.message);
        }
    }
);

export const updateCartQuantity = createAsyncThunk(
    "cart/updateQuantity",
    async ({ cartId, quantity }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/cart/${cartId}`, {
                quantity
            });
            return response.data;
        } catch (err) {
            return rejectWithValue(err?.response?.data || err.message);
        }
    }
);

export const deleteFromCart = createAsyncThunk(
    "cart/deleteFromCart",
    async (cartId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/cart/${cartId}`);
            return cartId;
        } catch (err) {
            return rejectWithValue(err?.response?.data || err.message);
        }
    }
);

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state) => {
                state.error = null;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(fetchCart.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cartItems = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(updateCartQuantity.fulfilled, (state, action) => {
                const item = state.cartItems.find(item => item._id === action.payload._id);
                if (item) {
                    item.quantity = action.payload.quantity;
                }
                state.error = null;
            })
            .addCase(deleteFromCart.fulfilled, (state, action) => {
                state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
            });
    }
});

export default cartSlice.reducer;