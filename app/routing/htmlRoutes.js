let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routing for survey page
app.get('/survey', function(req, res){
    res.send(path.join(__dirname, '/app/public/survey.html' ))
})

//routing for home page DEFAULT
app.get('/', function(req, res){
    res.send(path.join(__dirname, '/app/public/home.html'))
});
