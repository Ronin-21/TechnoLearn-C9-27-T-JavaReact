import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';
import './ComponentViewCourses.css';

const ComponentViewCourses = ({ data, idCard, isActive }) => {
	// Logica para el slider
	/* seccion donde permite setear que video ver recorrer un array a travez
	de un boton tipo flecha */
	const [currentVideo, setCurrentVideo] = useState(0);

	const handlePrevSlide = () =>
		setCurrentVideo(currentVideo === 0 ? lenght - 1 : currentVideo - 1);

	const handleNextSlide = () =>
		setCurrentVideo(currentVideo === lenght - 1 ? 0 : currentVideo + 1);

	/* esta variable lo que hace es juntar todas las id relacionadas con el key
  que viene de youtube como codigo para reproducir el curso o recurso pedido */
	let videosList = data?.cursosUsuario
		?.filter((e) => e.id === idCard)[0]
		?.urls.map((e) => e.id_video);

	if (videosList === undefined) {
		videosList = [''];
	}

	let lenght = videosList.length;

	return (
		<div className='slider-container-video'>
			<div className='btn-video left' onClick={handlePrevSlide}>
				<FaAngleLeft />
			</div>
			<ReactPlayer
				url={`https://www.youtube.com/embed/${videosList[currentVideo]}`}
				playing={isActive}
				width='1300px'
				height='700px'
			/>
			{/* <div className='slider-video-container'>
				<iframe
					src={`https://www.youtube.com/embed/${videosList[currentVideo]}`}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>
			</div> */}
			<div className='btn-video right' onClick={handleNextSlide}>
				<FaAngleRight />
			</div>
		</div>
	);
};

export default ComponentViewCourses;
