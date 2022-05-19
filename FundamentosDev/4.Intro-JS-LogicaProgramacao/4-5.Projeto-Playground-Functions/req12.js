function triangleCheck(lineA, lineB, lineC){
    let check = true;
    let a = lineA;
    let b = lineB;
    let c = lineC;

    if( a > b + c || b > a + c || c > a + b) {
      check = false;
    } else if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)){
      check = false;
    }
  return check;  
}
;

function triangleCheck(lineA, lineB, lineC) {
  let check = true;
  let a = lineA;
  let b = lineB;
  let c = lineC;

  if (a > b + c || b > a + c || c > a + b) {
    check = false;
  } else if (a < Math.abs(b - c) || b < Math.abs(a - c) || c < Math.abs(a - b)) {
    check = false;
  }
  return check;
}
console.log(triangleCheck(10, 14, 2))