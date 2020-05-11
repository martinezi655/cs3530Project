import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './registrationNlogin.html';

Router.configure({
	layoutTemplate: 'main'
});

Router.configure({
	layoutTemplate: 'registerNloginpage'
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});


//Added template to grab values from registerNloginpage text boxes
Template.registerNloginpage.events({
'click #buttonsubmitRegistrationForm':function(event){ 
console.log("In Button Register");
var StuID = document.getElementById('textStudentId').value;
var StuName = document.getElementByID('textStudentName').value;
var StuAddress = document.getElementById('textAddress').value;
var StuDOB = document.getElementById('textDOB').value;
var selectCollection = "insert_collectionStudents"; //server side JS function
Meteor.call(selectCollection.toString(), StuID, StuName, StuAddress, StuDOB)
}
})

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});



Router.route('/main/',function(){this.render('main');});
Router.route('/registerNloginpage/',function(){this.render('registerNloginpage');});

