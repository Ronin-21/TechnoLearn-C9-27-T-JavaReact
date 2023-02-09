import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <>
       <main>
      <NavBar />
      <Outlet />
      {/* <nav>Navbar</nav> */}
        </main>
       {/* <footer>Footer</footer> */}
    </>
  );
};

export default MainLayout;
