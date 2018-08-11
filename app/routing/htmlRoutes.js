// dependencies
let path = require('path');


//routing for survey page
// app.get('/survey', function (req, res) {
//     res.send(path.join(__dirname, '/app/public/survey.html'))
// })

// //routing for home page DEFAULT
// app.get('/', function (req, res) {
//     res.send(path.join(__dirname, '/app/public/home.html'))
// });

module.exports = function (app) {
    //routing for survey page
    app.get('/survey', function (req, res) {
        res.send(path.join(__dirname, '../public/survey.html'))
    })

    //routing for home page DEFAULT
    app.get('/', function (req, res) {
        res.send(path.join(__dirname, '../public/home.html'))
    });
}
