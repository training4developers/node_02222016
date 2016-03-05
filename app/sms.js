module.exports = function sms(to, status) {
	return new Promise(function(resolve,reject) {
		console.log(to);
		console.log(status);
		// Twilio Credentials
		var accountSid = 'xxxx';
		var authToken = 'xxxx';

		//require the Twilio module and create a REST client
		var client = require('twilio')(accountSid, authToken);

		client.messages.create({
			to: to,
			from: "+SomePhoneNumber",
			body: status
		}, function(err, message) {

			if (err) {
				console.log(require("util").inspect(err));
				reject(err);
				return;
			}
			console.log(require("util").inspect(message));
			resolve();
		});
	});
}

module.exports("+SomePhoneNumber", "test").then(function() {
	console.log("sent!");
}).catch(function() {
	console.log("error!");
	console.dir(arguments);
});
