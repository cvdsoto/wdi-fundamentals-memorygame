/* let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king"; */
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
const cardOne = cards[0];
const cardTwo = cards[2];

cardsInPlay.push(cardOne);
console.log("User flipped queen");
cardsInPlay.push(cardTwo);
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
}

/* console.log("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); */