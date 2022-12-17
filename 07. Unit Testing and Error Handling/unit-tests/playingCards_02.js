function cards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    // const validSuits = ['S', 'H', 'D', 'C'];
    if (faces.includes(face) === false) {
        throw new Error('Invalid face: ' + face);
    }
    const suits = {
        'S': '\u2660',
        'H': '\u2665 ',
        'D': '\u2666',
        'C': '\u2663',
    }
    if (!suits.hasOwnProperty(suit)) {
        throw new Error('Invalid suit: ' + suit)
    }

    const obj = {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;

        }
        //overwrite-vame metoda toString();
    }
    return obj;

}
console.log(cards('A', 'S').toString());
console.log(cards('10', 'H').toString());
console.log(cards('10', 'W').toString());