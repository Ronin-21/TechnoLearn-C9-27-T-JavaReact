import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';
import { Newsletter } from '../components/Newsletter/Newsletter';
import CardComponent from '../components/Cards/CardComponent';
import { useGetCursosQuery } from '../store/api/apiSlice';

const Home = () => {
	const { data, isLoading, isError, error } = useGetCursosQuery();

	if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>{error.message}</div>;

	return (
		<>
			<Slider sliderData={bannerImages} />
			<div className='flex item-center justify-center min-h-screen container mx-auto p-3'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{data.slice(0, 6).map((e) => {
						return (
							<CardComponent
								key={e.id}
								id={e.id}
								nombreCurso={e.nombreCurso}
								miniaturaCurso={e.miniaturaCurso}
							/>
						);
					})}
				</div>
			</div>
			<Newsletter />
		</>
	);
};

export default Home;
