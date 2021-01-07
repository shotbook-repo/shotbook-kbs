import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './marketingpage.css';

const MarketingPage = () => {
	const [title, setTitle] = useState('Marketing Management');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default MarketingPage;
