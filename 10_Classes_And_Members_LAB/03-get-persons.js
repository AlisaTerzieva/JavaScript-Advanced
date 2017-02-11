function returnPersons() {
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
    let maria = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
    let softUni = new Person('SoftUni');
    let stephan = new Person('Stephan', 'Nikolov', 25);
    let peter = new Person('Peter', 'Kolev', 24, 'ptr@gmail.com');

    return [maria, softUni, stephan, peter];
}

console.log(returnPersons());
console.log(returnPersons()[0].email);
