var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
	if (process.argv[2] && err) throw err;
	var extname = '.' + process.argv[3];
	files.forEach(function (file) {
		if (path.extname(file) === extname)
		console.log(file);
	});
});
