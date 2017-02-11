function printFibSeq(count) {
    let num = 1;
    let previousNum = 0;
    function fibonacciSequence(){
        let fibSeq = [];
        fibSeq.push(1);
        while (fibSeq.length < count) {
            let nextNum = num + previousNum;
            previousNum = num;
            num = nextNum;
            fibSeq.push(nextNum);
        }
        return fibSeq;
    }
    return fibonacciSequence();
}

console.log(printFibSeq(1));