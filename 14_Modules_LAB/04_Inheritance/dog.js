let Entity = require('./entity');

class Dog extends Entity{
    constructor(name){
        super(name);
        this.name = name;
    }
    saySomething(){
        return `${this.name} barks!`;
    }
}

module.exports = Dog;