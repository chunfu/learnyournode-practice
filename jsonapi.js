var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
	var query = url.parse(request.url, true).query;
	var pathname = url.parse(request.url, true).pathname;
	var obj = {};
	if (pathname.indexOf('parsetime') > -1) {
		for (var key in query) {
			var d = new Date(query[key]);
			obj = {
				hour : d.getHours(),
    				minute : d.getMinutes(),
   				second : d.getSeconds() 
			};
		}
	} else if (pathname.indexOf('unixtime') > -1) {
		for (var key in query) {
			console.log(key);
			var d = new Date(query[key]);
			obj = {
				unixtime: d.getTime()
			};
		}
	}
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.write(JSON.stringify(obj));
	response.end();
});
server.listen(port);
