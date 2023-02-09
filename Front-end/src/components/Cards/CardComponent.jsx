import React from 'react';
import imagen from './banner3.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import './Card.css';

const CardComponent = () => {
	return (
		<div>
			{/* <--Grid--> */}
			<div>
				{/* Card */}
				<div className=' card'>
					<div className='bg-slate-300 flex flex-col'>
						<div className='rounded-xl overflow-hidden relative'>
							<BsFillPlayCircleFill className='btn-play' />
							<img src={imagen} alt='' />
						</div>
						<h5 className='text-2xl md:text-3xl font-medium text-center mt-3'>
							Camp Batu Gede
						</h5>
						<p className='text-slate-500 text-lg text-center mt-3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, beatae.
						</p>
						<div className='columns-auto flex items-center justify-center gap-4  '>
							<p className='text-slate-900 text-lg m-2 p-5'>350</p>
							{/* <div>
								<a
									href='#'
									className='text-center bg-blue-400 text-blue-700 py-2 rounded-xs '>
									a lista de deseados
								</a>
							</div> */}

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
