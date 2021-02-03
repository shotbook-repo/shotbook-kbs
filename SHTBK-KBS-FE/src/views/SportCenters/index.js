import React, { useState } from 'react';
import { useFetch } from '../../components/CustomHooks/useFetch';
import TitleBar from '../../components/TitleBar';
import config from '../../../src/configs/config.json';
import MaterialTable from 'material-table';
import moment from 'moment';
import './sportcenterpage.css';

const url = config.API_URL + '/getMerchants';
const requestBody = {
	flag: 'all',
};

const SportCenterPage = () => {
	const [title, setTitle] = useState('Sport Centers');
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
									title: 'Company Name',
									field: 'name',
								},
								{
									title: 'Company Reg',
									field: 'reg_no',
								},
								{
									title: 'Address',
									field: 'address',
								},
								{
									title: 'PIC',
									field: 'contact_name',
								},
								{
									title: 'Contact',
									field: 'contact_phone',
								},
								{
									title: 'ID',
									field: 'id',
								},
								{
									title: 'No of Staff',
									field: 'total_submitted_worker',
								},
								{
									title: 'Monthly Customers',
								},
							]}
							options={{
								exportButton: true,
								exportFileName: 'kbs_sport_centers',
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

export default SportCenterPage;
