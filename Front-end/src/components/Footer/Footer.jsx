import React from 'react';
import Logo from '../../assets/img/LogoLight.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<div>
				<p>Políticas de Privacidad</p>
				<p>Derechos Reservados</p>
			</div>
			<img src={Logo} alt='' />
			<div className='footer-redes'>
				<FaTiktok />
				<FaTwitter />
				<FaInstagram />
				<FaFacebookF />
			</div>
		</footer>
	);
}
export default Footer;
