import React from 'react';
import './Button.css';

const Button = ({ fontSize, padX, padY, children }) => {
	return (
		<button className={`cta text-${fontSize} px-${padX} py-${padY} `}>
			{children}
		</button>
	);
};

export default Button;
