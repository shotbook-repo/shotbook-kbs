import React, { useState, useEffect } from 'react';
import TitleBar from '../../../components/TitleBar';
import './selectedfacilitypage.css';
import data from '../../../data';
import { Link, useParams } from 'react-router-dom';
import SingleFacilityTabBar from '../../../components/TabBar/SingleFacilityTabBar';
import CalendarTabBar from '../../../components/TabBar/CalendarTabBar';
import CalendarSection from '../CalendarSection';
import { BasicTable } from "../../../components/TitleBar/Table";


const SelectedFacilityPage = () => {
	const [title, setTitle] = useState('Facility Name');
	const { id } = useParams();
	console.log('selected');

	useEffect(() => {
		const facility = data.find((facility) => facility.id === parseInt(id));
		setTitle(facility.facility_name);
	}, [id]);

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
						<TitleBar title={title} />
					</div>
					<div className='flex-1'></div>
				</div>
				<SingleFacilityTabBar id={id} />
				{/* <CalendarTabBar /> */}
				<br></br>
				<BasicTable/>
				
			</div>
		</>
	);
};

export default SelectedFacilityPage;
