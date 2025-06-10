import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice.js'

export const store = configureStore({
    reducer:{
        authReducer,
    } 
});
