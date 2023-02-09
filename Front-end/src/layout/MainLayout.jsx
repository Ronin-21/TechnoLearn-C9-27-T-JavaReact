import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
       <main>
      <Navbar />
      <Outlet />
      {/* <nav>Navbar</nav> */}
        </main>
       {/* <footer>Footer</footer> */}
    </>
  );
};

export default MainLayout;
