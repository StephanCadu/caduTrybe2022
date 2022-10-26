function techList(array, nome) {
    let auxiliar = [];
    let result;
    let sorted = array.sort();
  
    for (let index = 0; index < sorted.length; index += 1) {
      auxiliar.push({ tech: sorted[index], name: nome });
    }
    array.length > 0 ? result = auxiliar : result = 'Vazio!';
        
    return result;
  }

  module.exports = techList;
