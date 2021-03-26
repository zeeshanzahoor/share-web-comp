import React, { useReducer, useRef, useCallback } from 'react';

import { Input, CheckBox } from '@vakif/ui';

export default {
	title: 'Components/Input',
	component: Input,
};
export const Primary = () => {
	return (
		<div>
			<Input />
			<CheckBox />
		</div>
	);
};
export const Secondary = () => <Input />;
