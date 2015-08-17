var bs = {};
bs.deck = [];
bs.DECK_LENGTH = 52;
bs.players = [];

function Card(name) {
  this.name = name;

  // coordinates of image on sprite sheet
  // this.x = [get from list]
  // this.y = [get from list]
}

function Player(/*name*/) {
  // this.name = name;

  this.cards = [];
}

// Precondition: none
// Postcondition: bs.deck contains 52 unique instances of class Card,
// each representing a unique card. Each instance's name consists of
// two letters, the former
// indicating the suit, and the latter indicating the rank.
// Note that bs.deck will be overritten.
function generateDeck() {
  // Empty the deck
  bs.deck = [];

  var suits = ['S', 'H', 'C', 'D'];
  var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J',
    'Q', 'K'];

  var cardName = "";
  for (var s in suits) {
    cardName += suits[s];
    for (var r in ranks) {
      // append the rank
      cardName += ranks[r];

      // console.log(cardName);
      bs.deck.push(new Card(cardName));

      // reset the card back to just the suit
      cardName = suits[s];
    }
    cardName = "";
  }
}

// Precondition: No player has any cards. Deck has been generated.
// Postcondition: The deck's cards have been randomly dealt to each player.
// The number of cards each player has should be equal as possible (within
// a tolerance of one). bs.deck is empty.
function dealOutCards() {

}

$(document).ready(function(){
  generateDeck();
  dealOutCards();
});