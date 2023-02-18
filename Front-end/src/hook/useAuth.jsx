import { useSelector, useDispatch } from 'react-redux';
import {  logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const handleLogin = (username, password) => {
    dispatch(login({ username, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    handleLogin,
    handleLogout,
  };
};

