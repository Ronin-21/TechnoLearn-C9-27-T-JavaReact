import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
	return (
		<div className='search'>
			<input className='input' type='text' placeholder='Search'></input>
			<FaSistrix className='search-icon' />
		</div>
	);
};

export default SearchBar;
