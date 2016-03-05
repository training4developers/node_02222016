"use strict";

// world of promises...

// undefined = resolved promise
// any other value = resolved promise
// promise = ? could be either resolved or rejected
// throw Error = rejected promise
// return Promise.reject() = rejected promise


new Promise(function(resolve, reject) {

	resolve("first one");


}).then(function(results) {



	console.log("first then");
	//throw Error("Kim Jung-Un ordered the nukes ready to launch...");
	return Promise.reject("Kim Jung-Un ordered the nukes ready to launch...")
	//return results;

}).then(function(results) {

	console.log("second then");

}).catch(function(nukes) {
	console.dir(nukes);
	console.log("THAAD shoots down nuke...");

});
