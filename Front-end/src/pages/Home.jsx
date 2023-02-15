import React from 'react';
import Slider from '../components/Slider/Slider';
import { bannerImages } from '../utils/bannerImages';
import { Newsletter } from '../components/Newsletter/Newsletter';
import CardComponent from '../components/Cards/CardComponent';
import Modal from '../components/Modal/Modal';
import { useGetCursosQuery, useGetUsersQuery } from '../store/api/apiSlice';
import { useModal } from '../hook/useModal';
import { useSelector } from 'react-redux';

const Home = () => {
	const [cardModal, showCardModal] = useModal();

	const selectedCourse = useSelector((state) => state.cursos[0]);

	const { data, isLoading, isError, error } = useGetCursosQuery();

	if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>{error.message}</div>;

	return (
		<>
			<Slider sliderData={bannerImages} />
			<div className='flex item-center justify-center min-h-screen container mx-auto p-3'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{data.map((e, index) => {
						return (
							<CardComponent
								key={e.id}
								id={e.id}
								nombreCurso={e.nombreCurso}
								miniaturaCurso={e.miniaturaCurso}
								showModal={showCardModal}
							/>
						);
					})}
				</div>
				{/* <Modal isActive={cardModal} showModal={showCardModal}>
					<CardComponent
						nombreCurso={selectedCourse.nombreCurso}
						miniaturaCurso={selectedCourse.miniaturaCurso}
						showModal={showCardModal}
					/>
				</Modal> */}
			</div>
			<Newsletter />
		</>
	);
};

export default Home;
