import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TitleBar from '../../components/TitleBar';
import './facilitiespage.css';
import FacilitiesTabBar from '../../components/TabBar/FacilitiesTabBar';
import config from '../../configs/config.json';
import MainVenueCard from '../../components/Cards/MainVenueCard';
import data2 from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const url = config.API_URL + '/getVenues';
// const getData = () => fetch(url).then((res) => res.json());
const getData = () =>
	fetch(url, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({ flag: 'all', venue_id: null }),
	}).then((res) => res.json());

const FacilitiesPage = () => {
	const [title, setTitle] = useState('Facilities Management');
	const [data, setData] = useState();
	// const { data } = useFetch(config.API_URL + '/getVenues');

	// TEST REDUCER
	// const venues = useSelector((state) => state.venues);
	// console.log('state', venues);

	useEffect(() => {
		getData()
			.then((receivedData) => {
				console.log({ receivedData });
				setData(receivedData);
			})
			.catch((err) => console.log(err));
		// fetch(url)
		// 	.then((res) => res.json())
		// 	.then((receivedData) => setData(receivedData));
	}, []);

	// console.log('URL', url);
	// console.log(data);

	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<FacilitiesTabBar />
				<div className='flex justify-end mt-4'>
					<p className='column-title mr-auto ml-7'>KBS Venues</p>
					<p className='column-title mr-40'>No of Employees</p>
					<p className='column-title mr-40'>Status</p>
				</div>
				{data ? (
					data.data.map((venue) => {
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

// const List = ({ data }) => {
// 	return (
// 		<>
// 			{data.data.map((venue) => {
// 				return <MainVenueCard key={venue.id} {...venue} />;
// 			})}
// 		</>
// 	);
// };

export default FacilitiesPage;
