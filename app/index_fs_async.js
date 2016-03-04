"use strict";

const
	fs = require("fs");

let
	fileName;

var p = new Promise(function(resolve, reject) {

	fs.readFile("temp.txt", "utf-8", function(err, data) {

		if (err) {
			reject(err);
			return;
		}

		resolve(data.trim());

	});

});

p.then(function(results) {

	fs.readFile(results, "utf-8", function(err, data) {

		if (err) {
			console.error(err);
			return;
		}

		console.log(data);

	});

});
