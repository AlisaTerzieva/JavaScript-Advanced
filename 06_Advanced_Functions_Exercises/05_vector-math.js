let func = (function () {
    let result = {};
    result.add = (vec1, vec2) => {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]]



    }


    return result;
})();


console.log(func.add([1, 1], [1, 0]));