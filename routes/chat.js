
var models = require("../models");
var mongoose = require('mongoose');

exports.view = function(req, res) {
    //console.log(data);

	models.Newsfeed.find().sort('posted').exec(renderFeed);

	function renderFeed(err, newsfeed) {
		console.log(newsfeed);
		res.render('chat', { 'newsfeed': newsfeed });
	}

  	//res.render('chat');
};

exports.addMessage = function(req, res) {
	var form_data = req.body;

	var newMessage = new models.Newsfeed({
		"user": form_data.user,
	    "message": form_data.message,
	    "posted": form_data.posted
	});
	newMessage.save(afterSaving);

	function afterSaving(err) { // this is a callback
    if(err) {console.log(err); res.send(500); 
    res.redirect('/');
 	}
  }
}