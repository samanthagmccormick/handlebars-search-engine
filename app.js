var express = require('express');
var bodyParser = require('body-parser');

var indexController = require('./controllers/index.js');

// models
var dummyData = require('./models/dummy-data.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// When the client GETS '/', launch the indexController index: route
app.get('/', indexController.index);

// When the client submits '/search', lacunh teh indexController search: route
app.get('/search', indexController.search);

var server = app.listen(5359, function() {
	console.log('Express server listening on port ' + server.address().port);
});
