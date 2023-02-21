import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../../assets/img/LogoLight.svg';
import './About.css';

export const About = () => {
	return (
		<section className='about-container'>
			<div className='about-box'>
				<h4 className='about-title'>ACERCA DE</h4>
				<p className='about-text'>
					En Teach Learn nos interesa incrementar el desarrollo en técnología en
					Latam, por eso te presentamos contenido que te ayudará a{' '}
					<span className='about-text-highlight'>
						impulsar tu carrea en el mundo del desarrollo y del diseño UX-UI.
					</span>
				</p>
				<Button
					fontSize={'4xl'}
					padX={5}
					padY={3}
					bg={'var(--secondaryColor)'}
					color={'var(--primaryColor)'}>
					<Link to='/'>Contrata Pro</Link>
				</Button>
			</div>
			<div className='about-svg'>
				<img src={Logo} alt='logo' />
			</div>
		</section>
	);
};
