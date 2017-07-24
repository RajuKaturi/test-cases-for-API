var supertest = require('supertest');

var server = supertest.agent('http://localhost:3000');

describe("Test My APi....",function() {

	it('Get the data from the DB..',function(done) {
		server.get("/user/getdata")
			.expect(200)
			.then(function(res) {
				console.log('am inside res');
				var user = res.body;
				//console.log(user);
				done()
			})
	});

	it('Insert the data to the DB..',function(done) {
		var data={
			"firstname":"lappaa",
			"lastname":"K",
			"email":"lappaa@gmail.com",
			"branch":"ECE",
			"phnumber":988888
		};
		server.post("/user/insertdata", data)
			.expect(200)
			.then(function(res) {
				console.log('am inside res');
				console.log(res);
				done()
			})
	});

	fit('Update the data to the DB..',function(done) {
		var data={
			"firstname":"lappaa",
			"lastname":"K",
			"email":"lappaa@gmail.com",
			"branch":"ECE",
			"phnumber":988888
		};
		server.post("/user/insertdata", {studentId:'5975eaf22a924a0dacda247f'},{$set:{data}})
			.expect(200)
			.then(function(res) {
				console.log('am inside res');
				console.log(res);
				done()
			})
	})
	

})