import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/img/LogoDark.svg';
import SearchBar from './SearchBar/SearchBar';
import Button from '../Button/Button';
import './navBar.css';

const Navbar = () => {
	// Manejo del menu
	const [menuOpen, setMenuOpen] = useState(false);
	const handleMenuOpen = () => setMenuOpen(!menuOpen);
	const closeMenu = () => setMenuOpen(false);

	// Manejo del state del usurario
	const { isLoggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	return (
		<nav>
			<Link to='/' onClick={closeMenu}>
				<img src={Logo} alt='' />
			</Link>
			<SearchBar />
			<div className='menu-container'>
				<button className='menu-btn' onClick={handleMenuOpen}>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>
			<div className='nav-links'>
				<NavLink to='/'>Inicio</NavLink>
				<NavLink to='/planes'>Planes</NavLink>
				<NavLink to='/courses'>Cursos</NavLink>
				<Button
					fontSize={'base'}
					padX={4}
					padY={2}
					bg={'var(--backgroundColor)'}
					color={'var(--tertiaryColor)'}>
					<NavLink to='/user'>Perfil</NavLink>
				</Button>
				<div className='flex items-center justify-center gap-2'>
					{!isLoggedIn ? (
						<Button fontSize={'base'} padX={4} padY={2}>
							<NavLink to='/login'>
								<p>Log In</p>
							</NavLink>
						</Button>
					) : (
						<Button fontSize={'base'} padX={4} padY={2} bg={'#1A097A'}>
							<NavLink to='/' onClick={() => dispatch(logout())}>
								<p>Log Out</p>
							</NavLink>
						</Button>
					)}
				</div>
			</div>
			<div className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
				<NavLink to='/' onClick={closeMenu}>
					Inicio
				</NavLink>
				<NavLink to='/' onClick={closeMenu}>
					Planes
				</NavLink>
				<NavLink to='/courses' onClick={closeMenu}>
					Cursos
				</NavLink>
				<NavLink to='/user' onClick={closeMenu}>
					Perfil
				</NavLink>
				<NavLink
					to='/login'
					className='flex align-center justify-center gap-2'
					onClick={closeMenu}>
					Log In
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
