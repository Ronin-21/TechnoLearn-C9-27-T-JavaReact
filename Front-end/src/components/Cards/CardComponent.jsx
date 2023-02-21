import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso, id }) => {
	return (
		<div>
			{/* <--Grid--> */}
			<div>
				{/* Card */}
				<div className='card-container'>
					<div className='card-img-container'>
						<BsFillPlayCircleFill className='btn-play' />
						<img src={miniaturaCurso} alt='' />
					</div>
					<h5 className='font-bold text-lg text-center mt-3'>{nombreCurso}</h5>
					<p className='text-slate-500 text-lg text-center mt-3'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.
					</p>
					<div className='columns-auto flex items-center justify-center gap-4  '>
						<Button
							padX={4}
							padY={2}
							bg={'var(--secondaryColor)'}
							color={'var(--primaryColor)'}>
							<Link to='/'>Ver planes</Link>
						</Button>
						<Button padX={4} padY={2}>
							<Link to={`/courses/${id}`}>Ver mas</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
