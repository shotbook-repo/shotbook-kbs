import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './useraccesspage.css';
import { BasicTable } from "../../components/TitleBar/Table";
import ReactDOM from 'react-dom';
import './useraccesspage.css';
import Modal from '../../components/Cards/PopUpCard'
import '../../components/Buttons/MediumButton/mediumbutton.css'

const UserAccessPage = () => {
	const [title, setTitle] = useState('User Access');
	return (
		<>
			<div className='body'>
				<TitleBar title={title} />

				<div id="container">
				<div id='button1' className='button1'>
				<button>Edit/Remove Employees</button>
			</div>
			
			
			<div id="button2" className='button2'>				
				<button>Add new employees</button>
				</div>
				</div>
				<br></br>
				<BasicTable/>
			</div>
		</>
	);
};





export default UserAccessPage;
