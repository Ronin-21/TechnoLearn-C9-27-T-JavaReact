import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';

const Home = () => {
	return (
		<>
			<Slider sliderData={bannerImages} />
		</>
	);
};

export default Home;
