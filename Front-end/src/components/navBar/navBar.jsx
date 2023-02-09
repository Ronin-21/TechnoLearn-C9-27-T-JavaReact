import React, { useRef, useState } from 'react';
import { useModal } from '../../hook/useModal';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import SearchBar from './SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import Login from '../login/login';
import './Navbar.css';

const Navbar = () => {
	const menuRef = useRef();
	const [menuOpen, setMenuOpen] = useState(false);
	const [loginModal, showLoginModal] = useModal(false);

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
				<div
					className='flex align-center justify-center gap-2'
					onClick={showLoginModal}>
					<FaUserAlt />
					<p>LogIn</p>
				</div>
				<div className='flex align-center justify-center gap-2'>
					<FaShoppingCart />
					<p>Carrito</p>
				</div>
				<Link to='/'>Inicio</Link>
				<Link to='/'>Cursos</Link>
				<Link to='/'>Contacto</Link>
			</div>
			<Modal isActive={loginModal} showModal={showLoginModal}>
				<Login />
			</Modal>
		</nav>
	);
};

export default Navbar;
