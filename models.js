var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
    "twitterID": String,
    "token": String,
    "username": String,
    "displayName": String,
    "photo": String
});

var NewsfeedSchema = new Schema({
	"user": String,
	//"upvotes" : { type: Number, default: 0 },
  	//"downvotes" : { type: Number, default: 0 },
    "message": String,
    "picture": String,
    "dateString": String,
    "posted": Date
});

exports.Newsfeed = mongoose.model('Newsfeed', NewsfeedSchema);
exports.User = mongoose.model('User', UserSchema);