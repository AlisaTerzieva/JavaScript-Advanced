function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get elemIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get elemIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get elemIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Air';
            this.elementIndex = this.weight * this.melonSort.length;
        }

        get elemIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementArr = ['Fire', 'Earth', 'Air', 'Water'];
            this.elementIndex = this.weight * this.melonSort.length;
        }

        morph() {
            let currentElement = this.elementArr.shift();
            this.element = currentElement;
            this.elementArr.push(currentElement);
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }
  return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}

let melolem = new Melolemonmelon(12.5, 'Kingsize');
console.log(melolem.toString());
melolem.morph();
console.log(melolem.toString());