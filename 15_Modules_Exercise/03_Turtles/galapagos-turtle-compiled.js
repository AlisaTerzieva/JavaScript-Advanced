let Turtle = require('./turtle');

class GalapagosTurtle extends Turtle {
    constructor(name, age, gender) {
        super(name, age, gender);
        this._thingsEatenThisYear = [];
    }

    get thingsEaten() {
        return this._thingsEatenThisYear;
    }

    eat(food) {
        this._thingsEatenThisYear.push(food);
    }

    grow(age) {
        this._age += Number(age);
        this._thingsEatenThisYear.splice(0, this._thingsEatenThisYear.length);
    }
    toString() {
        let things = '';
        for (let thing of this.thingsEaten) {
            things += `${ thing }, `;
        }
        things = things.slice(0, things.length - 2);
        return `Turtle: ${ this.name }\nAged - ${ this.age }; Gender - ${ this.gender }\nThings, eaten this year: ${ things }`;
    }
}

module.exports = GalapagosTurtle;

//# sourceMappingURL=galapagos-turtle-compiled.js.map