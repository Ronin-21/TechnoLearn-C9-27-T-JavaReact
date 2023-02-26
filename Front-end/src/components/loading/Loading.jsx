// import PropagateLoader from 'react-spinners/PropagateLoader';
import './Loading.css';

const Loading = () => {
	return (
		<div className='spinner-container'>
			<div class='lds-spinner'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
// const Loading = () => {
// 	return (
// 		<div className='h-screen flex justify-center items-center '>
// 			<div>
// 				{/* <PropagateLoader color="#6734FF" size={30} /> */}
// 			</div>
// 		</div>
// 	);
// };

export default Loading;
