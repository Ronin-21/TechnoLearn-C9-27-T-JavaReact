import ReactDOM from 'react-dom';
import { FaWindowClose } from 'react-icons/fa';
import './Modal.css';

function Modal({ children, isActive, showModal }) {
	const handleModalPropagation = (e) => e.stopPropagation();

	return ReactDOM.createPortal(
		<div className={`overlay ${!isActive && 'hidden'}`} onClick={showModal}>
			<div className='modal' onClick={handleModalPropagation}>
				<FaWindowClose className='modal-close' onClick={showModal} />
				{children}
			</div>
		</div>,
		document.getElementById('modal')
	);
}

export default Modal;
