"use strict"

module.exports = function email(msg) {

  var sendgrid = require("sendgrid")("xxxx");

  var email = new sendgrid.Email();

  email.addTo("eric@training4developers.com");
  email.setFrom("no-reply@training4developers.com");
  email.setSubject("Sending with SendGrid is Fun");
  email.setHtml(msg);
  sendgrid.send(email, function(err) {
    if (err) {
			console.log(err);
      return;
    }
    console.log("send!");
  });
}

module.exports("test!");
