var shoes = require('../data/friends');

function calcDifference(person1, person2) {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalDiff = 0;
    for (let i = 0; i < person1.scores.length; i++) {
        totalDiff += Math.abs(person1.scores[i] - person2.scores[i]);
    }
    return totalDiff;
    // let difference=array1.reduce(reducer, );
}

function findClosestFriend(surveyPerson) {
    let bestDiff = -1;
    let bestFriend = {};
    shoes.forEach(friend => {
        let diff = calcDifference(surveyPerson, friend);
        if (bestDiff < 0) {
            bestDiff = diff;
            bestFriend = friend;
        } else if (diff <= bestDiff) {
            bestDiff = diff;
            bestFriend = friend;
        }
    });
    return {
        diff: bestDiff,
        bestFriend: bestFriend
    };
}


module.exports = (app) => {

	app.get('/api/friends', (req, res) => {
		res.json(shoes);
	})


	app.post('/api/friends', (req, res) => {

		console.log(req.body);
        // Do this at the end so that the person doesn't get compared with themselves
        closestFriendObj=findClosestFriend(req.body)
        friends.push(req.body);
        res.json(closestFriendObj);
    
	});
	
	app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friends.length = [];
        // waitListData.length = [];

        res.json({ ok: true });
    });
};




// 		var newFriend = req.body;

// 		for(var i = 0; i < newFriend.scores.length; i++) {
// 			if(newFriend.scores[i] == "1 (Strongly Disagree)") {
// 				newFriend.scores[i] = 1;
// 			} else if(newFriend.scores[i] == "5 (Strongly Agree)") {
// 				newFriend.scores[i] = 5;
// 			} else {
// 				newFriend.scores[i] = parseInt(newFriend.scores[i]);
// 			}
// 		}

// 		var differencesArray = [];

// 		for(var i = 0; i < shoeData.length; i++) {

// 			var comparedFriend = shoeData[i];
// 			var totalDifference = 0;
			
// 			for(var k = 0; k < comparedFriend.scores.length; k++) {
// 				var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
// 				totalDifference += differenceOneScore;
// 			}

// 			differencesArray[i] = totalDifference;
// 		}

// 		var shoeNum = differencesArray[0];
// 		var bestFriendIndex = 0;

// 		for(var i = 1; i < differencesArray.length; i++) {
// 			if(differencesArray[i] < shoeNum) {
// 				shoeNum = differencesArray[i];
// 				bestFriendIndex = i;
// 			}
// 		}

// 		shoeData.push(newFriend);

// 		res.json(shoeData[bestFriendIndex]);
// 	})
// }