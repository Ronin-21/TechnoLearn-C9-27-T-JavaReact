import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CourseDetails from '../pages/CourseDetails';
import Home from '../pages/Home';
import LoginUser from '../pages/Login';
import NotFound from '../pages/NotFound';
import ProfileUser from '../pages/ProfileUser';
import Register from '../pages/Register';
import Courses from '../pages/Courses';
import PagePlanes from '../pages/PagePlanes';
import PaymentMethod from '../pages/PaymentMethod';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{
				errorElement: <NotFound />,
				children: [
					{
						index: true,
						element: <Home />,
					},
					{
						path: '/register',
						element: <Register />,
					},
					{
						path: '/courses/:id',
						element: <CourseDetails />,
					},
					{
						path: '/courses',
						element: <Courses />,
					},
					{
						path: '/user',
						element: (
							<ProtectedRoute redirectTo={'/login'} isAllowed={false}>
								<ProfileUser />
							</ProtectedRoute>
						),
					},
					{
						path: '/login',
						element: <LoginUser />,
					},
					{
						path: '/planes',
						element: <PagePlanes />,
					},
					{
						path: '/payment',
						element: (
							<ProtectedRoute redirectTo={'/login'} isAllowed={false}>
								<PaymentMethod />
							</ProtectedRoute>
						),
					},
				],
			},
		],
	},
]);
