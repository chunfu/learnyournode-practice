var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '5566',
	database: 'kio',
});

connection.connect();

connection.query('select * from articles', function(error, rows, fields) {
	if (error) {
		throw error;
	}
	console.log(rows[0]);
});

