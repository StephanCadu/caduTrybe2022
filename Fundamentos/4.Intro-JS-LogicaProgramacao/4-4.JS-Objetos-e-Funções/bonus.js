function lendoRomanos(string) { 
  let result = 0; 
  let nums = []; 
  let read = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (let letra = 0; letra < string.length; letra += 1) {
    for (let key in read) {  
      if (key === string[letra]) {
        nums.push(read[key]) ;       
      }
    } 
  }
  for (let look = 0; look < nums.length; look += 1) {
    if (nums[look] < nums[look] + 1) {
      result = (nums[look] + 1) - nums[look]; 
    } else {
      result = nums;  
    } 
  }
  return result;
}
console.log(lendoRomanos('IX'));