import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../redux/productSlice/ProductSlice';


export const store = configureStore({
    reducer: {
        product: ProductSlice
    },
})
export default store;