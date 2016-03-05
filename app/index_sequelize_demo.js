"use strict";

var Sequelize = require("sequelize");

var sequelize = new Sequelize('mysql://root@127.0.0.1:3306/t4dclass');

var Widgets = sequelize.define('widgets', {
  name: { type: Sequelize.STRING },
	description: { type: Sequelize.TEXT },
	color: { type: Sequelize.STRING },
	size: { type: Sequelize.STRING },
	quantity: { type: Sequelize.INTEGER },
}, { freezeTableName: true });

Widgets.sync({ force: false }).then(function(results) {

	return Widgets.create({
		name: "Tiny Blue Widget",
		description: "The tiny, blue widget.",
		color: "blue",
		size: "tiny",
		quantity: 55
	});

}).then(function(results) {

	return Widgets.findAll();
}).then(function(results) {
	console.dir(results[0].dataValues);
	return Widgets.update({
		color: "hot pink"
	}, { where: { color: 'blue' }});
}).then(function(results) {
	console.dir(results[0].dataValues);
	return Widgets.destroy({ where: { id: 1 } });
}).then(function(results) {

}).catch(function(results) {
	console.error(results);
})
