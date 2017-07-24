var dbModel = require('./model');

var userAPI = {

   getEmployeeData: function (req, res) {
       dbModel.students.find({}, function (err, result) {
           if (err) throw err;
           //console.log("Find Operations: " + result);
           res.json(result);
       });
   },

   insertEmployeeData: function(req,res){

        console.log(req.body);
  

      dbModel.students.create({firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                branch:req.body.branch,
                phnumber:req.body.phnumber
                }, function(err, result){
                 if ( err ) {
                 throw err;
                 console.log("employee data not inserted");
                }
                 
                 else{
                  res.json(result);
                  console.log("Employee data: " + result);
                 }

              });
  },
  editStudentData: function(req,res){
  
     dbModel.students.update({studentId:req.params.studentid},
                                  {$set:{firstname:req.body.firstname,
                                  lastname:req.body.lastname,
                                  branch:req.body.branch,
                                  email:req.body.email,phnumber:req.body.phnumber}},function(err, editdata){
                 if ( err ) {
                 throw err;
                 console.log("Student not found");
                }
                 
                 else{
                  res.json(editdata);
                  console.log("student data edited: " + editdata);
                 }

              });

  },

  deleteStudentData: function(req,res){
    
     dbModel.students.remove({studentId:req.params.studentid},function(err, deletedata){
                 if ( err ) {
                 throw err;
                 console.log("student data not deleted");
                }
                 
                 else{
                  res.json(deletedata);
                  console.log("student deleted: " + deletedata);
                 }

      });

  }

};

module.exports = userAPI;
