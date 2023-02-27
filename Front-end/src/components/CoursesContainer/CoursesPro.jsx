import { useGetCursosQuery } from '../../store/api/apiSlice';
import CardComponent from '../Cards/CardComponent';
import Loading from '../loading/Loading';

const CoursesPro = () => {
	const { data, isLoading } = useGetCursosQuery();
	// Loader
	if (isLoading) return <Loading />;

	return (
		<>
			<h4 className='courses-body-title'>CURSOS PRO</h4>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards-container'>
				{data.cursos
					.filter((e) => e.acceso === 'PRO')
					.map((e) => {
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
		</>
	);
};
export default CoursesPro;
