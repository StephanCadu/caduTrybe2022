function encode(string){
  let codes = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
  }

  let splited = string.split('');
  for(let index = 0; index < splited.length; index +=1){
      for(let key in codes){
        if(key == splited[index]){
          splited[index] = codes[key];
        }
      }
   }
   let result = splited.join('');
   return result;
}
console.log(encode("caduzin!"));




function decode(string){
  let decodes = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
  }

  let splited = string.split('');
  for(let index = 0; index < splited.length; index +=1){
      for(let key in decodes){
        if(key == splited[index]){
          splited[index] = decodes[key];
        }
      }
   }
   result = splited.join('');
   return result;
}
console.log(decode('c1d5z3n!'));