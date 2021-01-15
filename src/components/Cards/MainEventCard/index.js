import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './maineventcard.css';
import { useFetch } from '../../CustomHooks/useFetch';
import moment from 'moment';
import EventDetailModal from '../../Modals/EventDetailModal';

const MainEventCard = ({ event, venue, facility }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const setModalState = (state) => {
		setModalIsOpen(state);
	};

	return (
		<>
			<div className='event-card'>
				<div className='w-5/12 text-3xl'>{event.name}</div>
				<div className='w-5/12 text-2xl'>{facility.name}</div>
				<div className='w-1/12 text-2xl mr-4'>
					{moment(event.start_date).format('D/MM/YYYY')}
				</div>
				<div className='w-1/12 text-right pr-4'>
					<FontAwesomeIcon
						icon={faInfoCircle}
						color='#707070'
						onClick={() => setModalIsOpen(true)}
					/>
				</div>
			</div>
			<EventDetailModal
				modalIsOpen={modalIsOpen}
				setModalState={setModalState}
				event={event}
				venue={venue}
				facility={facility}
			/>
		</>
	);
};

export default MainEventCard;
