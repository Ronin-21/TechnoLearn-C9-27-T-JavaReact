import { useGetCursosQuery } from '../../store/api/apiSlice';
import CardComponent from '../Cards/CardComponent';
import Loading from '../loading/Loading';
import './CardsContainer.css';

export const CardsContainer = () => {
	const { data, isLoading, isError, error } = useGetCursosQuery();

	// Loader
	if (isLoading) return <Loading />;

	return (
		<section className='course-section'>
			<div className='courses-container'>
				<h4 className='courses-title'>CURSOS</h4>
				<div className='courses-tags'>
					<button>Más vistos</button>
					<button>Nuevos</button>
					<button>Mejor calificados</button>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards-container'>
					{data.cursos.slice(0, 6).map((e) => {
						return (
							<CardComponent
								key={e.id}
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
		</section>
	);
};
