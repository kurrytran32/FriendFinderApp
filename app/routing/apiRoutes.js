//requires npm packaging
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

//displaying json info 
app.get('/api/friends', function(req, res){
    return res.json()//wherever the friends data gets sent to

})

//handing survey results and compatibility logic routing to api/friends
app.post('/api/friends', function(req, res){
    let newfriend = req.body;

    console.log(newfriend);

    //pushing newfriend to an array of friends

    //res.json(newfriend)
})