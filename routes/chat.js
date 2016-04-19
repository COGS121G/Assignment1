
var models = require("../models");
var mongoose = require('mongoose');

exports.view = function(req, res) {
    //console.log(data);

	models.Newsfeed.find({}).sort("-posted").exec(renderFeed);

	function renderFeed(err, newsfeed) {
		if(err) {
			res.render("chat", {"newsfeed": "Error loading messages"});
		}
		res.render('chat', { 'newsfeed': newsfeed });
	}

};



exports.postVotes = function(req, res) {
  console.log(req.body);

  var message = req.body.messageContext;
  var upvotes = req.body.upvotes;
  var downvotes = req.body.downvotes;

  models.Newsfeed.findOne({'name': messageContext}, function (err, messageToUpdate) {
    messageToUpdate.upvotes = upvotes;
    messageToUpdate.downvotes = downvotes;
    messageToUpdate.save(function (err) { if(err) console.log(err); });
  });
}



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