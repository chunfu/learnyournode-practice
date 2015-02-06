var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var contents = {};
var count = 0;
urls.forEach(function (url) {
	http.get(url, function (response) {
		var result = '';
		response.setEncoding('utf-8');
		response.on('data', function (data) {
			result += data;
		});
		response.on('end', function () {
			contents[url] = result;
			count++;
			if (count == urls.length)
				printInOrder();
		});
	});

});

function printInOrder() {
	for (var i = 0; i < urls.length; i++) {
		console.log(contents[urls[i]]);
	}
}
