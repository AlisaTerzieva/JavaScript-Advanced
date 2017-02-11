let Entity = require('./entity');
let Dog = require('./dog');

class Person extends Entity{
    constructor(name, phrase, dog){
        super(name);
        this.phrase = phrase;
        if(dog.constructor.name != 'Dog') {
            throw new Error('Instance must be of class Dog!')
        }
        else this.dog = dog;
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`;
    }
}

module.exports = Person;