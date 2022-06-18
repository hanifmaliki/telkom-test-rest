function getArray(param) {
    let arr = []
    for (let i = 0; i < param; i++) {
        let dim = 0;
        i < param / 2 ? dim = i : dim = param - i - 1

        let arr2 = [];
        for (let j = 0; j < (dim + 1) ** dim; j++) {
            let arr3 = []
            for (let k = 0; k <= dim; k++) {
                arr3.push(i)
            }
            if (dim > 0) {
                arr2.push(arr3)
            } else {
                arr2.push(i)
            }
        }

        arr.push(arr2)
    }
    return arr
}

module.exports = {
    getArray: getArray,
};