import React, { useState } from 'react';
import EventsTabBar from '../../components/TabBar/EventsTabBar';
import TitleBar from '../../components/TitleBar';
import './eventpage.css';

const EventPage = () => {
	const [title, setTitle] = useState('Events');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<EventsTabBar />
			</div>
		</>
	);
};

export default EventPage;
