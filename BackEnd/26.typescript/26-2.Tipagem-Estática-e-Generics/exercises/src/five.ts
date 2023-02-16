// FILTER
type Callback<T> = (element: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], callback: Callback<T>): T[] {
  const filteredArray: T[] = [];

  for(let i = 0; i < array.length; i += 1) {
    if(callback(array[i], i, array)) {
      filteredArray.push(array[i])
    }
  }

  return filteredArray;
}

console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (element, index, array) => element % 2 !== 0));

// REDUCE
type ReduceCallback<T> = (accumulator: any, element: T, index?: number, array?: T[]) => any;

function myReduce<T>(array: T[], callback: ReduceCallback<T>, accumulator: any): any {
  for(let i = 0; i < array.length; i += 1) {
    accumulator = callback(accumulator, array[i], i, array)
  }

  return accumulator;
}

console.log(
  myReduce<number>(
    [1, 2, 3, 4],
    (acc, element, index, array) => acc + element,
    0
  )
);

// MAP
type MapCallback<T> = (element: T, index?: number, array?: T[]) => any;

function myMap<T>(array: T[], callback: MapCallback<T>): T[] {
  const mappedArray: any[] = [];

  for(let i = 0; i < array.length; i += 1) {
    mappedArray.push(callback(array[i], i, array));
  }

  return mappedArray;
}

console.log(myMap<number>([1, 2, 3, 4], (element, index, array) => element % 2 === 0));

// FIND
type FindCallback<T> = (element: T, index?: number, array?: T[]) => boolean;

function myFind<T>(array: T[], callback: FindCallback<T>): T | undefined {
  let elementFound: T | undefined = undefined;

  for(let i = 0; i < array.length; i += 1) {
    if(callback(array[i], i, array)) {
      elementFound = array[i];
      break;
    }
  }

  return elementFound;
}

console.log(
  myFind<number>(
    [1, 2, 3, 4],
    (element, index, array) => element % 2 !== 0,
  )
);
// retorna 1