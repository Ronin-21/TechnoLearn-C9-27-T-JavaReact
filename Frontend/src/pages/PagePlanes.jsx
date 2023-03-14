import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import '../styles/pagePlanes.css';

const PagePlanes = () => {
	return (
		<div className='planes-container'>
			<div className='top-background-white'>
				<div className='title-planes'>
					<h2>PLAN DE CONTRATACIÓN</h2>
				</div>
				<div className='free-pro-container'>
					<div className='free-plan'>
						<div className='title-number'>
							<p>Free</p>
							<div>$0/mes</div>
						</div>
						<div className='info-free-container'>
							<div className='info-text'>
								<p>Accede parcialmente a los cursos en tecnología y diseño.</p>
							</div>
							<div className='check-container'>
								<div className='check-info'>
									<div>
										<FaCheck className='check-style' />
									</div>
									<p>Acceso parcial a los cursos</p>
								</div>
								<div className='check-info'>
									<div>
										<FaCheck className='check-style' />
									</div>
									<p>Personalización de perfil</p>
								</div>
								<div className='check-info'>
									<div>
										<FaCheck className='check-style' />
									</div>
									<p>Avance de aprendizaje</p>
								</div>
							</div>
						</div>
						<div className='button-container'>
							<Button fontSize={'32px'} bg={'#79747E'}>
								<Link to='/courses'>Inicia gratis</Link>
							</Button>
						</div>
					</div>
					<div className='pro-plan'>
						<div className='title-number'>
							<p>Pro</p>
							<div>$150/mes</div>
						</div>
						<div className='info-text'>
							<p>Accede ilimitadamente a todos los cursos en tecnología y diseño.</p>
						</div>
						<div className='check-container'>
							<div className='check-info'>
								<div>
									<FaCheck className='check-style' />
								</div>
								<p>Acceso a todos los cursos</p>
							</div>
							<div className='check-info'>
								<div>
									<FaCheck className='check-style' />
								</div>
								<p>Certificado cuando terminas tus cursos</p>
							</div>
							<div className='check-info'>
								<div>
									<FaCheck className='check-style' />
								</div>
								<p>Personalización de perfil</p>
							</div>
							<div className='check-info'>
								<div>
									<FaCheck className='check-style' />
								</div>
								<p>Avance de tu aprendizaje</p>
							</div>
						</div>
						<div className='button-buy-container'>
							<Button
								fontSize={'32px'}
								bg={'var(--secondaryColor)'}
								color={'var(--tertiaryColor)'}>
								<Link to='/payment'>Comprar</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='bot-background-dark'>
				<div className='info-text-bot'>
					<p>
						Contamos con la confianza de cientos <br />
						de profesionales <span>en todo LATAM</span>
					</p>
					<div className='number-details'>
						<div className='number-text-courses'>
							<div>250+</div>
							<p>Cursos</p>
						</div>
						<div className='number-text-courses'>
							<div>1500+</div>
							<p>Certificados</p>
						</div>
						<div className='number-text-courses'>
							<div>3500+</div>
							<p>Miembros de la comunidad</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PagePlanes;
