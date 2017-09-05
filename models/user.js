var mongoose = require("mongoose");
var Schema = mongoose.Schema; 

var mongooseUniqueValidator = require("mongoose-unique-validator") ;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    messages:[{type:Schema.Types.ObjectId,ref :'Message'}]
});

// to use unique:true validator of mongoose for email we need to install it using:-
// npm install --save mongoose-unique-validator

schema.plugin( mongooseUniqueValidator);
module.exports = mongoose.model('User',schema);