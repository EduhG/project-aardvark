var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var userSchema = mongoose.Schema({
	username: String,
	password: String,
	email: String
});


// set plugin
userSchema.plugin(passportLocalMongoose);
// compile our model
module.exports = mongoose.model('User', userSchema);
