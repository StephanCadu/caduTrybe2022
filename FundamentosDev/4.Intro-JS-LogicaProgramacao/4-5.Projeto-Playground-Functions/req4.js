function concatName(array){
  let lastFirst = array[array.length - 1] + ', ' + array[0];
  return lastFirst;
}
console.log(concatName(['captain', 'my', 'captain']));