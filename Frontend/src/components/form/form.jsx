import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserMutation } from '../../store/api/apiSlice';
import { useModal } from '../../hook/useModal';
import { useField } from '../../hook/useField';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import './form.css';

const Form = () => {
	// Modal de Registro
	const [registerModalSuccess, showRegisterModalSuccess] = useModal(false);
	const [registerModalError, showRegisterModalError] = useModal(false);
	const checkbox = useField({
		type: 'checkbox',
	});

	const [createUser, { isSuccess, isError, error }] = useCreateUserMutation();

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const onSubmit = (data) => {
		createUser(data);
		reset();
		checkbox.clearValues();
	};

	// Logica para cuando el registro es exitoso
	useEffect(() => {
		if (isSuccess) {
			showRegisterModalSuccess();
		} else if (isError) {
			showRegisterModalError();
		}
	}, [isSuccess, isError]);

	return (
		<div className='register-container'>
			<div className='flex flex-col items-center'>
				<h2 className='register-title'>REGÍSTRATE</h2>
				<h4 className='register-subtitle'>Crea tu cuenta</h4>
			</div>
			<form
				className='register-form'
				action='#'
				method='POST'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col items-center'>
					<input
						placeholder='Nombre'
						type='text'
						{...register('nombre', {
							required: true,
							maxLength: 20,
						})}
					/>
					{errors.nombre?.type === 'required' && (
						<p className='text-red-600'>complete su nombre por favor</p>
					)}
					{errors.nombre?.type === 'maxLength' && (
						<p className='text-red-600'>
							su nombre es demaciado largo para este campo
						</p>
					)}
				</div>
				<div className='flex flex-col items-center'>
					<label className='sr-only'></label>
					<input
						placeholder='Email'
						type='email'
						{...register('email', {
							pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/i,
							required: true,
						})}
					/>
					{errors?.email?.type === 'pattern' && (
						<p className='text-red-600'>
							el campo que intentas completar no pertenece a un mail en servicio
						</p>
					)}
					{errors?.email?.type === 'required' && (
						<p className='text-red-600'>
							el campo es requerido para completar el registro de su usuario
						</p>
					)}
				</div>
				<div className='flex flex-col items-center'>
					<input
						placeholder='Contraseña'
						type='password'
						{...register('password', {
							required: true,
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i,
						})}
					/>
					{errors.password?.type === 'pattern' && (
						<p className='text-red-600'>
							La contraseña que quieres ingresar no es segura
						</p>
					)}
					{errors.password?.type === 'required' && (
						<p className='text-red-600'>
							el campo es requerido para completar el registro de su usuario
						</p>
					)}
					{errors.password?.type === 'pattern' && (
						<p className='text-red-600'>
							su contraseña debe ser revisada ya que no tiene los parametros requeridos
							para su registro
						</p>
					)}
				</div>
				<div className='flex flex-col items-center'>
					<input
						placeholder='Confirmar contraseña'
						type='password'
						{...register('confipass', {
							required: true,
							pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/i,
						})}
					/>

					{errors?.confipass?.type !== 'password' && ' '}
					{errors.confipass?.type === 'required' && (
						<p className='text-red-600'>
							el campo es requerido para completar el registro de su usuario
						</p>
					)}
				</div>
				<Button type={'submit'} fontSize={'32px'}>
					Regístrate
				</Button>
				<div className='register-form-check'>
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
			<Modal isActive={registerModalSuccess} showModal={showRegisterModalSuccess}>
				<h3 className='modal-title'>Registro exitoso!</h3>
				<p className='modal-data'>Disfruta de nuestros cursos</p>
				<Button fontSize={'32px'}>
					<Link to='/courses'>Ver todos los cursos</Link>
				</Button>
			</Modal>
			<Modal isActive={registerModalError} showModal={showRegisterModalError}>
				<h3 className='modal-title'>Registro fallido!</h3>
				<p className='modal-data'>{error?.data.message}</p>
			</Modal>
		</div>
	);
};

export default Form;
