
 //Create a list that holds all of your cards

const initialCardList = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", "fa-bomb"];
const gameDifficulty = 2;

//Multiply initial list

function multiplyList(initialArray, counter) {
  let multipliedArray = [];
  while (counter +1 > 0) {
    multipliedArray.push(...initialArray);
    counter -= 1;
  }
  return multipliedArray;
}

//Loop through each card and create its HTML
//Add each card's HTML to the page

function createCards(gameCardList) {
  const gameDeck = document.querySelector('.deck');
  gameDeck.innerHTML = [];
  for (let i = 0; i < gameCardList.length; i++) {
    const newCard = document.createElement('li');
    newCard.classList.add('card');
    const icon = document.createElement('i');
    icon.classList.add('fa', gameCardList[i]);
    newCard.appendChild(icon);
    gameDeck.appendChild(newCard);
  }
  document.body.appendChild(gameDeck);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
