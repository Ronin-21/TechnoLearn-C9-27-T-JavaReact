import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchPost = (url, obj) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		axios
			.post(url, obj)
			.then((response) => {
				console.log(response);
				alert('Registro exitoso');
				//mostrar modal
				//redireccion;
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return { loading, error };
};
