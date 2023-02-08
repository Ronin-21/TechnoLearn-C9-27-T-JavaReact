import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { bannerImages } from '../../utils/bannerImages';
import './Slider.css';

const Slider = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const handlePrevSlide = () => setCurrentImage(currentImage - 1);
	const handleNextSlide = () => setCurrentImage(currentImage + 1);

	return (
		<div className='slider-container'>
			<div className='slider-btn prev'>
				<FaAngleLeft onClick={handlePrevSlide} />
			</div>
			<img src={bannerImages[currentImage].img} alt='' />
			<div className='slider-btn next'>
				<FaAngleRight onClick={handleNextSlide} />
			</div>
		</div>
	);
};

export default Slider;
