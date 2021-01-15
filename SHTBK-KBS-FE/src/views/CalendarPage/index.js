import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

const CalendarPage = () => {
	return (
		<>
			<div className='p-8 w-full h-full'>
				<FullCalendar
					plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
					initialView='dayGridMonth'
					headerToolbar={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
					}}
					events='https://fullcalendar.io/demo-events.json'
				/>
			</div>
		</>
	);
};

export default CalendarPage;
