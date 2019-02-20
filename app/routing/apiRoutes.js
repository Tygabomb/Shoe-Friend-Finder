var shoeData = require('../data/shoes.js');

module.exports = (app) => {
    app.get("/api/shoes", (req, res) => {
        res.json(shoeData);
    })

    app.post("/api/shoes", (req, res) => {
        var myValues = [
            parseInt(req.body.score1),
            parseInt(req.body.score2),
            parseInt(req.body.score3),
            parseInt(req.body.score4),
            parseInt(req.body.score5),
            parseInt(req.body.score6),
            parseInt(req.body.score7),
            parseInt(req.body.score8),
            parseInt(req.body.score9),
            parseInt(req.body.score10)
        ];

        // Loop through shoes and calulates best match\       
        var chosenShoe = {
            diff: 100,
            index: 0
        };
        for (let i = 0; i < shoeData.length; i++) {
            var diff = 0
            var index 
              for (let j = 0; j < shoeData[i].scores.length; j++) {
                diff += Math.abs(shoeData[i].scores[j] - myValues[j])
                index = i
              };
            console.log(diff);
              if (diff < chosenShoe.diff){
                  chosenShoe.diff = diff
                  chosenShoe.index = index
              };
        };

        console.log(chosenShoe);    
        shoeData.push({
            name: req.body.name,
            photo: req.body.photo,
            scores: myValues
        });
        res.send(shoeData[chosenShoe.index]);
    });
};


// function calcDifference(person1, person2) {
//     // const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     let totalDiff = 0;
//     for (let i = 0; i < person1.scores.length; i++) {
//         totalDiff += Math.abs(person1.scores[i] - person2.scores[i]);
//     }
//     return totalDiff;
//     // let difference=array1.reduce(reducer, );
// }

// function findClosestFriend(surveyPerson) {
//     let bestDiff = -1;
//     let bestFriend = {};
//     shoes.forEach(friend => {
//         let diff = calcDifference(surveyPerson, friend);
//         if (bestDiff < 0) {
//             bestDiff = diff;
//             bestFriend = friend;
//         } else if (diff <= bestDiff) {
//             bestDiff = diff;
//             bestFriend = friend;
//         }
//     });
//     return {
//         diff: bestDiff,
//         bestFriend: bestFriend
//     };
// }


// module.exports = (app) => {

// 	app.get('/api/friends', (req, res) => {
// 		res.json(shoes);
// 	})


// 	app.post('/api/friends', (req, res) => {

// 		console.log(req.body);
//         // Do this at the end so that the person doesn't get compared with themselves
//         closestFriendObj=findClosestFriend(req.body)
//         friends.push(req.body);
//         res.json(closestFriendObj);
    
// 	});
	
// 	app.post("/api/clear", function (req, res) {
//         // Empty out the arrays of data
//         friends.length = [];
//         // waitListData.length = [];

//         res.json({ ok: true });
//     });
// };




