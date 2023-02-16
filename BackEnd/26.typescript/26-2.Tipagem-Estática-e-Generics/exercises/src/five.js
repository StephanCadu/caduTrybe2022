function myFilter(array, callback) {
    var filteredArray = [];
    for (var i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (element, index, array) { return element % 2 !== 0; }));
function myReduce(array, callback, accumulator) {
    for (var i = 0; i < array.length; i += 1) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
console.log(myReduce([1, 2, 3, 4], function (acc, element, index, array) { return acc + element; }, 0));
function myMap(array, callback) {
    var mappedArray = [];
    for (var i = 0; i < array.length; i += 1) {
        mappedArray.push(callback(array[i], i, array));
    }
    return mappedArray;
}
console.log(myMap([1, 2, 3, 4], function (element, index, array) { return element % 2 === 0; }));
function myFind(array, callback) {
    var elementFound = undefined;
    for (var i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            elementFound = array[i];
            break;
        }
    }
    return elementFound;
}
console.log(myFind([1, 2, 3, 4], function (element, index, array) { return element % 2 !== 0; }));
