const express = require('express');
const app = express();
const dbconnection = require('./dbconnection');

//	CONNECT TO PORT
app.listen(3000);

//  REQUEST BODY
app.use(express.json());

//  ROUTES
app.post('/addUser', async (req, res) => {
	let response;
	let rawString = '';

	try {
		//	DESTRUCTURE REQUEST BODY
		let { name, email, password, contact } = req.body;

		rawString += 'INSERT INTO ';
		rawString += 'kbs.users(name, email, password, contact) ';
		rawString += `VALUES('${name}', '${email}', '${password}', '${contact}') `;
		//	rawString += 'RETURNING * ';

		//	EXECUTE QUERIES ON DB
		let addUser = await dbconnection.query(rawString);

		response = {
			statusCode: 200,
			message: 'Successful',
			transaction: addUser.command,
			rows_inserted: addUser.rowCount,
			data: addUser.rows,
		};

		res.json(response);
		// console.log('[Request Body] ', req.body);
		// console.log('[Query] ', rawString);
		// console.log('[Result] ', users.rows);
	} catch (err) {
		console.error(err.message);
	}
});
