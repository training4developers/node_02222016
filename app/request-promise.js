"use strict";

const
	request = require("request"),
	objectAssign = require("object-assign");
	//util = require("util");

Object.assig

// console.dir({
// 	id: 1, name: "Bob", age: 23, address: {
// 		street: "123 Oak Lane",
// 		city: "Phoenix",
// 		state: "Illinois",
// 		zipCode: "84120"
// 	}
// }, { depth: 0 });

// console.log(JSON.stringify({
// 	id: 1, name: "Bob", age: 23
// }));

//console.dir(request, { depth: 0 });

module.exports = function(options) {

	return new Promise(function(resolve, reject) {

		request(options, function(err, results) {
			if (err) {
				reject(err);
				return;
			}

			resolve(results);
		});

	});

}

objectAssign(module.exports, request);
