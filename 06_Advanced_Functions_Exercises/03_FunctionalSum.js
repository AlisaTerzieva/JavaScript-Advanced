function sum(num) {

    let sum = num;

    function f(b) {
        sum += b;
        return f
    }

    f.myMethod = ()=> sum;

    return f
}

console.log(sum(2)(4)(5).myMethod());