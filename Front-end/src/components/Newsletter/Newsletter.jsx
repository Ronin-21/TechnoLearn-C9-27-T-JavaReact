import React from 'react';
import Button from '../Button/Button';
import './Newsletter.css';

function Newsletter() {
	return (
		<>
			<section className='newsletter-container'>
				<div className='newsletter-content'>
					<h4 className='newsletter-title'>NEWSLETTER</h4>
					<p className='newsletter-text'>Recibe nuestras noticias</p>
					<form className='newsletter-form'>
						<input
							type='text'
							name='nombre'
							placeholder='Escribe tu nombre'
							className=''
						/>

						<input type='email' placeholder='E-mail' className='' />

						<Button fontSize={'3xl'} padX={4} padY={2} bg={'#000'}>
							{/* <button type='submit'>Enviar</button> */}
							Enviar
						</Button>
						<div className='newsletter-check'>
							<input type='checkbox' name='terminos' />
							<label htmlFor='terminos'>Aceptar políticas de privacidad</label>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}
export { Newsletter };
