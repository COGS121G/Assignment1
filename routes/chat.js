
var models = require("../models");
var mongoose = require('mongoose');

exports.view = function(req, res) {
    //console.log(data);

	models.Newsfeed.find().sort('posted').exec(renderFeed);

	function renderFeed(err, newsfeed) {
		res.render('chat', { 'newsfeed': newsfeed });
	}

  	//res.render('chat');
};