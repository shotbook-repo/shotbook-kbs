const Pool = require('pg').Pool;
const dbconnection = new Pool({
	user: 'postgres',
	password: 'root',
	database: 'shotbook',
	host: 'localhost',
	port: 5432,
});

module.exports = dbconnection;
