class Turtle {
    constructor(name, age, gender) {
        if (this.constructor.name == 'Turtle') {
            throw new Error('This class cannot be instantiated!');
        }
        this._name = '' + name;
        if (Number(age) != NaN) {
            this._age = Number(age);
        }
        this._gender = '' + gender;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (Number(age) != NaN) {
            this._age = Number(age);
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = '' + gender;
    }

    grow(age) {
        this._age += Number(age);
    }

    toString() {
        return `Turtle: ${ this.name }\nAged - ${ this.age }; Gender - ${ this.gender }`;
    }
}

module.exports = Turtle;

//# sourceMappingURL=turtle-compiled.js.map