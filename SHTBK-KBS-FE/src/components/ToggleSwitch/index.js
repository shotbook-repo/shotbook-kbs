import React from 'react';
import './toggleswitch.css';

const index = () => {
	return (
		<label className='switch'>
			<input type='checkbox' />
			<span className='toggle-switch' />
		</label>
	);
};

export default ToggleSwitch;
