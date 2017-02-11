let Turtle = require('./turtle');

class NinjaTurtle extends Turtle{
    constructor(name, age, gender, maskColor, weapon){
        super(name, age, gender);
        this.maskColor = maskColor;
        this.weapon = weapon;
        this.level = 0;
    }

    grow(age){
        this._age += Number(age);
        this.level += Number(age);
    }
    toString(){
        let title;
        if(this.level < 25) title = 'an apprentice';
        else if(this.level >=25 && this.level < 100) title = 'smokin strong';
        else title = 'BEYOND GODLIKE';
        return `Turtle: ${this.name}\nAged - ${this.age}; Gender - ${this.gender}\n${this.name.slice(0,3)} wears a ${this.maskColor} mask, and is ${title} with the ${this.weapon}.`;
    }
}

module.exports = NinjaTurtle;