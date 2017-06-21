var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

var db = null;

MongoClient.connect("mongodb://localhost:27017/mittens", function(err, dbconn){
	if(!err) {
		console.log("We are connected");
		db = dbconn;
	}
});

app.use(bodyParser.json());

app. use(express.static('public'));


app.get('/meows', function(req, res, next) {

	db.collection('meows', function(err, meowsCollection) {
		meowsCollection.find().toArray(function(err, meows) {
			return res.json(meows);
		});
	});	
	  
});

app.post('/meows', function(req, res, next){

	db.collection('meows', function(err, meowsCollection) {

		var newMeow = {
			text: req.body.newMeow
		};

		meowsCollection.insert(newMeow, {w:1}, function(err) {
			return res.send();
		});
	});	
	
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});


 