function deck(arr){
    let result = [];
    for (let element of arr) {
        const face = element.slice(0, -1) // broi gi otlqvo nadqsno
        const suit = element.slice(-1) // pochni da broish ot predposledniq do kraq
        let newCard;
        try{
            newCard = cards(face, suit);
            
        } catch (error){
            result = ['Invalid card: ' +  element]
        }
        result.push(newCard);


    }


    console.log(result.join(' '))
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
}
deck(['AS', '10D', 'KH', '2C']);
deck(['5S', '3D', 'QD', '10R']);