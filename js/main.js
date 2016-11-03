(function(){

	var attempts = 0; //sets the counter variable to zero as the initial number of tries
	var high_score = 999; //Starts the board with a default high score of 999
	var new_high_score = 0; //sets the initial new high score variablehi
			
	//This is the object that contains the functions/methods that are used for the memory match game
	//The object first calls the function 
	var New = {

		//This is the function that shuffles the deck
		shuffle: function(array){
			var counter = array.length, q, n;
			while (counter > 0) {
				n = Math.floor(Math.random() * counter);
				counter--;
				q = array[counter];
				array[counter] = array[n];
				array[n] = q;
			}
			return array;
		},

	    //This is the function that creates each card and image that's displayed on the front of the deck
	    createCards: function(){
	    	var front = '';
	    	this.$deck.each(function(y, z){
	    		front += '<div class="card" data-id="'+ z.id +'"><div class="inside">\
	    		<div class="front"><img src="'+ z.img +'"\
	    		alt="'+ z.name +'" /></div>\
	    		<div class="back"><img src="images/greenland.jpg"\
	    		alt="JavaScript Memory Match" /></div></div>\
	    		</div>';
	    	});
	    	return front;
	    },
		//This is the function that evaluates the score and replaces the high score if it is better then the current high score
		updateScore: function(){
			if(attempts < high_score && attempts != 0){
				high_score = attempts;
			};
			document.getElementById("high_score").innerHTML = high_score;
			attempts = 0;
			document.getElementById("game_score").innerHTML = 0;
			this.hideMessage();    //This calls
			this.shuffleDeck(this.deckArray);
			this.makeDeck();
			this.$game.show("slow");

		},

		//This is the function that hides the winning message that's displayed 
		hideMessage: function(){
			this.$message_background.hide();
			this.$message.hide();
		},  

		//This is the function that displays the winning message that's displayed Lars
		showMessage: function(){
			this.$message_background.show();
			this.$message.fadeIn("slow");
		},
		
		//This function goes through the process of evaluating to see if the cards that were picked match each other
		match: function(){
			var x = New;
			var $card = $(this);
			if(!x.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!x.choice){
					x.choice = $(this).attr("data-id");
					attempts = attempts + 1;
					document.getElementById("game_score").innerHTML = attempts;
				} else if(x.choice == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched").addClass("card_gone"); //if the cards match the class card_gone is added to those cards causing those cards to seem to disappear from the board
					x.choice = null;
				} else {
					x.choice = null;
					x.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						New.paused = false;
					}, 800);  //This displays the amount of time the cards in the deck are displayed when they're flipped overin milliseconds
				}
				if($(".matched").length == $(".card").length){
					x.gameFinished();
				}
			}
		}
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