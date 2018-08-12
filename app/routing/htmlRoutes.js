// dependencies
let path = require('path');




module.exports = function (app) {
    //routing for survey page
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })

    //routing for home page DEFAULT
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });
}
