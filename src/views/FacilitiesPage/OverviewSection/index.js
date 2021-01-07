import React from 'react';
import './overviewsection.css';

const OverviewSection = ({ subvenues, inventories, equipments }) => {
	return (
		<>
			<div className='mt-8'>
				<div>
					<div className='fl-section-title'>Subvenues</div>
					<div className='flex w-full mb-2 mt-4 px-8'>
						<div className='w-2/6 col-title'>ID</div>
						<div className='w-2/6 col-title'>Name</div>
						<div className='w-2/6 col-title'>Quantity</div>
					</div>
					<div className='content-card space-y-3'>
						{subvenues.length > 0 ? (
							subvenues.map((subvenue) => {
								return (
									<div key={subvenue.id} className='flex'>
										<div className='w-2/6'>{subvenue.id}</div>
										<div className='w-2/6'>{subvenue.name}</div>
										<div className='w-2/6'>{subvenue.quantity}</div>
									</div>
								);
							})
						) : (
							<div className='text-center my-2'>
								No current subvenues.
							</div>
						)}
					</div>
				</div>
				<div className='fl-section-title mt-8'>Inventories</div>
				<div className='flex w-full mb-2 mt-4 px-8'>
					<div className='w-1/4 col-title'>ID</div>
					<div className='w-1/4 col-title'>Name</div>
					<div className='w-1/4 col-title'>Category</div>
					<div className='w-1/4 col-title'>Location</div>
					<div className='w-1/4 col-title'>Manufacturer</div>
					<div className='w-1/4 col-title'>Model</div>
					<div className='w-1/4 col-title'>Serial No</div>
					<div className='w-1/4 col-title'>Quantity</div>
				</div>
				<div className='content-card space-y-3'>
					{inventories.length > 0 ? (
						inventories.map((inventory) => {
							return (
								<div key={inventory.id} className='flex'>
									<div className='w-1/4'>{inventory.id}</div>
									<div className='w-1/4'>{inventory.name}</div>
									<div className='w-1/4'>{inventory.category}</div>
									<div className='w-1/4'>
										{inventory.location_at_venue}
									</div>
									<div className='w-1/4'>{inventory.manufacturer}</div>
									<div className='w-1/4'>{inventory.model}</div>
									<div className='w-1/4'>{inventory.serial_no}</div>
									<div className='w-1/4'>{inventory.quantity}</div>
								</div>
							);
						})
					) : (
						<div className='text-center my-2'>
							No current inventories.
						</div>
					)}
				</div>
				<div className='fl-section-title mt-8'>Equipments</div>
				<div className='flex w-full mb-2 mt-4 px-8'>
					<div className='w-1/4 col-title'>ID</div>
					<div className='w-1/4 col-title'>Name</div>
					<div className='w-1/4 col-title'>Category</div>
					<div className='w-1/4 col-title'>Location</div>
					<div className='w-1/4 col-title'>Manufacturer</div>
					<div className='w-1/4 col-title'>Model</div>
					<div className='w-1/4 col-title'>Serial No</div>
					<div className='w-1/4 col-title'>Quantity</div>
				</div>
				<div className='content-card space-y-3 mb-12'>
					{equipments.length > 0 ? (
						equipments.map((equipment) => {
							return (
								<div key={equipment.id} className='flex'>
									<div className='w-1/4'>{equipment.id}</div>
									<div className='w-1/4'>{equipment.name}</div>
									<div className='w-1/4'>{equipment.category}</div>
									<div className='w-1/4'>
										{equipment.location_at_venue}
									</div>
									<div className='w-1/4'>{equipment.manufacturer}</div>
									<div className='w-1/4'>{equipment.model}</div>
									<div className='w-1/4'>{equipment.serial_no}</div>
									<div className='w-1/4'>{equipment.quantity}</div>
								</div>
							);
						})
					) : (
						<div className='text-center my-2'>No current equipments.</div>
					)}
				</div>
			</div>
		</>
	);
};

export default OverviewSection;
