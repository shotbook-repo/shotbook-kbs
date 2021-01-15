const express = require('express');
const app = express();
const cors = require('cors');
const dbconnection = require('./dbconnection');
let port = process.env.PORT || 3001;

// For local dev ONLY
app.use(cors());

//	CONNECT TO PORT
app.listen(port);

//  REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  DEFINE ROUTES
app.get('/index', async (req, res) => {
	res.send('Shotbook KBS APIs');
});

app.post('/getUsers', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { flag } = req.body;

		switch (flag) {
			case 'guest_single':
				rawString += 'SELECT * ';
				rawString += 'FROM kbs.users ';
				rawString += 'WHERE id = ' + user_id;
				break;
			case 'guest_all':
				rawString += 'SELECT * FROM kbs.users';
				break;
			case 'employee_all':
				rawString += 'SELECT * ';
				rawString += 'FROM kbs.users ';
				rawString += 'WHERE venue_id = ' + req.body.venue_id;
				break;
			case 'shotbook_users':
				rawString += 'SELECT * ';
				rawString += 'FROM kbs.users ';
				rawString += 'WHERE user_type_id = 3';
				break;
			default:
				break;
		}

		//	EXECUTE QUERIES ON DB
		let users = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			data: users.rows,
		};

		return res.json(response);

		// console.log('[Request Body] ', req.body);
		// console.log('[Query] ', rawString);
		// console.log('[Result] ', users.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/getFacilities', async (req, res) => {
	let response;
	let rawStringFacilities = '';
	let rawStringVenues = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { venue_id } = req.body;

		rawStringFacilities += 'SELECT * FROM kbs.facilities ';
		rawStringFacilities += `WHERE venue_id=${venue_id}`;

		rawStringVenues += 'SELECT * FROM kbs.venues ';
		rawStringVenues += `WHERE id=${venue_id}`;

		//	EXECUTE QUERIES ON DB
		let facilities = await dbconnection.query(rawStringFacilities);
		let venues = await dbconnection.query(rawStringVenues);

		response = {
			statusCode: 200,
			message: 'Successful',
			data: {
				venue: venues.rows,
				facility: facilities.rows,
			},
		};

		return res.json(response);
	} catch (err) {
		response = {
			statusCode: 500,
			message: 'Error',
			transaction: 'GET VENUE FACILITIES',
			data: req.body,
		};
		console.error(err.message);
		return res.json(response);
	}
});

app.post('/getAllFacilities', async (req, res) => {
	let response;
	let rawStringFacilities = '';
	let rawStringVenues = '';
	let result = [];

	try {
		rawStringVenues += 'SELECT id, name FROM kbs.venues ';
		let venues = await dbconnection.query(rawStringVenues);

		for (venue of venues.rows) {
			rawStringFacilities = 'SELECT id, name FROM kbs.facilities ';
			rawStringFacilities += 'WHERE venue_id=' + venue.id + ' ';
			rawStringFacilities += `AND type='Subvenue' `;

			let facilities = await dbconnection.query(rawStringFacilities);

			let data = {
				venue: {
					venue_id: venue.id,
					venue_name: venue.name,
				},
				facilities: facilities.rows,
			};

			result.push(data);
		}

		response = {
			statusCode: 200,
			message: 'Successful',
			data: result,
		};

		return res.json(response);
	} catch (err) {
		response = {
			statusCode: 500,
			message: 'Error',
			transaction: 'GET ALL FACILITIES',
			data: req.body,
		};
		console.error(err.message);
		return res.json(response);
	}
});

app.post('/getVenues', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { flag, venue_id } = req.body;
		if (flag === 'single') {
			rawString += 'SELECT * FROM ';
			rawString += 'kbs.venues ';
			rawString += 'WHERE id = ' + venue_id;
		} else if (flag === 'all') {
			rawString += 'SELECT * FROM kbs.venues';
		}

		// rawString += 'SELECT * FROM kbs.venues';

		//	EXECUTE QUERIES ON DB
		let venues = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			data: venues.rows,
		};

		return res.json(response);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/getEvents', async (req, res) => {
	let response;
	let result = [];
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { flag, month } = req.body;
		// let noOfMonth = await getMonth(month);

		if (flag === 'single') {
			rawString += 'SELECT * FROM ';
			rawString += 'kbs.events ';
			rawString += 'WHERE id = ' + event_id;
		} else if (flag === 'byMonth') {
			rawString += 'SELECT * ';
			rawString += 'FROM kbs.events ';
			rawString += 'WHERE EXTRACT(MONTH FROM start_date) = ' + month;
		}

		//	EXECUTE QUERIES ON DB
		let events = await dbconnection.query(rawString);

		if (events.rowCount > 0) {
			for (event of events.rows) {
				let rawStringFacility = 'SELECT * FROM ';
				rawStringFacility += 'kbs.facilities ';
				rawStringFacility += 'WHERE id = ' + event.facility_id;

				let facility = await dbconnection.query(rawStringFacility);

				let rawStringVenue = 'SELECT * FROM ';
				rawStringVenue += 'kbs.venues ';
				rawStringVenue += 'WHERE id = ' + facility.rows[0].venue_id;

				let venue = await dbconnection.query(rawStringVenue);

				let tempResult = {
					event: event,
					venue: venue.rows[0],
					facility: facility.rows[0],
				};
				result.push(tempResult);
			}
		}

		response = {
			statusCode: 200,
			message: 'Successful',
			data: result,
		};

		return res.json(response);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/insertVenue', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let {
			name,
			employee_no,
			status,
			line_add_1,
			line_add_2,
			postal_code,
			city,
			state,
			tel_no,
			contact_person,
			contact_no,
			contact_email,
		} = req.body;

		rawString += 'INSERT INTO ';
		rawString +=
			'kbs.venues(name, employee_no, status, line_add_1, line_add_2, postal_code, city, state, tel_no, contact_person, contact_no, contact_email) ';
		rawString += `VALUES('${name}', ${employee_no}, '${status}', '${line_add_1}', '${line_add_2}', ${postal_code}, '${city}', '${state}', ${tel_no}, '${contact_person}', ${contact_no}, '${contact_email}'`;
		rawString += ')';

		//	EXECUTE QUERIES ON DB
		let venue = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			transaction: venue.command,
			rows_inserted: venue.rowCount,
			data: venue.rows,
		};

		return res.json(response);
	} catch (err) {
		response = {
			statusCode: 500,
			message: 'Error',
			transaction: 'INSERT VENUE',
			data: req.body,
		};

		console.error(err.message);
		return res.json(response);
	}
});

app.post('/insertfacility', async (req, res) => {
	let response;
	let rawStringFacility = '';
	let rawStringBusinessHour = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let {
			venue_id,
			facilityType,
			facilityName,
			category,
			location_at_venue,
			manufacturer,
			model,
			serial_no,
			quantity,
			isMondayOpen,
			isTuesdayOpen,
			isWednesdayOpen,
			isThursdayOpen,
			isFridayOpen,
			isSaturdayOpen,
			isSundayOpen,
			mondayStartTime,
			mondayCloseTime,
			tuesdayStartTime,
			tuesdayCloseTime,
			wednesdayStartTime,
			wednesdayCloseTime,
			thursdayStartTime,
			thursdayCloseTime,
			fridayStartTime,
			fridayCloseTime,
			saturdayStartTime,
			saturdayCloseTime,
			sundayStartTime,
			sundayCloseTime,
		} = req.body;

		mondayStartTime === ''
			? (mondayStartTime = null)
			: (mondayStartTime = `'${mondayStartTime}'`);
		mondayCloseTime === ''
			? (mondayCloseTime = null)
			: (mondayCloseTime = `'${mondayCloseTime}'`);
		tuesdayStartTime === ''
			? (tuesdayStartTime = null)
			: (tuesdayStartTime = `'${tuesdayStartTime}'`);
		tuesdayCloseTime === ''
			? (tuesdayCloseTime = null)
			: (tuesdayCloseTime = `'${tuesdayCloseTime}'`);
		wednesdayStartTime === ''
			? (wednesdayStartTime = null)
			: (wednesdayStartTime = `'${wednesdayStartTime}'`);
		wednesdayCloseTime === ''
			? (wednesdayCloseTime = null)
			: (wednesdayCloseTime = `'${wednesdayCloseTime}'`);
		thursdayStartTime === ''
			? (thursdayStartTime = null)
			: (thursdayStartTime = `'${thursdayStartTime}'`);
		thursdayCloseTime === ''
			? (thursdayCloseTime = null)
			: (thursdayCloseTime = `'${thursdayCloseTime}'`);
		fridayStartTime === ''
			? (fridayStartTime = null)
			: (fridayStartTime = `'${fridayStartTime}'`);
		fridayCloseTime === ''
			? (fridayCloseTime = null)
			: (fridayCloseTime = `'${fridayCloseTime}'`);
		saturdayStartTime === ''
			? (saturdayStartTime = null)
			: (saturdayStartTime = `'${saturdayStartTime}'`);
		saturdayCloseTime === ''
			? (saturdayCloseTime = null)
			: (saturdayCloseTime = `'${saturdayCloseTime}'`);
		sundayStartTime === ''
			? (sundayStartTime = null)
			: (sundayStartTime = `'${sundayStartTime}'`);
		sundayCloseTime === ''
			? (sundayCloseTime = null)
			: (sundayCloseTime = `'${sundayCloseTime}'`);

		if (facilityType === 'Subvenue') {
			rawStringFacility = 'INSERT INTO ';
			rawStringFacility +=
				'kbs.facilities("type", "name", quantity, venue_id) ';
			rawStringFacility += `VALUES('${facilityType}', '${facilityName}', ${quantity}, ${venue_id}`;
			rawStringFacility += ')';

			rawStringBusinessHour += 'INSERT INTO ';
			rawStringBusinessHour +=
				'kbs.business_hour(is_mon_open, mon_start, mon_end, is_tue_open, tue_start, tue_end, is_wed_open, wed_start, wed_end, is_thu_open, thu_start, thu_end, is_fri_open, fri_start, fri_end, is_sat_open, sat_start, sat_end, is_sun_open, sun_start, sun_end, venue_id) ';
			rawStringBusinessHour += `VALUES(${isMondayOpen}, ${mondayStartTime}, ${mondayCloseTime}, ${isTuesdayOpen}, ${tuesdayStartTime}, ${tuesdayCloseTime}, ${isWednesdayOpen}, ${wednesdayStartTime}, ${wednesdayCloseTime}, ${isThursdayOpen}, ${thursdayStartTime}, ${thursdayCloseTime}, ${isFridayOpen}, ${fridayStartTime}, ${fridayCloseTime}, ${isSaturdayOpen}, ${saturdayStartTime}, ${saturdayCloseTime}, ${isSundayOpen}, ${sundayStartTime}, ${sundayCloseTime}, ${venue_id} `;
			rawStringBusinessHour += ')';

			console.log('Raw String: ', rawStringFacility);
			console.log('Raw String: ', rawStringBusinessHour);
			let businessHour = await dbconnection.query(rawStringBusinessHour);
			console.log({ businessHour });
		} else if (facilityType === 'Equipment' || facilityType === 'Inventory') {
			rawStringFacility = 'INSERT INTO ';
			rawStringFacility +=
				'kbs.facilities("type", "name", category, location_at_venue, manufacturer, model, serial_no, quantity, sport_id, venue_id) ';
			rawStringFacility += `VALUES('${facilityType}', '${facilityName}', '${category}', '${location_at_venue}', '${manufacturer}', '${model}', '${serial_no}', ${quantity}, ${null}, ${venue_id}`;
			rawStringFacility += ')';

			console.log('Raw String: ', rawStringFacility);
		}

		//	EXECUTE QUERIES ON DB
		let facility = await dbconnection.query(rawStringFacility);

		response = {
			statusCode: 200,
			message: 'Successful',
			transaction: facility.command,
			rows_inserted: facility.rowCount,
			data: facility.rows,
		};

		return res.json(response);
	} catch (err) {
		response = {
			statusCode: 500,
			message: 'Error',
			transaction: 'INSERT VENUE',
			data: req.body,
		};

		console.error(err.message);
		return res.json(response);
	}
});

app.post('/insertEvent', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let {
			name,
			category,
			description,
			venue,
			venue_id,
			facility,
			timestampStart,
			timestampEnd,
			type,
		} = req.body;

		rawString += 'INSERT INTO ';
		rawString +=
			'kbs.events(name, category, description, start_date, end_date, event_type, facility_id) ';
		rawString += `VALUES('${name}', '${category}', '${description}', '${timestampStart}', '${timestampEnd}', '${type}', '${facility}')`;

		console.log(rawString);
		//	EXECUTE QUERIES ON DB
		let event = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			transaction: event.command,
			rows_inserted: event.rowCount,
			data: event.rows,
		};

		return res.json(response);
	} catch (err) {
		response = {
			statusCode: 500,
			message: 'Error',
			transaction: 'INSERT EVENT',
			data: req.body,
		};

		console.error(err.message);
		return res.json(response);
	}
});

let getMonth = async (month) => {
	switch (month) {
		case 'January':
			return 1;
		case 'February':
			return 2;
		case 'March':
			return 3;
		case 'April':
			return 4;
		case 'May':
			return 5;
		case 'June':
			return 6;
		case 'July':
			return 7;
		case 'August':
			return 8;
		case 'September':
			return 9;
		case 'October':
			return 10;
		case 'November':
			return 11;
		case 'December':
			return 12;
		default:
			break;
	}
};
