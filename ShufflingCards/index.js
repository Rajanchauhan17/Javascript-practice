// Shuffling Cards Example
// This code creates a deck of cards and shuffles them randomly.


let face=["Diamond","Hearts","club","spade"]
let value=["Ace","king","queen","jack","2","3","4","5","6","7","8","9","10"]
let deck=[];
for(let card in face){
    for(let val in value){
        deck.push(value[val] + " of " + face[card])
    }
    }
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
}

console.log(deck)