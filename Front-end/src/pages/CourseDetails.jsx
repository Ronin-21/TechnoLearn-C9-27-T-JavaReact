import React, { useRef, useState } from 'react';
import { BsHeart } from 'react-icons/bs';
import { FaStar, FaRegStar } from 'react-icons/fa';
import {
	useGetCursoByIDQuery,
	usePutCursosUserMutation,
} from '../store/api/apiSlice';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import imgBanner from '../assets/img/users.png';
import '../styles/coursesDetails.css';
import Dropdown from '../components/Dropdown/Dropdown';

const CourseDetails = () => {
	// Trae el ID desde la url
	const params = useParams();
	const { data: curso, isLoading } = useGetCursoByIDQuery(params.id);

	// Agrega el curso al perfil del usuario
	const [putCursosUser] = usePutCursosUserMutation();
	const idUsuario = useSelector((state) => state.auth.id);

	const handlePutCursos = () => {
		putCursosUser({ idUsuario, idCurso: curso.id });
	};

	// Loader
	if (isLoading) return <div>Loading...</div>;

	return (
		<div className='curso-container'>
			<div className='curso-detalle'>
				<div className='curso-detalle-video'>
					<div
						className='flex flex-row-reverse items-center font-bold cursor-pointer gap-3'
						onClick={handlePutCursos}>
						<BsHeart className='curso-btn-heart' />
						<p>Agregar a tu lista de favoritos</p>
					</div>
					<iframe
						width='100%'
						height='370px'
						src={'https://www.youtube.com/embed/' + curso.id_video}
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						allowFullScreen></iframe>
					<div className='curso-btn-stars'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaRegStar />
					</div>
				</div>
				<div className='curso-detalle-info'>
					<h4 className='curso-detalle-title'>{curso.nombreCurso}</h4>
					<p className='curso-detalle-content'>{curso.descripcionCurso}</p>
					<p className='curso-detalle-instructor'>
						<span>Instructor: </span>
						{curso.instructor}
					</p>
					<div className='flex flex-col'>
						<p>
							<span>Duración: </span>48 hs
						</p>
						<p>
							<span>Lenguaje: </span>Español
						</p>
						<p>
							<span>Certificado: </span>Digital
						</p>
						<p>
							<span>Nivel: </span>Principiante
						</p>
						<p>
							<span>Fecha del actualizacion: </span>21 de Febrero de 2023
						</p>
					</div>
					<Button
						fontSize={'32px'}
						bg={'var(--secondaryColor)'}
						color={'var(--tertiaryColor)'}>
						<Link to={'/planes'}>Contrata Pro</Link>
					</Button>
				</div>
			</div>
			<div className='curso-programa'>
				<div className='curso-programa-title'>
					<h4>PROGRAMA</h4>
				</div>
				<div className='curso-programa-dropdown'>
					{curso.urls.map((e, index) => {
						return (
							<Dropdown
								key={index}
								titulo={e.titulo_video}
								miniatura={e.miniatura_video}
								descripcion={e.descripcion_video}
							/>
						);
					})}
				</div>
			</div>
			<div className='curso-banner'>
				<div className='curso-banner-content'>
					<h4 className='curso-banner-title'>¿PARA QUIÉN ES EL CURSO?</h4>
					<p className='curso-banner-text'>
						El curso esta diseñado para las personas que quieran empezar a aprender
						JavaScript y busquen formalizar una carrera en el mundo dev.
					</p>
					<Button
						fontSize={'32px'}
						bg={'var(--secondaryColor)'}
						color={'var(--tertiaryColor)'}>
						<Link to={'/planes'}>Contrata Pro</Link>
					</Button>
				</div>
				<div>
					<img src={imgBanner} alt='users' />
				</div>
			</div>
			<div className='curso-reseñas'>
				<h4 className='curso-reseñas-title'>RESEÑAS</h4>
				<div className='curso-reseñas-content'>
					<div className='curso-reseñas-user'>
						<div className='flex items-center gap-10'>
							<div className='curso-reseñas-img'>
								<span>MJ</span>
							</div>
							<div className='flex flex-col gap-5'>
								<span>Marisol Juárez</span>
								<p>Es un curso muy bien explicado a detalles</p>
							</div>
						</div>
						<div className='curso-reseñas-stars'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaRegStar />
						</div>
					</div>
					<div className='curso-reseñas-user'>
						<div className='flex items-center gap-10'>
							<div className='curso-reseñas-img'>
								<span>MH</span>
							</div>
							<div className='flex flex-col gap-5'>
								<span>Mauricio Hernández</span>
								<p>
									Buena elección, recomendable para comenzar a programar en este
									lenguaje.
								</p>
							</div>
						</div>
						<div className='curso-reseñas-stars'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaRegStar />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
