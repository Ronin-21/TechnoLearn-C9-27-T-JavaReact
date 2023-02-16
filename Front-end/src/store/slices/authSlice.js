import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
      logout: state => {
        state.isLoggedIn = false;
      },
    },
    extraReducers: builder => {
      builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
      });
    },
  });
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer;