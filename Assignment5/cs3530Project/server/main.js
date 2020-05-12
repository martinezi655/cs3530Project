import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

 function insert_collectionStudents(StudentId, StudentName, StudentAddress, StudentDOB) 
{
	console.log("in insert_collectionStudents");
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://127.0.0.1:27017/myOnlineEducationDatabase";
	MongoClient.connect(
	url, function(err,db) 

	{ 
	console.log("Connected to Server!");
		if (err) throw err;
		var myobj = 
		{
			"Student_ID": StudentID,
			"Name": StudentName,
			"Address": StudentAddress,
			"Date_of_Birth": StudentDOB
		}
		var dbo = db.db("myOnlineEducationDatabase") //use database name here
		dbo.Student.insertOne(
		myobj.toString(), function(err,res) 
		{
			if (err) throw err;
			Console.log("1 record inserted");
			db.close();
		}
		);
	}
	);
}
