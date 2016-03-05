"use strict";

const
	request = require("request");


request({
	method: "POST",
	url: "http://localhost:8080/api/widgets",
	headers: {
		"Content-Type": "application/json"
	},
	json: true,
	body: {
		name: "Tiny Purple Widget",
		description: "A tiny purple widget.",
		color: "purple",
		size: "tiny",
		quantity: 23
	}
}, function(err, data) {

	if (err) {
		console.dir(err);
		return;
	}

	request({
		method: "GET",
		url: "http://localhost:8080/api/widgets"
	}, function(err, results) {

		if (err) {
			console.dir(err);
			return;
		}

		console.dir(results);

	});

});
