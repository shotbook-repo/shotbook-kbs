import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import './addfacilitymodal.css';
import 'antd/lib/switch/style/index.css';
import config from '../../../configs/config.json';

Modal.setAppElement('#root');
const AddFacilityModal = ({
	modalIsOpen,
	setModalState,
	venueData,
	venueId,
}) => {
	const customStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: '#FBFBFB',
			width: '50%',
			overflow: 'hidden',
		},
		overlay: {
			backgroundColor: 'rgba(0, 0, 0, 0.75)',
		},
	};
	const [facilityType, setFacilityType] = useState('');
	const [formState, setFormState] = useState({
		venue_id: venueId,
		facilityType: '',
		facilityName: '',
		category: '',
		location_at_venue: '',
		manufacturer: '',
		model: '',
		serial_no: '',
		quantity: '',
		isMondayOpen: false,
		isTuesdayOpen: false,
		isWednesdayOpen: false,
		isThursdayOpen: false,
		isFridayOpen: false,
		isSaturdayOpen: false,
		isSundayOpen: false,
		mondayStartTime: '',
		mondayCloseTime: '',
		tuesdayStartTime: '',
		tuesdayCloseTime: '',
		wednesdayStartTime: '',
		wednesdayCloseTime: '',
		thursdayStartTime: '',
		thursdayCloseTime: '',
		fridayStartTime: '',
		fridayCloseTime: '',
		saturdayStartTime: '',
		saturdayCloseTime: '',
		sundayStartTime: '',
		sundayCloseTime: '',
	});
	const options = [
		{ value: 'Subvenue', label: 'Subvenue' },
		{ value: 'Inventory', label: 'Inventory' },
		{ value: 'Equipment', label: 'Equipment' },
	];

	function handleTimeFormat(inputTime) {
		// let d = new Date();
		// let date = d.getDate();
		// let month = d.getMonth() + 1;
		// let year = d.getFullYear();
		// let output = month > 10 ? year + '-' + month : year + '-0' + month;
		// output += date > 10 ? '-' + date : '-0' + date + ' ' + inputTime;
	}

	const handleForm = (e) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				venue_id: formState.venue_id,
				facilityType: formState.facilityType,
				facilityName: formState.facilityName,
				category: formState.category,
				location_at_venue: formState.location_at_venue,
				manufacturer: formState.manufacturer,
				model: formState.model,
				serial_no: formState.serial_no,
				quantity: formState.quantity,
				isMondayOpen: formState.isMondayOpen,
				isTuesdayOpen: formState.isTuesdayOpen,
				isWednesdayOpen: formState.isWednesdayOpen,
				isThursdayOpen: formState.isThursdayOpen,
				isFridayOpen: formState.isFridayOpen,
				isSaturdayOpen: formState.isSaturdayOpen,
				isSundayOpen: formState.isSundayOpen,
				mondayStartTime: formState.mondayStartTime,
				mondayCloseTime: formState.mondayCloseTime,
				tuesdayStartTime: formState.tuesdayStartTime,
				tuesdayCloseTime: formState.tuesdayCloseTime,
				wednesdayStartTime: formState.wednesdayStartTime,
				wednesdayCloseTime: formState.wednesdayCloseTime,
				thursdayStartTime: formState.thursdayStartTime,
				thursdayCloseTime: formState.thursdayCloseTime,
				fridayStartTime: formState.fridayStartTime,
				fridayCloseTime: formState.fridayCloseTime,
				saturdayStartTime: formState.saturdayStartTime,
				saturdayCloseTime: formState.saturdayCloseTime,
				sundayStartTime: formState.sundayStartTime,
				sundayCloseTime: formState.sundayCloseTime,
			}),
		};
		console.log('request body:', requestOptions.body);
		fetch('http://localhost:3001/insertFacility', requestOptions)
			.then(async (response) => {
				const data = await response.json();

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
				console.log('After send request response data:', data);
				setModalState(false);
				window.location.reload();
				// this.setState({ postId: data.id });
			})
			.catch((error) => {
				// this.setState({ errorMessage: error.toString() });
				console.error('There was an error!', error);
			});
	};

	const SubvenueDiv = () => {
		return (
			<>
				<div className='w-full flex pt-4'>
					<div className='w-1/3'>Name</div>
					<input
						name='fac-name-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Subvenue name'
						onChange={(e) =>
							setFormState({
								...formState,
								facilityName: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Quantity</div>
					<input
						name='fac-quantity-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Quantity'
						onChange={(e) =>
							setFormState({
								...formState,
								quantity: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Business hours</div>
					<div className='w-2/3 flex-col'>
						<div className='flex space-x-2'>
							<div className='w-24'>Monday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isMondayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										mondayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										mondayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Tuesday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isTuesdayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										tuesdayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										tuesdayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Wednesday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isWednesdayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										wednesdayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										wednesdayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Thursday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isThursdayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										thursdayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										thursdayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Friday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isFridayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										fridayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										fridayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Saturday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isSaturdayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										saturdayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										saturdayCloseTime: time,
									});
								}}
							></input>
						</div>
						<div className='flex space-x-2'>
							<div className='w-24'>Sunday</div>
							<Switch
								onChange={(e) => {
									setFormState({
										...formState,
										isSundayOpen: e,
									});
								}}
							/>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										sundayStartTime: time,
									});
								}}
							></input>
							<div>-</div>
							<input
								type='time'
								onChange={(e) => {
									let time = e.target.value + ':00';
									setFormState({
										...formState,
										sundayCloseTime: time,
									});
								}}
							></input>
						</div>
					</div>
				</div>
			</>
		);
	};

	const InventoryEquipmentDiv = (type) => {
		return (
			<>
				<div className='w-full flex pt-4'>
					<div className='w-1/3'>Name</div>
					<input
						name='fac-name-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder={`${type} name`}
						onChange={(e) =>
							setFormState({
								...formState,
								facilityName: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Category</div>
					<input
						required
						name='fac-category-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Category'
						onChange={(e) =>
							setFormState({
								...formState,
								category: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Location at venue</div>
					<input
						required
						name='location-venue-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Location'
						onChange={(e) =>
							setFormState({
								...formState,
								location_at_venue: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Manufacturer</div>
					<input
						required
						name='fac-manufacturer-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Manufacturer'
						onChange={(e) =>
							setFormState({
								...formState,
								manufacturer: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Model</div>
					<input
						required
						name='fac-model-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Model'
						onChange={(e) =>
							setFormState({
								...formState,
								model: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Serial No</div>
					<input
						required
						name='fac-serial-no-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Serial No'
						onChange={(e) =>
							setFormState({
								...formState,
								serial_no: e.target.value,
							})
						}
					></input>
				</div>
				<div className='w-full flex'>
					<div className='w-1/3'>Quantity</div>
					<input
						required
						name='fac-serial-no-input'
						className='border-2 h-8 rounded-sm w-2/3 p-2'
						placeholder='Quantity'
						onChange={(e) =>
							setFormState({
								...formState,
								quantity: e.target.value,
							})
						}
					></input>
				</div>
			</>
		);
	};

	return (
		<>
			{console.log({ formState })}
			<Modal
				isOpen={modalIsOpen}
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => {
					setModalState(false);
					setFacilityType('');
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
					<div className='text-center text-xl mb-10 font-bold'>
						Add Facility
					</div>
					<form
						className='form flex-col pb-7 space-y-4'
						onSubmit={handleForm}
					>
						<div className='w-full flex'>
							<div className='w-1/3'>Venue</div>
							<input
								name='address-l1-input'
								className='border-2 h-8 rounded-sm w-2/3 p-2'
								value={
									venueData.data ? venueData.data.venue[0].name : ''
								}
								disabled
							></input>
						</div>
						<div className='w-full flex'>
							<div className='w-1/3'>Facility type</div>
							<Select
								options={options}
								className='h-4 rounded-sm w-2/3'
								onChange={(e) => {
									setFormState({
										...formState,
										facilityType: e.value,
									});
									setFacilityType(e.value);
								}}
							/>
						</div>

						{facilityType === 'Subvenue' ? SubvenueDiv() : ''}
						{facilityType === 'Inventory'
							? InventoryEquipmentDiv('Inventory')
							: ''}
						{facilityType === 'Equipment'
							? InventoryEquipmentDiv('Equipment')
							: ''}
						<div className='text-center flex pt-4 justify-center w-full'>
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

export default AddFacilityModal;
