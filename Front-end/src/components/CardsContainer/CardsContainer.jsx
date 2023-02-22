import React from 'react';
import { useGetCursosQuery } from '../../store/api/apiSlice';
import CardComponent from '../Cards/CardComponent';
import './CardsContainer.css';

export const CardsContainer = () => {
	const { data, isLoading, isError, error } = useGetCursosQuery();

	if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>{error.message}</div>;

	return (
		<section className='courses-container'>
			<h4 className='courses-title'>CURSOS</h4>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cards-container'>
				{data.cursos.slice(0, 6).map((e) => {
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
		</section>
	);
};
