const Pool = require('pg').Pool;
const dbconnection = new Pool({
	user: 'uiqtpzvrtohmxf',
	password: '14b35caf5a163bbc6eeb5817c05d162f4eb2a3617acbb00e59113d2ed5357f56',
	database: 'd16gpoaskrhb9s',
	host: 'ec2-54-144-45-5.compute-1.amazonaws.com',
	port: 5432,
});

module.exports = dbconnection;
