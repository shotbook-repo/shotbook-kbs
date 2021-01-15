import React, { useState } from 'react';
import SearchField from '../../SearchField';
import Modal from 'react-modal';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTimesCircle,
	faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import './venuestabbar.css';
import 'antd/lib/switch/style/index.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

Modal.setAppElement('#root');
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '90%',
		backgroundColor: '#FBFBFB',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
};

const VenuesTabBar = () => {
	// const dispatch = useDispatch();
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [formState, setFormState] = useState({
		venueName: '',
		employeeNo: '',
		address1: '',
		address2: '',
		postal: '',
		city: '',
		state: '',
		telNo: '',
		conPerson: '',
		conNo: '',
		conEmail: '',
	});

	const handleForm = (e) => {
		e.preventDefault();

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name: formState.venueName ? formState.venueName : null,
				employee_no: formState.employeeNo ? formState.employeeNo : null,
				status: 'Active',
				line_add_1: formState.address1 ? formState.address1 : null,
				line_add_2: formState.address2 ? formState.address2 : null,
				postal_code: formState.postal ? formState.postal : null,
				city: formState.city ? formState.city : null,
				state: formState.state ? formState.state : null,
				tel_no: formState.telNo ? formState.telNo : null,
				contact_person: formState.conPerson ? formState.conPerson : null,
				contact_no: formState.conNo ? formState.conNo : null,
				contact_email: formState.conEmail ? formState.conEmail : null,
			}),
		};
		console.log('request body:', requestOptions.body);
		fetch('http://localhost:3001/insertVenue', requestOptions)
			.then(async (response) => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				console.log('After send request response data:', data);
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
			<div className='flex flex-row justify-between border-2 shadow-md rounded-md align-middle p-2 mt-5'>
				<div className='flex space-x-4 items-center'>
					<button
						className='medium-button'
						onClick={() => setModalIsOpen(true)}
					>
						Add New Venue
					</button>
					<Link to='/calendar'>
						<FontAwesomeIcon
							icon={faCalendarAlt}
							color='#303e58'
							size='2x'
						/>
					</Link>
				</div>
				<SearchField />

				{/* ADD FACILITY MODAL */}
				<Modal
					isOpen={modalIsOpen}
					shouldCloseOnOverlayClick={true}
					onRequestClose={() => setModalIsOpen(false)}
					style={customStyles}
				>
					<div className=''>
						<FontAwesomeIcon
							icon={faTimesCircle}
							color='#303e58'
							className='absolute left-4 top-4'
							onClick={() => setModalIsOpen(false)}
						/>

						<div className='text-center text-xl mb-10 font-bold'>
							Add Venue
						</div>
						<form className='form flex pb-14' onSubmit={handleForm}>
							<div className='flex-1 mr-3'>
								<div className='w-full flex'>
									<div className='w-1/3'>Venue name</div>
									<input
										name='ven-name-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Venue name'
										onChange={(e) =>
											setFormState({
												...formState,
												venueName: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Address</div>
									<input
										name='address-l1-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Address Line 1'
										onChange={(e) =>
											setFormState({
												...formState,
												address1: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='address-l2-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Address Line 2'
										onChange={(e) =>
											setFormState({
												...formState,
												address2: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Postal</div>
									<input
										name='postal-input'
										className='border-2 h-8 rounded-sm w-1/3 p-2'
										placeholder='Postal code'
										onChange={(e) =>
											setFormState({
												...formState,
												postal: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>City</div>
									<input
										name='city-input'
										className='border-2 h-8 rounded-sm w-1/3 p-2'
										placeholder='City'
										onChange={(e) =>
											setFormState({
												...formState,
												city: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>State</div>
									<input
										name='state-input'
										className='border-2 h-8 rounded-sm w-1/3 p-2'
										placeholder='State'
										onChange={(e) =>
											setFormState({
												...formState,
												state: e.target.value,
											})
										}
									></input>
								</div>
								{/* <div className='w-full flex mt-14'>
									<div className='w-1/3'>Facility name</div>
									<input
										name='fac-name-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Bussiness hours</div>
									<div className='w-2/3 flex-col'>
										<div className='flex space-x-2'>
											<div className='w-24'>Monday</div>
											<Switch
												onClick={() => {
													isMondayOpen
														? setIsMondayOpen(false)
														: setIsMondayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Tuesday</div>
											<Switch
												onClick={() => {
													isTuesdayOpen
														? setIsTuesdayOpen(false)
														: setIsTuesdayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Wednesday</div>
											<Switch
												onClick={() => {
													isWednesdayOpen
														? setIsWednesdayOpen(false)
														: setIsWednesdayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Thursday</div>
											<Switch
												onClick={() => {
													isThursdayOpen
														? setIsThursdayOpen(false)
														: setIsThursdayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Friday</div>
											<Switch
												onClick={() => {
													isFridayOpen
														? setIsFridayOpen(false)
														: setIsFridayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Saturday</div>
											<Switch
												onClick={() => {
													isSaturdayOpen
														? setIsSaturdayOpen(false)
														: setIsSaturdayOpen(true);
												}}
											/>
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
										<div className='flex space-x-2'>
											<div className='w-24'>Sunday</div>
											<Switch
												onClick={() => {
													isSundayOpen
														? setIsSundayOpen(false)
														: setIsSundayOpen(true);
												}}
											/>
											{console.log(isSundayOpen)}
											<input type='time'></input>
											<div>-</div>
											<input type='time'></input>
										</div>
									</div>
								</div> */}
							</div>
							<div className='flex-1 ml-3'>
								<div className='w-full flex'>
									<div className='w-1/3'>Tel no</div>
									<input
										name='tel-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Tel no'
										onChange={(e) =>
											setFormState({
												...formState,
												telNo: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Contact person</div>
									<input
										name='con-person-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Contact person'
										onChange={(e) =>
											setFormState({
												...formState,
												conPerson: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Contact no</div>
									<input
										name='con-no-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Contact no'
										onChange={(e) =>
											setFormState({
												...formState,
												conNo: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Email address</div>
									<input
										type='email'
										name='email-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Email address'
										onChange={(e) =>
											setFormState({
												...formState,
												conEmail: e.target.value,
											})
										}
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Number of employee(s)</div>
									<input
										name='emp-no-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
										placeholder='Number of employee(s)'
										onChange={(e) =>
											setFormState({
												...formState,
												employeeNo: e.target.value,
											})
										}
									></input>
								</div>
								{/* <div className='w-full flex mt-36'>
									<div className='w-1/3'>Type of facility</div>
									<select
										name='facility-type-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
									>
										<option value=''>Subvenue</option>
										<option value=''>Inventory</option>
										<option value=''>Equipment</option>
									</select>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Services</div>
									<input
										name='service-1-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='service-2-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='service-3-input'
										className='border-2 h-8 rounded-sm w-2/3 p-2'
									></input>
								</div> */}
							</div>
							<div className='text-center flex absolute bottom-4 justify-center w-full'>
								<button type='submit' className='small-button'>
									Send
								</button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		</>
	);
};

export default VenuesTabBar;
