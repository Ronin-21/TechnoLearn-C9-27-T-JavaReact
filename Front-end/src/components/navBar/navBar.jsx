import React, { useState } from 'react';
import { useSelect } from "react-redux";
import { useModal } from '../../hook/useModal';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import SearchBar from './SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import Login from '../login/loginUser';
import './Navbar.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [loginModal, showLoginModal] = useModal(false);

	const handleMenuOpen = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	return (
		<nav>
			<Link to='/' onClick={closeMenu}>
				<h1>LOGO</h1>
			</Link>
			<SearchBar />
			<div className='menu-container'>
				<button className='menu-btn' onClick={handleMenuOpen}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
			<div className='nav-links'>
				<div
					className='flex items-center justify-center gap-2'>
					<FaUserAlt />
					<NavLink to='/login'>
					<p>LogIn</p>
					</NavLink>
				</div>
				<NavLink to='/'>Inicio</NavLink>
				<NavLink to='/'>Cursos</NavLink>
				<NavLink to='/'>Contacto</NavLink>
			</div>
			<div className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
				<NavLink to='/login'
					className='flex align-center justify-center gap-2'
					>
					Log In
				</NavLink>
				<NavLink to='/' onClick={closeMenu}>
					Suscríbete
				</NavLink>
				<NavLink to='/' onClick={closeMenu}>
					Inicio
				</NavLink>
				<NavLink to='/' onClick={closeMenu}>
					Cursos
				</NavLink>
				<NavLink to='/' onClick={closeMenu}>
					Contacto
				</NavLink>
			</div>
			<Modal isActive={loginModal} showModal={showLoginModal}>
				<Login showModal={showLoginModal} closeMenu={closeMenu} />
			</Modal>
		</nav>
	);
};

export default Navbar;
