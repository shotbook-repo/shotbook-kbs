import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './maineventcard.css';

const MainEventCard = ({ event }) => {
	const convertDateFormat = (date) => {
		let d = new Date(date);
		let month = '' + (d.getMonth() + 1);
		let day = '' + d.getDate();
		let year = d.getFullYear();
		let hour = d.getHours();
		let min = d.getMinutes();
		let ampm = hour >= 12 ? 'pm' : 'am';
		hour = hour % 12;
		hour = hour ? hour : 12; // the hour '0' should be '12'
		min = min < 10 ? '0' + min : min;
		let strTime = hour + ':' + min + ampm;

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		// let fullDate = [day, month, year].join('/') + ' ' + strTime;
		return [day, month, year].join('/');
	};

	return (
		<>
			<div className='event-card'>
				<div className='w-5/12 text-3xl'>{event.name}</div>
				<div className='w-5/12 text-2xl'>{event.facility_id}</div>
				<div className='w-1/12 text-2xl mr-4'>
					{convertDateFormat(event.start_date)}
				</div>
				<div className='w-1/12 text-right pr-4'>
					<FontAwesomeIcon icon={faInfoCircle} color='#707070' />
				</div>
			</div>
		</>
	);
};

export default MainEventCard;
