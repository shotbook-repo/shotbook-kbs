import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './announcementpage.css';

const AnnouncementPage = () => {
	const [title, setTitle] = useState('Announcement');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default AnnouncementPage;
