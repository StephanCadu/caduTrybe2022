const encode = require('./encode');

describe('encode function', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
  })
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('lacaio rueiro')).toBe('l1c134 r523r4')
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('mlk cxr dms sz')).toBe('mlk cxr dms sz');
  })
  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('mlk cxr dms sz')).toHaveLength(14);
  })
});
