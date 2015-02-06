var mymodule = require('./mymodule');

var dir = process.argv[2];
var extname = process.argv[3];
function callback(err, data) {
	if (err)
		console.log('fk');
	else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
}
mymodule(dir, extname, callback);
