import { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import './Testimonials.css';

export const Testimonials = ({ testimonialData }) => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const lenght = testimonialData.length;

	const handlePrevSlide = () =>
		setCurrentTestimonial(
			currentTestimonial === 0 ? lenght - 1 : currentTestimonial - 1
		);

	const handleNextSlide = () =>
		setCurrentTestimonial(
			currentTestimonial === lenght - 1 ? 0 : currentTestimonial + 1
		);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			handleNextSlide();
		}, 5000);

		return () => clearInterval(autoSlide);
	}, [currentTestimonial]);

	const handleSliderMark = (index) => setCurrentTestimonial(index);

	return (
		<section className='testimonial-container'>
			<h4 className='testimonial-title'>TESTIMONIOS</h4>
			<div className='testimonial-content'>
				<div className='slider-btn-test prev-btn' onClick={handlePrevSlide}>
					<FaAngleLeft />
				</div>
				<div className='testimonial-img-container flex flex-col items-center'>
					<img src={testimonialData[currentTestimonial].img} />
					<div className='testimonial-img-content'>
						<p className='text-3xl font-bold text-center'>
							{testimonialData[currentTestimonial].name}
						</p>
						<p className='text-2xl text-center'>
							{testimonialData[currentTestimonial].profession}
						</p>
					</div>
				</div>
				<div className='testimonial-text-content'>
					<p>{testimonialData[currentTestimonial].content}</p>
				</div>
				<div className='slider-btn-test next-btn' onClick={handleNextSlide}>
					<FaAngleRight />
				</div>
			</div>
			<div className='slider-marks-container'>
				{testimonialData.map((item, index) => {
					return (
						<div
							key={item.key}
							className={
								currentTestimonial === index
									? 'slider-mark-test active'
									: 'slider-mark-test'
							}
							onClick={() => handleSliderMark(index)}></div>
					);
				})}
			</div>
		</section>
	);
};
