import React, { useEffect } from 'react';
import { useModal } from '../../hook/useModal';
import { useForm } from 'react-hook-form';
import { BsFillLockFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../store/api/apiSlice';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

const Login = () => {
	// Protege la ruta y redirecciona
	const isLogged = useSelector((state) => state.auth.isLoggedIn);
	const navigate = useNavigate();

	// Query para peticion POST
	const [login, { data: user, isSuccess, isError, error }] = useLoginMutation();
	// Modal de Logueo exitoso
	const [loginModal, showLoginModal] = useModal(false);

	// Hook useForm
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	// Logica del POST y Logueo de usuario
	const onSubmit = (data) => {
		login(data);
	};

	// Comprueba si esta logueado para no dejar entrar aqui
	useEffect(() => {
		if (isLogged) {
			return navigate('/user');
		}
	}, []);

	// Logica para cuando el logueo es exitoso
	useEffect(() => {
		if (isSuccess) {
			localStorage.setItem(
				'userInfo',
				JSON.stringify({ isLoggedIn: true, ...user })
			);
			showLoginModal();
		} else if (isError) {
			return <div>{error.error}</div>;
		}
	}, [isSuccess, isError]);

	return (
		<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='w-full max-w-md space-y-8'>
				<h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
					Bienvenido
				</h2>
				<form
					className='mt-8 space-y-6'
					action='#'
					method='POST'
					onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label className='sr-only'></label>
						<input
							className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
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
					<div>
						<input
							className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
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
								su contraseña debe ser revisada ya que no tiene los parametros
								requeridos para su registro
							</p>
						)}
					</div>

					<button
						type='submit'
						className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
						<span className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<BsFillLockFill
								className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
								aria-hidden='true'
							/>
							Iniciar sesion
						</span>
					</button>
					<Link
						to='/register'
						className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
						Registrarse
					</Link>
				</form>
			</div>
			<Modal isActive={loginModal} showModal={showLoginModal}>
				<h5 className='modal-title'>Inicio de Sesión exitoso!</h5>
				<p className='modal-data'>Disfruta de nuestros cursos</p>
				<Button fontSize={'base'} padX={4} padY={2}>
					<Link to='/user'>Ir a mi Perfil</Link>
				</Button>
			</Modal>
		</div>
	);
};

export default Login;
