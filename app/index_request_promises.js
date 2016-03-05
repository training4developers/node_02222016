"use strict";

const
	request = require("request");


var p = new Promise(function(resolve, reject) {

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
			reject(err);
			return;
		}

		resolve(data);

	});

});

p.then(function(results) {

	return new Promise(function(resolve, reject) {

		request({
			method: "GET",
			url: "http://localhost:8080/api/widgets"
		}, function(err, results) {

			if (err) {
				reject(err);
				return;
			}

			resolve(results);

		});

	});

})
.then(function(results) {
	console.dir(results);
})
.catch(function(results) {
	console.error(results);
});
