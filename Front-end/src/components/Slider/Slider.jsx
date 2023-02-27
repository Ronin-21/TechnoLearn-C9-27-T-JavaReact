import React, { useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import './Slider.css';

const Slider = ({ sliderData }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const lenght = Object.keys(sliderData).length;

	const handlePrevSlide = () =>
		setCurrentImage(currentImage === 0 ? lenght - 1 : currentImage - 1);

	const handleNextSlide = () =>
		setCurrentImage(currentImage === lenght - 1 ? 0 : currentImage + 1);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			handleNextSlide();
		}, 3000);

		return () => clearInterval(autoSlide);
	}, [currentImage]);

	const handleSliderMark = (index) => setCurrentImage(index);

	return (
		<div className='slider-container'>
			<div className='slider-btn prev' onClick={handlePrevSlide}>
				<FaAngleLeft />
			</div>
			<div className='slider-img-container'>
				<img
					src={sliderData[currentImage].img}
					alt={sliderData[currentImage].alt}
				/>
			</div>
			<div className='slider-marks-container'>
				{sliderData.map((item, index) => {
					return (
						<div
							key={item.key}
							className={currentImage === index ? 'slider-mark active' : 'slider-mark'}
							onClick={() => handleSliderMark(index)}></div>
					);
				})}
			</div>
			<div className='slider-btn next' onClick={handleNextSlide}>
				<FaAngleRight />
			</div>
		</div>
	);
};

export default Slider;
