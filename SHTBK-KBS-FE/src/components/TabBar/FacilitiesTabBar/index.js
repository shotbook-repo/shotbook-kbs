import React, { useState } from 'react';
import MediumButton from '../../Buttons/MediumButton';
import SearchField from '../../SearchField';
import './facilitiestabbar.css';

const FacilitiesTabBar = () => {
	const [buttonText, setButtonText] = useState('Add Facilities');
	return (
		<>
			<div className='flex flex-row justify-between border shadow-md rounded-md align-middle p-2 mt-5'>
				<MediumButton text={buttonText} className='mr-24' />
				<SearchField />
			</div>
		</>
	);
};

export default FacilitiesTabBar;
