"use strict";

const
	url = require("url"),
	http = require("http"),
	express = require("express"),
	bodyParser = require("body-parser"),
	router = require("./router");

let
	app = express(),
	server = http.createServer(app),
	staticHandler = express.static("www", {
		index: "index.html"
	});

app.use(function(req, res, next) {

	console.log(req.url);

	console.dir(url.parse(req.url));

	req.kyleRocks = true;

	next();
});

//app.use("/api", );
app.use(/^\/api/, bodyParser.json(), router);

app.use(staticHandler);

server.listen(8080, function() {
	console.log("listening on port 8080");
});
