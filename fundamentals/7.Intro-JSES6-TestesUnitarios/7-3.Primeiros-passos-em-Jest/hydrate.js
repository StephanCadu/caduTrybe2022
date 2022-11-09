const hydrate = (string) => {
  const nums = string.replace(/\D/g, '').split('');
  let result = 0;
  for(let num of nums) {
    result += parseInt(num); 
  }
  return result == 1 ? '1 copo de água' : `${result} copos de água`
}

module.exports = hydrate;