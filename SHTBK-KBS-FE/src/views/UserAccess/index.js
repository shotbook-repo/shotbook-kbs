import React, { useState } from 'react';
import { useFetch } from '../../components/CustomHooks/useFetch';
import config from '../../../src/configs/config.json';
import TitleBar from '../../components/TitleBar';
import MaterialTable from 'material-table';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './useraccesspage.css';
import { BasicTable } from '../../components/TitleBar/Table';
import ReactDOM from 'react-dom';
import './useraccesspage.css';
import Modal from '../../components/Cards/PopUpCard';
import '../../components/Buttons/MediumButton/mediumbutton.css';

const url = config.API_URL + '/getUsers';
const requestBody = {
	flag: 'admins',
};

const UserAccessPage = () => {
	const [title, setTitle] = useState('User Access');
	const { responseData } = useFetch(url, requestBody);

	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				<div id='container'>
					<div id='button1' className='button1'>
						<button>Edit/Remove Employees</button>
					</div>

					<div id='button2' className='button2'>
						<button>Add new employees</button>
					</div>
				</div>

				{responseData.data ? (
					<div className='w-full mt-8'>
						<MaterialTable
							data={responseData.data}
							title=''
							columns={[
								{ title: 'Name', field: 'name' },
								{ title: 'Position', field: 'position' },
								{
									title: 'Mobile No',
									field: 'contact',
									render: (rowData) => <div>0{rowData.contact}</div>,
								},
								{ title: 'Email', field: 'email' },
								{
									title: 'Last login',
									field: 'last_login',
									filtering: false,
									render: (rowData) => (
										<div>
											{moment(rowData.last_login).format(
												'h:mm A D/MM/YYYY'
											)}
										</div>
									),
								},
								{
									title: 'Status',
									field: 'status',
									lookup: { Active: 'Active', Inactive: 'Inactive' },
								},
							]}
							options={{
								filtering: true,
							}}
						/>
					</div>
				) : (
					<div className='text-center mt-auto mb-auto'>
						<FontAwesomeIcon
							icon={faSpinner}
							spin
							color='#303e58'
							size='2x'
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default UserAccessPage;
