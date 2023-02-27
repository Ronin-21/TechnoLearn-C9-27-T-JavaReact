import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
	return (
		<div className='search'>
			<input className='search-input' type='text' placeholder='Search'></input>
			<FaSistrix className='search-icon' />
		</div>
	);
};

export default SearchBar;
