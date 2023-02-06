import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<>
			<nav>Navbar</nav>
			<main>
				<Outlet />
			</main>
			<footer>Footer</footer>
		</>
	);
};

export default MainLayout;
