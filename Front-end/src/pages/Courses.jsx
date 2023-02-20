import React, { useEffect, useState } from 'react';
import CardComponent from '../components/Cards/CardComponent';
import { useGetCursosQuery } from '../store/api/apiSlice';
import { useDispatch, useSelector } from "react-redux";
import { getFilteredCursos } from '../store/slices/cursosSlice';
const Courses = () => {
	const { data, isLoading, isError, error } = useGetCursosQuery();
	const filteredCursos = useSelector(getFilteredCursos);
	const coursesShow = filteredCursos.payload.cursos.filteredCursos;
	console.log(coursesShow);
	

	if (isLoading) return <div>Loading...</div>;
	else if (isError) return <div>{error.message}</div>;
	//console.log(data);
	return (
		<div className='flex item-center justify-center min-h-screen container mx-auto my-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
			{coursesShow.length === 0 ? data.cursos.map((e, index) => {
					return (
						<CardComponent
							key={e.id}
							id={e.id}
							nombreCurso={e.nombreCurso}
							miniaturaCurso={e.miniaturaCurso}
						/>
					);
				}):
			coursesShow.map((e, index) => {
					return (
						<CardComponent
							key={e.id}
							id={e.id}
							nombreCurso={e.nombreCurso}
							miniaturaCurso={e.miniaturaCurso}
						/>
					);
				})
				
				}
				
			</div>
		</div>
	);
};

export default Courses;
