var amqp = require('amqp');

var endCon = amqp.createConnection({
    url: "amqpURL"
});

endCon.on("error", function() {
	console.log(arguments);
})

endCon.on('close', function() {
    console.log("end connection close");
});

endCon.on('ready', function () {

    console.log("end connected to amqp.");

    endCon.queue('t4dclass', function (queue) {

        // Catch all messages
        queue.bind('#');

        // Receive messages
        queue.subscribe(function (message, headers, deliveryInfo, messageObject) {
            // Print messages to stdout
            console.log("message received");
            console.dir(message.data.toString());

        });
    });
});
