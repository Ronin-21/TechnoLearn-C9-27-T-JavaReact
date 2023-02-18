import React from 'react';
import svgLogo from '../../assets/img/TECHLEARN-2.svg';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<div>
				<p>&copy;Techno-learn</p>
				<p>technolearn@gmail.com</p>
			</div>
			<img src={svgLogo} alt='' />
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
