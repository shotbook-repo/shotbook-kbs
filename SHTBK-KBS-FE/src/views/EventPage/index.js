import React, { useState } from 'react';
import MainEventCard from '../../components/Cards/MainEventCard';
import EventsTabBar from '../../components/TabBar/EventsTabBar';
import TitleBar from '../../components/TitleBar';
import mockEvents from '../../mock-event';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './eventpage.css';

const EventPage = () => {
	const [title, setTitle] = useState('Events');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<EventsTabBar />
				{/* {mockEvents ? (
					mockEvents.map((venue) => {
						return <MainEventCard key={venue.id} {...venue} />;
					})
				) : (
					<div className='text-center mt-auto mb-auto'>
						<FontAwesomeIcon
							icon={faSpinner}
							spin
							color='#303e58'
							size='2x'
						/>
					</div>
				)} */}
			</div>
		</>
	);
};

export default EventPage;
