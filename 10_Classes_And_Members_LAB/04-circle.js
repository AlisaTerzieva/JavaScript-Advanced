class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2
    }

    set diameter(diameter){
        return this.radius = diameter / 2
    }

    get area(){
        return this.radius*this.radius*Math.PI;
    }
}

let c = new Circle(2);
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);
c.diameter = 1.6;
console.log(c.radius);
console.log(c.diameter);
console.log(c.area);