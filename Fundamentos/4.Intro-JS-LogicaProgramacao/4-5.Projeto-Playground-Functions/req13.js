function hydrate(string){
  let separated = string.split('');
  let separatedNums = 0;
  let sum = 0;
  for (let num of separated) {
    let current = parseInt(num);
    if (!isNaN(current)) {
      separatedNums = current;
      sum += separatedNums;
    }
  }
  let resultado = ``;
  if (sum === 1) {
  resultado = `${sum} copo de água`;
  } else {
  resultado = `${sum} copos de água`;  
  }
  return resultado;
}
console.log(hydrate('3 cachaças'));