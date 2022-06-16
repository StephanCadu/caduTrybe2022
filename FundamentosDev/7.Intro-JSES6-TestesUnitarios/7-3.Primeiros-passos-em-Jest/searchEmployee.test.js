const searchEmployee = require('./searchEmployee');

describe('searchEmployee function', () => {
  it('Testa se a função foi definida', () => {
    expect(searchEmployee).toBeDefined();
  })
  it('Testa se a função é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  })
  it('Retorna `Cook` ao executar searchEmployee(`9852-2-2`, `lastName`)', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toEqual('Cook')
  })
});