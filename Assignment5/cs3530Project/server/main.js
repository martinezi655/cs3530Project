import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

insert_collectionStudents: function(StudentId, StudentName, StudentAddress, StudentDOB) 
{
	console.log("in insert_collectionStudents");
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:3000";
	MongoClient.connect(url, function(err,db) 
	{
		if (err) throw err;
		var myobj = 
		{
			"Student_ID": StudentID,
			"Name": StudentName,
			"Address": StudentAddress,
			"Date_of_Birth": StudentDOB
		}
		var dbo = db.db("myOnlineEducationDatabase") //use database name here
		dbo.collection("Student").insertOne(myobj, function(err,res) 
		{
			if (err) throw err;
			Console.log("1 record inserted");
			db.close();
		});
	});
}
