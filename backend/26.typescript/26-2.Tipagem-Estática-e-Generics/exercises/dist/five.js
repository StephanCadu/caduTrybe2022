"use strict";
function myFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (element, index, array) => element % 2 !== 0));
function myReduce(array, callback, accumulator) {
    for (let i = 0; i < array.length; i += 1) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}
console.log(myReduce([1, 2, 3, 4, 5, 6, 7, 8, 9], (acc, element, index, array) => acc + element, 0));
