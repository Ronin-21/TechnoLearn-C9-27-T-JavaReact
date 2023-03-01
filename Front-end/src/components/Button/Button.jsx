import './Button.css';

const Button = ({
	fontSize,
	bg = 'var(--primaryColor)',
	color = '#fff',
	type,
	children,
}) => {
	return (
		<button
			type={type}
			style={{
				backgroundColor: `${bg}`,
				color: `${color}`,
				fontSize: `${fontSize}`,
			}}
			className='cta'>
			{children}
		</button>
	);
};

export default Button;
