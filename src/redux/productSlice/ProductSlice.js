import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from '../productService/productService'
const initialState = {
    categoryData: [],
    subCategoryData: [],
    productData: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    cartToggle: false,
    cartData: []
}

export const fetchCategoryData = createAsyncThunk('category/category-data', (_, thunkAPI) => {
    try {
        return productService.fetchCategoryDataAPI()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const fetchSubCategoryData = createAsyncThunk('category/sub-category-data', (Id, thunkAPI) => {
    try {
        return productService.fetchSubCategoryDataAPI(Id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const fetchProductData = createAsyncThunk('sub-category/product-data', (Id, thunkAPI) => {
    try {
        return productService.fetchProductDataAPI(Id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
        handleCartToggle: (state) => {
            state.cartToggle = !state.cartToggle
        },
        handleAddToCart: (state, { payload }) => {
            state.cartData = [...state.cartData, payload]
        },
        handleRemoveFromCart: (state, { payload }) => {
            const newCartData = state.cartData?.filter((ele) => ele.id !== payload)
            state.cartData = newCartData
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategoryData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchCategoryData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.categoryData = payload;
            })
            .addCase(fetchCategoryData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.categoryData = null;
                state.message = payload
            })
            .addCase(fetchSubCategoryData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchSubCategoryData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.subCategoryData = payload;
            })
            .addCase(fetchSubCategoryData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.subCategoryData = null;
                state.message = payload
            })
            .addCase(fetchProductData.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchProductData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.productData = payload;
            })
            .addCase(fetchProductData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.productData = null;
                state.message = payload
            })
    }
})


export const {
    reset,
    handleCartToggle,
    handleAddToCart,
    handleRemoveFromCart
} = ProductSlice.actions
export default ProductSlice.reducer