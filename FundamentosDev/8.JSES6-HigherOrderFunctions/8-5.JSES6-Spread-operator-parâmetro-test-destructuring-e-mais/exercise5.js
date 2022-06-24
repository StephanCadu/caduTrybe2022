const myList = [1, 2, 3, 4];

const swap = ([a, b, c, d]) => [d, c, b, a];

console.log(swap(myList));

const myList2 = [2, 453, 66, 87, 24, 9, 41];

const res = [];
myList2.forEach((n) => res.unshift(n));

console.log(res);
