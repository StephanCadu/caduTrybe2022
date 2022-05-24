let peca = 'NIGHT';

switch (peca.toLowerCase()) {
    
    case 'pawn':
        console.log('1 ou 2 casas para frente');
        break;
     
    case 'night':
        console.log('em L');
        break;    
    
    case 'bishop':
        console.log('diagonais');
        break;
        
    case 'rook':
        console.log('linhas e colunas');
        break;
       
    case 'queen':
        console.log('diagonais, linhas e colunas');
        break;
        
    case 'king':
        console.log('diagonais, linhas e coluna, mas apenas uma casa');
        break;  
        
    default :
        console.log('Peça inválida');    
}