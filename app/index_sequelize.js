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

Widgets.sync().then(function() {
	return Widgets.create({
		name: "Small, Red Widget",
		description: "A small red widget",
		color: "red",
		size: "small",
		quantity: 12
	});
}).then(function() {
	return Widgets.update({
		color: "hot pink"
	}, {
		where: { id: 2 }
	});
}).then(function() {
	return Widgets.update({
		color: "hot pink"
	}, {
		where: { id: 2 }
	});
}).then(function() {
	return Widgets.destroy({
		where: { id: 3 }
	});
}).then(function() {


	return Widgets.findAll();

}).then(function(results) {
	console.dir(results.map(function(result) { return result.dataValues }));
});
