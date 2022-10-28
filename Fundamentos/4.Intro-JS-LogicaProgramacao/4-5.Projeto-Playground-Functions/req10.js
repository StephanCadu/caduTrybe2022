function techNames(array, nome){
  let auxiliar = [];
  let result;
  let sorted = array.sort();

  for (let index = 0; index < sorted.length; index += 1) {
    auxiliar.push({ tech: sorted[index], name: nome });
  }
  if (array.length > 0) {
    result = auxiliar;
  } else {
    result = 'Vazio!';
  }
  return result;
}
console.log(techNames(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));