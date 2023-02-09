import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/navBar";

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
