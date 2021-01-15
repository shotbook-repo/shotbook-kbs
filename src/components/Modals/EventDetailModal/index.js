import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Switch } from 'antd';
import { useFetch } from '../../../components/CustomHooks/useFetch';
import Modal from 'react-modal';
import Select from 'react-select';
import config from '../../../configs/config.json';
import Datetime from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import 'antd/lib/switch/style/index.css';

Modal.setAppElement('#root');

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		backgroundColor: '#FBFBFB',
		width: '750px',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
};

const EventDetailModal = ({
	modalIsOpen,
	setModalState,
	event,
	venue,
	facility,
}) => {
	return (
		<>
			<Modal
				isOpen={modalIsOpen}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => {
					setModalState(false);
				}}
				style={customStyles}
			>
				<div className=''>
					<FontAwesomeIcon
						icon={faTimesCircle}
						color='#303e58'
						className='absolute left-4 top-4'
						onClick={() => setModalState(false)}
					/>
					<div className='text-center text-xl mb-8 font-bold'>
						{event.name}
					</div>
					<div className='px-2 pb-6'>
						<div className='space-y-2'>
							<div className='font-semibold text-xl border-b-2 w-full'>
								Event
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Category</div>
								<div>{event.category}</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Description</div>
								<div>{event.description}</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Start date</div>
								<div>{moment(event.start_date).format('LLL')}</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>End date</div>
								<div>{moment(event.end_date).format('LLL')}</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Event type</div>
								<div>{event.event_type}</div>
							</div>
						</div>
						<div className='space-y-2 mt-8'>
							<div className='font-semibold text-lg border-b-2 w-full'>
								Venue
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Name</div>
								<div>{venue.name}</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Address</div>
								<div>
									{venue.line_add_1}, {venue.line_add_2}
								</div>
							</div>
							<div className='flex'>
								<div className='w-1/4'></div>
								<div>
									{venue.postal_code}, {venue.city}, {venue.state}
								</div>
							</div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>Telephone No</div>
								<div>{venue.tel_no}</div>
							</div>
							{/* <div className='flex pt-6'>
								<div className='w-1/4 font-semibold'>
									Booked facility
								</div>
								<div>{facility.name}</div>
							</div> */}
						</div>
						<div className='mt-8 space-y-2'>
							<div className='font-semibold text-lg border-b-2 w-full'></div>
							<div className='flex'>
								<div className='w-1/4 font-semibold'>
									Booked facility
								</div>
								<div>{facility.name}</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
};

export default EventDetailModal;
