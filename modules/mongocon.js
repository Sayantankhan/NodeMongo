var mongoose = require('mongoose');
var usermodel = require('./usermodel');
var user = require('./userinsertmodel');

var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};


//setTimeout(function() {})
  mongoose.connect('mongodb://localhost:27017/sayantan', options, function(error){
	console.error.bind(console, 'connection error:');
	console.log("error in connection: "+error);
	// process.exit(1);
});



//var schema = new mongoose.Schema({
//		_id : String,
//		name : {
//			first : String,
//			last : String
//		},
//		email : String
//	});
		
// var user = mongoose.model('user',schema,'chatserver');


exports.retriveData = function(email,password){
	//creating object of the class User in userinsertmodel
	var usr = new user.User(email,password);
	
	usermodel.find({'email':email,'password' : password},function(err,docs){
          if(err) console.log(err);
          else{
            docs.forEach(function(item) {
              usr.setName(item.name.first);

            });
            if(usr.getName() == null){
              console.log('Error');
              console.log('Check User name and Password');
            }
            else {
			  console.log(usr.getName());
            }
          }
      });
};

exports.addNewUser = function(){
	//working fine..properly insert Data 
	var name = 'Anubhab Mondal';
	var email = 'anubhab.mondal@gmail.com';
	var password = '1597853';
	
	var usr = new user.User(email,password,name);
	
	var person_bson_data = {
	name : {
			first : usr.getName().split(" ")[0],
			last : usr.getName().split(" ")[1]
	},
	email : usr.getEmail(),
	password : usr.getPwd()
	};
	
	var usermodel = user.mongoUserSchema(person_data);
	
	usermodel.save(function(error,data){
		
		   if(error){
			console.log(error);
		}
		else{
			console.log(data);
		}
		
	});
}




