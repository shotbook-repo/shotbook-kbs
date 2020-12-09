import React, { useState } from 'react';
import TabBar from '../../components/TabBar';
import TitleBar from '../../components/TitleBar';
import './facilities.css';

const FacilitiesPage = () => {
	const [title, setTitle] = useState('KBS Facilities');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<TabBar />
			</div>
		</>
	);
};

export default FacilitiesPage;
