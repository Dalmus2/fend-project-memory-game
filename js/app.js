//Create a list that holds all of your cards

const initialCardList = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
const gameDifficulty = 1;
let gameCardList = multiplyList(initialCardList, gameDifficulty);

//Multiply initial list
function multiplyList(initialArray, counter) {
  let multipliedArray = [];
  while (counter +1 > 0) {
    multipliedArray.push(...initialArray);
    counter -= 1;
  }
  return multipliedArray;
}

//Defining variables
const gameDeck = document.querySelector('.deck');

//Loop through each card and create its HTML
//Add each card's HTML to the page
function createCards(gameCardList) {
  gameDeck.innerHTML = [];
  for (let i = 0; i < gameCardList.length; i++) {
    const newCard = document.createElement('li');
    newCard.classList.add('card');
    newCard.setAttribute('value', gameCardList[i])
    // Set up the event listener for a card.
    newCard.addEventListener('click', function(event){
      handleCards(event.target);
    });
    const icon = document.createElement('i');
    icon.classList.add('fa', gameCardList[i]);
    newCard.appendChild(icon);
    gameDeck.appendChild(newCard);
  }
  document.body.appendChild(gameDeck);
}

//Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function setupGame() {
//Shuffle the list of cards using the provided "shuffle" method below
  gameCardList = shuffle(gameCardList);
//Display cards on the page
  createCards(gameCardList);
}

setupGame(gameDifficulty);
