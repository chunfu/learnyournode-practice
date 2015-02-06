var fs = require('fs');
var buf = fs.readFile(process.argv[2], function (err, data) {
	if (process.argv[2] && err) throw err;
	console.log(data.toString().split('\n').length - 1);
});
