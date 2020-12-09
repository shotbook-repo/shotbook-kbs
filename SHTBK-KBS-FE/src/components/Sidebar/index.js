import React, { Component } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

class Sidebar extends Component {
	render() {
		return (
			<>
				<div className='sidebar'>
					<div className='flex flex-col flex-none items-center'>
						<img
							className='rounded-full h-20 w-20 bg-white'
							alt='avatar'
							src='https://image.flaticon.com/icons/png/512/147/147144.png'
						></img>
						<div className='mt-2'>
							<p>Welcome!</p>
							<p className='text-xl'>
								<b>KBS</b>
							</p>
						</div>
					</div>
					<ul className='list-none flex-grow'>
						<li>Dashboard</li>
						<li>Sport Centres</li>
						<li>Shotbook User</li>
						<li>KBS Facilities</li>
						<li>Announcement</li>
						<li>Event Management</li>
						<li>Marketing Management</li>
						<li>User Access</li>
					</ul>
					<div className='p-4 flex items-center justify-between flex-none border-t-2'>
						<p>Sign out</p>
						<FontAwesomeIcon icon={faSignOutAlt} />
					</div>
				</div>
			</>
		);
	}
}

export default Sidebar;
