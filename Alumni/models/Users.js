var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://localhost/db');

var userSchema = new Schema({
	password: String,
	username: String
});	

module.exports.createUserSchema = function(){
	console.log('>>>Executing Create User Schema')

	mongoose.model('users', userSchema);
};

module.exports.saveUserData = function(username,password){
	console.log('>>>Executing Saving User Data');
	var UserModel = mongoose.model('users', userSchema);
	var userData = new UserModel();
	userData.username = username;
	userData.password = password;
	
	userData.save(function(err){
			if(!err){
				console.log('user data successfuly save');
			}else{
				console.log('error while save user data, err : ' + err);
			}
		})
};

module.exports.authenticate = function(username,password){
	var userData = mongoose.model('users',userSchema);
	var util = require('util');
	//console.log(userData.find({username:username}));
	console.log('last step');
	var userss;
	userData.find({},function(err,user){
		console.log(user);
	});
}