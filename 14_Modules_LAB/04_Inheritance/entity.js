class Entity{
    constructor(name){
    if(this.constructor.name == 'Entity'){
        throw new Error('Cannot instantiate this class!');
    }
    else this.name = name;
    }
}

module.exports = Entity;
