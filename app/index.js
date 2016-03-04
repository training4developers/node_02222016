"use strict";

var request = require("request");

request({
	url: "http://localhost:8080/api/widgets",
	method: "GET"
}, function(err, data) {

	if (err) {
		console.error(err);
		return;
	}

	console.log(data.body);

});

request({
	url: "http://localhost:8080/api/widgets",
	method: "POST",
	headers: {
		"Content-Type": "application/json"
	},
	json: true,
	body: {
		name: "Tiny Purple Widget",
		description: "A tiny, purple widget.",
		color: "purple",
		size: "tiny",
		quantity: 12
	}
}, function(err, data) {

	if (err) {
		console.error(err);
		return;
	}

	console.log(data.body);

});
