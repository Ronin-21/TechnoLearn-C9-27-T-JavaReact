import React from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	useGetUsersQuery,
	usePutCoursesUserMutation,
} from '../../store/api/apiSlice';
import './Card.css';

const CardComponent = ({ nombreCurso, miniaturaCurso, id }) => {
	//...........
	const userEmail = useSelector((state) => state.auth.userEmail);
	const { data } = useGetUsersQuery();
	const usuarioDataId = data?.usuarios
		.filter((e) => e.email === userEmail)
		.map((e) => e.id)
		.join();
	// console.log(usuarioDataId);
	// console.log(data);

	const [putCoursesUser, { isError, error }] = usePutCoursesUserMutation();
	const putCurso = { idUsuario: parseInt(usuarioDataId), idCurso: id };

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
							<Link
								to='/'
								className='bg-blue-400 text-blue-700 p-2 rounded-xs h-10'
								onClick={() => putCoursesUser(putCurso)}>
								Agregar
							</Link>
							<Link
								to={`/courses/${id}`}
								className='bg-blue-400 text-blue-700 p-2 rounded-xs h-10'>
								Ver mas
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardComponent;
