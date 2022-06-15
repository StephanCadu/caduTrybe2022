const decode = require('./decode');

describe('decode function', () => {
  it('Teste se encode e decode são funções;', () => {
    expect(decode('1')).toBeDefined();
  })
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('l1c134 r523r4')).toBe('lacaio rueiro');
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('mlk cxr dms sz')).toBe('mlk cxr dms sz');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('mlk cxr dms sz')).toHaveLength(14);
  })
});
