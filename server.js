const express = require('express')
const app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));


mongoose.connect('mongodb://localhost/sample');

var userApi = require('./controllers');

app.get('/user/getdata',userApi.getEmployeeData);
app.post('/user/insertdata',userApi.insertEmployeeData);
app.put('/user/editdata/:studentid',userApi.editStudentData);
app.delete('/user/deleteUserData/:studentid',userApi.deleteStudentData);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

 