var net = require('net');
var port = process.argv[2];

Date.prototype.yyyymmdd = function() {
	var yyyy = this.getFullYear().toString();
	var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
	var dd  = this.getDate().toString();
	var hh = this.getHours().toString();
	var minute = this.getMinutes().toString();
	return yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]) + ' ' +
		(hh[1]?hh:"0"+hh[0]) + ':' + (minute[1]?minute:"0"+minute[0]); // padding
};
var server = net.createServer(function (socket) {
	var date = new Date();
	socket.end(date.yyyymmdd() + '\n');
});
server.listen(port);
