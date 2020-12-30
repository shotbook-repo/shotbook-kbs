const initialState = [
	{
		id: 1,
		name: '',
		employee_no: 0,
		status: '',
		line_add_1: '',
		line_add_2: '',
		postal_code: 0,
		city: '',
		state: '',
		tel_no: '',
		contact_person: '',
		contact_no: '',
		contact_email: '',
	},
];

const venuesReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_VENUE':
			return [
				...state,
				{
					name: payload.name,
					employee_no: payload.employee_no,
					status: payload.status,
					line_add_1: payload.line_add_1,
					line_add_2: payload.line_add_2,
					postal_code: payload.postal_code,
					city: payload.city,
					state: payload.state,
					tel_no: payload.tel_no,
					contact_person: payload.contact_person,
					contact_no: payload.contact_no,
					contact_email: payload.contact_email,
				},
			];
		case 'GET_ALL_VENUES':
			return fetch(url, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ flag: 'all', venue_id: null }),
			}).then((res) => res.json());
		default:
			return state;
	}
	return state;
};

export default venuesReducer;
