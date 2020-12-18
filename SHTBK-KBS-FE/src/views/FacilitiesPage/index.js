import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './facilitiespage.css';
import data from '../../data';
import MainFacilityCard from '../../components/Cards/MainFacilityCard';
import FacilitiesTabBar from '../../components/TabBar/FacilitiesTabBar';

const FacilitiesPage = () => {
	const [title, setTitle] = useState('KBS Facilities');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<FacilitiesTabBar />
				<div className='flex justify-end mt-4'>
					<p className='column-title mr-40'>No of Employees</p>
					<p className='column-title mr-40'>Status</p>
				</div>
				<List />
				{/* <div className='maincard'>
					<h1>Velodrom Nasional Malaysia</h1>
					<div className='flex '>
						<h1 className='mr-20'>120</h1>
						<div class='status self-center'></div>
					</div>
				</div>
				<div className='maincard'>
					<h1 className='font-semibold'>KBS Gym</h1>
					<div className='flex '>
						<p className='mr-10 font-semibold'>RM32,000.00</p>
						<p className='mr-10'>Pending Approval</p>
						<FontAwesomeIcon icon={faEdit} />
					</div>
				</div> */}
			</div>
		</>
	);
};

const List = () => {
	const [facilities, setFacilities] = useState(data);
	return (
		<>
			{facilities.map((facility) => {
				return <MainFacilityCard key={facility.id} {...facility} />;
			})}
		</>
	);
};

export default FacilitiesPage;
