import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

// const reducer = {
// 	venues: [
// 		{
// 			id: 1,
// 			name: 'Kompleks Belia Dan Sukan Kuala Lumpur',
// 			employee_no: 87,
// 			status: 'Active',
// 			line_add_1: '4029, Jalan Kampung Pandan',
// 			line_add_2: 'Maluri',
// 			postal_code: 55100,
// 			city: 'Kuala Lumpur',
// 			state: 'Kuala Lumpur',
// 			tel_no: 'Kuala Lumpur',
// 			contact_person: 'Kuala Lumpur',
// 			contact_no: 'Kuala Lumpur',
// 			contact_email: 'Kuala Lumpur',
// 		},
// 	],
// 	facilities: [
// 		{
// 			id: 1,
// 			type: 'Kompleks Belia Dan Sukan Kuala Lumpur',
// 			name: 87,
// 			category: 'Active',
// 			location_at_venue: '4029, Jalan Kampung Pandan',
// 			manufacturer: 'Maluri',
// 			model: 55100,
// 			serial_no: 'Kuala Lumpur',
// 			quantity: 'Kuala Lumpur',
// 			sport_id: 'Kuala Lumpur',
// 			venue_id: 'Kuala Lumpur',
// 		},
// 	],
// };

export default store;
