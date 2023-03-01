import { useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	useBuySuscriptionMutation,
	useGetUserByIDQuery,
} from '../store/api/apiSlice';
import { useModal } from '../hook/useModal';
import InputMask from 'react-input-mask';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Loading from '../components/loading/Loading';
import mastercard from '../assets/img/mastercard-logo.png';
import visa from '../assets/img/visa-logo.png';
import american from '../assets/img/american-logo.png';
import '../styles/paymentMethod.css';

const PaymentMethod = () => {
	// Modal de Logueo
	const [paymentModalSuccess, showPaymentModalSuccess] = useModal(false);
	const [paymentModalError, showPaymentModalError] = useModal(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Trae el ID del usuario desde el store
	const userID = useSelector((state) => state.auth.id);

	// Query para traer datos del usuario desde la API
	const { data: user } = useGetUserByIDQuery(userID);

	// Query que ejecuta el POST a la API
	const [
		buySuscription,
		{ isError, isSuccess, error, isLoading },
	] = useBuySuscriptionMutation();

	// Logica de compra de suscripcion
	const submit = (data) => {
		if (!user.suscripto) {
			const paymentData = {
				nombreTitular: data.nombreTitular,
				numeroTarjeta: data.numeroTarjeta,
				fechaExpiracion: data.fechaExpiracion,
				cvc: parseInt(data.cvc),
			};
			buySuscription({ id: userID, data: paymentData });
			reset();
		} else {
			showPaymentModalError();
			console.log(user.suscripto);
			reset();
		}
	};

	// Logica para cuando el envio es exitoso
	useEffect(() => {
		if (isSuccess) {
			reset();
			showPaymentModalSuccess();
		} else if (isError) {
			showPaymentModalError();
		}
	}, [isSuccess, isError]);

	// Loader
	if (isLoading) return <Loading />;

	return (
		<form className='payment-container' onSubmit={handleSubmit(submit)}>
			<div className='title'>
				<h2>PAGAR</h2>
			</div>
			<div className='subscription-container'>
				<div className='payment-box-left-container'>
					<div className='text-title'>
						<h3>Método de pago</h3>
					</div>
					<div className='subscription-left'>
						<div className='text-description-left'>
							<p>
								Paga tu suscripción <br />
								con tarjeta de crédito
							</p>
						</div>
						<div className='logos-img-container'>
							<div className='logos'>
								<img src={mastercard} alt='mastercard' />
							</div>
							<div className='logos'>
								<img src={visa} alt='visa' />
							</div>
							<div className='logos'>
								<img src={american} alt='american' />
							</div>
						</div>
						<div className='box-form'>
							<div>
								<label htmlFor='name'>Nombre que figura en la tarjeta</label>
								<input
									type='text'
									id='name'
									placeholder='Marisol Gutierrez Arias'
									{...register('nombreTitular', {
										required: 'Por favor ingrese el nombre en la tarjeta',
									})}
								/>
								{errors.nombreTitular && (
									<p className='error'>{errors.nombreTitular.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='number'>Número de la tarjeta</label>
								<input
									type='text'
									id='number'
									placeholder='0122547623422234'
									{...register('numeroTarjeta', {
										required: 'Por favor ingrese un número de tarjeta de crédito',
										pattern: {
											message: 'Por favor ingrese un número de tarjeta de crédito válido',
										},
									})}
								/>
								{errors.numeroTarjeta && (
									<p className='error'>{errors.numeroTarjeta.message}</p>
								)}
							</div>
						</div>
						<div className='date-cvc-container'>
							<div>
								<label htmlFor='fecha'>Fecha de vencimiento</label>
								<InputMask
									mask='99/99'
									maskChar={null}
									type='text'
									placeholder='MM/AA'
									id='fecha'
									{...register('fechaExpiracion', {
										required: 'Por favor ingrese la fecha de vencimiento',
										pattern: {
											value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
											message: 'Por favor ingrese una fecha de vencimiento válida',
										},
									})}
								/>
								{errors.fechaExpiracion && (
									<p className='error'>{errors.fechaExpiracion.message}</p>
								)}
							</div>
							<div>
								<label htmlFor='cvc'>CVC</label>
								<input
									type='number'
									id='cvc'
									maxLength={3}
									inputMode='numeric'
									pattern='[0-9]{3}'
									required
									placeholder='123'
									{...register('cvc', {
										required: 'Por favor ingrese el código CVC',
									})}
								/>
								{errors.cvc && <p className='error'>{errors.cvc.message}</p>}
							</div>
						</div>
					</div>
				</div>
				<div className='payment-box-right-container'>
					<div className='text-title'>
						<h3>Detalle de compra</h3>
					</div>
					<div className='subscription-right'>
						<div className='text-anual-number'>
							<p>Suscripcion anual</p>
							<p>$1200</p>
						</div>
						<div className='text-details'>
							<p>Licencia de uso ilimitado a:</p>
							<p>-Acceso a todos los cursos</p>
							<p>-Certificado al terminar el curso</p>
							<p>-Personalización de perfil</p>
							<p>-Avance en tu aprendizaje</p>
						</div>
						<div className='text-info-buy'>
							<p>
								Al realizar la compra, aceptas los <br />
								Acuerdo de licencia de Teach Learn.
							</p>
						</div>
						<div className='button-container button-payment'>
							<Button
								fontSize={'32px'}
								bg={'var(--secondaryColor)'}
								color={'var(--tertiaryColor)'}>
								<Link to='/courses'>Completar Compra</Link>
							</Button>
						</div>
						<div className='extra-info'>
							<div className='icon-container'>
								<FaLock className='lock-icon' />
							</div>
							<p>
								Compra segura. Para su comodidad, TeachLearn almacenará su información
								de pago encriptada para futuros pedidos. Administre su información de
								pago en los detalles de su cuenta
							</p>
						</div>
					</div>
				</div>
			</div>
			<Modal isActive={paymentModalError} showModal={showPaymentModalError}>
				<h5 className='modal-title'>Ocurrio un error!</h5>
				<p className='modal-data'>
					{error?.data.message ?? 'Usted ya posee una suscripción activa'}
				</p>
			</Modal>
			<Modal isActive={paymentModalSuccess} showModal={showPaymentModalSuccess}>
				<h5 className='modal-title'>BIENVENIDO</h5>
				<p className='modal-data'>Accede a tus cursos ilimitadamente</p>
				<Button fontSize={'32px'}>
					<Link to='/courses'>Ir a los cursos</Link>
				</Button>
				<Button fontSize={'32px'} color={'var(--tertiaryColor)'} bg={'#fff'}>
					<Link to='/user'>Ir a mi Perfil</Link>
				</Button>
			</Modal>
		</form>
	);
};

export default PaymentMethod;
