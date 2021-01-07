import React, { useState } from 'react';
import MediumButton from '../../Buttons/MediumButton';
import SearchField from '../../SearchField';
import './eventstabbar.css';

const EventsTabBar = ({ selectedMonth, updateMonth, months }) => {
	const [buttonText, setButtonText] = useState('Add Events');
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-2 mt-5 w-full'>
				<div className='flex-1 '>
					<MediumButton text={buttonText} />
					<select
						onChange={(e) => {
							updateMonth(e.target.value);
						}}
					>
						{months.map((month) => {
							return (
								<option value={month.month_name}>
									{month.month_name}
								</option>
							);
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
