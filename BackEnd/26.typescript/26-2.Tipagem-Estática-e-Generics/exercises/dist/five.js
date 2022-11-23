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
