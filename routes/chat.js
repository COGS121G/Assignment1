
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

exports.deleteNewsfeed = function(req, res) {
  var newsfeedID = req.body.id;

  console.log("post "+newsfeedID);
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Newsfeed.find({"_id": newsfeedID}).remove().exec(afterQuery);

  function afterQuery(err, projects) {
      if(err) console.log(err);
    }
}