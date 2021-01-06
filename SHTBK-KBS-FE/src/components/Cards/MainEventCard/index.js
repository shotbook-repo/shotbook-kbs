import React from 'react';
import { Link } from 'react-router-dom';
import './maineventcard.css';

const MainEventCard = (props) => {
	let status_icon;
	let location_div;
	if (props.status === 'Active') {
		status_icon = <div className='status-active self-center mr-36'></div>;
	} else {
		status_icon = <div className='status-inactive self-center mr-36'></div>;
	}
	if (props.city === props.state) {
		location_div = (
			<div>
				<b>{props.city}</b>
			</div>
		);
	} else {
		location_div = (
			<div>
				<b>
					{props.city}, {props.state}
				</b>
			</div>
		);
	}
	return (
		<>
			<Link to={`/facility/${props.id}`}>
				<div className='maincard'>
					<h1>{props.name}</h1>
					<div className='flex '>
						<h1 className='mr-52'>{props.employee_no}</h1>
						{status_icon}
					</div>
					<span className='tooltip-facility'>
						<div>{location_div}</div>
						<div>
							{props.line_add_1}, {props.line_add_2}, {props.postal_code}
						</div>
						<div>Contact Person: {props.contact_person}</div>
						<div>Contact No: {props.contact_no}</div>
						<div>Email: {props.contact_email}</div>
					</span>
				</div>
			</Link>
		</>
	);
};

export default MainEventCard;
