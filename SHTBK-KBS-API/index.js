const express = require('express');
const app = express();
const cors = require('cors');
const dbconnection = require('./dbconnection');

// For local dev ONLY
app.use(cors());

//	CONNECT TO PORT
app.listen(3001);

//  REQUEST BODY
app.use(express.json());

//  DEFINE ROUTES
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

		// console.log('[Request Body] ', req.body);
		// console.log('[Query] ', rawString);
		// console.log('[Result] ', users.rows);
	} catch (err) {
		console.error(err.message);
	}
});

app.post('/insertVenues', async (req, res) => {
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

		console.log('Raw String: ', rawString);

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
			message: 'Unsuccessful',
			transaction: 'INSERT',
			data: req.body,
		};

		console.error(err.message);
		return res.json(response);
	}
});

app.get('/getUser', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { flag, user_id } = req.body;

		if (flag === 'single') {
			rawString += 'SELECT * ';
			rawString += 'FROM kbs.users ';
			rawString += 'WHERE id = ' + user_id;
		} else if (flag === 'all') {
			rawString += 'SELECT * FROM kbs.users';
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

app.get('/getFacilities', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		// let { flag } = req.body;

		rawString = 'SELECT * FROM kbs.facilities';

		//	EXECUTE QUERIES ON DB
		let facilities = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			data: facilities.rows,
		};

		return res.json(response);
	} catch (err) {
		console.error(err.message);
	}
});
