import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import './SearchBar.css';
import { useGetCursosQuery } from '../../../store/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getFilteredCursos } from '../../../store/slices/cursosSlice';

const SearchBar = () => {
	const [select, setSelect] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [courseId, setCourseId] = useState([]);
	const { data } = useGetCursosQuery();
	const dispatch = useDispatch();
	const navigator = useNavigate();

	const handleInputChange = (event) => {
		const newselect = event.target.value;
		setSelect(newselect);

		if (newselect.trim() === '') {
			setSuggestions([]);
			return;
		} else {
			const newSuggestions = data.cursos.filter((curso) =>
				curso.nombreCurso.toLowerCase().includes(newselect.toLowerCase())
			);
			setSuggestions(newSuggestions);
		}
	};

	const handleSuggestionClick = (suggestion) => {
		// setCourseId(suggestion);
		navigator(`/courses/${suggestion}`);
		setSuggestions([]);
		setSelect('');
	};

	const filterCourses = () => {
		dispatch(getFilteredCursos(suggestions));
		//console.log(dispatch(getFilteredCursos(suggestions)));
		setSuggestions([]);
		setSelect('');
		navigator(`/courses/${courseId}`);
	};

	// useEffect(() => {
	// 	if (courseId !== null) {
	// 		console.log(courseId);
	// 		navigator(`/courses/${courseId}`);
	// 	}
	// }, [courseId]);

	return (
		<div className='search'>
			<div>
				<input
					className='search-input'
					type='text'
					placeholder='Search'
					value={select}
					onChange={handleInputChange}></input>
				<FaSistrix className='search-icon' onClick={() => filterCourses()} />
			</div>
			<div className='suggestion-container'>
				{suggestions.length > 0 && (
					<ul>
						{suggestions.map((suggestion) => (
							<li
								key={suggestion.id}
								onClick={() => handleSuggestionClick(suggestion.id)}
								className='suggestion'>
								{suggestion.nombreCurso}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default SearchBar;
