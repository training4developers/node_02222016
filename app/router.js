"use strict";

const
	express = require("express"),
	router = express.Router();

router.route("/widgets")
	.get(function(req, res) {
		res.json([
			{ id: 1, name: req.query.kris },
			{ id: 2, name: req.kyleRocks }
		]);
	})
	.post(function(req, res) {
		// db.save(req.body, function() {
		// 	res.json("saved it!");
		// });
		res.json(req.body);
	});

router.route("/widgets/:widgetId")
	.get(function(req, res) {
		res.json({ id: parseInt(req.params.widgetId, 10), name: "Whatever" });
	})
	.put(function(req, res) {
		res.json({ id: parseInt(req.params.widgetId, 10) });
	})
	.delete(function(req, res) {
		res.json({ id: parseInt(req.params.widgetId, 10) });
	});

module.exports = router;
