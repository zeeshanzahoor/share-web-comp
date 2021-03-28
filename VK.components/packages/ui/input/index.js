import React from 'react';
export const Input = () => {
	React.useCallback(() => {
		console.log('hellow world');
	});
	return <input style={{ border: '1px solid green' }} type='text'></input>;
};
