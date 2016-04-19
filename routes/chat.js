
var models = require("../models");
var mongoose = require('mongoose');

exports.view = function(req, res) {
    //console.log(data);

	models.Newsfeed.find().exec(renderFeed);

	function renderFeed(err, newsfeed) {
		if(err) {
			res.render("chat", {"newsfeed": "Error loading messages"});
		}
		res.render('chat', { 'newsfeed': newsfeed });
	}

};
