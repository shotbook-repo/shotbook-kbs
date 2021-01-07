import React, { Component } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
						<Link to='/dashboard'>
							<li>Dashboard</li>
						</Link>
						<Link to='/sport_center'>
							<li>Sport Centers</li>
						</Link>
						<Link to='/shotbook_user'>
							<li>Shotbook User</li>
						</Link>
						<Link to='/facility'>
							<li>Facilities Management</li>
						</Link>
						<Link to='/announcement'>
							<li>Announcement</li>
						</Link>
						<Link to='/event'>
							<li>Event Management</li>
						</Link>
						<Link to='/marketing'>
							<li>Marketing Management</li>
						</Link>
						<Link to='/user_access'>
							<li>User Access</li>
						</Link>
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
