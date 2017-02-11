let Turtle = require('./turtle');

class EvkodianTurtle extends Turtle{
    constructor(name, age, gender, evkodiumValue){
        super(name, age, gender);
        if(Number(evkodiumValue) != NaN) {
            this._evkodiumValue = evkodiumValue;
        }
        this._density = (this.gender == 'male' ? this.age * 3 : this.age * 2);
    }

    get evkodium() {
        this._density = (this.gender == 'male' ? this.age * 3 : this.age * 2);
        return {value:this._evkodiumValue, density:this._density}
    }

    toString(){
        this._density = (this.gender == 'male' ? this.age * 3 : this.age * 2);
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}\nEvkodium: ${this._evkodiumValue * this._density}`;
    }
}

module.exports = EvkodianTurtle;
