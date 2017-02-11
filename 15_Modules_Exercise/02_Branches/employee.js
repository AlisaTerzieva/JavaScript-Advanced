class Employee{
    constructor(name, age, position){
        this.name = '' + name;
        if(Number(age) != NaN){
            this.age = age;
        }
        this.position = '' + position;
    }

    toString(){
        return `${this.name}, ${this.age} (${this.position})`;
    }
}

module.exports = Employee;