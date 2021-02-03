import { BasicTable } from '../../../components/TitleBar/Table';
import { useFetch } from '../../../components/CustomHooks/useFetch';
import config from '../../../configs/config.json';
import React from 'react';
import './equipmentsection.css';

const url = config.API_URL + '/getEquipmentInventory';

const EquipmentSection = ({ venue }) => {
	const requestBody = {
		type: 'Equipment',
		venue_id: venue,
	};
	const { responseData } = useFetch(url, requestBody);
	return (
		<>
			<div className='mt-2'>
				<div>
					<div className='flex w-full mb-2 mt-4 px-8'>
						<div className='w-2/12 col-title'>Equipment</div>
						<div className='w-2/12 col-title'>Category</div>
						<div className='w-2/12 col-title'>Location</div>
						<div className='w-2/12 col-title'>Manufacturer</div>
						<div className='w-2/12 col-title'>Brand</div>
						<div className='w-2/12 col-title'>Serial No</div>
						<div className='w-1/12 col-title'>Quantity</div>
					</div>
					<div className='content-card space-y-3'>
						{responseData.data ? (
							responseData.data.length > 0 ? (
								responseData.data.map((equipment) => {
									return (
										<div className='flex'>
											<div className='w-2/12'>{equipment.name}</div>
											<div className='w-2/12'>
												{equipment.category}
											</div>
											<div className='w-2/12'>
												{equipment.location_at_venue}
											</div>
											<div className='w-2/12'>
												{equipment.manufacturer}
											</div>
											<div className='w-2/12'>{equipment.model}</div>
											<div className='w-2/12'>
												{equipment.serial_no}
											</div>
											<div className='w-1/12'>
												{equipment.quantity}
											</div>
										</div>
									);
								})
							) : (
								<div className='text-center my-2'>
									No current equipments.
								</div>
							)
						) : (
							<div className='text-center my-auto'>Fetching data...</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default EquipmentSection;
