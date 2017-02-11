class Person{
    constructor(name, age){
        this.name = '' + name;
        if(Number(age) != NaN) {
            this.age = Number(age);
        }
    }

    addToSelector(selector){
        let html = `<div class="person ${this.name}">
    <p class="name">${this.name}</p>
    <p class="age">${this.age}</p>
    <div class="posts ${this.name}"></div>
</div>`;
        $(selector).append(html);
    }
}

module.exports = Person;
