import React, { useState } from 'react';
import MediumButton from '../../Buttons/MediumButton';
import './calendartabbar.css';
import monthsData from '../../../months';

const CalendarTabBar = () => {
	const [buttonText, setButtonText] = useState('Add Events');
	const [selectedMonth, setSelectedMonth] = useState('January');
	const [months, setMonths] = useState(monthsData);
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-2 mt-5 w-full items-center'>
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
				<div className='flex-1'>
					<div className='filter-view divide-x-2 divide-gray-400'>
						<div className='px-3 py-2'>Month</div>
						<div className='px-3 py-2 font-light'>Week</div>
						<div className='px-3 py-2 font-light'>Day</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CalendarTabBar;
