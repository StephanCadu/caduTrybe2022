function highestCount(array){
    let highest = -10;
    let repetitions = 0;

    for(let index = 0; index < array.length; index +=1){
      if (array[index] > highest){
        highest = array[index];
      }
    }
    for(let index2 = 0; index2 < array.length; index2 +=1){
        if(array[index2] == highest){
            repetitions += 1;
        }
    }
    return repetitions;
}
console.log(highestCount([-2, -2, -1]));

