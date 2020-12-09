import React, { useState } from 'react';
import './tabbar.css';

const TabBar = () => {
	const [title, setTitle] = useState('KBS Facilities');
	return (
		<>
			<div className='flex justify-between border shadow-md rounded-md p-2 align-middle'>
				<button
					type='button'
					className='border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline'
				>
					Add Facilities
				</button>
				<input
					type='search'
					className='bg-purple-white shadow rounded border-0 p-3'
					placeholder='Search..'
				/>
			</div>
		</>
	);
};

export default TabBar;
