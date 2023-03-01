import { useSelector } from 'react-redux';
import { getFilteredCursos } from '../store/slices/cursosSlice';
import CardComponent from '../components/Cards/CardComponent';
import cursosBg from '../assets/img/cursosBackground.png';
import cursosSvg from '../assets/img/cursosSvg.png';
import logo from '../assets/img/LogoLightV2.svg';
import '../styles/Courses.css';
import CoursesContainer from '../components/CoursesContainer/CoursesContainer';

const Courses = () => {
	const filteredCursos = useSelector(getFilteredCursos);
	const coursesShow = filteredCursos.payload.cursos.filteredCursos;

	return (
		<div className='courses-container'>
			<div className='courses-hero'>
				<img src={cursosBg} alt='imagen de fondo' className='courses-hero-img' />
				<h2 className='courses-hero-title'>
					Los mejores cursos en tecnología y Diseño
				</h2>
				<h3 className='courses-hero-subtitle'>Alcanza el nivel que sueñas</h3>
			</div>
			<div className='courses-body'>
				{coursesShow.length === 0 ? (
					<CoursesContainer />
				) : (
					<div className='flex flex-col gap-10'>
						<h4 className='courses-body-title'>CURSOS FILTRADOS</h4>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards-container'>
							{coursesShow.map((e, index) => {
								return (
									<CardComponent
										key={index}
										id={e.id}
										acceso={e.acceso}
										instructor={e.instructor}
										nombreCurso={e.nombreCurso}
										miniaturaCurso={e.miniaturaCurso}
									/>
								);
							})}
						</div>
					</div>
				)}
			</div>
			<div className='courses-footer'>
				<h4 className='courses-footer-title'>
					¿Por qué aprender en <img src={logo} alt='logo' />?
				</h4>
				<p className='courses-footer-text'>
					Nos ocupamos seriamente por impulsar <span>tu talento</span>
				</p>
				<img
					src={cursosSvg}
					alt='imagen cualidades'
					className='courses-footer-img'
				/>
			</div>
		</div>
	);
};

export default Courses;
