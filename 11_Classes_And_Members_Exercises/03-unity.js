class Rat{
    constructor(name) {
        this.name = name;
        this.unity = [];
    }
    unite(otherRat) {
        if(otherRat instanceof Rat){
            this.unity.push(otherRat);
        }
    }

    getRats() {
        return this.unity;
    }

    toString() {
        console.log(this.name);
        for (let element of this.unity) {
            console.log(`##${element.name}`);
        }
    }
}

class Bat{
    constructor(name){
        this.name = name;
    }
}
let test = new Rat('Pesho');
let test2 = new Rat('Gosho');
test.unite(test2);
console.log(test.getRats());
