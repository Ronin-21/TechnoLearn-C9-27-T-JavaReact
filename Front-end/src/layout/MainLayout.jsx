import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
