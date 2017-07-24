var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

var Student_Schema = new Schema({

   studentId:{type:Number},
   firstname:{type:String , unique : true, required : true, dropDups: true},
   lastname:{type:String, unique : true, required : true, dropDups: true},
   email: {type:String},
   branch: {type:String},
   phnumber:{type:Number},
   created_date:{type:Date, default:Date.now}
   
});

Student_Schema.plugin(autoIncrement.plugin,{
  model:'students',
  field:'studentId',
  startAt:1000,
  incrementBy:1
});



module.exports.students = mongoose.model('students', Student_Schema);