import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import AddFacilityModal from '../../Modals/AddFacilityModal';
import './facilitiestabbar.css';
import { useFetch } from '../../CustomHooks/useFetch';

const FacilitiesListingTabBar = ({
	venueId,
	venueData,
	sectionFlags,
	handleSection,
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function setModalState(state) {
		setModalIsOpen(state);
	}

	function setAllFlagsToFalse() {
		return Object.assign(
			...Object.keys(sectionFlags).map((k) => ({ [k]: false }))
		);
	}

	return (
		<>
			{console.log({ venueData })}
			<div className='flex flex-row border shadow-md rounded-md px-4 py-2 mt-5 facility-items items-center'>
				<Link
					to={`/facility/${venueId}/overview`}
					className={sectionFlags.overview ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, overview: true });
					}}
				>
					Overview
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/maintenance_request`}
					className={sectionFlags.maint_req ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, maint_req: true });
					}}
				>
					Maintenance Request
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/planned_maintenance`}
					className={sectionFlags.plan_req ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, plan_req: true });
					}}
				>
					Planned Maintenance
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/equipment`}
					className={sectionFlags.equipment ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, equipment: true });
					}}
				>
					Equipment
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/inventory`}
					className={sectionFlags.inventory ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, inventory: true });
					}}
				>
					Inventory
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/employee`}
					className={sectionFlags.employee ? 'item-tab-active' : ''}
					onClick={() => {
						let newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, employee: true });
					}}
				>
					Employee
				</Link>
				<div className='divider'>|</div>
				<Link
					to={`/facility/${venueId}/reports`}
					className={sectionFlags.report ? 'item-tab-active' : ''}
					onClick={() => {
						const newSectionFlags = setAllFlagsToFalse();
						handleSection({ ...newSectionFlags, report: true });
					}}
				>
					Reports
				</Link>
				<button
					className='ml-auto medium-button'
					onClick={() => setModalIsOpen(true)}
				>
					Add New Facility
				</button>
				<AddFacilityModal
					modalIsOpen={modalIsOpen}
					setModalState={setModalState}
					venueData={venueData}
					venueId={venueId}
				/>
			</div>
		</>
	);
};

export default FacilitiesListingTabBar;
