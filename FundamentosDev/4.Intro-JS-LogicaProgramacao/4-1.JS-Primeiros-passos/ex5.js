let ang1 = 60;
let ang2 = 60;
let ang3 = 60;

if(ang1 + ang2 + ang3 == 180){
    console.log(true);
}else if(ang1 < 0){
    console.log(false);
    console.log('ang1 é um ângulo inválido');    
}else if(ang2 < 0){
    console.log(false);
    console.log('ang2 é um ângulo inválido');    
}else if(ang3 < 0){
    console.log(false);
    console.log('ang3 é um ângulo inválido');    
}else{
    console.log(false);
}