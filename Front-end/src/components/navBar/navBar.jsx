import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from './SearchBar/SearchBar';
import './Navbar.css';

const Navbar = () => {
	const menuRef = useRef();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuOpen = () => setMenuOpen(!menuOpen);
	const showMenu = () => {
		menuRef.current.classList.toggle('show-menu');
	};

	return (
		<nav>
			<h1>LOGO</h1>
			<SearchBar />
			<div className='menu-container' onClick={showMenu}>
				<button className='menu-btn' onClick={handleMenuOpen}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
			<div className='nav-links' ref={menuRef}>
        <a href='/#'>inicio</a>
				<a href='/#'>usuario</a>
				<a href='/#'>carrito</a>
				<a href='/#'>cursos</a>
				<a href='/#'>contactos</a>
			</div>
		</nav>
	);
};

export default Navbar;
