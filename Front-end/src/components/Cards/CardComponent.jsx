import React from 'react';
import { BsFillPlayCircleFill, BsHeart } from 'react-icons/bs';
import { FaStar, FaRegStar, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso, id }) => {
	return (
		<div className='card-container'>
			<div className='card-img-container'>
				<BsFillPlayCircleFill className='btn-play' />
				<img src={miniaturaCurso} alt='' />
			</div>
			<h5 className='card-title'>{nombreCurso}</h5>
			<p className='card-text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.
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
					<div className='flex flex-col items-center text-center font-bold'>
						<BsHeart className='card-btn-heart' />
						<p>Agregar a tu lista de favoritos</p>
					</div>
				</div>
				<div className='card-btn-text'>
					<p>CURSO FREE</p>
					<Button fontSize={'2xl'} padX={4} padY={2}>
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
