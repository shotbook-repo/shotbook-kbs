import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './sportcenterpage.css';

const SportCenterPage = () => {
	const [title, setTitle] = useState('Sport Centers');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default SportCenterPage;
