import { useState } from 'react';

export const useField = ({ type }) => {
	const [value, setValue] = useState(type === 'checkbox' ? false : '');

	const onChange = (event) => {
		if (type === 'checkbox') {
			setValue(event.target.checked);
		} else {
			setValue(event.target.value);
		}
	};

	const clearValues = () => {
		if (type === 'checkbox') {
			setValue(!value);
		} else {
			setValue('');
		}
	};

	return { type, value, onChange, clearValues };
};
