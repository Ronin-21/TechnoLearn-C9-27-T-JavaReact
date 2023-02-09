import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';
const MainLayout = () => {
	return (
		<>
			<nav>Navbar</nav>
			<main>
				<Outlet />
				<Newsletter/>
			</main>
			  <Footer/>
		</>
	);
};

export default MainLayout;
