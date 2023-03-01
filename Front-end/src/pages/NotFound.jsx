import { Link } from 'react-router-dom';
import imgError from '../assets/img/imgError.png';
import textError from '../assets/img/textError.png';
import '../styles/NotFound.css';

const NotFound = () => {
	return (
		<>
			<div className='notfound-container'>
				<div className='flex flex-col items-center gap-10'>
					<img className='w-2/3 mb-10' src={imgError} alt='Not Found' />
					<img src={textError} alt='Not Found' />
				</div>
				<div className='text'>
					<p>
						Pagina no encontrada, te sugerimos<Link to='/'> ir al Home</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default NotFound;
