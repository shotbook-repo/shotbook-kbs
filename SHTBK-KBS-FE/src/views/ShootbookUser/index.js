import React, { useState } from 'react';
import { useFetch } from '../../components/CustomHooks/useFetch';
import config from '../../../src/configs/config.json';
import TitleBar from '../../components/TitleBar';
import MaterialTable, { MTablePagination } from 'material-table';
import moment from 'moment';
import './shotbookuserpage.css';

const url = config.API_URL + '/getUsers';
const requestBody = {
	flag: 'shotbook_users',
};

const ShotbookUserPage = () => {
	const [title, setTitle] = useState('Shotbook Users');
	const { responseData } = useFetch(url, requestBody);

	return (
		<>
			<div className='body'>
				<TitleBar title={title} />
				{responseData.data ? (
					<div className='w-full mt-8'>
						<MaterialTable
							data={responseData.data}
							title=''
							columns={[
								{
									title: 'Reg. Date',
									field: 'created_at',
									type: 'date',
									render: (rowData) => (
										<div>
											{moment(rowData.created_at).format(
												'D MMMM YYYY'
											)}
										</div>
									),
								},
								{
									title: 'Last Active',
									field: 'last_login',
									filtering: false,
									render: (rowData) => (
										<div>
											{moment(rowData.last_login).format('h:mm A')}
										</div>
									),
								},
								{ title: 'ID', field: 'id', filtering: false },
								{ title: 'Name', field: 'name' },
								{
									title: 'Mobile No',
									field: 'contact',
									render: (rowData) => <div>0{rowData.contact}</div>,
								},
								{ title: 'Email', field: 'email' },
								{
									title: 'Status',
									field: 'status',
									lookup: { Active: 'Active', Inactive: 'Inactive' },
								},
							]}
							options={{
								exportButton: true,
								exportFileName: 'kbs_shotbook_users',
								filtering: true,
							}}
						/>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default ShotbookUserPage;
