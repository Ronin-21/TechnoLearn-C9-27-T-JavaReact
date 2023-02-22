import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

const emptyUserInfo = {
  isLoggedIn: false,
  cursosUsuario: [],
  email: "",
  id: null,
  nombre: "",
  password: "",
  suscripto: null,
  userInfo: []
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : emptyUserInfo,
    reducers: {
      logout: state => {
        state.isLoggedIn = false;
        localStorage.removeItem('userInfo')
      },
    },
    extraReducers: builder => {
      builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state) => {
        state.isLoggedIn = true;
      });
    },
  });
  
  export const { logout } = authSlice.actions;
  export default authSlice.reducer;