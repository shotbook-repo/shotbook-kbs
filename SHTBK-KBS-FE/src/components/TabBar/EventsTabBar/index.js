import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MediumButton from '../../Buttons/MediumButton';
import AddEventModal from '../../Modals/AddEventModal';
import SearchField from '../../SearchField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './eventstabbar.css';

const EventsTabBar = ({ selectedMonth, updateMonth, months }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const setModalState = (state) => {
		setModalIsOpen(state);
	};
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-2 mt-5 w-full'>
				<div className='flex-1 '>
					<button
						className='ml-auto medium-button'
						onClick={() => setModalIsOpen(true)}
					>
						Create Event
					</button>
					<select
						onChange={(e) => {
							updateMonth(
								e.target.options[e.target.selectedIndex].text,
								e.target.value
							);
						}}
					>
						{months.map((month) => {
							return (
								<option key={month.month_no} value={month.month_no}>
									{month.month_name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='flex-1 text-center'>
					<div className='date-title'>{selectedMonth} 2021</div>
				</div>
				<div className='flex-1 text-right self-center pr-5'>
					<Link to='/calendar/event'>
						<FontAwesomeIcon
							icon={faCalendarAlt}
							color='#303e58'
							size='2x'
						/>
					</Link>
				</div>
				<AddEventModal
					modalIsOpen={modalIsOpen}
					setModalState={setModalState}
				/>
			</div>
		</>
	);
};

export default EventsTabBar;
