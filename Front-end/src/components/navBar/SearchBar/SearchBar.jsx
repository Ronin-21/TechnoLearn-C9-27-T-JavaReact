import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import './SearchBar.css';
import { useGetCursosQuery } from "../../../store/api/apiSlice";
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
	const [select, setSelect] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	const [courseId, setCourseId] = useState([]);
	const { data } = useGetCursosQuery();
	const navigator = useNavigate();
	
	useEffect(() => {
		if (courseId !== 0) {
			console.log(courseId);
			navigator(`/cursos/${courseId}`);
		}
	}, [courseId]);

	const handleInputChange = (event) => {
		const newselect = event.target.value;
		setSelect(newselect);

		if (newselect.trim() === '') {
			setSuggestions([]);
			return;
		  } else {
			const newSuggestions = data.filter(curso => curso.nombreCurso.toLowerCase().includes(newselect.toLowerCase()));
			setSuggestions(newSuggestions);
			console.log(newSuggestions);
		  }
	};

	const handleSuggestionClick = (suggestion) => {
		setCourseId(suggestion);
		setSuggestions([]);
		setSelect("");
	};

	return (
		<div className='search'>
			<div>
				<input className='search-input' type='text' placeholder='Search' value={select} onChange={handleInputChange}></input>
				<FaSistrix className='search-icon' />
			</div>
			<div className='suggestion-container'>
				{suggestions.length > 0 && (
					<ul>
						{suggestions.map((suggestion) => (
							<li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.id)} className='suggestion'>
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
