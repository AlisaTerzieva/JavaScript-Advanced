function largestElementFunc(input) {
    let result = Math.max();

    let largestElement = (function (a,b) {
        if (a > b) {
            return a;
        }
        else return b;
    });

    for (let element of input){
        result = largestElement(result,element);
    }
    return result;
}

console.log(largestElementFunc([
    10, 20, 5, -54
]));