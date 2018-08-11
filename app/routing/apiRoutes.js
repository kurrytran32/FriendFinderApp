
//requiring friendsjs for data
let friends = require('../data/friends.js')


//displaying json info 
app.get('/api/friends', function(req, res){
    return res.json(friends[0])//wherever the friends data gets sent to

})

//handing survey results and compatibility logic routing to api/friends
app.post('/api/friends', function(req, res){
    let newfriend = req.body;

    console.log(newfriend);

    //pushing newfriend to an array of friends

    //res.json(newfriend)
})

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        return res.json(friends)
    
    });

    app.post('/api/friends', function(req, res){
        let newfriend = req.body;
    
        console.log(newfriend);

        friends.push(newfriend);
    
    })
}