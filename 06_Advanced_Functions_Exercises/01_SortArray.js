function sortArray(inputArr, sortMethod) {
let ascComp = function (a,b) {
    return a - b;
};
let descComp = function (a,b) {
    return b - a;
};

let sortingStrategies = {
    'asc': ascComp,
    'desc': descComp
};

    return inputArr.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([1, 3, 5, 1, 0, 20, 4], 'desc'));

