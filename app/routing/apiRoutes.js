let path = require('path');
//requiring friendsjs for data
let friends = require('../data/friends')



module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends)
    
    });

    app.post('/api/friends', function(req, res){
        let newfriend = req.body;
        console.log(newfriend)
        let newScores = newfriend.scores;
        //placeholder for matched friend name
       
        let matched = '';

        let matchPhoto = '';
        
        //placeholder for total difference of scores
        let totalDifference = 100;

        // accessing past results for comparisons in for loop
        for(let i = 0; i < friends.length; i++){
            //setting a variable to hold the differences
            let difference = 0;
            //accessing scores to compare to
            for(let j = 0; j < newScores.length; j++){
                //setting difference to be whatever the math.abs is between scores on same index
                difference += Math.abs((newScores[j]) - (friends[i].scores[j]));
            }
            if(difference < totalDifference) {
                totalDifference = difference;
                matched = friends[i].name;
                matchPhoto = friends[i].photo;
            }

        }

        
        //posting new info to /api/friends

        friends.push(newfriend);

        res.json({status:'OK', matched: matched, matchPhoto: matchPhoto});
    
    })
}