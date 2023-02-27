import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ isAllowed, redirectTo, children }) => {
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

	if (isLoggedIn === isAllowed) {
		return <Navigate to={redirectTo} replace />;
	} else {
		return children;
	}
};
