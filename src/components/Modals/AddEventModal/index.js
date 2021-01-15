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
const AddEventModal = ({ modalIsOpen, setModalState }) => {
	const [selectedStartDay, setSelectedStartDate] = useState();
	const [selectedVenue, setSelectedVenues] = useState();
	const [venues, setVenues] = useState([]);
	const [facilities, setFacilities] = useState([]);
	const url = config.API_URL + '/getAllFacilities';
	const { responseData } = useFetch(url, {});
	let yesterday = moment().subtract(1, 'day');
	const valid = (current) => {
		return current.isAfter(yesterday);
	};
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#FBFBFB',
			width: '833px',
		},
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.75)',
		},
	};
	const [formState, setFormState] = useState({
		name: '',
		category: '',
		description: '',
		venue: '',
		venue_id: '',
		facility: '',
		timestampStart: '',
		timestampEnd: '',
		type: '',
	});
	const eventTypes = [
		{ value: 'Public', label: 'Public' },
		{ value: 'Private', label: 'Private' },
	];
	const eventCategories = [
		{ value: 'Ceremonies/Awards', label: 'Ceremonies/Awards' },
		{ value: 'Conferences', label: 'Conferences' },
		{ value: 'Workshops', label: 'Workshops' },
		{ value: 'Sport Events', label: 'Sport Events' },
		{ value: 'Team Building', label: 'Team Building' },
	];

	useEffect(() => {
		if (responseData.data) {
			let venuesArray = [];
			responseData.data
				.map((venue) => venue.venue)
				.map((venue) => {
					let object = { value: venue.venue_id, label: venue.venue_name };
					venuesArray.push(object);
				});

			setVenues(venuesArray);
		}
	}, [responseData]);

	const findFacilities = (venue) => {
		let facilitiesArray = [];
		let facilities = responseData.data.filter(
			(facility) => facility.venue.venue_id === venue
		);
		facilities[0].facilities.map((facility) => {
			let object = { value: facility.id, label: facility.name };
			facilitiesArray.push(object);
		});
		setFacilities(facilitiesArray);
	};

	const handleForm = (e) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};
		fetch('http://localhost:3001/insertEvent', requestOptions)
			.then(async (response) => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				setModalState(false);
				window.location.reload();
				// this.setState({ postId: data.id });
			})
			.catch((error) => {
				// this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	};

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
						Create Event
					</div>
					<form
						className='form flex-col pb-5 space-y-2'
						onSubmit={handleForm}
					>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Name</div>
							<input
								required
								name='event-name'
								className='border-2 h-8 rounded-sm p-2 w-full'
								placeholder='Eg. meeting'
								onChange={(e) => {
									setFormState({
										...formState,
										name: e.target.value,
									});
								}}
							></input>
						</div>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Category</div>
							<Select
								options={eventCategories}
								className='rounded-sm w-1/2'
								onChange={(e) => {
									setFormState({
										...formState,
										category: e.value,
									});
								}}
								required
							/>
						</div>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Description</div>
							<textarea
								required
								type='text'
								name='event-description'
								className='border-2 rounded-sm p-2 w-full'
								placeholder='Add more info'
								onChange={(e) => {
									setFormState({
										...formState,
										description: e.target.value,
									});
								}}
							></textarea>
						</div>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Venue</div>
							<Select
								options={venues}
								className='rounded-sm w-1/2'
								onChange={(e) => {
									setFacilities([]);
									findFacilities(e.value);
									setFormState({
										...formState,
										venue: e.label,
										venue_id: e.value,
									});
								}}
								required
							/>
						</div>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Facility</div>
							<Select
								options={facilities.length > 0 ? facilities : null}
								className='rounded-sm w-1/2'
								onChange={(e) => {
									setFormState({
										...formState,
										facility: e.value,
									});
								}}
								required
							/>
						</div>
						<div className='flex w-full space space-x-10'>
							<div className='w-1/2 space-y-1'>
								<div className='font-semibold'>Date &amp; Time</div>
								<div className='flex'>
									<div className='w-1/4'>From</div>
									<Datetime
										name='event-start-time'
										isValidDate={valid}
										className='border-2 rounded-sm'
										required
										onChange={(e) => {
											setFormState({
												...formState,
												timestampStart: moment(e._d).format(),
											});
										}}
									/>
								</div>
								<div className='flex'>
									<div className='w-1/4'>To</div>
									<Datetime
										name='event-end-time'
										isValidDate={valid}
										className='border-2 rounded-sm'
										required
										onChange={(e) => {
											setFormState({
												...formState,
												timestampEnd: moment(e._d).format(),
											});
										}}
									/>
								</div>
							</div>
							<div className='w-1/2 space-y-1'>
								<div className='font-semibold'>Content</div>
								<input
									type='file'
									name='event-content'
									className='border-2 rounded-sm p-2'
								></input>
							</div>
						</div>
						<div className='w-full space-y-1'>
							<div className='font-semibold'>Event type</div>
							<Select
								options={eventTypes}
								className='h-4 rounded-sm w-1/2'
								onChange={(e) => {
									setFormState({
										...formState,
										type: e.value,
									});
								}}
								required
							/>
						</div>
						<div className='text-center flex pt-10 justify-center w-full'>
							<button type='submit' className='small-button'>
								Send
							</button>
						</div>
					</form>
				</div>
			</Modal>
		</>
	);
};

export default AddEventModal;
