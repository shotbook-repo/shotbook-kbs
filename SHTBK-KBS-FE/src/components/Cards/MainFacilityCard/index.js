import React from 'react';
import { Link } from 'react-router-dom';
import './mainfacilitycard.css';

const MainFacilityCard = ({ id, facility_name, no_employee, status }) => {
	let status_icon;
	if (status === 'Active') {
		status_icon = <div className='status-active self-center mr-36'></div>;
	} else {
		status_icon = <div className='status-inactive self-center mr-36'></div>;
	}
	return (
		<>
			<Link to={`/facility/${id}`}>
				<div className='maincard'>
					<h1>{facility_name}</h1>
					<div className='flex '>
						<h1 className='mr-52'>{no_employee}</h1>
						{status_icon}
					</div>
				</div>
			</Link>
		</>
	);
};

export default MainFacilityCard;
