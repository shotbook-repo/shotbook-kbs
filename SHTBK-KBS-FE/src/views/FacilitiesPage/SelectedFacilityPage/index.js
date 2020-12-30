import React, { useState, useEffect } from 'react';
import TitleBar from '../../../components/TitleBar';
import './selectedfacilitypage.css';
import data from '../../../data';
import { Link, useParams } from 'react-router-dom';
import SingleFacilityTabBar from '../../../components/TabBar/SingleFacilityTabBar';
import CalendarTabBar from '../../../components/TabBar/CalendarTabBar';
import CalendarSection from '../CalendarSection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MaintenanceRequestSection from '../MaintenanceRequestSection';
import { BasicTable } from '../../../components/TitleBar/Table';
import InventorySection from '../InventorySection';

const SelectedFacilityPage = () => {
	// state= {}
	const [title, setTitle] = useState('Facility Name');
	const [sectionFlags, setSectionFlags] = useState({
		calender: true,
		maint_req: false,
		plan_req: false,
		equipment: false,
		inventory: false,
		employee: false,
		report: false,
	});
	const { id } = useParams();

	function handleSection(newSectionFlags) {
		setSectionFlags(newSectionFlags);
	}

	useEffect(() => {
		document.title = 'Facilities & Asset Management';
		const venue = data.find((venue) => venue.id === parseInt(id));
		setTitle(venue.name);
	}, [id]);

	console.log('section flag', sectionFlags);

	return (
		<>
			<div className='body'>
				<div className='flex'>
					<div className='flex-1 self-center text-blue-400'>
						<Link to='/venue' className='back-link'>
							Back
						</Link>
					</div>
					<div className=''>
						<TitleBar title={title} />
					</div>
					<div className='flex-1'></div>
				</div>
				<SingleFacilityTabBar
					id={id}
					sectionFlags={sectionFlags}
					handleSection={handleSection}
				/>

				{sectionFlags.calender && <CalendarSection />}
				{sectionFlags.maint_req && <MaintenanceRequestSection />}
				{sectionFlags.inventory && <InventorySection />}
				{/* {sectionFlags.plan_req && <CalendarSection />}
				{sectionFlags.equipment && <CalendarSection />}
				{sectionFlags.inventory && <CalendarSection />}
				{sectionFlags.employee && <CalendarSection />}
				{sectionFlags.report && <CalendarSection />} */}

				{/* <br></br>
				<BasicTable /> */}
			</div>
		</>
	);
};

export default SelectedFacilityPage;
