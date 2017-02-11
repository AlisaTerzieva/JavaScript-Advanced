function classHierarchy() {
    class Figure{
        constructor() {
            if(new.target === Figure) throw TypeError("new of abstract class Figure")
        }
        get area(){return undefined}
    }

    class Circle extends Figure{
        constructor(radius) {
            super();
            this.radius = radius;
        }
        get area(){
            return Math.pow(this.radius, 2) * Math.PI;
        }

        toString(){
            return `${this.constructor.name} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor (width, height){
            super();
            this.width = width;
            this.height = height;
        }

        get area(){
            return this.width * this.height;
        }

        toString(){
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle}
}


let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
let r = new Rectangle(3,4);
console.log(r.area);
console.log(r.toString());
