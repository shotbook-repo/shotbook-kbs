import React, { useState } from 'react';
import MediumButton from '../../Buttons/MediumButton';
import SearchField from '../../SearchField';
import './eventstabbar.css';
import monthsData from '../../../months';

const EventsTabBar = () => {
	const [buttonText, setButtonText] = useState('Add Events');
	const [selectedMonth, setSelectedMonth] = useState('January');
	const [months, setMonths] = useState(monthsData);
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-2 mt-5 w-full'>
				<div className='flex-1 '>
					<MediumButton text={buttonText} />
					<select>
						{months.map((month) => {
							return <option>{month.month_name}</option>;
						})}
					</select>
				</div>
				<div className='flex-1 text-center'>
					<div className='date-title'>{selectedMonth} 2020</div>
				</div>
				<div className='flex-1 text-right'>
					<SearchField />
				</div>
			</div>
		</>
	);
};

export default EventsTabBar;
