const a = 6;
const b = 3;
const c = 4;

if(a > b && a > c) {
    console.log(a);
}else if(a > b && a < c){
    console.log(c);
}else if(b > a && b > c){
    console.log(b);
}else if(b > a && b < c){
    console.log(c);
}    