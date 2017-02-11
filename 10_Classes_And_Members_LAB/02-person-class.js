class Person {
    constructor(first, last, age, email){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person('Maria', 'Petrova', 22, 'myEmail@email.com');
console.log(person);
console.log(person.toString());;