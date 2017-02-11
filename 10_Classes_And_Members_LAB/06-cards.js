(function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {
        constructor(face, suit) {
            this._faceArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
            if (this._faceArr.indexOf(face) != -1) {
                this._face = face;
            }
            else throw new Error;
            if (!Object.keys(Suits).map(k=>Suits[k]).includes(suit)) {
                throw new Error;
            }
            else this._suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (this._faceArr.indexOf(face) != -1) {
                this._face = face;
            }
            else throw new Error;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(suit)) {
                throw new Error;
            }
            else this._suit = suit
        }

        /*
         toString(){
         return `Face: ${this.face}, Suit: ${this.suit}`
         }*/
    }
    return {Suits, Card}
})();

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card.toString());

/*
let card2 = new Card('1', Suits.DIAMONDS);*/