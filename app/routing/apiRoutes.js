var shoeData = require('../data/friends.js');


module.exports = (app) => {

	app.get('/api/friends', (req, res) => {
		res.json(shoeData);
	})


	app.post('/api/friends', (req, res) => {
		var newFriend = req.body;

		for(var i = 0; i < newFriend.scores.length; i++) {
			if(newFriend.scores[i] == "1 (Strongly Disagree)") {
				newFriend.scores[i] = 1;
			} else if(newFriend.scores[i] == "5 (Strongly Agree)") {
				newFriend.scores[i] = 5;
			} else {
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
			}
		}

		var differencesArray = [];

		for(var i = 0; i < shoeData.length; i++) {

			var comparedFriend = shoeData[i];
			var totalDifference = 0;
			
			for(var k = 0; k < comparedFriend.scores.length; k++) {
				var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
				totalDifference += differenceOneScore;
			}

			differencesArray[i] = totalDifference;
		}

		var shoeNum = differencesArray[0];
		var bestFriendIndex = 0;

		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < shoeNum) {
				shoeNum = differencesArray[i];
				bestFriendIndex = i;
			}
		}

		shoeData.push(newFriend);

		res.json(shoeData[bestFriendIndex]);
	})
}