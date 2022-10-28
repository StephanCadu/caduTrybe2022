function fizzBuzz(array){
  let result = [];

  for (let index = 0; index < array.length; index +=1) {
      if (array[index] % 3 === 0 && array[index] % 5 === 0) {
          result.push('fizzBuzz');
      } else if (array[index] % 3 === 0) {
          result.push('fizz');
      } else if (array[index] % 5 === 0){
          result.push('buzz');
      }else{
          result.push('bug!');
      }
   }
   return result;
}
console.log(fizzBuzz([9, 25]));