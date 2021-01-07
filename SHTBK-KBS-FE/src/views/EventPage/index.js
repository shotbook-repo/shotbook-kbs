import React, { useState } from 'react';
import MainEventCard from '../../components/Cards/MainEventCard';
import EventsTabBar from '../../components/TabBar/EventsTabBar';
import TitleBar from '../../components/TitleBar';
import mockEvents from '../../mock-event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useFetch } from '../../components/CustomHooks/useFetch';
import config from '../../configs/config.json';
import monthsData from '../../months';
import './eventpage.css';

const EventPage = () => {
	const [title, setTitle] = useState('Events');
	const [selectedMonth, setSelectedMonth] = useState('January');
	const [monthNo, setMonthNo] = useState(0);
	const [months, setMonths] = useState(monthsData);
	const url = config.API_URL + '/getEvents';
	const [requestBody, setRequestBody] = useState({
		flag: 'all',
	});
	const { responseData } = useFetch(url, requestBody);

	const updateMonth = (month) => {
		setSelectedMonth(month);
		// console.log('month', month_no);
	};

	return (
		<>
			{console.log(responseData)}
			<div className='body'>
				<TitleBar title={title} />
				<EventsTabBar
					selectedMonth={selectedMonth}
					updateMonth={updateMonth}
					months={months}
				/>

				{responseData.data ? (
					responseData.data.length > 0 ? (
						responseData.data.map((event) => {
							return <MainEventCard key={event.id} event={event} />;
						})
					) : (
						<div className='text-center my-2'>No current events.</div>
					)
				) : (
					<div className='text-center my-2'>Fetching data...</div>
				)}
			</div>
		</>
	);
};

export default EventPage;
