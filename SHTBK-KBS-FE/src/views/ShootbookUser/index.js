import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './shotbookuserpage.css';

const ShotbookUserPage = () => {
	const [title, setTitle] = useState('Shotbook Users');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
			</div>
		</>
	);
};

export default ShotbookUserPage;
