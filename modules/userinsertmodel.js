var mongoose = require('mongoose');
var schema = mongoose.Schema; 	 

var userSchema = new schema({
	_id : String,
		name : {
			first : String,
			last : String
		},
	email : String
});

//create user class 
function User(emailid, password, name){
	this.emailid = emailid;
	this.password = password;
	this.name = name;
};



//prototype is used for function ... i.e. to declare it as a function of user
User.prototype.setEmail = function(email){
	this.emailid = email;
};

User.prototype.setPwd = function(password){
	this.password = password;
};

User.prototype.setName = function(name){
	this.name = name;
};

User.prototype.getName = function(){
	return this.name;
};

User.prototype.getEmail = function(){
	return this.emailid;
};


module.exports.User = User;
module.exports.mongoUserSchema = mongoose.model('usermodel',userSchema,'chatserver');

//var user = new User('iamstk','12234','Sayantan');
//console.log(user.getName());