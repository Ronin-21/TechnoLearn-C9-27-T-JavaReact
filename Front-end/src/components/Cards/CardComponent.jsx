import React from 'react';
import imagen from './banner3.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso }) => {
	return (
		<div>
			{/* <--Grid--> */}
			<div>
				{/* Card */}
				<div className='card'>
					<div className='bg-slate-300 flex flex-col card-container'>
						<div className='rounded-xl overflow-hidden relative'>
							<BsFillPlayCircleFill className='btn-play' />
							<img src={miniaturaCurso} alt='' />
						</div>
						<h5 className='font-bold text-lg text-center mt-3'>{nombreCurso}</h5>
						<p className='text-slate-500 text-lg text-center mt-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.
						</p>
						<div className='columns-auto flex items-center justify-center gap-4  '>
							<p className='text-slate-900 text-lg m-2 p-5'>350</p>
							<button className='bg-blue-400 text-blue-700 p-2 rounded-xs h-10'>
								Comprar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
