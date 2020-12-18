import React, { useState } from 'react';
import './maincard.css';

const MainCard = () => {
	return (
		<>
			<div className='flex flex-row justify-between border shadow-md rounded-md align-middle p-2'>
				<button
					type='button'
					className='border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-1 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline'
				>
					Add Facilities
				</button>
				<input
					type='search'
					className='bg-purple-white shadow rounded-full border-2 px-3 self-center'
					placeholder='Search'
				/>
			</div>
		</>
	);
};

export default MainCard;
