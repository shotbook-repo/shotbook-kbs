import React, { useState } from 'react';
import config from '../../../configs/config.json';
import { useFetch } from '../../../components/CustomHooks/useFetch';

const EmployeeSection = ({ venue }) => {
	const url = `${config.API_URL}/getUser`;
	const [requestBody, setRequestBody] = useState({
		flag: 'employee_all',
		venue_id: venue,
	});
	const { responseData } = useFetch(url, requestBody);

	function convertDateFormat(date) {
		let inputDate = new Date(date);
		let year = inputDate.getFullYear();
		let hari = inputDate.getDate();
		let month = inputDate.getMonth() + 1;
		let hours = inputDate.getHours();
		let minutes = inputDate.getMinutes();
		let ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		let output =
			hours + ':' + minutes + ampm + ' ' + hari + '/' + month + '/' + year;
		return output;
	}

	return (
		<>
			<div className='mt-2'>
				<div>
					<div className='flex w-full mb-2 mt-4 px-8'>
						<div className='w-2/12 col-title'>Name</div>
						<div className='w-2/12 col-title'>Position</div>
						<div className='w-2/12 col-title'>Contact</div>
						<div className='w-2/12 col-title'>Email</div>
						<div className='w-2/12 col-title'>Last login</div>
						<div className='w-2/12 col-title'>Status</div>
					</div>
					<div className='content-card space-y-3'>
						{responseData.data ? (
							responseData.data.length > 0 ? (
								responseData.data.map((employee) => {
									console.log();
									return (
										<div className='flex'>
											<div className='w-2/12'>{employee.name}</div>
											<div className='w-2/12'>
												{employee.position}
											</div>
											<div className='w-2/12'>
												{employee.contact}
											</div>
											<div className='w-2/12'>{employee.email}</div>
											<div className='w-2/12'>
												{convertDateFormat(employee.last_login)}
											</div>
											<div className='w-2/12'>{employee.status}</div>
										</div>
									);
								})
							) : (
								<div className='text-center my-2'>
									No current employees.
								</div>
							)
						) : (
							<div className='text-center my-2'>Fetching data...</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default EmployeeSection;
