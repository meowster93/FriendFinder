//REQUIRE FRIEND ARRAY DATA
var friends = require("../data/friends");

module.exports = app => {
    //API GET REQUEST HANDLING TO DISPLAY ALL FRIENDS STORED.
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });
    //API POST REQUEST HANDLING, adds request body to friend array. will respond with a match
    app.post("/api/friends",(req,res) => {

        let bestMatch = {
            name: "",//to show name
            photo: "",//to show new photo
            scoreDiff: 100//to subtract dif from 
        };
        let newFriend = req.body;// handle for incoming data of new friend to add to array
        let userScore = newFriend.scores;//score array to compare each of the friendsarray scores against
        friends.forEach((match,fIndex)=>{
            let totalDiff = 0;
            match.scores.forEach( (score,sIndex)=> { 
                totalDiff += Math.abs( parseInt(score) - parseInt(userScore[sIndex]) );
            });
            if( totalDiff <= bestMatch.scoreDiff ) {
                bestMatch.name = friends[fIndex].name;
                bestMatch.photo = friends[fIndex].photo;
                bestMatch.scoreDiff = totalDiff;
            }
        });
        friends.push(newFriend);
        res.json(bestMatch);
    });
};