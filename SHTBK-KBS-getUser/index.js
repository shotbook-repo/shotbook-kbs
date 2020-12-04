const express = require('express');
const app = express();
const dbconnection = require('./dbconnection');

//	CONNECT TO PORT
app.listen(3000);

//  REQUEST BODY
app.use(express.json());

//  DEFINE ROUTES
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

		res.json(response);

		// console.log('[Request Body] ', req.body);
		// console.log('[Query] ', rawString);
		// console.log('[Result] ', users.rows);
	} catch (err) {
		console.error(err.message);
	}
});
