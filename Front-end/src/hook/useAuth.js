import { useSelector, useDispatch } from 'react-redux';
import {  logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogin = (username, password) => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };
};