import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';
import CardsCourses from '../components/CardsCourses';
import { Newsletter } from '../components/Newsletter';

const Home = () => {
	return (
		<>
			<Slider sliderData={bannerImages} />
			<CardsCourses />
			<Newsletter />
		</>
	);
};

export default Home;
