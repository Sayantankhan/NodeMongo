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

module.exports = mongoose.model('user',userSchema,'chatserver');
//first parameter is name of the model 
//second is schema..
//third one is collection-name
