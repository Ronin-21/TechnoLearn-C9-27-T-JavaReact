import {configureStore, } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import { cursosSlice } from "./slices/cursosSlice"


export const store = configureStore({
    reducer: {
        cursos: cursosSlice.reducer,
    
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})