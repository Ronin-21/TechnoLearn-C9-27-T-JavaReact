import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import './ModalVideo.css';

function ModalVideo({ children, isActive, showModal }) {
	const handleModalPropagation = (e) => e.stopPropagation();

	return (
		<div className={`overlay ${!isActive && 'hidden'}`} onClick={showModal}>
			<div className='modal' onClick={handleModalPropagation}>
				<FaWindowClose className='modal-close' onClick={showModal} />
				{children}
			</div>
		</div>
	);
}

export default ModalVideo;