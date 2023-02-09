import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';
import CardsCourses from '../components/CardsCourses';
import CardComponent from '../components/Cards/CardComponent';
import { Newsletter } from '../components/Newsletter';

const Home = () => {
	return (
		<>
			<Slider sliderData={bannerImages} />
			{/* 	<CardsCourses/> */}
			<div className='flex item-center justify-center min-h-screen container mx-auto p-3'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					<CardComponent />
					<CardComponent />
					<CardComponent />
					<CardComponent />
				</div>
			</div>
			<Newsletter />
		</>
	);
};

export default Home;
