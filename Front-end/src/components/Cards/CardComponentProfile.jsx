import { useState } from 'react';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { FaAngleRight } from 'react-icons/fa';
import { useModal } from '../../hook/useModal';
import ComponentViewCourses from '../ComponentViewCourses/ComponentViewCourses';
import Modal from '../Modal/Modal';
import './Card.css';

const CardComponentProfile = ({
	nombreCurso,
	miniaturaCurso,
	id,
	data,
	instructor,
}) => {
	const [profileModal, showprofileModal] = useModal(true);
	const [viewId, setViewId] = useState(null);

	const handlePlay = () => {
		showprofileModal();
		setViewId(id);
	};

	return (
		<div className='card-containerProfile'>
			<div className='card-img-container'>
				<BsFillPlayCircleFill className='btn-play' />
				<img src={miniaturaCurso} alt='' />
			</div>
			<h5 className='card-title'>{nombreCurso}</h5>
			<p className='card-text'>
				<span className='font-bold text-2xl'>Instructor: </span>
				{instructor}
			</p>
			<button className='btn-Card' onClick={handlePlay}>
				Reproducir <FaAngleRight />
			</button>
			<Modal isActive={profileModal} showModal={showprofileModal}>
				<ComponentViewCourses data={data} idCard={viewId} isActive={profileModal} />
			</Modal>
		</div>
	);
};

export default CardComponentProfile;
