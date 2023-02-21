import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, userEmail: null, suscripto: 0, userId: null },
    reducers: {
      logout: state => {
        state.isLoggedIn = false;
      },
      setEmail: (state, action) => {
        state.userEmail = action.payload
      },
      isPremium: state => {
        state.suscripto = 1
      },
      setUserId: (state, action) => {
        state.userId = action.payload
      }
    },
    extraReducers: builder => {
      builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state) => {
        state.isLoggedIn = true;
      });
    },

  });
  
  export const { logout, setEmail, isPremium, setUserId } = authSlice.actions;
  
  export default authSlice.reducer;