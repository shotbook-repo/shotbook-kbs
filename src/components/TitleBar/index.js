import React, { Component } from 'react';
import './titlebar.css';

const TitleBar = ({ title }) => {
	return (
		<>
			<div className='w-full text-center page-title'>{title}</div>
		</>
	);
};

export default TitleBar;
