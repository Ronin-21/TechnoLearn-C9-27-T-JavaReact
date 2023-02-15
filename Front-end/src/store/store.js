import {configureStore, } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query/react"
import { apiSlice } from "./api/apiSlice"
import { cursosSlice } from "./slices/cursosSlice"


export const store = configureStore({
    reducer: {
        cursos: cursosSlice.reducer,
    
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})

setupListeners(store.dispatch)