"use strict";

setTimeout(function() {
	console.log("timeout expired 1");
}, 1000);

setImmediate(function() {
	console.log("timeout expired 2");
});

process.nextTick(function() {
	console.log("next tick");
});

console.log("waiting for timeout...");
