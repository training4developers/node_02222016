"use strict";

const
	express = require("express");

let
	app = express();

app.use(express.static("www"));

app.listen(8080, function() {
	console.log("listening on port 8080");
});
