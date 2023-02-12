import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';
import CardComponent from '../components/Cards/CardComponent';
import { Newsletter } from '../components/Newsletter';
import { useFetch } from '../hook/useFetch';

const Home = () => {
	const { data, loading, error } = useFetch(
		'https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api/cursos/list'
	);

	// const { data: data2 } = useFetch(
	// 	'https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api/cursos/2'
	// );

	const { data: data3 } = useFetch(
		'https://technolearn-c9-27-t-javareact-preproduction.up.railway.app/api/todos'
	);

	console.log(data3);

	return (
		<>
			<Slider sliderData={bannerImages} />
			<div className='flex item-center justify-center min-h-screen container mx-auto p-3'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{data.map((e, index) => {
						return (
							<CardComponent
								key={e.id}
								nombreCurso={e.nombreCurso}
								miniaturaCurso={e.miniaturaCurso}
							/>
						);
					})}
				</div>
				{/* <div>
					<CardComponent
						nombreCurso={data2.nombreCurso}
						miniaturaCurso={data2.miniaturaCurso}
					/>
				</div> */}
			</div>
			<Newsletter />
		</>
	);
};

export default Home;
