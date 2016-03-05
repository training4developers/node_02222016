"use strict";

const
	request = require("./request-promise");

console.dir(request, { depth: 0 } );


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
}).then(function(results) {
	return request({
		method: "GET",
		url: "http://localhost:8080/api/widgets"
	});
}).then(function(results) {
	//console.dir(results);
}).catch(function(err) {
	console.dir(err);
});
