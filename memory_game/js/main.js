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
let cardOneRank;
let cardOneID;
let cardTwoRank;
let cardTwoID;
let points = 0;
 function checkForMatch() {
// if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again");

// 	}

		cardOneRank = cardsInPlay[0].rank;
		cardOneID = cardsInPlay[0].cardID;
		cardTwoRank = cardsInPlay[1].rank;
		cardTwoID = cardsInPlay[1].cardID;

	if (cardOneRank === cardTwoRank) {
		alert("You found a match!");
		points++;
		document.getElementById('score').innerHTML = points;
	} else {
		alert("Sorry, try again");
		let cardImg = document.getElementsByTagName('img');
		cardImg[cardOneID].setAttribute('src', 'images/back.png');
		cardImg[cardTwoID].setAttribute('src','images/back.png');
	};

	cardsInPlay = [];
};


function flipCard(){	
	let cardID = this.getAttribute('data-id');
	// cardsInPlay.push(cards[cardID].rank); 
	 cardsInPlay.push({"rank": cards[cardID].rank, "cardID": cardID});
	// console.log(cards[cardID].cardImage);
	// console.log(cards[cardID].suit);
	this.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}; 
};


function resetBoard() {
	let cardImg = document.getElementsByTagName('img');
	for (let i = 0; i < cards.length; i++) {
		cardImg[i].setAttribute('src', 'images/back.png');
	}
	cardsInPlay = [];
	points = 0;
	document.getElementById('score').innerHTML = points;
};

document.getElementById('resetBtn').addEventListener('click', resetBoard);

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

//  let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo); 