import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../../components/CustomHooks/useFetch';
import config from '../../../src/configs/config.json';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const url = config.API_URL + '/getEvents';
const requestBody = {
	flag: 'all',
};
const CalendarPage = () => {
	const { type } = useParams();
	const [eventState, setEventState] = useState([]);
	const { responseData } = useFetch(url, requestBody);
	const handleDateClick = (arg) => {
		alert(arg.dateStr);
	};

	useEffect(() => {
		if (responseData.data) {
			let events = [];

			responseData.data.map((data) => {
				events.push({
					title: data.event.name,
					start: data.event.start_date,
					end: data.event.end_date,
				});
			});

			setEventState(events);
		}
	}, [responseData]);
	return (
		<>
			{console.log(eventState)}
			<div className='p-8 w-full h-full'>
				<div className='mb-4'>
					<Link to={`/${type}`} className='back-link'>
						Back
					</Link>
				</div>
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
					initialView='dayGridMonth'
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
					}}
					events={eventState}
				/>
			</div>
		</>
	);
};

export default CalendarPage;
