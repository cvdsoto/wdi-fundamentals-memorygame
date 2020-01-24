/* let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king";

console.log("User flipped " + cardOne);
console.log ("User flipped " + cardTwo); */

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

 function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	}
};

function flipCard(){	
	let cardID = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardID].rank);
	// console.log(cards[cardID].cardImage);
	// console.log(cards[cardID].suit);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}; 
};

let cardElement;

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();

/* let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo); */