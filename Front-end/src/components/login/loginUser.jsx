import React, { useEffect } from 'react';
import { useLoginMutation } from '../../store/api/apiSlice';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useModal } from '../../hook/useModal';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../store/slices/authSlice';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './loginUser.css';

const Login = () => {
	// Modal de Logueo
	const [loginModalError, showLoginModalError] = useModal(false);
	const [loginModalSuccess, showLoginModalSuccess] = useModal(false);

	// Constantes para comprobar si esta logueado
	const isLogged = useSelector((state) => state.auth.isLoggedIn);
	const navigate = useNavigate();

	// Query para peticion POST
	const [login, { data: user, isSuccess, isError, error }] = useLoginMutation();
	const dispatch = useDispatch();

	// Hook useForm
	const {
		register,
		resetField,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	// Logica del POST y Logueo de usuario
	const onSubmit = (data) => {
		if (isLogged) {
			showLoginModalError();
			reset();
		} else {
			login(data);
			reset();
		}
	};

	// Logica para cuando el logueo es exitoso
	useEffect(() => {
		if (isSuccess) {
			localStorage.setItem(
				'userInfo',
				JSON.stringify({ isLoggedIn: true, ...user })
			);
			dispatch(logIn());
			showLoginModalSuccess();
		} else if (isError) {
			showLoginModalError();
		}
	}, [isSuccess, isError]);

	// Comprueba si esta logueado para no dejar entrar
	useEffect(() => {
		if (isLogged) {
			navigate('/user');
		}
	}, []);

	return (
		<div className='login-container'>
			<div className='flex flex-col items-center'>
				<h2 className='login-title'>¿YA TIENES CUENTA?</h2>
				<h4 className='login-subtitle'>Inicia sesión</h4>
			</div>
			<form
				className='login-form'
				action='#'
				method='POST'
				onSubmit={handleSubmit(onSubmit)}>
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
						<p className='text-red-600 truncate'>
							su contraseña no tiene los parametros requeridos
						</p>
					)}
				</div>
				<Button type={'submit'} fontSize={'32px'}>
					Iniciar sesión
				</Button>
				<div className='login-form-register'>
					<p>Todavía no tienes cuenta?</p>
					<Link to='/register'>Regístrate</Link>
				</div>
			</form>
			<Modal isActive={loginModalError} showModal={showLoginModalError}>
				<h5 className='modal-title'>Inicio de Sesión Fallido!</h5>
				<p className='modal-data'>
					{isError ? `${error.data.mensaje}` : 'Su usuario ya se encuentra logueado'}
				</p>
				{isError ? (
					''
				) : (
					<Button fontSize={'32px'}>
						<Link to='/user'>Ir a mi Perfil</Link>
					</Button>
				)}
			</Modal>
			<Modal isActive={loginModalSuccess} showModal={showLoginModalSuccess}>
				<h5 className='modal-title'>Inicio de Sesión exitoso!</h5>
				<p className='modal-data'>Disfruta de nuestros cursos</p>
				<Button fontSize={'32px'}>
					<Link to='/user'>Ir a mi Perfil</Link>
				</Button>
			</Modal>
		</div>
	);
};

export default Login;
