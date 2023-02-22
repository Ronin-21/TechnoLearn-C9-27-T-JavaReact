import React, { useState, useEffect } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Slider.css';

const Slider = ({ sliderData }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const lenght = sliderData.length;

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
				<img src={sliderData[currentImage].img} />
				<div className='slider-content'>
					<div>
						<h2 className='slider-subtitle'>{sliderData[currentImage].pretitle}</h2>
						<h1 className='slider-title'>{sliderData[currentImage].title}</h1>
						<h3 className='slider-text'>{sliderData[currentImage].subtitle}</h3>
					</div>
					<Button
						fontSize={'3xl'}
						padX={4}
						padY={2}
						bg={'var(--secondaryColor)'}
						color={'var(--primaryColor)'}>
						<Link to='/'>Contrata Pro</Link>
					</Button>
				</div>
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
