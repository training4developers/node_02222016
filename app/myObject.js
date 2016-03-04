"use strict";

const
	events = require("events");

module.exports = class extends events.EventEmitter {
	constructor() {
		super();
	}

	listenTo(target, eventName, eventHandler) {
		target.on(eventName, eventHandler);
	}
};
