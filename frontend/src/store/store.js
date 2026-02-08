import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Product/productSlice.js";
import cartReducer from '../features/Cart/cartSlice.js';

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
});

export default store;