// function catAndMouse(mouse, cat1, cat2){
//   let distCat1 = cat1 - mouse;
//   let distCat2 = cat2 - mouse;
//   let result = '';
//   if (distCat1 < distCat2) {
//     result = 'cat1';
//   }else if (distCat1 == distCat2) {
//     result = 'os gatos trombam e o rato foge';
//   } else {
//     result = 'cat2';
//   }
//   return result;
// }
// console.log(catAndMouse(7, 13, 19));

function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat1 === distCat2) {
    result = 'os gatos trombam e o rato foge';
  } else {
    result = 'cat2';
  }
  return result;
}
console.log(catAndMouse([1, 0, 2]));