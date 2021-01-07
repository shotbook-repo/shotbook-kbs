import React from 'react';
import { Link } from 'react-router-dom';
import './maineventcard.css';

const MainEventCard = ({ event }) => {
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-2 mt-5 w-full'>
				<div>{event.name}</div>
				<div>{event.start_date}</div>
				<div>{event.facility_id}</div>
			</div>
		</>
	);
};

export default MainEventCard;
