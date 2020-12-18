import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './useraccesspage.css';

const UserAccessPage = () => {
	const [title, setTitle] = useState('User Access');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default UserAccessPage;
