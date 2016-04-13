
var models = require("../models");
var mongoose = require('mongoose');

exports.view = function(req, res) {
    //console.log(data);
  	res.render('chat');
};