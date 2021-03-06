const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');
 const timestamp = require('mongoose-timestamp');


 const UsersSchema = new mongoose.Schema({
   //add requirements

   email: {
     type:String,
     required: true,
     default :"",
   },

   password:{
     type : String,
     required: true,
     default :"",
   },

   birthdate: {
     type:Date,
     required: true,
     default: "",
   },

   firstName: {
     type: String,
     required: true,
     default: "",
   }, 

    lastName: {
    type: String,
    required: true,
    default: "",
  }, 
 });
 UsersSchema.plugin(timestamp);

 const Users = mongoose.model('Users',UsersSchema);
 module.exports = Users
