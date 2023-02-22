import React from 'react';
import './Button.css';

const Button = ({
	fontSize,
	padX,
	padY,
	bg = 'var(--primaryColor)',
	color = '#fff',
	children,
}) => {
	return (
		<button
			style={{ backgroundColor: `${bg}`, color: `${color}` }}
			className={`cta text-${fontSize} px-${padX} py-${padY} `}>
			{children}
		</button>
	);
};

export default Button;
