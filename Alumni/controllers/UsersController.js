var Users = require('../models/Users');

module.exports.createUserSchema = function(){
	console.log('>>>Execute declare user schema in controller');
	Users.createUserSchema();
};

module.exports.authentication = function(username, password){
	console.log('>>>Authenticate username : '+username+", pass:"+password);
	Users.authenticate(username,password);
}
module.exports.saveUserData = function(){
	//console.log('>>>Authenticate username : '+username+", pass:"+password);
	console.log(Users.saveUserData('ronny','ron'));
}
