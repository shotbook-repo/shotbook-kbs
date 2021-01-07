import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './selectedfacilitytabbar.css';

const SelectedFacilityTabBar = ({ id, sectionFlags, handleSection }) => {
	function setAllFlagsToFalse() {
		return Object.assign(
			...Object.keys(sectionFlags).map((k) => ({ [k]: false }))
		);
	}
	return (
		<>
			<div className='flex flex-row border shadow-md rounded-md p-4 mt-5 facility-items'>
				<Link
					to={`/facility/${id}/calendar`}
					className='ml-2'
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, calender: true });
					}}
				>
					Calendar
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/maintenance_request`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, maint_req: true });
					}}
				>
					Maintenance Request
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/planned_maintenance`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, plan_req: true });
					}}
				>
					Planned Maintenance
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/equipment`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, equipment: true });
					}}
				>
					Equipment
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/inventory`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, inventory: true });
					}}
				>
					Inventory
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/employee`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, employee: true });
					}}
				>
					Employee
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${id}/reports`}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, report: true });
					}}
				>
					Reports
				</Link>
				<div className='divider'>|</div>
			</div>
		</>
	);
};

export default SelectedFacilityTabBar;
