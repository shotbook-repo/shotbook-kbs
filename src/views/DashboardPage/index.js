import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './dashboardpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const DashboardPage = () => {
	const [title, setTitle] = useState('Dashboard');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default DashboardPage;
