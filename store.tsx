import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/slices/authSlice.ts'
import { apiSlice } from './features/slices/apiSlice.ts'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),

})
