import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TitleBar from '../../components/TitleBar';
import './facilitiespage.css';
import config from '../../configs/config.json';
import MainVenueCard from '../../components/Cards/MainVenueCard';
import data2 from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import VenuesTabBar from '../../components/TabBar/VenuesTabBar';
import { useFetch } from '../../components/CustomHooks/useFetch';

// const getData = () =>
// 	fetch(url, {
// 		method: 'POST',
// 		headers: { 'Content-type': 'application/json' },
// 		body: JSON.stringify({ flag: 'all', venue_id: null }),
// 	}).then((res) => res.json());

const FacilitiesPage = () => {
	const [title, setTitle] = useState('KBS Facilities');
	const url = `${config.API_URL}/getVenues`;
	const [requestBody, setRequestBody] = useState({
		flag: 'all',
		venue_id: null,
	});
	const { responseData } = useFetch(url, requestBody);

	// TEST REDUCER
	// const venues = useSelector((state) => state.venues);
	// console.log('state', venues);

	// useEffect(() => {
	// 	getData()
	// 		.then((receivedData) => {
	// 			console.log({ receivedData });
	// 			setData(receivedData);
	// 		})
	// 		.catch((err) => console.log(err));
	// }, []);

	// useEffect(() => {
	// 	console.log('resData in useEffect', responseData);
	// 	setData(responseData);
	// }, [responseData]);

	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<VenuesTabBar />
				<div className='flex justify-end mt-4'>
					<p className='mr-auto ml-7 text-white'>KBS Venues</p>
					<p className='column-title mr-40'>No of Employees</p>
					<p className='column-title mr-40'>Status</p>
				</div>
				{responseData.data ? (
					responseData.data.map((venue) => {
						return <MainVenueCard key={venue.id} {...venue} />;
					})
				) : (
					<div className='text-center mt-auto mb-auto'>
						<FontAwesomeIcon
							icon={faSpinner}
							spin
							color='#303e58'
							size='2x'
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default FacilitiesPage;
