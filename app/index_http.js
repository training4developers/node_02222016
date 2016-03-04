"use strict";

const
	http = require("http");

let
	server = http.createServer(function(req, res) {
		res.end(JSON.stringify({ id: 1 }))
	});

server.listen(8080, function() {
	console.log("web server listening on port 8080");
});
