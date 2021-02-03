import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TitleBar from '../../../components/TitleBar';
import config from '../../../configs/config.json';
import './facilitylistingpage.css';
import FacilitiesListingTabBar from '../../../components/TabBar/FacilitiesListingTabBar';
import OverviewSection from '../OverviewSection';
import MaintenanceRequestSection from '../MaintenanceRequestSection';
import InventorySection from '../InventorySection';
import PlannedMaintenanceSection from '../PlannedMaintenanceSection';
import ReportSection from '../ReportsSection';
import EquipmentSection from '../EquipmentSection';
import { useFetch } from '../../../components/CustomHooks/useFetch';
import EmployeeSection from '../EmployeeSection';

const FacilityListingPage = () => {
	const { id } = useParams();
	const url = `${config.API_URL}/getFacilities`;
	const [requestBody, setRequestBody] = useState({ venue_id: id });
	const { responseData, loading } = useFetch(url, requestBody);
	const [title, setTitle] = useState('Facility Listing');
	const [venue, setVenue] = useState([]);
	const [subvenues, setSubvenues] = useState([]);
	const [inventories, setInventories] = useState([]);
	const [equipments, setEquipments] = useState([]);
	const [sectionFlags, setSectionFlags] = useState({
		overview: true,
		maint_req: false,
		plan_req: false,
		equipment: false,
		inventory: false,
		employee: false,
		report: false,
	});

	useEffect(() => {
		if (responseData.data) {
			setVenue(responseData.data.venue[0]);
			setSubvenues(filterFacility(responseData.data, 'Subvenue'));
			setInventories(filterFacility(responseData.data, 'Inventory'));
			setEquipments(filterFacility(responseData.data, 'Equipment'));
		}
	}, [responseData]);

	function getData() {
		fetch(url, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ id: id }),
		})
			.then((res) => res.json())
			.then((receivedData) => {
				setVenue(receivedData.venue[0]);
				setSubvenues(filterFacility(receivedData, 'Subvenue'));
				setInventories(filterFacility(receivedData, 'Inventory'));
				setEquipments(filterFacility(receivedData, 'Equipment'));
			})
			.catch((err) => console.log(err));
	}

	const filterFacility = (receivedData, facilityType) => {
		return receivedData.facility.filter(
			(facility) => facility.type === facilityType
		);
	};

	function handleSection(newSectionFlags) {
		setSectionFlags(newSectionFlags);
	}

	return (
		<>
			<div className='body'>
				<div className='flex'>
					<div className='flex-1 self-center text-blue-400'>
						<Link to='/facility' className='back-link'>
							Back
						</Link>
					</div>
					<div className=''>
						<TitleBar title={venue.name} />
					</div>
					<div className='flex-1'></div>
				</div>

				<FacilitiesListingTabBar
					venueId={id}
					venueData={responseData}
					sectionFlags={sectionFlags}
					handleSection={handleSection}
				/>
				{sectionFlags.overview && (
					<OverviewSection
						subvenues={subvenues}
						inventories={inventories}
						equipments={equipments}
					/>
				)}
				{sectionFlags.maint_req && <MaintenanceRequestSection />}
				{sectionFlags.plan_req && <PlannedMaintenanceSection />}
				{sectionFlags.equipment && <EquipmentSection venue={id} />}
				{sectionFlags.inventory && <InventorySection venue={id} />}
				{sectionFlags.employee && <EmployeeSection venue={id} />}
				{sectionFlags.report && <ReportSection />}
			</div>
		</>
	);
};

export default FacilityListingPage;
