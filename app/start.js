var amqp = require('amqp');

var startCon = amqp.createConnection({
    url: "amqp://xpzajppy:SyJO8G72iwJDgRujxlq0O3y4VXFn9q_8@baboon.rmq.cloudamqp.com/xpzajppy"
});

startCon.on('close', function() {
    console.log("start connection close");
});

startCon.on('ready', function (err) {

    console.log(require("util").inspect(arguments));

    console.log("start connected to amqp.");

    startCon.publish("t4dclass", "test", null, function(err) {
        console.log("message sent");
    });

});
