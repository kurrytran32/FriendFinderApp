//requires npm packaging
let express = require('express');
let bodyParser = require('body-parser');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
