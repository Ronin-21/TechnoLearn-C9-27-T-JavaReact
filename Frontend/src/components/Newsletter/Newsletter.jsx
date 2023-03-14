import { Link } from 'react-router-dom';
import { useField } from '../../hook/useField';
import { useModal } from '../../hook/useModal';
import { useSendNewsletterMutation } from '../../store/api/apiSlice';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './Newsletter.css';

function Newsletter() {
	// Hook para manejar el Modal
	const [newsletterModal, showNewsletterModal] = useModal(false);

	//Hook para manejar los input y el form
	const username = useField({ type: 'text' });
	const email = useField({ type: 'email' });
	const checkbox = useField({
		type: 'checkbox',
	});
	const [sendNewsletter] = useSendNewsletterMutation();

	const handleSendNewsletter = (e) => {
		e.preventDefault();
		const newsletterData = { nombre: username.value, email: email.value };
		sendNewsletter(newsletterData);
		username.clearValues();
		email.clearValues();
		checkbox.clearValues();
		showNewsletterModal();
	};

	return (
		<>
			<section className='newsletter-container'>
				<div className='newsletter-content'>
					<h4 className='newsletter-title'>NEWSLETTER</h4>
					<p className='newsletter-text'>Recibe nuestras noticias</p>
					<form
						method='POST'
						className='newsletter-form'
						onSubmit={handleSendNewsletter}>
						<input
							type={username.type}
							onChange={username.onChange}
							value={username.value}
							name='nombre'
							placeholder='Escribe tu nombre'
							required={true}
							maxLength={20}
						/>

						<input
							type={email.type}
							onChange={email.onChange}
							value={email.value}
							placeholder='E-mail'
							required={true}
						/>

						<Button type={'submit'} fontSize={'32px'} bg={'#000'}>
							Enviar
						</Button>
						<div className='newsletter-check'>
							<input
								type={checkbox.type}
								checked={checkbox.value}
								onChange={checkbox.onChange}
								name='terminos'
								id='terminos'
								required={true}
							/>
							<label htmlFor='terminos'>Aceptar políticas de privacidad</label>
						</div>
					</form>
				</div>
				<Modal isActive={newsletterModal} showModal={showNewsletterModal}>
					<h5 className='modal-title'>GRACIAS</h5>
					<p className='modal-data'>Por suscribirte a nuestro newsletter</p>
					<Button fontSize={'32px'}>
						<Link to='/courses'>Ir a los cursos</Link>
					</Button>
				</Modal>
			</section>
		</>
	);
}
export { Newsletter };
