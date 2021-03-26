import React from 'react';
import { Print, Core } from '@vakif/core';
export const Input = () => {
	React.useEffect(() => {
		Print('hellow');
	});
	const [value, setValue] = React.useState('');
	return (
		<input
			value={value}
			onChange={(event) => setValue(event.target.value)}
			type='text'
		></input>
	);
};
