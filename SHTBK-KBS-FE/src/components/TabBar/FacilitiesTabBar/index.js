import React, { useState } from 'react';
import SearchField from '../../SearchField';
import Modal from 'react-modal';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './facilitiestabbar.css';
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
		width: '90%',
		backgroundColor: '#FBFBFB',
	},
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
};

const FacilitiesTabBar = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isMondayOpen, setIsMondayOpen] = useState(false);
	const [isTuesdayOpen, setIsTuesdayOpen] = useState(false);
	const [isWednesdayOpen, setIsWednesdayOpen] = useState(false);
	const [isThursdayOpen, setIsThursdayOpen] = useState(false);
	const [isFridayOpen, setIsFridayOpen] = useState(false);
	const [isSaturdayOpen, setIsSaturdayOpen] = useState(false);
	const [isSundayOpen, setIsSundayOpen] = useState(false);

	return (
		<>
			<div className='flex flex-row justify-between border-2 shadow-md rounded-md align-middle p-2 mt-5'>
				<button
					className='medium-button mr-24'
					onClick={() => setModalIsOpen(true)}
				>
					Add Facilities
				</button>
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
							Add Facility
						</div>
						<form className='form flex pb-14'>
							<div className='flex-1 mr-3'>
								<div className='w-full flex'>
									<div className='w-1/3'>Venue</div>
									<input
										name='ven-name-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Address</div>
									<input
										name='address-l1-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='address-l2-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Postal</div>
									<input
										name='postal-input'
										className='border-2 h-8 rounded-sm w-1/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>City</div>
									<input
										name='city-input'
										className='border-2 h-8 rounded-sm w-1/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>State</div>
									<input
										name='state-input'
										className='border-2 h-8 rounded-sm w-1/3'
									></input>
								</div>
								<div className='w-full flex mt-14'>
									<div className='w-1/3'>Facility name</div>
									<input
										name='fac-name-input'
										className='border-2 h-8 rounded-sm w-2/3'
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
								</div>
							</div>
							<div className='flex-1 ml-3'>
								<div className='w-full flex'>
									<div className='w-1/3'>Tel No</div>
									<input
										name='tel-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Contact person</div>
									<input
										name='con-person-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Contact no</div>
									<input
										name='con-no-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'>Email address</div>
									<input
										type='email'
										name='email-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-36'>
									<div className='w-1/3'>Type of facility</div>
									<select
										name='facility-type-input'
										className='border-2 h-8 rounded-sm w-2/3'
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
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='service-2-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
								<div className='w-full flex mt-3'>
									<div className='w-1/3'></div>
									<input
										name='service-3-input'
										className='border-2 h-8 rounded-sm w-2/3'
									></input>
								</div>
							</div>
							<div className='text-center flex absolute bottom-4 justify-center w-full'>
								<button type='submit' className='small-button'>
									Send
								</button>
							</div>
						</form>
						{/* <button onClick={() => setModalIsOpen(false)}>close</button> */}
					</div>
				</Modal>
			</div>
		</>
	);
};

export default FacilitiesTabBar;
