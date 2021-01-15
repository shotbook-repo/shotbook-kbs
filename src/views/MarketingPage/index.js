import React, { useState } from 'react';
import TitleBar from '../../components/TitleBar';
import './marketingpage.css';
import kbs from '../../../src/assets/images/kbs.png';
import shotbook from '../../../src/assets/images/shotbook.png';

const MarketingPage = () => {
	const [title, setTitle] = useState('Marketing Management');
	return (
		<>
			<div className='body'>
				{/* <TitleBar title={title} /> */}
				<div className='my-auto mx-auto text-center space-y-6'>
					<div className='flex space-x-6 items-center justify-center'>
						<img
							src={kbs}
							alt='KBS'
							style={{ width: 'auto', height: '85px' }}
						/>
						<div
							style={{ height: '70px', borderLeft: '6px solid #515151' }}
						></div>
						<img
							src={shotbook}
							alt='Shotbook'
							style={{ width: '15%', height: 'auto' }}
						/>
					</div>
					<div className='font-semibold text-lg'>
						Currently in development. Will be available soon.
					</div>
				</div>
			</div>
		</>
	);
};

export default MarketingPage;
