import React from 'react';
import CardComponent from '../components/Cards/CardComponent';
import { useSelector } from 'react-redux';
import Loading from '../components/loading/loading';
import { useGetUsersQuery } from '../store/api/apiSlice';
import '../styles/profileUser.css';

const ProfileUser = () => {
	const userEmail = useSelector((state) => state.auth.userEmail);
	const { data, isError, error, isLoading } = useGetUsersQuery();
	const usuarioData = data?.usuarios.filter((e) => e.email === userEmail);
	// console.log(usuarioData[0].cursosUsuario[0]);

	//...........
	// console.log(usuarioData);
	// console.log(usuarioData[0].nombre);

	if (isLoading) return <Loading />;
	else if (isError) return <div>{error.message}</div>;

	return (
		<div className='profile-container'>
			<div className='title-welcome'>
				<h1>{}</h1>
				<h2>BIENVENIDO</h2>
			</div>
			<div className='deatils-profile'>
				<div className='profile-center'>
					<div className='img-profile-container'>
						<img src='' alt='aca poner foto' />
					</div>
					<div className='profile-details'>
						<p>{usuarioData[0].email}</p>
						<p>{usuarioData[0].nombre}</p>
					</div>
				</div>
			</div>
			<div className='your-courses-container'>
				<div className='title-your-courses'>
					<h3>Tus cursos</h3>
				</div>
				<div className='list-courses'>
					<CardComponent
						nombreCurso={usuarioData[0].cursosUsuario[0].nombreCurso}
						miniaturaCurso={usuarioData[0].cursosUsuario[0].miniaturaCurso}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProfileUser;
