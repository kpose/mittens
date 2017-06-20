var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app. use(express.static('public'));

var meows = [
	"Hello this is my first meow.",
	"It is dinner time ad i am loving my meows.",
	"Goodnight Mittens, it is time to sleep.",
	"Good morning Mitt-Hearts, it is a good day to meow."
	];

app.get('/meows', function(req, res, next){
	
	res.send(meows);
});

app.post('/meows', function(req, res, next){
	meows.push(req.body.newMeow);
	res.send();
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
});