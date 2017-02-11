class Stringer {
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        if(this.innerLength + length >=0){
            this.innerLength += length;
        }
        else this.innerLength = 0;
    }

    decrease(length){
        if(this.innerLength - length >= 0){
            this.innerLength -= length;
        }
        else this.innerLength = 0;
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.slice(0,this.innerLength);
            this.innerString += '...';
        }
        return this.innerString;
    }
}

let test = new Stringer('Test', 5);
console.log(test.toString());

test.decrease(4);
console.log(test.toString());