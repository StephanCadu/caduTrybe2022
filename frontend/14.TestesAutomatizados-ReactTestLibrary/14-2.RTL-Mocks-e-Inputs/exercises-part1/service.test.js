// arquivo para testar as funcões criadas
// import { randomNumber } from './service';
const service = require('./service');

describe('testa funções do arquivo service', () => {
  it('testa a função randomNumber', () => {
    randomNumber = jest.fn().mockReturnValue(10);

    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  })
<<<<<<< HEAD

  it('testa uma nova implementação para a função randomNumber', () => {
    
  })
=======
>>>>>>> master
})