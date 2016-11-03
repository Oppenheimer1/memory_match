(function(){

	var attempts = 0; //sets the counter variable to zero as the initial number of tries
	var high_score = 999; //Starts the board with a default high score of 999
	var new_high_score = 0; //sets the initial new high score variablehi
			
	//This is the object that contains the functions/methods that are used for the memory match game
	//The object first calls the function 
	var New = {

	};
		//This is the deck array, the game size and number of cards to choose from can be changed by adding new items to this array
		var deck = [
		{
			name: "Cat",
			img: "images/cat.jpg",
			id: 1,
		},
		{
			name: "Deer",
			img: "images/deer.jpg",
			id: 2
		},
			{
				name: "Dog",
				img: "images/dog.jpg",
				id: 3
			},
			{
				name: "Dolphin",
				img: "images/dolphin.jpg",
				id: 4
			}, 
			{
				name: "Duck",
				img: "images/duck.jpg",
				id: 5
			},
			{
				name: "Guinea Pig",
				img: "images/guinea_pig.jpg",
				id: 6
			},
			{
				name: "Hedgehog",
				img: "images/hedgehog.jpg",
				id: 7
			},
			{
				name: "Horses",
				img: "images/horses.jpg",
				id: 8
			},
			{
				name: "Leopard",
				img: "images/leopard.jpg",
				id: 9
			},
			{
				name: "Lions",
				img: "images/lions.jpg",
				id: 10
			},
			{
				name: "Penguin",
				img: "images/penguin.jpg",
				id: 11
			},
			{
				name: "Seagull",
				img: "images/seagull.jpg",
				id: 12
			},
			];

})();