import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {FaSistrix} from "react-icons/fa";
import Search from "./searchBar";
import "./navBar.css";

const NavBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <h3>LOGO</h3>
        <nav ref={navRef}>
          <a href="/#">#</a>
          <a href="/#">#</a>
          <a href="/#">#</a>
          <a href="/#">#</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <Search />
        <FaSistrix justifyContent="flexstart"/>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default NavBar;
