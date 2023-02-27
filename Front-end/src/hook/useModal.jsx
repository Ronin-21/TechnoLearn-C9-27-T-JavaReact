import { useState } from 'react';

export const useModal = () => {
	const [isActive, setIsActive] = useState(false);

	const showModal = () => setIsActive(!isActive);

	return [isActive, showModal];
};
