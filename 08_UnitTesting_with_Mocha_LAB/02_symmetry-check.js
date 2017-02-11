function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        return false;
    }
    let reversed = arr.slice(0).reverse();
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    console.log(JSON.stringify(arr));
    return equal;
}
isSymmetric([1,2,3,4])
//module.exports = {isSymmetric};

