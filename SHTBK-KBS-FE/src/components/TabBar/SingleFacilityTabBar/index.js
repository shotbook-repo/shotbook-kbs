import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './singlefacilitytabbar.css';

const SingleFacilityTabBar = ({ id }) => {
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-4 mt-5 facility-items'>
				<Link to={`/facility/${id}/calendar`} className='ml-2'>
					Calendar
				</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/maintenance_request`}>
					Maintenance Request
				</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/planned_maintenance`}>
					Planned Maintenance
				</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/equipment`}>Equipment</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/inventory`}>Inventory</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/employee`}>Employee</Link>
				<div className='divider'>|</div>
				<Link to={`/facility/${id}/reports`}>Reports</Link>
				<div className='divider'>|</div>
			</div>
		</>
	);
};

export default SingleFacilityTabBar;
