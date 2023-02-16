import React, { useEffect, useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso, id }) => {
	const [cursoID, setCursoId] = useState(0);
	const navigator = useNavigate();

	useEffect(() => {
		if (cursoID !== 0) {
			console.log(cursoID);
			navigator(`/cursos/${id}`);
		}
	}, [cursoID]);

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
							<p className='text-slate-900 text-lg m-2 p-5'>$350</p>
							<button className='bg-blue-400 text-blue-700 p-2 rounded-xs h-10'>
								Suscríbete!
							</button>
							<button
								className='bg-blue-400 text-blue-700 p-2 rounded-xs h-10'
								onClick={() => setCursoId(id)}>
								Ver mas
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
