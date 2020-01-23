/* let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king";

console.log("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); */

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

 function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again");
	}
};

function flipCard(cardID){	
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}; 
};

flipCard(0);
flipCard(2);

/* let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo); */