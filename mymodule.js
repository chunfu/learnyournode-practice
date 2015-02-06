var fs = require('fs');
var path = require('path');

function myfunction(dir, extname, callback) {
	fs.readdir(dir, function (err, files) {
		var data = [];
		if (err)
			return callback(err);
		
		files.forEach(function (file) {
			if (path.extname(file) === '.' + extname)
				data.push(file);
		});
		// files.filter(callback)
		return callback(null, data);
	});
}

module.exports = myfunction;
