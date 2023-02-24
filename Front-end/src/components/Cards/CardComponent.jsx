import React, { useEffect } from 'react';
import { BsFillPlayCircleFill, BsHeart } from 'react-icons/bs';
import { FaStar, FaRegStar, FaAngleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { usePutCursosUserMutation } from '../../store/api/apiSlice';
import Button from '../Button/Button';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso, id, acceso }) => {
	const [
		putCursosUser,
		{ isError, error, isSuccess },
	] = usePutCursosUserMutation();
	const idUsuario = useSelector((state) => state.auth.id);

	const handlePutCursos = () => {
		putCursosUser({ idUsuario, idCurso: id });
	};

	useEffect(() => {
		if (isSuccess) {
			console.log('Exito al agregar curso');
		} else if (isError) {
			console.log(error);
		}
	}, [isSuccess, isError]);

	return (
		<div className='card-container'>
			<div className='card-img-container'>
				<BsFillPlayCircleFill className='btn-play' />
				<img src={miniaturaCurso} alt='' />
			</div>
			<h5 className='card-title'>{nombreCurso}</h5>
			<p className='card-text'>
				<span className='card-title'>Instructor:</span> Alan Cejas
			</p>
			<div className='card-btn-container'>
				<div className='card-btn-fav'>
					<div className='card-btn-stars'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaRegStar />
					</div>
					<div
						className='flex flex-col items-center text-center font-bold cursor-pointer'
						onClick={handlePutCursos}>
						<BsHeart className='card-btn-heart' />
						<p>Agregar a tu lista de favoritos</p>
					</div>
				</div>
				<div className='card-btn-text'>
					<p>CURSO {acceso}</p>
					<Button fontSize={'24px'}>
						<Link to={`/courses/${id}`} className='flex items-center gap-3'>
							Ir al curso <FaAngleRight />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
