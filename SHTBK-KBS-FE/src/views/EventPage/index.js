import React, { useState, useEffect, useCallback } from 'react';
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
	const [responseData, setResponseData] = useState({});
	const [title, setTitle] = useState('Events');
	const [selectedMonth, setSelectedMonth] = useState('January');
	const [selectedMonthNo, setSelectedMonthNo] = useState(1);
	const [months, setMonths] = useState(monthsData);
	const url = config.API_URL + '/getEvents';
	// const { responseData } = useFetch(url, requestBody);

	const updateMonth = (month, month_no) => {
		setSelectedMonth(month);
		setSelectedMonthNo(month_no);
	};

	const fetchData = useCallback(
		async (month) => {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({
					flag: 'all',
					month: month,
				}),
			};

			const response = await fetch(url, requestOptions);
			const data = await response.json();
			setResponseData(data);
		},
		[url]
	);

	useEffect(() => {
		fetchData(selectedMonthNo);
	}, [url, fetchData, selectedMonthNo, selectedMonth]);

	useEffect(() => {
		fetchData(selectedMonthNo);
	}, []);

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
				<div
					className='w-full flex px-8 font-bold mt-5'
					style={{ color: '#3A3A3A' }}
				>
					<div className='w-5/12'>Name</div>
					<div className='w-5/12'>Facility</div>
					<div className='w-1/12 mr-4'>Date</div>
					<div className='w-1/12 text-right'>Details</div>
				</div>

				{responseData.data ? (
					responseData.data.length > 0 ? (
						responseData.data.map((event) => {
							return <MainEventCard key={event.id} event={event} />;
						})
					) : (
						<div className='text-center my-auto'>No current events.</div>
					)
				) : (
					<div className='text-center my-auto'>Fetching data...</div>
				)}
			</div>
		</>
	);
};

export default EventPage;
