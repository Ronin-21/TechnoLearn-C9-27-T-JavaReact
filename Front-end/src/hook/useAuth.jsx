import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../store/api/apiSlice';
import { logout } from '../store/slices/authSlice';

export const useAuth = () => {
	const dispatch = useDispatch();
	// const [login] = useLoginMutation();

	// const handleLogin = (userData) => {
	// 	dispatch(login(userData));
	// };

	const handleLogout = () => {
		dispatch(logout());
	};

	return {
		// handleLogin,
		handleLogout,
	};
};
