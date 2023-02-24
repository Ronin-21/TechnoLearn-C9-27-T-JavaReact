import React from 'react';
import { useGetUserByIDQuery } from '../store/api/apiSlice';
import CardComponent from '../components/Cards/CardComponent';
import '../styles/profileUser.css';
import { useSelector } from 'react-redux';

const ProfileUser = () => {
	// Trae datos del usuario desde el store
	const datosUsuario = useSelector((state) => state.auth);
	// Trae datos Actualizados del usuario desde la API
	const { data } = useGetUserByIDQuery(datosUsuario.id, {
		refetchOnMountOrArgChange: true,
	});

	return (
		<div className='profile-container'>
			<div className='title-welcome'>
				<h2>BIENVENIDO</h2>
			</div>
			<div className='deatils-profile'>
				<div className='profile-center'>
					<div className='img-profile-container'>
						<img src='' alt='' />
					</div>
					<div className='profile-details'>
						<p>Lorem, ipsum dolor.</p>
						<p>Lorem, ipsum dolor.</p>
					</div>
				</div>
			</div>
			<div className='your-courses-container'>
				<div className='title-your-courses'>
					<h3>Tus cursos</h3>
				</div>
				<div className='flex flex-wrap items-center justify-center gap-10'>
					{data?.cursosUsuario.map((e) => {
						return (
							<CardComponent
								key={e.id}
								id={e.id}
								acceso={e.acceso}
								nombreCurso={e.nombreCurso}
								miniaturaCurso={e.miniaturaCurso}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProfileUser;
