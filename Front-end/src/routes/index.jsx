import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import CourseDetails from '../pages/CourseDetails';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import ProfileUser from '../pages/ProfileUser';
import Register from '../pages/Register';
import User from '../pages/User';

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
						path: '/user',
						element: <User />,
					},
					{
						path: '/courses',
						element: <CourseDetails />,
					},
					{
						path: '/profile',
						element: <ProfileUser />,
					},
				],
			},
		],
	},
]);
